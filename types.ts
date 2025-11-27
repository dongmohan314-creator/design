export type CategoryId = 'inspiration' | 'tools' | 'learning' | 'resources' | 'fonts' | 'portfolio';

export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: CategoryId;
  tags: string[];
  isPopular?: boolean;
  icon?: string; // URL to icon or generic fallback
}

export interface Category {
  id: CategoryId;
  label: string;
  iconName: string;
}
