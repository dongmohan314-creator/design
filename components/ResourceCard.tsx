import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  // Generate a fallback favicon/icon URL using Google's favicon service
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${resource.url}&sz=64`;

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-white dark:bg-dark-card rounded-xl border border-gray-100 dark:border-dark-border p-5 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 p-1.5 flex items-center justify-center border border-gray-100 dark:border-gray-700">
                <img 
                    src={faviconUrl} 
                    alt={`${resource.name} icon`} 
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    onError={(e) => {
                        // Fallback if image fails
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />
            </div>
            <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {resource.name}
                </h3>
            </div>
        </div>
        <ExternalLink size={16} className="text-gray-300 group-hover:text-primary-500 transition-colors opacity-0 group-hover:opacity-100" />
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
        {resource.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {resource.tags.slice(0, 3).map((tag, index) => (
          <span 
            key={index} 
            className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};
