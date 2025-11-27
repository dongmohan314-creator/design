import React from 'react';
import { CATEGORIES } from '../data/resources';
import { CategoryId } from '../types';
import * as Icons from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (id: CategoryId | 'all') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
      <button
        onClick={() => onSelectCategory('all')}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
          selectedCategory === 'all'
            ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card hover:text-primary-600 dark:hover:text-primary-400'
        }`}
      >
        <Icons.LayoutGrid size={18} />
        全部资源
      </button>

      {CATEGORIES.map((category) => {
        // Dynamic icon rendering
        const IconComponent = (Icons as any)[category.iconName] || Icons.Link;
        
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            <IconComponent size={18} />
            {category.label}
          </button>
        );
      })}
    </nav>
  );
};
