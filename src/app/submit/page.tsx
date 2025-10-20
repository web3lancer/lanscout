'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Submit() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0f13]">
      <Header />
      <main className="flex-1 py-12">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Submit an Opportunity
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Found something cool? Share it with the community!
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-[#101c22] border border-slate-200 dark:border-slate-700 rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <div className="mb-4">
                <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                  Opportunity URL
                </h2>
                <input
                  type="url"
                  placeholder="https://example.com/hackathon"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-[#0a0f13] text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1193d4]"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Paste a URL and we&apos;ll try to autofill the details.
                </p>
              </div>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-slate-300 dark:border-slate-600" />
              <span className="px-3 text-xs text-slate-500 dark:text-slate-400">OR</span>
              <div className="flex-1 border-t border-slate-300 dark:border-slate-600" />
            </div>

            <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-6">
              Enter details manually if you don&apos;t have a URL.
            </p>

            <div>
              <div className="mb-8">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                  Progress
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Step {step} of 3: Opportunity Details
                </p>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#1193d4] h-full rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(Math.min(step + 1, 3))}
                  className="px-4 py-2 bg-[#1193d4] text-white rounded-lg font-medium hover:bg-[#0d7ab3] transition-colors min-w-[120px] flex items-center justify-center gap-2"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
