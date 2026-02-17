'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [isActive, setIsActive] = useState(true);
  const [smsCount] = useState(1247);
  const recentMessages = [
    { id: 1, from: '+33 6 12 34 56 78', status: 'Auto-répondu', time: '2 min', type: 'success' },
    { id: 2, from: '+33 7 23 45 67 89', status: 'Auto-répondu', time: '15 min', type: 'success' },
    { id: 3, from: '+33 6 98 76 54 32', status: 'Auto-répondu', time: '1h', type: 'success' },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#71717A] text-sm">Bonsoir,</p>
            <h1 className="text-xl font-semibold">JobOff</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
            <span className="text-white font-semibold">L</span>
          </div>
        </div>
      </header>

      <main className="px-6 space-y-6">
        {/* Big Toggle Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#252542] p-6 border border-white/10">
          {/* Glow effect */}
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-all duration-500 ${isActive ? 'bg-[#10B981]/30' : 'bg-[#EF4444]/20'}`} />
          
          <div className="relative z-10 text-center">
            <p className="text-[#A1A1AA] text-sm mb-4">Réponse automatique</p>
            
            {/* Big Toggle */}
            <button
              onClick={() => setIsActive(!isActive)}
              className={`relative w-24 h-40 rounded-full transition-all duration-300 mx-auto ${
                isActive 
                  ? 'bg-gradient-to-b from-[#10B981] to-[#059669] shadow-[0_0_40px_rgba(16,185,129,0.4)]' 
                  : 'bg-[#3F3F46]'
              }`}
            >
              <div className={`absolute left-2 right-2 h-20 rounded-full bg-white shadow-lg transition-all duration-300 flex items-center justify-center ${
                isActive ? 'top-2' : 'bottom-2'
              }`}>
                <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-[#10B981]' : 'bg-[#EF4444]'}`} />
              </div>
            </button>
            
            <p className={`mt-4 text-lg font-semibold transition-colors ${isActive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
              {isActive ? 'ACTIVE' : 'INACTIVE'}
            </p>
            <p className="text-[#71717A] text-xs mt-1">
              {isActive ? 'Vos SMS sont répondues' : 'Réponse auto désactivée'}
            </p>
          </div>
        </div>

        {/* Stats Card */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#A1A1AA] text-sm">SMS ce mois</p>
              <p className="text-4xl font-bold mt-1">{smsCount.toLocaleString()}</p>
              <div className="flex items-center gap-1 mt-2">
                <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-[#10B981] text-sm">+12%</span>
                <span className="text-[#71717A] text-sm">vs mois dernier</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-center gap-6">
          <Link href="/config" className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#6366F1] hover:to-[#8B5CF6] transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-[#A1A1AA] text-xs">Config</span>
          </Link>
          
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-[#A1A1AA] text-xs">Historique</span>
          </button>
          
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-[#A1A1AA] text-xs">Stats</span>
          </button>
        </div>

        {/* Recent Messages */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Messages récents</h2>
            <button className="text-[#8B5CF6] text-sm">Voir tout</button>
          </div>
          
          <div className="space-y-3">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">{msg.from.slice(-2)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{msg.from}</p>
                  <p className="text-[#71717A] text-sm">{msg.status}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs">
                    {msg.type === 'success' && '✓'}
                  </span>
                  <p className="text-[#71717A] text-xs mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A2E]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 pb-8">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center text-[#8B5CF6]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs mt-1">Accueil</span>
          </Link>
          
          <button className="flex flex-col items-center text-[#71717A]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs mt-1">Messages</span>
          </button>
          
          <Link href="/config" className="flex flex-col items-center text-[#71717A]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
            <span className="text-xs mt-1">Paramètres</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
