import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  Users, 
  Settings, 
  LogOut, 
  Search, 
  MoreVertical, 
  TrendingUp, 
  Eye, 
  MessageSquare,
  Edit,
  Trash2,
  CheckCircle,
  Clock
} from 'lucide-react';
import { MOCK_NEWS, CATEGORIES } from '../data/mockNews';
import { formatDate } from '../lib/utils';
import { motion } from 'motion/react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [newsList, setNewsList] = useState(MOCK_NEWS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (!auth) navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/login');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'posts', label: 'News Posts', icon: FileText },
    { id: 'team', label: 'Editorial Team', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Views', value: '45.2K', ic: Eye, color: 'bg-blue-500' },
    { label: 'News Posts', value: newsList.length.toString(), ic: FileText, color: 'bg-primary' },
    { label: 'Comments', value: '1.2K', ic: MessageSquare, color: 'bg-green-500' },
    { label: 'Trending', value: '8', ic: TrendingUp, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0A0A0A] flex">
      {/* Sidebar */}
      <aside className={`bg-white dark:bg-black border-r border-black/5 dark:border-white/5 transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-20'} hidden lg:flex flex-col h-screen sticky top-0`}>
        <div className="p-8 border-b border-black/5 dark:border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-xl flex-shrink-0" />
          {isSidebarOpen && <span className="font-black text-xl tracking-tighter dark:text-white uppercase">NEB <span className="text-primary italic">Admin</span></span>}
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-black/40 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
              }`}
            >
              <item.icon size={22} />
              {isSidebarOpen && <span className="font-bold text-sm uppercase tracking-widest">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-black/5 dark:border-white/5">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all font-bold text-sm uppercase tracking-widest"
          >
            <LogOut size={22} />
            {isSidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 p-6 sticky top-0 z-40 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black tracking-tight dark:text-white">Editorial Board</h2>
            <div className="h-6 w-[2px] bg-black/10 dark:bg-white/10 hidden md:block" />
            <p className="text-black/40 dark:text-white/40 font-bold text-[10px] uppercase tracking-widest hidden md:block">Welcome back, Admin</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={16} />
              <input 
                type="text" 
                placeholder="Search resources..."
                className="bg-black/5 dark:bg-white/5 border-0 pl-10 pr-4 py-2 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 dark:text-white"
              />
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
              <PlusCircle size={18} /> CREATE NEWS
            </button>
          </div>
        </header>

        <div className="p-8 space-y-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 p-6 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <stat.ic size={24} />
                  </div>
                  <MoreVertical className="text-black/20" size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-black/40 dark:text-white/40 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-3xl font-black dark:text-white">{stat.value}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Table */}
          <section className="bg-white dark:bg-white/5 rounded-[3rem] border border-black/5 dark:border-white/10 overflow-hidden shadow-xl">
            <div className="p-8 border-b border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight dark:text-white italic">Content Pipeline</h3>
                <p className="text-black/40 dark:text-white/40 text-xs font-bold uppercase tracking-widest">Managing {newsList.length} articles</p>
              </div>
              <div className="flex gap-2">
                {['All', 'Published', 'Drafts'].map(filter => (
                  <button key={filter} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === 'All' ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40'}`}>
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-widest">
                    <th className="p-6">Article Detail</th>
                    <th className="p-6">Category</th>
                    <th className="p-6">Status</th>
                    <th className="p-6">Performance</th>
                    <th className="p-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                  {newsList.map((news) => (
                    <tr key={news.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                        <div className="flex gap-4">
                          <img src={news.imageUrl} alt="" className="w-16 h-12 object-cover rounded-xl" />
                          <div>
                            <p className="font-bold text-sm text-black dark:text-white group-hover:text-primary transition-colors line-clamp-1">{news.title}</p>
                            <div className="flex gap-4 mt-1">
                                <span className="text-[10px] text-black/40 font-bold uppercase">{news.author}</span>
                                <span className="text-[10px] text-black/40 font-bold uppercase">{formatDate(news.publishDate)}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">
                          {news.category}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-green-500 font-bold text-xs uppercase tracking-tighter">
                          <CheckCircle size={14} /> Published
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-1 text-[10px] font-bold text-black/40">
                            <Eye size={12} /> {news.views}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-black/40">
                            <MessageSquare size={12} /> {news.comments.length}
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors text-black/20">
                            <Edit size={16} />
                          </button>
                          <button className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors text-black/20">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-black/5 dark:bg-white/5 flex items-center justify-between">
              <p className="text-xs font-bold text-black/40 dark:text-white/40 italic">Showing {newsList.length} of {newsList.length} results</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-black/40 disabled:opacity-30" disabled>
                  ←
                </button>
                <button className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-black/40 disabled:opacity-30" disabled>
                  →
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
