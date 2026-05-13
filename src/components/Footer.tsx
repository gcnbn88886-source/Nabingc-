import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { CATEGORIES } from '../data/mockNews';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter leading-none text-white">
                  NEB NEWS <span className="text-primary">HUB</span>
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                  PREMIUM NEPALI PORTAL
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              NEB News Hub is Nepal's leading premium news portal dedicated to providing accurate, unbiased, and fast news updates from around the globe.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Contact Us', 'Editorial Team', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white/60 hover:text-primary transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Categories</h3>
            <ul className="grid grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link to={`/category/${cat.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-sm">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <span>+977 1 4567890</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <span>info@nebnewshub.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <span>Kamalpokhari, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs">
            © 2026 NEB News Hub. All rights reserved. Designed with ❤️ in Nepal.
          </p>
          <div className="flex gap-8 text-white/40 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Advertise</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Archive</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
