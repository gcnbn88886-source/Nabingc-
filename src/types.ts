export type Category = 
  | 'Politics' 
  | 'Entertainment' 
  | 'Sports' 
  | 'Technology' 
  | 'Education' 
  | 'International' 
  | 'Business' 
  | 'Viral';

export interface NewsArticle {
  id: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  publishDate: string;
  updatedAt: string;
  imageUrl: string;
  readTime: string;
  isBreaking?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  isViral?: boolean;
  views: number;
  comments: Comment[];
  tags: string[];
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  date: string;
  avatar?: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  link: string;
}
