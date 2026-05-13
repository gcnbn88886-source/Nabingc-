import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, Bell, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { CATEGORIES } from '../data/mockNews';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5 py-2 shadow-sm" 
          : "bg-white dark:bg-black py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full lg:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-black tracking-tighter leading-none dark:text-white">
                  NEB NEWS <span className="text-primary">HUB</span>
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-bold">
                  PREMIUM NEPALI PORTAL
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <Link
                key={cat}
                to={`/category/${cat.toLowerCase()}`}
                className={cn(
                  "text-sm font-semibold tracking-wide hover:text-primary transition-colors",
                  location.pathname === `/category/${cat.toLowerCase()}` 
                    ? "text-primary" 
                    : "text-black/60 dark:text-white/60"
                )}
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-black/60 dark:text-white/60 transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-black/60 dark:text-white/60 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="hidden sm:flex relative p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-black/60 dark:text-white/60 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-black"></span>
            </button>
            <Link 
              to="/login"
              className="hidden md:flex bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-bold active:scale-95 transition-all"
            >
              Admin Access
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 top-[60px] bg-white dark:bg-black z-40 lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-bold text-black/40 dark:text-white/40 tracking-widest uppercase">Categories</p>
                <div className="grid grid-cols-2 gap-4">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat.toLowerCase()}`}
                      className="flex items-center gap-2 p-3 rounded-2xl bg-black/5 dark:bg-white/5 font-bold hover:bg-primary hover:text-white transition-all transform active:scale-95"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-3xl space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp size={20} />
                  <span className="font-black">TRENDING NOW</span>
                </div>
                <p className="text-sm font-medium dark:text-white">Nepal's New Economic Policy Sparks Debate</p>
              </div>

              <Link 
                to="/login"
                className="block w-full text-center bg-black dark:bg-white text-white dark:text-black p-4 rounded-2xl font-bold"
              >
                Admin Access
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
