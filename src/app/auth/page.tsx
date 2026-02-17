'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white flex flex-col">
      {/* Header */}
      <header className="px-6 pt-12 pb-4">
        <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </header>

      <main className="flex-1 flex flex-col justify-center px-6 py-8">
        <div className="max-w-md mx-auto w-full">
          {/* Logo/Brand */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] mx-auto flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">JobOff</h2>
            <p className="text-[#A1A1AA] mt-2">
              {isLogin ? 'Connectez-vous à votre compte' : 'Créez votre compte'}
            </p>
          </div>

          {/* Auth Card */}
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
            {/* Toggle Login/Register */}
            <div className="flex bg-[#1A1A2E] rounded-xl p-1 mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                  isLogin ? 'bg-[#8B5CF6] text-white' : 'text-[#71717A]'
                }`}
              >
                Connexion
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                  !isLogin ? 'bg-[#8B5CF6] text-white' : 'text-[#71717A]'
                }`}
              >
                Inscription
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-[#A1A1AA] text-sm mb-2">Nom complet</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-4 bg-[#252542] border border-white/10 rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <label className="block text-[#A1A1AA] text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jean@example.com"
                  className="w-full px-4 py-4 bg-[#252542] border border-white/10 rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-[#A1A1AA] text-sm mb-2">Mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-4 bg-[#252542] border border-white/10 rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  required
                />
              </div>

              {isLogin && (
                <div className="text-right">
                  <button type="button" className="text-sm text-[#8B5CF6] hover:underline">
                    Mot de passe oublié ?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 text-white font-semibold py-4 rounded-xl transition-all disabled:opacity-50 mt-2"
              >
                {loading ? 'Chargement...' : isLogin ? 'Se connecter' : 'Créer mon compte'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-sm text-[#71717A]">ou</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Google Button */}
            <button className="w-full bg-white/5 border border-white/10 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuer avec Google
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
