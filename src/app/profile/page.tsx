'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  const [interests, setInterests] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('your.email@example.com');
  const [password, setPassword] = useState('');

  const savedOpportunities = [
    {
      id: 1,
      title: 'AI Hackathon',
      type: 'Hackathon',
      deadline: '2024-03-15',
    },
    {
      id: 2,
      title: 'Startup Grant for AI Research',
      type: 'Grant',
      deadline: '2024-04-01',
    },
    {
      id: 3,
      title: 'Seed Funding for AI Startup',
      type: 'Funding',
      deadline: '2024-05-01',
    },
  ];

  const applications = [
    {
      id: 1,
      title: 'AI Hackathon',
      status: 'Applied',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      lastUpdated: '2024-02-20',
    },
    {
      id: 2,
      title: 'Startup Grant for AI Research',
      status: 'In Review',
      statusColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      lastUpdated: '2024-03-05',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0f13]">
      <Header />
      <main className="flex-1 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              My Dashboard
            </h1>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                My Interests & Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Interests & Skills
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., AI, Web3, SaaS"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-[#101c22] text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1193d4]"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Add tags separated by commas.
                  </p>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Industry Preferences
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-[#101c22] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1193d4]"
                  >
                    <option value="">Select an industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-[#1193d4] text-white rounded-lg font-medium hover:bg-[#0d7ab3] transition-colors">
                  Save Changes
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                Saved Opportunities
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900 dark:text-white">
                        Opportunity
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900 dark:text-white">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900 dark:text-white">
                        Deadline
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-slate-900 dark:text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedOpportunities.map((opportunity) => (
                      <tr
                        key={opportunity.id}
                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">
                          {opportunity.title}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                          {opportunity.type}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                          {opportunity.deadline}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Link
                            href={`/opportunities/${opportunity.id}`}
                            className="text-sm font-medium text-[#1193d4] hover:text-[#0d7ab3] transition-colors"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                Application Tracker
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900 dark:text-white">
                        Opportunity
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900 dark:text-white">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900 dark:text-white">
                        Last Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr
                        key={app.id}
                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">
                          {app.title}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.statusColor}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                          {app.lastUpdated}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                Account Settings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Preferences
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-[#101c22] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1193d4]"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Change Password
                  </label>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-[#101c22] text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1193d4]"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-[#1193d4] text-white rounded-lg font-medium hover:bg-[#0d7ab3] transition-colors">
                  Update Account
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
