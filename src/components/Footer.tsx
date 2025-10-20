'use client';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Lanscout. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
