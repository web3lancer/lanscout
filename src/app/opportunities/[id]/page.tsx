'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  deadline: string;
  location: string;
  tags: string[];
  match: string;
  relatedOpportunities: number;
  trendData: string;
}

const opportunitiesData: Record<string, Opportunity> = {
  '1': {
    id: '1',
    title: 'AI Grant for Innovative Projects',
    description:
      'This grant supports innovative projects that utilize artificial intelligence to address significant challenges across various sectors. We encourage applications from individuals and teams with groundbreaking ideas and a commitment to making a positive impact. Projects should demonstrate a clear understanding of the problem, a novel approach using AI, and a potential for scalability and real-world application. Funding amounts vary based on project scope and impact.',
    type: 'Grant',
    status: 'Open',
    deadline: 'October 31, 2024',
    location: 'Remote',
    tags: ['AI', 'Machine Learning', 'Innovation', 'Technology', 'Funding'],
    match: 'Based on your profile, this aligns with your expertise in AI.',
    relatedOpportunities: 12,
    trendData: 'AI funding has increased 40% year-over-year',
  },
  '2': {
    id: '2',
    title: 'Web3 Developer Hackathon',
    description:
      'Join us for an exciting hackathon focused on Web3 technologies and blockchain development. This is a great opportunity to collaborate with fellow developers, learn new skills, and potentially win prizes. Teams of 3-5 people are preferred. All skill levels are welcome.',
    type: 'Hackathon',
    status: 'Open',
    deadline: 'November 15, 2024',
    location: 'San Francisco, CA',
    tags: ['Web3', 'Blockchain', 'Hackathon', 'Development', 'Community'],
    match: 'Perfect opportunity to showcase your Web3 development skills.',
    relatedOpportunities: 8,
    trendData: 'Web3 hackathons are trending with 50+ events this quarter',
  },
};

export default function OpportunityDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const opportunity = opportunitiesData[id] || opportunitiesData['1'];
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-1 w-full">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="/opportunities" className="hover:text-primary transition-colors">
                  Opportunities
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 dark:text-gray-200">{opportunity.title}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                    {opportunity.title}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    {opportunity.description.substring(0, 100)}...
                  </p>
                </div>
                <button className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="border-b border-gray-200/50 dark:border-gray-700/50">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                    activeTab === 'insights'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  AI Insights
                </button>
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About this opportunity</h3>
                  <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">{opportunity.type}</dd>
                    </div>
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">
                        <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/50 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                          {opportunity.status}
                        </span>
                      </dd>
                    </div>
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Deadline</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">{opportunity.deadline}</dd>
                    </div>
                    <div className="py-4 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
                      <dd className="text-sm text-gray-900 dark:text-white col-span-2">{opportunity.location}</dd>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>{opportunity.description}</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.tags.map((tag) => (
                      <span key={tag} className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-1 text-sm font-medium text-primary">
                        {tag}
                      </span>
                    ))}
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
                    <button className="flex flex-col items-center gap-2 text-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                      <div className="rounded-full bg-background-light dark:bg-gray-800/50 p-3 ring-1 ring-gray-200 dark:ring-gray-700/50">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 8H3v7h12m0-7l4.545-3M19 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"></path>
                        </svg>
                      </div>
                      <span>Share</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 text-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                      <div className="rounded-full bg-background-light dark:bg-gray-800/50 p-3 ring-1 ring-gray-200 dark:ring-gray-700/50">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                        </svg>
                      </div>
                      <span>Copy Link</span>
                    </button>
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-xl border border-gray-200/20 dark:border-gray-800/30">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">AI Insights</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Powered by our AI to help you find the best fit.</p>
                    <div className="space-y-4 pt-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 dark:bg-primary/20">
                            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-sm font-bold text-gray-900 dark:text-white">Why it&apos;s a good match</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{opportunity.match}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 dark:bg-primary/20">
                            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000-2H3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1h-1a1 1 0 000 2 2 2 0 012 2v1H4V5zm2 4a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-sm font-bold text-gray-900 dark:text-white">Related opportunities</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Explore {opportunity.relatedOpportunities} similar opportunities.</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 dark:bg-primary/20">
                            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-sm font-bold text-gray-900 dark:text-white">Trend data</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{opportunity.trendData}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-xl border border-gray-200/20 dark:border-gray-800/30">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Source Information</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 text-left">
                      <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                      </svg>
                      View original source
                    </button>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Attribution: Opportunity Source</p>
                    <button className="w-full flex items-center gap-2 rounded-lg border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm font-medium text-red-800 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30">
                      <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 2.4a1 1 0 01-.8 1.6H6a3 3 0 01-3-3v-2zm0 0h12v2H3V6zm13 4H9v6h7v-6z"></path>
                      </svg>
                      Report an error
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
