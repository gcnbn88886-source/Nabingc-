import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login
    if (email === 'admin@neb.com' && password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Hint: admin@neb.com / admin123');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white dark:bg-white/5 p-10 rounded-[3rem] shadow-2xl border border-black/5 dark:border-white/10 space-y-10"
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-[2rem] flex items-center justify-center text-white mx-auto shadow-2xl shadow-primary/40 rotate-3">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl font-black tracking-tighter dark:text-white uppercase">Admin <span className="text-primary italic">Portal</span></h1>
          <p className="text-black/40 dark:text-white/40 text-sm font-bold tracking-widest uppercase">Authorized Access Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-xs font-bold text-center italic">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={20} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin Email"
                className="w-full bg-black/5 dark:bg-black/50 border border-black/5 dark:border-white/10 pl-14 pr-6 py-4 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-black/5 dark:bg-black/50 border border-black/5 dark:border-white/10 pl-14 pr-6 py-4 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
                required
              />
            </div>
          </div>

          <button className="w-full bg-black dark:bg-white text-white dark:text-black font-black p-5 rounded-[1.5rem] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl group">
            LOGIN TO DASHBOARD
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-center text-[10px] font-bold text-black/20 dark:text-white/20 uppercase tracking-[0.2em]">
          Powered by NEB Security Cloud
        </p>
      </motion.div>
    </div>
  );
}
