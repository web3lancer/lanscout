'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Opportunity {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function CategoryDetailPage() {
  const params = useParams();
  const category = (params.category as string)?.replace(/-/g, ' ').toUpperCase() || 'HACKATHONS';
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('Worldwide');
  const [selectedFocus, setSelectedFocus] = useState('Any');
  const [selectedPrize, setSelectedPrize] = useState('Any Amount');
  const [selectedEligibility, setSelectedEligibility] = useState('Everyone');
  const [selectedDeadline, setSelectedDeadline] = useState('Anytime');

  const opportunities: Opportunity[] = [
    {
      id: 1,
      category: 'AI',
      title: 'AI Innovation Challenge',
      description: 'Develop AI solutions for real-world problems. Prizes include funding and mentorship.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ACw-H9t2czDNOv-c_yzFJAKSVKazZgDur55140qqJ2MBoZZ6vQUP7gKxZvf9bon83H5k2q0vhrOYDnWaZmE9N5kaxPxTLxKnmkHQBAjPRPtQxm2NWXZepuU6aKegvaeBSM7WF8O-pAqhRHvbG461PN9QyeFxGi65xqvX1B219UtvnmTuWpqNc7beoVRHqwY2cqAg_osms5jtQYsZh2T-86u3DXes_lhEyrYbwYSZ3wrKHJzh1FfXe9gz1E35BjjVaOeXdCwv0A',
    },
    {
      id: 2,
      category: 'Web Development',
      title: 'Web Dev Hackfest',
      description: 'Build innovative web applications. Compete for cash prizes and recognition.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZrqiTeRnWG3gSNAuHjEDn3zs2FdXb_sdY9LTioDbWINl-Z6fxixzaL-YQpFJc1UjDgWjtTZU5Sp1fAtsAJlYE4Ay52LxgHj2aYx8w65Q5_4Ipv1i7uXFKYPHH8DKzxgsXXuuRibm6dbyNVXRRUj3B6VfrGXEBt-bf_08vxpTrs8bnfX3KVHwZMVgCK6U-aRTaJpO5LCZJjU505EHi1Iy5fk2MxKS2esFYvjAp5FwTWAxrMrftjtj9BnQLyCFBfT_ARs0A_Hufjw',
    },
    {
      id: 3,
      category: 'Mobile Apps',
      title: 'Mobile App Mania',
      description: 'Create cutting-edge mobile apps. Win prizes and gain exposure.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdV-GnD6yzIKsjTGGPGWCENeHIkihNp4KPfWkhux7NCwkrcRySm29S4AsUbuZSgbuB8yb-IauCMIkrp7JYQrTewotA0qU-ATMvcWRC-4B1AxyETvwazMZMfb4WV2VjyhaD2loPi1EcB10tA0NHA8Hd3abLSyLEV7FYmWn7muM38YoHUrpDmtnyILwvdApCEp-Qx_kUsyAXXPKO8w_nzAGaSFlyq0acoz1pxJk4QoJNUrka7OWu4vHT67rFDN6oP_gMcNQJ8i_4w',
    },
    {
      id: 4,
      category: 'Data Science',
      title: 'Data Dive Challenge',
      description: 'Analyze complex datasets and derive insights. Prizes include data science tools and resources.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAZbm2RxUn3sWUoH4B5k0DHuQ8fUE2rPmU5zuX-IrST86pg4WkO7qv10z3oBMF1XALGxX4y3FPrC3xZ6gt20kbEpxHmakVmeqAU-pPl4qwIVuaWZkOEMk38bZfkG-3Y5jvzfS5ARW2UPdPc6rX0MQ07kS541Z8S3kShgOWMKOupRsJEmwtufte5MEp1HakWUZqb6_IHZdC8N-BIbtmGjWcDVaGYjrqTfdvtLOwNX09-sLdN1uJipHAxP5jYVEndvFUf9zsQKJrIdw',
    },
    {
      id: 5,
      category: 'Blockchain',
      title: 'Web3 Innovation Summit',
      description: 'Explore blockchain and Web3 technologies. Network with industry leaders.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdV-GnD6yzIKsjTGGPGWCENeHIkihNp4KPfWkhux7NCwkrcRySm29S4AsUbuZSgbuB8yb-IauCMIkrp7JYQrTewotA0qU-ATMvcWRC-4B1AxyETvwazMZMfb4WV2VjyhaD2loPi1EcB10tA0NHA8Hd3abLSyLEV7FYmWn7muM38YoHUrpDmtnyILwvdApCEp-Qx_kUsyAXXPKO8w_nzAGaSFlyq0acoz1pxJk4QoJNUrka7OWu4vHT67rFDN6oP_gMcNQJ8i_4w',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-xl border border-gray-200/20 dark:border-gray-800/30 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Filter</h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>All Categories</option>
                    <option>Hackathons</option>
                    <option>Grants</option>
                    <option>Startup Funding</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-2"
                  >
                    Location
                  </label>
                  <select
                    id="location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Worldwide</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="focus"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-2"
                  >
                    Focus
                  </label>
                  <select
                    id="focus"
                    value={selectedFocus}
                    onChange={(e) => setSelectedFocus(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Any</option>
                    <option>AI</option>
                    <option>Web3</option>
                    <option>SaaS</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="prize"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-2"
                  >
                    Prize
                  </label>
                  <select
                    id="prize"
                    value={selectedPrize}
                    onChange={(e) => setSelectedPrize(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Any Amount</option>
                    <option>$1,000+</option>
                    <option>$10,000+</option>
                    <option>$50,000+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="eligibility"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-2"
                  >
                    Eligibility
                  </label>
                  <select
                    id="eligibility"
                    value={selectedEligibility}
                    onChange={(e) => setSelectedEligibility(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Everyone</option>
                    <option>Students Only</option>
                    <option>Startups</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-2"
                  >
                    Deadline
                  </label>
                  <select
                    id="deadline"
                    value={selectedDeadline}
                    onChange={(e) => setSelectedDeadline(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Anytime</option>
                    <option>Next 7 days</option>
                    <option>Next 30 days</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header and View Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{category}</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Explore {category.toLowerCase()} that match your interests and skills.
                </p>
              </div>
              <div className="flex items-center border border-gray-300/50 dark:border-gray-700/50 rounded-lg p-1 mt-4 sm:mt-0 bg-background-light dark:bg-background-dark/50">
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
                    viewMode === 'list'
                      ? 'bg-primary text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-primary/10'
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                  </svg>
                  <span>List</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-primary text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-primary/10'
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span>Grid</span>
                </button>
              </div>
            </div>

            {/* Opportunities List */}
            <div
              className={`space-y-6 ${
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max'
                  : 'space-y-6'
              }`}
            >
              {opportunities.map((opp) => (
                <Link
                  key={opp.id}
                  href={`/opportunities/${opp.id}`}
                  className={`bg-background-light dark:bg-background-dark/50 rounded-xl border border-gray-200/20 dark:border-gray-800/30 hover:border-primary/50 dark:hover:border-primary/50 transition-all ${
                    viewMode === 'list'
                      ? 'p-4 flex flex-col md:flex-row items-start gap-6'
                      : 'p-4 flex flex-col'
                  }`}
                >
                  <div
                    className={`rounded-lg bg-cover bg-center ${
                      viewMode === 'list' ? 'w-full md:w-1/3 h-48 md:h-auto' : 'w-full h-40'
                    }`}
                    style={{ backgroundImage: `url("${opp.image}")` }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary mb-1">{opp.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{opp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 mb-4">{opp.description}</p>
                    <button className="bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-8">
              <nav className="flex items-center space-x-1">
                <button className="flex items-center justify-center h-10 w-10 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="flex items-center justify-center h-10 w-10 rounded-full text-white bg-primary text-sm font-bold">
                  1
                </button>
                <button className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-sm font-medium transition-colors">
                  2
                </button>
                <button className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-sm font-medium transition-colors">
                  3
                </button>
                <span className="flex items-center justify-center h-10 w-10 text-gray-500 dark:text-gray-400">
                  ...
                </span>
                <button className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-sm font-medium transition-colors">
                  10
                </button>
                <button className="flex items-center justify-center h-10 w-10 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors">
                  <svg
                    className="h-5 w-5"
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
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
