'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const trendingOpportunities = [
    {
      id: 1,
      title: 'Hackathon Extravaganza',
      description: 'Join the ultimate coding challenge and win big!',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAUSQluDYM-BKw3UvvxRKI8cVSfOkmgixDYdbBYROsZ4us697t8wWHVKpNfyVspqS0nk0QW14BZOXbPzkbCE1okrx-M2YnD17S2WEeEHJfZC1gj9XcI8g579j1VFpW1jde5o0D1bLnGi96ziFZ_fjDo8ZTYdPyRuOciiRPxsk8yEFNfHVZh1UZnY8M-rSGuGJnzZbLHalWLDkgfYje5YxQ5dKppZck4_zySO6pGStVtk8F3vqfqcwUNgrfFSocJqa46HGWxv41-eg',
    },
    {
      id: 2,
      title: 'Grant Application Workshop',
      description: 'Learn how to write a winning grant proposal.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDZyPNTy41WN6OiRNvX_FudunaYl3bB_AT974HXteYa9PCuA9QjioHCfhqsWUAfOjoYbtNml3D4v6HqjBHjcCjFzsJB_56OhOjpjsrj6KE2zciBav7O-qw5vrkZsGpy88N2jNQYxeHYAmtrCGyYpokf3xjB-q9EnobQ2XAlNBNjNKKGBSlrCy0VYeg0y7hTcwm-SULDckELaTGEYIULAH3wkRjSMBFc_IPnMMMgIhvbTVnBSx1RVgeJYbddAOLkT91CRj3osyXjFg',
    },
    {
      id: 3,
      title: 'Startup Funding Pitch',
      description: 'Pitch your startup idea to top investors.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD7QNR0-gRKdVysapRKCkUhRHEwrrGy1eoz-rONHkvp2Ju2E-BpJw7HF0szP8JoVyW8_1H8H9-5O4E2v5C9ZxKFGRazI67edgTzwRdhSHkHTc8OSTcNdcd1MltVJVAIsyt07oOs6rVj6X-Lvfay04RQu-VpGM8MDB-1KzSGlNPPYVghzhBXiP2lJYIVVmP1cneNTPRNZrvUl667sYrkbTM1DaqvY1JT1RwXxGecuoQvw3qr1PBs4UdrjMNpSZ-O4FZSckiuID6ECA',
    },
  ];

  const curatedOpportunities = [
    {
      id: 1,
      title: 'AI-Powered Grant Finder',
      description:
        'Find grants tailored to your project with our intelligent search. We analyze your profile and project details to match you with the most relevant funding sources.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Omdu5dKm1E2PFYA0r6_EAVPm1lXiOcf8OW3qtziDaod1PG3dormX1XDaBAu5no1OAx-a9jMcH6A6etlttN9aBS1PDa2pvYayWaScR2VXal64_iKpdVKV4vzhuUsMTs9HApAMLm-kgDpxQagPr_hwD0JhIHiuZoQnGPsxNJzxCL8pypvCGSPBH-WkKX7jFmgfCAxDYgkvhNhgQemvTgwwCH687zKDyzBU0qm6MynNqP9VDnxBWqv8lIHjxmiI6rtigZ2k50ODfA',
    },
    {
      id: 2,
      title: 'Hackathon Matchmaker',
      description:
        'Discover hackathons that align with your skills, interests, and availability. Never miss an opportunity to innovate and connect with fellow developers.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuArtUsrhlr-NnpT4vBLcdbRJ8lur3vbbL_GTuIoV0Fnsa5l3ZC3d4w6YbG9hCznYrsWO8VYnnrJ-jriBt0UUyYFGrqqRaMJsEeCGUmslsWwDTAN1qYzyZ13MGg3u4mP4323iEyfPzhKdxc_M4kriEoFBUblpv2gBv9ri7VKR6H6jrobJA6viF0x665uM_jmK4oZhaHkQ-j-8RsomblfQSIbzoPBwa6p5906y1mw2MLt8-YLYNFMhMyemIWZAo140tsUi1m2YJXDdA',
    },
    {
      id: 3,
      title: 'Startup Funding Navigator',
      description:
        'Navigate the complex funding landscape with personalized recommendations. From pre-seed to Series A, we guide you to the right investors.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAajkbGU8vpWVO3GzrQ3SR34qiJD3bb4BvlubcKmgtjZUWBpEZCrj65AtevYEOTn1DPsOQ8S1AUMfwNY_6avNxtWaNN6m5T0ZK9NmSNPX37zCWIyHc4geMRlrZwjFJeErkuKTCzyayP5Z5aU14ApryZFHo7ycDCmy2ZEB4TlfXvnuZMzVk9lU3ApQ5rv60HtLRdyfV_gJeD-HP60g4nUgda5UH8MryzZEbKTZMyqDqXLBbI7kI3yXaXbSKoMR867M0JYIcgfZOZXg',
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Your Personalized Opportunity Feed
            </h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl">
              AI-curated opportunities in hackathons, grants, and startup funding, just for you.
            </p>
          </div>
          <div className="mb-10 sm:hidden">
            <label className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="text-muted-light dark:text-muted-dark"
                  fill="currentColor"
                  height="20"
                  viewBox="0 0 256 256"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                className="h-12 w-full rounded-lg border-none bg-surface-light dark:bg-surface-dark pl-12 pr-4 text-base placeholder:text-muted-light dark:placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                placeholder="Search for opportunities"
              />
            </label>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Trending Opportunities</h3>
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-6 snap-x snap-mandatory">
                {trendingOpportunities.map((opp) => (
                  <div key={opp.id} className="flex flex-col gap-3 rounded-lg min-w-[280px] snap-start">
                    <div
                      className="w-full aspect-video bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url("${opp.image}")` }}
                    ></div>
                    <div>
                      <h4 className="font-bold text-lg">{opp.title}</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark">{opp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/opportunities"
                className="flex-grow sm:flex-grow-0 flex items-center justify-center rounded-lg h-12 px-6 bg-surface-light dark:bg-surface-dark text-sm font-bold hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              >
                Browse All Opportunities
              </Link>
              <Link
                href="/categories"
                className="flex-grow sm:flex-grow-0 flex items-center justify-center rounded-lg h-12 px-6 bg-surface-light dark:bg-surface-dark text-sm font-bold hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              >
                Explore Categories
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">AI-Curated For You</h3>
            <div className="space-y-6">
              {curatedOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg bg-surface-light dark:bg-surface-dark"
                >
                  <div
                    className="w-full md:w-1/3 aspect-video md:aspect-square bg-cover bg-center rounded-lg flex-shrink-0"
                    style={{ backgroundImage: `url("${opp.image}")` }}
                  ></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold leading-tight mb-1">{opp.title}</h4>
                    <p className="text-sm text-muted-light dark:text-muted-dark">{opp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
