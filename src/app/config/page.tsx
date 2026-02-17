'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConfigPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [autoReply, setAutoReply] = useState(
    "Bonjour ! Je suis actuellement indisponible. Je vous répondrai dès que possible.\n\n- JobOff"
  );
  const [isActive, setIsActive] = useState(true);
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  const charCount = autoReply.length;
  const maxChars = 160;

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-4 flex items-center gap-4">
        <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-semibold">Configuration</h1>
      </header>

      <main className="px-6 space-y-6">
        {/* Phone Number Card */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <label className="block text-[#A1A1AA] text-sm mb-3">Votre numéro de téléphone</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] font-medium">+33</span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="6 12 34 56 78"
              className="w-full pl-14 pr-4 py-4 bg-[#252542] border border-white/10 rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-colors"
            />
          </div>
          <p className="text-[#71717A] text-xs mt-2">Ce numéro recevra les SMS et enverra les réponses automatiques</p>
        </div>

        {/* Auto-Reply Message Card */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <label className="block text-[#A1A1AA] text-sm mb-3">Message de réponse automatique</label>
          <textarea
            value={autoReply}
            onChange={(e) => setAutoReply(e.target.value)}
            rows={5}
            className="w-full px-4 py-4 bg-[#252542] border border-white/10 rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
          />
          <div className="flex justify-between mt-3">
            <span className={`text-xs ${charCount > maxChars ? 'text-[#EF4444]' : 'text-[#71717A]'}`}>
              {charCount}/{maxChars} caractères
            </span>
            {charCount > maxChars && (
              <span className="text-xs text-[#EF4444]">Message trop long</span>
            )}
          </div>

          {/* Preview */}
          <div className="mt-4 p-4 bg-[#1A1A2E] rounded-2xl">
            <p className="text-[#71717A] text-xs mb-2">Aperçu :</p>
            <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl rounded-tl-none p-4">
              <p className="text-white text-sm whitespace-pre-wrap">{autoReply}</p>
            </div>
          </div>
        </div>

        {/* Schedule Card */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium">Programmer une période</h3>
              <p className="text-[#71717A] text-sm">Réponse auto active uniquement sur ces dates</p>
            </div>
            <button
              onClick={() => setScheduleEnabled(!scheduleEnabled)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                scheduleEnabled ? 'bg-[#8B5CF6]' : 'bg-[#3F3F46]'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  scheduleEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {scheduleEnabled && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div>
                <label className="block text-[#71717A] text-xs mb-2">Du</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#252542] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>
              <div>
                <label className="block text-[#71717A] text-xs mb-2">Au</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#252542] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Status Toggle Card */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Réponse automatique</h3>
              <p className={`text-sm ${isActive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {isActive ? 'Active' : 'Inactive'}
              </p>
            </div>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isActive ? 'bg-[#10B981]' : 'bg-[#3F3F46]'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isActive ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 text-white font-semibold py-4 rounded-2xl transition-all disabled:opacity-50"
        >
          {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A2E]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 pb-8">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center text-[#71717A]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Accueil</span>
          </Link>
          
          <button className="flex flex-col items-center text-[#71717A]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs mt-1">Messages</span>
          </button>
          
          <Link href="/config" className="flex flex-col items-center text-[#8B5CF6]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs mt-1">Paramètres</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
