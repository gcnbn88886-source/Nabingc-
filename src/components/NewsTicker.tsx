import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { MOCK_NEWS } from '../data/mockNews';
import { Link } from 'react-router-dom';

export default function NewsTicker() {
  const breakingNews = MOCK_NEWS.filter(news => news.isBreaking);

  return (
    <div className="bg-primary text-black py-2 overflow-hidden flex items-center relative z-40">
      <div className="px-4 md:px-8 flex items-center gap-2 bg-white h-full relative z-10 skew-x-[-15deg] shadow-lg">
        <Zap size={16} fill="currentColor" className="skew-x-[15deg]" />
        <span className="font-black text-xs uppercase tracking-tighter skew-x-[15deg] whitespace-nowrap">
          BREAKING NEWS
        </span>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-12"
        >
          {breakingNews.concat(breakingNews).map((item, i) => (
            <Link 
              key={`${item.id}-${i}`}
              to={`/article/${item.id}`} 
              className="text-white text-sm font-bold tracking-tight hover:underline flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              {item.title}
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="hidden md:flex px-6 items-center gap-2 text-white/50 bg-primary/20 backdrop-blur-sm self-stretch">
        <span className="text-[10px] font-black uppercase tracking-widest">{new Date().toLocaleDateString('ne-NP')}</span>
      </div>
    </div>
  );
}
