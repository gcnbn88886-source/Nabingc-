import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_NEWS, CATEGORIES } from '../data/mockNews';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { motion } from 'motion/react';
import { Search, Filter, Grid, List as ListIcon } from 'lucide-react';

export default function CategoryPage() {
  const { category } = useParams();
  const isAll = category === 'all';
  const categoryName = isAll ? 'All News' : category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  const filteredNews = isAll 
    ? MOCK_NEWS 
    : MOCK_NEWS.filter(n => n.category.toLowerCase() === category?.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Category Header */}
      <div className="relative rounded-[3rem] overflow-hidden bg-black text-white p-12 md:p-20 mb-12">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] -mr-40" />
        <div className="relative z-10 space-y-6">
          <span className="text-xs font-black tracking-[0.3em] uppercase text-primary">Discover</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">{categoryName}</h1>
          <p className="text-white/60 max-w-xl text-lg font-medium">
            Explore the latest {categoryName} updates, in-depth reports, and breaking stories from across the nation and beyond.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40" size={18} />
              <input 
                type="text" 
                placeholder={`Search in ${categoryName}...`}
                className="w-full bg-white dark:bg-black/50 border border-black/5 dark:border-white/10 pl-12 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-black/50 rounded-2xl text-sm font-bold shadow-sm border border-black/5 dark:border-white/10 dark:text-white">
                <Filter size={16} /> Latest
              </button>
              <div className="flex bg-black/5 dark:bg-white/10 p-1 rounded-2xl">
                <button className="p-2 bg-white dark:bg-white/20 rounded-xl shadow-sm text-primary">
                  <Grid size={18} />
                </button>
                <button className="p-2 text-black/40 dark:text-white/40">
                  <ListIcon size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.length > 0 ? filteredNews.map((news) => (
              <NewsCard key={news.id} article={news} />
            )) : (
              <div className="md:col-span-2 py-40 text-center space-y-4">
                <p className="text-6xl italic grayscale opacity-20">No News Found</p>
                <p className="text-black/40 dark:text-white/40 font-medium">Try jumping to a different category</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <div className="flex justify-center gap-2 pt-10">
              <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-black text-white font-black shadow-lg shadow-black/20">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 font-black hover:bg-primary hover:text-white transition-all dark:text-white">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 font-black hover:bg-primary hover:text-white transition-all dark:text-white">3</button>
            </div>
          )}
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
