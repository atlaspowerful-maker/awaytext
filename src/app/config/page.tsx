'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConfigPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [autoReply, setAutoReply] = useState(
    "Bonjour ! Je suis actuellement indisponible. Je vous répondrai dès que possible.\n\n- AwayText"
  );
  const [isActive, setIsActive] = useState(false);
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSave = () => {
    // TODO: Save to backend
    alert('Configuration sauvegardée !');
  };

  const charCount = autoReply.length;
  const maxChars = 160;

  return (
    <div className="min-h-screen bg-surface pb-24">
      {/* Header */}
      <header className="bg-white border-b border-border px-4 py-4 flex items-center gap-3">
        <Link href="/" className="text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">Configuration</h1>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Phone Number */}
        <section className="bg-white rounded-xl shadow p-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre numéro de téléphone
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">+33</span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="6 12 34 56 78"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Ce numéro recevra les SMS et enverra les réponses automatiques
          </p>
        </section>

        {/* Auto-Reply Message */}
        <section className="bg-white rounded-xl shadow p-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message de réponse automatique
          </label>
          <textarea
            value={autoReply}
            onChange={(e) => setAutoReply(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
          <div className="flex justify-between mt-2">
            <span className={`text-xs ${charCount > maxChars ? 'text-red-500' : 'text-gray-500'}`}>
              {charCount}/{maxChars} caractères
            </span>
            {charCount > maxChars && (
              <span className="text-xs text-red-500">Message trop long</span>
            )}
          </div>

          {/* Preview */}
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-2">Aperçu :</p>
            <div className="bg-primary text-white rounded-lg rounded-tl-none p-3 text-sm">
              {autoReply}
            </div>
          </div>
        </section>

        {/* Schedule (Optional) */}
        <section className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-medium text-gray-700">
              Programmer une période
            </label>
            <button
              onClick={() => setScheduleEnabled(!scheduleEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                scheduleEnabled ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  scheduleEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {scheduleEnabled && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Du</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Au</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          )}
        </section>

        {/* Status Toggle */}
        <section className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Réponse auto</h3>
              <p className="text-sm text-gray-500">
                {isActive ? 'Active' : 'Inactive'}
              </p>
            </div>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isActive ? 'bg-success' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isActive ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </section>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-colors"
        >
          Sauvegarder
        </button>
      </main>
    </div>
  );
}
