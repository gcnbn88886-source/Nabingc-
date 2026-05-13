import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, Share2 } from 'lucide-react';
import { NewsArticle } from '../types';
import { cn, formatDate } from '../lib/utils';
import { motion } from 'motion/react';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'hero' | 'grid' | 'list' | 'mini';
  key?: React.Key;
}

export default function NewsCard({ article, variant = 'grid' }: NewsCardProps) {
  if (variant === 'hero') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="group relative h-[600px] rounded-[2.5rem] overflow-hidden cursor-pointer"
      >
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute top-8 left-8 flex gap-2">
          <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-primary/40">
            {article.category}
          </span>
          {article.isBreaking && (
            <span className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
              Breaking
            </span>
          )}
        </div>

        <div className="absolute bottom-12 left-8 right-8 space-y-4">
          <Link to={`/article/${article.id}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter hover:text-primary transition-colors">
              {article.title}
            </h2>
          </Link>
          <p className="text-white/70 text-lg max-w-2xl line-clamp-2 font-medium">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock size={16} />
              <span>{article.readTime} पढ्न लाग्ने</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Eye size={16} />
              <span>{article.views} पटक हेरिएको</span>
            </div>
            <span className="text-white/40 text-sm font-bold uppercase tracking-widest ml-auto">
              {formatDate(article.publishDate)}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'list') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="group flex gap-6 p-4 rounded-3xl hover:bg-black/5 dark:hover:bg-white/5 transition-all"
      >
        <div className="w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">
            {article.category}
          </span>
          <Link to={`/article/${article.id}`}>
            <h3 className="text-lg font-bold leading-snug dark:text-white group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center gap-4 text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">
            <span>{article.author}</span>
            <span>•</span>
            <span>{formatDate(article.publishDate)}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'mini') {
    return (
      <Link to={`/article/${article.id}`} className="group flex gap-4 items-start py-4 border-b border-black/5 dark:border-white/5 last:border-0">
        <span className="text-2xl font-black text-black/10 dark:text-white/10 group-hover:text-primary/20 transition-colors">
          0{article.id}
        </span>
        <div className="space-y-1">
          <h4 className="font-bold text-sm leading-snug dark:text-white group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h4>
          <span className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">
            {article.category}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-white/5 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-300 border border-black/5 dark:border-white/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <Link to={`/article/${article.id}`}>
          <h3 className="text-xl font-black leading-tight tracking-tight dark:text-white group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-black/60 dark:text-white/60 text-sm line-clamp-2 font-medium">
          {article.excerpt}
        </p>
        <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">
            {formatDate(article.publishDate)}
          </span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-black/40 dark:text-white/40">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
