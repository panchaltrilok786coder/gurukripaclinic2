import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Calendar, 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Star,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; highlight?: boolean; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'hair-treatment', label: 'Hair Transplant & PRP', highlight: true, badge: 'Flagship' },
    { id: 'treatments', label: 'All Treatments' },
    { id: 'about', label: 'About Doctors' },
    { id: 'contact', label: 'Contact & Clinic' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-bar with clinic hours and emergency contact */}
      <div className="bg-[#090b0f] text-neutral-400 text-xs border-b border-[#1b2230] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#f4a261]" />
              Mon–Sun: 10:30 AM–2:30 PM & 5:30 PM–10:00 PM
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#f4a261]" />
              Sector 20, Ulwe, Navi Mumbai
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.8</span>
              <span className="text-neutral-400">(51 Google Reviews)</span>
            </div>
            <span className="text-neutral-600">|</span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {CLINIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-40 bg-[#0c0e12]/95 backdrop-blur-md border-b border-[#1f2633] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f4a261] via-[#e76f51] to-[#2a9d8f] p-0.5 shadow-lg shadow-[#f4a261]/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0c0e12] rounded-[10px] flex items-center justify-center">
                  <span className="font-serif font-black text-xl text-white tracking-wider">
                    G
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#f4a261] transition-colors">
                    Gurukrupa
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-medium hidden sm:inline-block">
                    MD Dermatology
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                  <span className="tracking-wider uppercase font-medium">Skin & Hair Clinic</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400">{CLINIC_INFO.nameMarathi}</span>
                </div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'text-white bg-[#1a212d]'
                        : 'text-neutral-300 hover:text-white hover:bg-[#131922]'
                    }`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#f4a261]/20 text-[#f4a261] border border-[#f4a261]/30 font-semibold uppercase tracking-wider">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f4a261] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Gurukrupa%20Skin%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white bg-[#141b24] hover:bg-[#1b2330] border border-[#263143] transition-all flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                WhatsApp
              </a>

              <button
                type="button"
                onClick={() => handleNav('appointment')}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/90 hover:to-[#e76f51]/90 text-[#0c0e12] text-sm font-bold shadow-lg shadow-[#f4a261]/25 hover:shadow-[#f4a261]/40 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>+ Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => handleNav('appointment')}
                className="px-3 py-1.5 rounded-lg bg-[#f4a261] text-[#0c0e12] text-xs font-bold shadow-sm"
              >
                + Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-[#141b24] border border-[#232c3d] text-neutral-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e121a] border-b border-[#232c3d] px-4 pt-3 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1e2636] text-white border border-[#333f54]'
                      : 'text-neutral-300 hover:bg-[#151b26]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f4a261]/20 text-[#f4a261] border border-[#f4a261]/40 font-bold">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#1f2633] grid grid-cols-2 gap-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-2.5 px-3 rounded-xl bg-[#141b24] border border-[#263143] text-xs font-semibold text-neutral-200 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                Call Clinic
              </a>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Dr.%20Mohit%20Giri,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#141b24] border border-[#263143] text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
