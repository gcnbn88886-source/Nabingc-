import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Eye, Share2, Facebook, Twitter, Instagram, Bookmark, MessageCircle, User, Calendar } from 'lucide-react';
import { MOCK_NEWS } from '../data/mockNews';
import { formatDate } from '../lib/utils';
import Sidebar from '../components/Sidebar';
import NewsCard from '../components/NewsCard';
import { motion } from 'motion/react';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = MOCK_NEWS.find(n => n.id === id);
  const relatedNews = MOCK_NEWS.filter(n => n.id !== id && n.category === article?.category).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 text-center space-y-6">
        <h1 className="text-4xl font-black italic dark:text-white">Article Not Found</h1>
        <Link to="/" className="inline-block bg-primary text-white px-8 py-4 rounded-2xl font-bold">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Header */}
          <header className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full"
            >
              {article.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black leading-tight tracking-tighter dark:text-white"
            >
              {article.title}
            </motion.h1>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-black/5 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/5 dark:bg-white/10 rounded-full flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black dark:text-white uppercase tracking-tight">{article.author}</p>
                  <p className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">Chief Reporter</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-black/40 dark:text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  <Calendar size={14} />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-black/40 dark:text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  <Clock size={14} />
                  <span>{article.readTime} पढ्न लाग्ने</span>
                </div>
              </div>

              <div className="ml-auto flex gap-2">
                <button className="p-3 bg-black/5 dark:bg-white/5 hover:bg-primary hover:text-white rounded-2xl transition-all shadow-sm">
                  <Share2 size={18} />
                </button>
                <button className="p-3 bg-black/5 dark:bg-white/5 hover:bg-primary hover:text-white rounded-2xl transition-all shadow-sm">
                  <Bookmark size={18} />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative"
          >
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
          </motion.div>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-p:text-black/80 dark:prose-p:text-white/80 font-body">
            <div className="text-xl font-bold italic leading-relaxed text-primary/80 border-l-4 border-primary pl-6 mb-10">
              {article.excerpt}
            </div>
            {article.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-6 whitespace-pre-line text-lg md:text-xl">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-10 border-t border-black/5 dark:border-white/10">
            {article.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-black/5 dark:bg-white/5 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-colors cursor-pointer dark:text-white">
                #{tag}
              </span>
            ))}
          </div>

          {/* Comments Section */}
          <section className="bg-black/5 dark:bg-white/5 rounded-[2.5rem] p-10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black tracking-tight dark:text-white flex items-center gap-3">
                <MessageCircle className="text-primary" />
                Comments ({article.comments.length})
              </h3>
            </div>
            
            <div className="space-y-4">
              <textarea 
                placeholder="Share your thoughts..."
                className="w-full bg-white dark:bg-black/50 border border-black/5 dark:border-white/10 p-6 rounded-3xl min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
              />
              <button className="bg-black dark:bg-white text-white dark:text-black font-black px-10 py-4 rounded-2xl active:scale-95 transition-transform shadow-lg ml-auto block">
                Post Comment
              </button>
            </div>

            <div className="space-y-6 pt-6">
              {article.comments.length > 0 ? article.comments.map(comment => (
                <div key={comment.id} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-black uppercase">
                    {comment.user[0]}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-black text-sm dark:text-white">{comment.user}</span>
                      <span className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">{comment.date}</span>
                    </div>
                    <p className="text-sm text-black/70 dark:text-white/70">{comment.text}</p>
                  </div>
                </div>
              )) : (
                <p className="text-center py-10 text-black/40 dark:text-white/40 italic">No comments yet. Be the first to share your thoughts!</p>
              )}
            </div>
          </section>

          {/* Ad Placeholder after content */}
          <div className="w-full aspect-[4/1] bg-black/5 dark:bg-white/5 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-black/10 dark:border-white/10 mb-10">
            <span className="text-[10px] font-bold text-black/20 dark:text-white/20 tracking-widest uppercase">Responsive Advertisement</span>
          </div>

          {/* Related Articles */}
          <section className="space-y-8 pt-10">
            <h3 className="text-2xl font-black tracking-tighter dark:text-white uppercase border-b-2 border-primary pb-2 w-fit">Related Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((news) => (
                <NewsCard key={news.id} article={news} />
              ))}
            </div>
          </section>
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
