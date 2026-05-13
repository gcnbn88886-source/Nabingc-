import React from 'react';
import { ChevronRight, TrendingUp, Zap, Radio } from 'lucide-react';
import { MOCK_NEWS, CATEGORIES } from '../data/mockNews';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredNews = MOCK_NEWS.find(news => news.isFeatured) || MOCK_NEWS[0];
  const viralNews = MOCK_NEWS.filter(news => news.category === 'Viral').slice(0, 4);
  const latestNews = MOCK_NEWS.slice(1, 7);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Featured Section */}
      <section className="mb-20">
        <NewsCard article={featuredNews} variant="hero" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Latest News Grid */}
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full" />
                <h2 className="text-3xl font-black tracking-tighter dark:text-white uppercase">Latest Updates</h2>
              </div>
              <Link to="/category/all" className="flex items-center gap-2 text-xs font-black tracking-widest text-black/40 dark:text-white/40 hover:text-primary transition-colors group uppercase">
                View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestNews.map((news) => (
                <NewsCard key={news.id} article={news} />
              ))}
            </div>
          </section>

          {/* Viral/TikTok Section */}
          <section className="bg-black dark:bg-white rounded-[3rem] p-12 text-white dark:text-black overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -mr-48 -mt-48" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Radio className="text-primary animate-pulse" />
                  <h2 className="text-3xl font-black tracking-tighter uppercase italic">Viral Buzz</h2>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-1.5 bg-primary rounded-full" />
                  <div className="w-3 h-1.5 bg-white/20 dark:bg-black/20 rounded-full" />
                  <div className="w-3 h-1.5 bg-white/20 dark:bg-black/20 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {viralNews.length > 0 ? viralNews.map((news) => (
                  <div key={news.id} className="space-y-4 group">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl skew-y-2 group-hover:skew-y-0 transition-all duration-500">
                      <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="font-bold text-sm leading-snug line-clamp-2">{news.title}</h4>
                  </div>
                )) : (
                  <p className="text-white/40 dark:text-black/40 italic">No viral news at the moment...</p>
                )}
              </div>
            </div>
          </section>

          {/* Category Sections */}
          {['Politics', 'Sports', 'Technology'].map((cat) => {
            const catNews = MOCK_NEWS.filter(n => n.category === cat).slice(0, 3);
            if (catNews.length === 0) return null;
            return (
              <section key={cat} className="space-y-8">
                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-4">
                  <h2 className="text-2xl font-black tracking-tighter dark:text-white uppercase">{cat}</h2>
                  <Link to={`/category/${cat.toLowerCase()}`} className="text-xs font-bold text-primary tracking-widest uppercase hover:underline">
                    Explore More
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {catNews.map((news) => (
                    <NewsCard key={news.id} article={news} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
