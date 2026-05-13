import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsTicker from './NewsTicker';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <div className="pt-[72px] lg:pt-[88px]">
        <NewsTicker />
        <main className="min-h-[calc(100vh-400px)]">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
