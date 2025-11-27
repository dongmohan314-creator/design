import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ResourceCard } from './components/ResourceCard';
import { RESOURCES, CATEGORIES } from './data/resources';
import { CategoryId } from './types';
import { Sparkles } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  // Handle Dark Mode Side Effects
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Filter Logic
  const filteredResources = useMemo(() => {
    return RESOURCES.filter(resource => {
      const matchesSearch = 
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const popularResources = useMemo(() => {
    return RESOURCES.filter(r => r.isPopular);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-200 dark:selection:bg-primary-900 selection:text-primary-900 dark:selection:text-primary-100">
      
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar / Top Tabs */}
          <aside className="w-full md:w-64 flex-shrink-0">
             <div className="sticky top-24">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 hidden md:block px-4">
                  分类导航
                </h2>
                <CategoryFilter 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={(id) => {
                    setSelectedCategory(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                />
             </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Hero / Popular Section - Only show on 'all' view and no search */}
            {selectedCategory === 'all' && !searchQuery && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="text-amber-500" size={20} />
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                    常用推荐
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularResources.slice(0, 6).map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {/* Main Grid */}
            <div className="mb-8">
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                   {selectedCategory === 'all' 
                      ? (searchQuery ? `搜索结果: "${searchQuery}"` : '全部资源') 
                      : CATEGORIES.find(c => c.id === selectedCategory)?.label}
                 </h2>
                 <span className="text-sm text-gray-500 bg-gray-100 dark:bg-dark-card px-2 py-1 rounded-md">
                   {filteredResources.length} 个资源
                 </span>
               </div>
               
               {filteredResources.length > 0 ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {filteredResources.map(resource => (
                     <ResourceCard key={resource.id} resource={resource} />
                   ))}
                 </div>
               ) : (
                 <div className="text-center py-20 bg-gray-50 dark:bg-dark-card/50 rounded-2xl border border-dashed border-gray-200 dark:border-dark-border">
                   <p className="text-gray-500 dark:text-gray-400 text-lg">
                     未找到相关资源，换个关键词试试？
                   </p>
                   <button 
                      onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                      className="mt-4 text-primary-600 hover:underline"
                   >
                     清除筛选
                   </button>
                 </div>
               )}
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center md:text-left md:flex md:justify-between md:items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} DesignNav. 视觉传达设计资源导航.
            </p>
            <div className="mt-4 md:mt-0 flex gap-6 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                关于我们
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                提交收录
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
