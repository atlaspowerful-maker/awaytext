'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Switch } from '@headlessui/react';

export default function Dashboard() {
  const [isActive, setIsActive] = useState(false);
  const [smsCount, setSmsCount] = useState(3);
  const maxSms = 10;

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-white border-b border-border px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">AwayText</h1>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8">
        {/* Big Toggle Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 text-center">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-20 w-36 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-light ${
                isActive ? 'bg-success' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-16 w-16 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  isActive ? 'translate-x-18' : 'translate-x-1'
                }`}
                style={{ transform: isActive ? 'translateX(68px)' : 'translateX(4px)' }}
              />
            </button>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Auto-Reply</h2>
          <p className={`text-sm font-medium ${isActive ? 'text-success' : 'text-gray-500'}`}>
            {isActive ? 'Active' : 'Inactive'}
          </p>
        </div>

        {/* SMS Counter */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <p className="text-sm text-gray-600 mb-2">This month</p>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-3xl font-bold text-gray-900">{smsCount}</span>
            <span className="text-gray-500">/ {maxSms} SMS</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${(smsCount / maxSms) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">Resets in 12 days</p>
        </div>

        {/* Recent Messages */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Recent Messages</h3>
            <button className="text-primary text-sm hover:underline">View all →</button>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-900">+33 6 12 34 56 78</span>
                <span className="text-xs text-gray-500">14:32</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">"Hello, I'm interested in your services..."</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-success">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Auto-replied</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-900">+33 7 23 45 67 89</span>
                <span className="text-xs text-gray-500">11:15</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">"What are your rates for this service?"</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-success">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Auto-replied</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <Link href="/config" className="block w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl transition-colors text-center">
          Configuration
        </Link>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-6 py-3">
        <div className="max-w-md mx-auto flex justify-around">
          <button className="flex flex-col items-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">History</span>
          </button>
          <Link href="/config" className="flex flex-col items-center text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
