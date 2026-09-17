import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

// Pages
import { HomePage } from './pages/HomePage';
import { HairTreatmentPage } from './pages/HairTreatmentPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { TreatmentsPage } from './pages/TreatmentsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState<string | undefined>(undefined);

  // Sync with browser URL hash for real multi-page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: PageId[] = ['home', 'hair-treatment', 'about', 'contact', 'appointment', 'treatments'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `/${page === 'home' ? '' : page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTreatmentForBooking = (treatmentId: string) => {
    setPreselectedTreatmentId(treatmentId);
    navigateTo('appointment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c10] text-[#f0f2f5] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Dynamic SEO Head Manager */}
      <SEOHead page={currentPage} />

      {/* Main Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Multi-Page Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={navigateTo} 
            onSelectTreatmentForBooking={handleSelectTreatmentForBooking} 
          />
        )}

        {currentPage === 'hair-treatment' && (
          <HairTreatmentPage 
            onNavigate={navigateTo} 
            onSelectTreatmentForBooking={handleSelectTreatmentForBooking} 
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}

        {currentPage === 'appointment' && (
          <AppointmentPage 
            onNavigate={navigateTo} 
            preselectedTreatmentId={preselectedTreatmentId} 
          />
        )}

        {currentPage === 'treatments' && (
          <TreatmentsPage 
            onNavigate={navigateTo} 
            onSelectTreatmentForBooking={handleSelectTreatmentForBooking} 
          />
        )}
      </main>

      {/* Global Clinical Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Floating Quick Action Bar matching PDF */}
      <MobileActionBar onNavigate={navigateTo} />
    </div>
  );
}
