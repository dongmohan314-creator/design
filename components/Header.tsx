import React from 'react';
import { Search, Moon, Sun, Palette } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  darkMode, 
  toggleDarkMode 
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 dark:bg-dark-bg/80 border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <Palette size={18} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Design<span className="text-primary-600">Nav</span>
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-dark-border rounded-full leading-5 bg-gray-50 dark:bg-dark-card text-slate-900 dark:text-slate-100 placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-dark-card focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 sm:text-sm shadow-sm"
                placeholder="搜索资源、工具或灵感..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="md:hidden py-3 pb-4">
           <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search size={16} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-dark-border rounded-lg leading-5 bg-gray-50 dark:bg-dark-card text-slate-900 dark:text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                placeholder="搜索..."
              />
            </div>
        </div>
      </div>
    </header>
  );
};
