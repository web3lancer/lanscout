import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-background-light/10 dark:border-background-dark/10 bg-background-light/80 dark:bg-background-dark/80 px-4 sm:px-6 lg:px-10 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 text-contrast-light dark:text-contrast-dark">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
          <h1 className="text-xl font-bold">Lanscout</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/opportunities"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Opportunities
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Community
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Resources
          </Link>
        </nav>
      </div>
      <div className="flex items-center justify-end gap-3">
        <div className="hidden sm:block">
          <label className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
              className="h-10 w-full max-w-xs rounded-lg border-none bg-surface-light dark:bg-surface-dark pl-10 pr-4 text-sm placeholder:text-muted-light dark:placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              placeholder="Search"
            />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:flex items-center justify-center rounded-lg h-10 px-4 text-sm font-bold bg-surface-light dark:bg-surface-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="flex items-center justify-center rounded-lg h-10 px-4 text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Sign Up
          </Link>
          <button className="flex items-center justify-center size-10 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
            <svg
              className="text-muted-light dark:text-muted-dark"
              fill="currentColor"
              height="20"
              viewBox="0 0 256 256"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
            <span className="sr-only">Notifications</span>
          </button>
        </div>
      </div>
    </header>
  );
}
