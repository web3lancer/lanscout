'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Submit() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Submit an Opportunity
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Found something cool? Share it with the community!
            </p>
          </div>
          <div className="bg-background-light dark:bg-background-dark/50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-500/20">
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-300" htmlFor="opportunity-url">
                Opportunity URL
              </label>
              <div className="flex">
                <input
                  className="flex-1 w-full min-w-0 resize-none overflow-hidden rounded-lg border bg-gray-100 dark:bg-gray-800 h-12 placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-primary"
                  id="opportunity-url"
                  placeholder="https://example.com/hackathon"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Paste a URL and we'll try to autofill the details.
              </p>
            </div>
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background-light dark:bg-background-dark/50 px-2 text-sm text-gray-500 dark:text-gray-400">
                  OR
                </span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
              Enter details manually if you don't have a URL.
            </p>
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-1">
                  Progress
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Step {step} of 3: Opportunity Details
                </p>
                <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <button
                  onClick={() => setStep(Math.min(step + 1, 3))}
                  className="flex min-w-[120px] items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all"
                >
                  <span className="truncate">Next</span>
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      fillRule="evenodd"
                    ></path>
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
