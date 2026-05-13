import React from 'react';
import { Mail, TrendingUp, Bell } from 'lucide-react';
import { MOCK_NEWS, MOCK_NOTICES } from '../data/mockNews';
import NewsCard from './NewsCard';

export default function Sidebar() {
  const trendingNews = MOCK_NEWS.filter(news => news.isTrending || news.isViral).slice(0, 5);

  return (
    <aside className="space-y-10">
      {/* Newsletter */}
      <div className="bg-primary/5 dark:bg-white/5 rounded-[2.5rem] p-8 border border-primary/10 dark:border-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10 space-y-4">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Mail size={24} />
          </div>
          <h3 className="text-2xl font-black tracking-tight dark:text-white">Stay Updated</h3>
          <p className="text-black/60 dark:text-white/60 text-sm font-medium">
            Subscribe to our newsletter and get the latest premium news directly in your inbox.
          </p>
          <div className="space-y-2">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full bg-white dark:bg-black/50 border border-black/5 dark:border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
            />
            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-black p-4 rounded-2xl active:scale-95 transition-transform shadow-lg">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-primary pb-2 w-fit">
          <TrendingUp size={20} className="text-primary" />
          <h3 className="text-lg font-black tracking-widest uppercase">Popular Now</h3>
        </div>
        <div className="divide-y divide-black/5 dark:divide-white/5">
          {trendingNews.map((news) => (
            <NewsCard key={news.id} article={news} variant="mini" />
          ))}
        </div>
      </div>

      {/* Notices & Results */}
      <div className="bg-black dark:bg-white rounded-[2.5rem] p-8 text-white dark:text-black">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-primary" />
            <h3 className="text-lg font-black tracking-widest uppercase">Notice Hub</h3>
          </div>
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
        <div className="space-y-6">
          {MOCK_NOTICES.map((notice) => (
            <div key={notice.id} className="space-y-2 group cursor-pointer">
              <span className="text-[10px] font-bold text-white/40 dark:text-black/40 uppercase tracking-widest">
                {notice.date}
              </span>
              <p className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                {notice.title}
              </p>
            </div>
          ))}
        </div>
        <button className="w-full mt-8 border border-white/20 dark:border-black/20 p-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/10 dark:hover:bg-black/5 transition-colors">
          View All Notices
        </button>
      </div>

      {/* Ad Placeholder */}
      <div className="aspect-[4/5] bg-black/5 dark:bg-white/5 rounded-[2.5rem] flex items-center justify-center border-2 border-dashed border-black/10 dark:border-white/10">
        <span className="text-xs font-bold text-black/20 dark:text-white/20 tracking-widest uppercase">Advertisement Space</span>
      </div>
    </aside>
  );
}
