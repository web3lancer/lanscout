'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OpportunityDetail() {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="w-full flex-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="/opportunities" className="hover:text-primary">
                  Opportunities
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 dark:text-gray-200">AI Grant</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                    AI Grant for Innovative Projects
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Funding for projects leveraging AI to solve real-world problems. Open to individuals and teams.
                  </p>
                </div>
                <button className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="border-b border-gray-200/50 dark:border-gray-700/50">
              <nav className="-mb-px flex space-x-8">
                <button className="border-primary text-primary whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
                  Overview
                </button>
                <button className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
                  AI Insights
                </button>
              </nav>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    About this opportunity
                  </h3>
                  <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">Grant</dd>
                    </div>
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">
                        <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/50 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                          Open
                        </span>
                      </dd>
                    </div>
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Deadline</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">October 31, 2024</dd>
                    </div>
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">Remote</dd>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="text-gray-600 dark:text-gray-300 space-y-4">
                    <p>
                      This grant supports innovative projects that utilize artificial intelligence to address significant
                      challenges across various sectors. We encourage applications from individuals and teams with
                      groundbreaking ideas and a commitment to making a positive impact. Projects should demonstrate a clear
                      understanding of the problem, a novel approach using AI, and a potential for scalability and real-world
                      application. Funding amounts vary based on project scope and impact.
                    </p>
                  </div>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-1 text-sm font-medium text-primary">
                      AI
                    </span>
                    <span className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-1 text-sm font-medium text-primary">
                      Machine Learning
                    </span>
                    <span className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-1 text-sm font-medium text-primary">
                      Innovation
                    </span>
                    <span className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-1 text-sm font-medium text-primary">
                      Technology
                    </span>
                    <span className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-1 text-sm font-medium text-primary">
                      Funding
                    </span>
                  </div>
                </section>
                <section className="flex items-center gap-4 pt-4">
                  <button className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                    Apply Now
                  </button>
                  <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-5 py-2.5 text-sm font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Save
                  </button>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Share</h3>
                  <div className="flex items-center gap-4">
                    <button className="flex flex-col items-center gap-2 text-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                      <div className="rounded-full bg-background-light dark:bg-gray-800/50 p-3 ring-1 ring-gray-200 dark:ring-gray-700/50">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.344 12.33 9.962 11.297 10.533 10.236C11.211 8.952 11.818 7.58 12.331 6.116M12 12m0 0c1.105-2.811 2.909-5.228 5.198-6.893m0 0h4.026m-4.026 0v4.026M5.228 20.856a9 9 0 006.514-3.5m2.25-10.165a9 9 0 018.514 5.176m0 0l3.756 5.25" />
                        </svg>
                      </div>
                      <span>Share</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 text-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                      <div className="rounded-full bg-background-light dark:bg-gray-800/50 p-3 ring-1 ring-gray-200 dark:ring-gray-700/50">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                      </div>
                      <span>Copy Link</span>
                    </button>
                  </div>
                </section>
              </div>
              <aside className="space-y-8">
                <div className="rounded-lg bg-background-light dark:bg-background-dark/50 p-6 ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    AI Insights
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Powered by our AI to help you find the best fit.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-lg bg-primary/10 dark:bg-primary/20 p-2 text-primary">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.343 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM4 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM5.343 5.343a1 1 0 001.414-1.414L6.05 3.222a1 1 0 10-1.414 1.414l.707.707z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Why it's a good match</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Based on your profile, this aligns with your expertise in AI.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-lg bg-primary/10 dark:bg-primary/20 p-2 text-primary">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Related opportunities</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Explore similar grants in AI and technology.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-lg bg-primary/10 dark:bg-primary/20 p-2 text-primary">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Trend data</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Analyze funding trends and success rates.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-background-light dark:bg-background-dark/50 p-6 ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Source Information</h3>
                  <div className="space-y-4">
                    <button className="group flex items-center justify-between text-sm w-full">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 rounded-lg bg-gray-200 dark:bg-gray-700/50 p-2 text-gray-600 dark:text-gray-300">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">View original source</span>
                      </div>
                      <svg
                        className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-transform group-hover:translate-x-1 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Attribution: AI Grant Foundation</div>
                    <button className="w-full text-left rounded-lg border border-red-500/20 dark:border-red-500/30 bg-red-500/5 dark:bg-red-500/10 px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20">
                      Report an error
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
