import Link from 'next/link';

const LanscoutLogo = () => (
  <svg
    className="h-8 w-8 text-primary"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200/10 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 px-4 sm:px-6 lg:px-10 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-3 text-gray-900 dark:text-white hover:text-primary transition-colors">
          <LanscoutLogo />
          <h1 className="text-xl font-bold">Lanscout</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/opportunities" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            Opportunities
          </Link>
          <Link href="/categories" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            AI Insights
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            Community
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            Resources
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </span>
          <input 
            type="search"
            placeholder="Search" 
            className="w-full max-w-xs rounded-lg border-0 bg-gray-100 dark:bg-gray-800 pl-10 pr-4 py-2 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary" 
          />
        </div>
        <button className="hidden lg:flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
          Post an Opportunity
        </button>
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3vpaK6WQU3sY2CIlzohBwHIvJAVWmRwnMBSzyYdV0RPno2CQuaBfXj-hvr-ndByfAPLAC0epoxuG7YRYYTeEwUJoOXnmbUUFyTxNrfMG96RISLPBBLeSPdQgiVU0OrtD28KVLkfXG1JlhGg54hT7FJ-6DN837RU2-rk33V76W4VgIzc7sNC2fkg9_Zlt9kVO90LMep3E_R4B24kEQTaBllFg_hhZyiuxyHJOFPhLZewkgKbTeHHXfFdZJkkKajiEAQ9HvDqAwFQ")' }} />
      </div>
    </header>
  );
}
