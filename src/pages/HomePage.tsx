import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, DOCTORS, TREATMENTS, CLINICAL_CASES, EQUIPMENT_LIST, TESTIMONIALS, FAQS } from '../data/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { 
  Calendar, 
  Phone, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Users, 
  Zap, 
  ArrowRight,
  Plus,
  Minus,
  Microscope,
  Stethoscope,
  Scissors
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectTreatmentForBooking?: (treatmentId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectTreatmentForBooking }) => {
  // Hero slide index
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    {
      title: 'Skin, hair & confidence.',
      subtitle: 'Dr. Mohit Giri, MBBS MD — Dermatologist & Surgeon in Ulwe',
      caption: 'डॉ. मोहित गिरी · त्वचारोग तज्ञ',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
      ctaText: 'Book Consultation',
      badge: 'Board-Certified Care'
    },
    {
      title: 'Skin that speaks for itself.',
      subtitle: 'Real clinical protocols. Documented before & after results without aggressive upselling.',
      caption: '4.8 ★ · 51 Verified Google Reviews',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop',
      ctaText: 'See Clinical Results',
      badge: 'Verified Dermatology'
    },
    {
      title: 'A clinic built around you.',
      subtitle: 'Calm, unhurried consultations with plain-language answers and compassionate guidance.',
      caption: 'Sector 20, Ulwe, Navi Mumbai',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop',
      ctaText: 'Visit The Clinic',
      badge: 'Unhurried Appointments'
    }
  ];

  // Case gallery active category filter
  const [selectedCaseCategory, setSelectedCaseCategory] = useState<string>('All');
  const caseCategories = ['All', 'Acne & Scars', 'Pigmentation & Laser', 'Texture & Pores', 'Hair & Scalp'];

  const filteredCases = selectedCaseCategory === 'All'
    ? CLINICAL_CASES
    : CLINICAL_CASES.filter((c) => c.category === selectedCaseCategory);

  // Active FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const handleBookTreatment = (treatmentId: string) => {
    if (onSelectTreatmentForBooking) {
      onSelectTreatmentForBooking(treatmentId);
    }
    onNavigate('appointment');
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] lg:min-h-[720px] flex items-center bg-[#0a0c10] overflow-hidden border-b border-[#1b2230]">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[heroSlide].image}
            alt="Gurukrupa Skin Clinic"
            className="w-full h-full object-cover opacity-25 filter brightness-75 transition-all duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl space-y-6">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171e2b]/90 border border-[#2c394e] text-xs font-semibold text-neutral-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#f4a261]" />
              <span>GURUKRUPA SKIN CLINIC • ULWE, NAVI MUMBAI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              {heroSlides[heroSlide].title}
            </h1>

            {/* Marathi Title & Subheading */}
            <div className="space-y-2">
              <p className="text-[#f4a261] font-medium text-sm sm:text-base">
                {heroSlides[heroSlide].caption}
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl font-light">
                {heroSlides[heroSlide].subtitle}
              </p>
            </div>

            {/* Trust Badges & Rating */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b25] border border-[#253246] text-xs font-bold text-white">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.8 ★</span>
                <span className="text-neutral-400 font-normal">(51 Google Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b25] border border-[#253246] text-xs text-neutral-300">
                <Award className="w-4 h-4 text-[#f4a261]" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent ₹500 Consultation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('appointment')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/95 hover:to-[#e76f51]/95 text-[#0c0e12] font-bold text-sm shadow-xl shadow-[#f4a261]/25 hover:shadow-[#f4a261]/40 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment →</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('hair-treatment')}
                className="px-6 py-3.5 rounded-xl bg-[#141c27] hover:bg-[#1a2433] text-neutral-200 hover:text-white font-semibold text-sm border border-[#2c3a50] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Scissors className="w-4 h-4 text-[#f4a261]" />
                <span>Hair Restoration &amp; Transplant</span>
              </button>
            </div>
          </div>

          {/* Hero Slide Dots */}
          <div className="mt-12 flex items-center gap-3">
            {heroSlides.map((slide, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setHeroSlide(idx)}
                className={`transition-all duration-300 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono ${
                  heroSlide === idx
                    ? 'bg-[#f4a261] text-[#0c0e12] font-bold shadow-md'
                    : 'bg-[#151c27] text-neutral-400 hover:text-white'
                }`}
              >
                <span>0{idx + 1}</span>
                {heroSlide === idx && <span className="text-[10px] uppercase font-sans font-bold">{slide.badge}</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THREE CORE CLINICAL SPECIALTIES */}
      <section className="py-20 bg-[#0e1117] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
              COMPREHENSIVE DERMATOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Clinical Excellence in Skin, Hair &amp; Laser
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-3">
              Specialized protocols designed by board-qualified dermatologists for safety, efficacy, and lasting biological health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Medical Dermatology */}
            <div className="bg-[#121620] border border-[#212938] rounded-2xl p-7 flex flex-col justify-between hover:border-[#f4a261]/50 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1d2432] border border-[#2f3b4f] flex items-center justify-center text-[#f4a261]">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#f4a261] tracking-wider uppercase">
                    वैद्यकीय त्वचाविज्ञान
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#f4a261] transition-colors">
                    Medical Dermatology
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Comprehensive clinical diagnosis for persistent skin, hair, and nail conditions using dermoscopy and evidence-based medicine.
                </p>
                <ul className="space-y-2 text-xs text-neutral-300 pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261]" />
                    <span>Severe Acne, Cystic Pimples &amp; Rosacea</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261]" />
                    <span>Eczema, Psoriasis &amp; Atopic Dermatitis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261]" />
                    <span>Fungal, Bacterial &amp; Viral Infections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261]" />
                    <span>Wart, Mole &amp; Skin Tag Radio-frequency Removal</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#1e2636] mt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="text-xs font-bold text-[#f4a261] hover:text-[#f4a261]/80 flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Medical Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Aesthetic & Laser Dermatology */}
            <div className="bg-[#121620] border border-[#212938] rounded-2xl p-7 flex flex-col justify-between hover:border-[#f4a261]/50 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1d2432] border border-[#2f3b4f] flex items-center justify-center text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase">
                    लेझर आणि सौंदर्यशास्त्र
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Aesthetic &amp; Laser Care
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  US-FDA approved laser therapies and medical skin refining to correct pigmentation, smooth deep scars, and restore radiance.
                </p>
                <ul className="space-y-2 text-xs text-neutral-300 pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Painless Triple-Wavelength Diode Laser Hair Removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Picosecond Acoustic Melasma &amp; Pigment Toning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Microneedling RF (MNRF) &amp; Subcision for Scars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Clinical 14-in-1 Medi-HydraFacial Dermal Infusion</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#1e2636] mt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Laser Procedures</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Hair Restoration (FLAGSHIP HIGHLIGHT) */}
            <div className="bg-gradient-to-b from-[#181d29] to-[#121620] border-2 border-[#f4a261]/60 rounded-2xl p-7 flex flex-col justify-between shadow-xl shadow-[#f4a261]/10 hover:border-[#f4a261] transition-all group relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#f4a261] text-[#0c0e12] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow-sm">
                FLAGSHIP
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#2b221a] border border-[#f4a261]/40 flex items-center justify-center text-[#f4a261]">
                  <Scissors className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#f4a261] tracking-wider uppercase">
                    केसांचे उपचार व प्रत्यारोपण
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#f4a261] transition-colors">
                    Hair Restoration &amp; Transplant
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Doctor-supervised microscopic FUE Hair Transplantation, GFC growth factor concentrate, and PRP to stop hair fall and regrow natural density.
                </p>
                <ul className="space-y-2 text-xs text-neutral-200 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f4a261] shrink-0" />
                    <span>Micro-Sapphire Blade FUE Hair Transplant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f4a261] shrink-0" />
                    <span>Autologous PRP &amp; GFC Growth Factor Therapy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f4a261] shrink-0" />
                    <span>Computerized Tricho-Dermoscopy &amp; Scalp Health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f4a261] shrink-0" />
                    <span>Natural Hairline Design &amp; Lifelong Graft Survival</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#2d3749] mt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('hair-treatment')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#f4a261] hover:bg-[#f4a261]/90 text-[#0c0e12] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Detailed Hair Transplant Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROMINENT HAIR TREATMENT CARD BANNER */}
      <section className="py-12 bg-gradient-to-r from-[#171412] via-[#1f1a16] to-[#121620] border-b border-[#2b221a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#151922] border border-[#f4a261]/40 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-[#f4a261]/20 text-[#f4a261] font-bold border border-[#f4a261]/30 uppercase tracking-wider">
                  CLINICAL PROTOTYPE SHOWCASE
                </span>
                <span className="text-xs text-neutral-400">Dr. Mohit Giri (MD Dermatology)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Hair Restoration &amp; FUE Hair Transplant — Dedicated Treatment Blueprint
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Explore our comprehensive treatment guide covering causes of alopecia, candidate check, sapphire FUE procedure breakdown, month-by-month recovery timeline, and real clinical before &amp; after cases.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
                <span className="bg-[#0e121a] px-3 py-1.5 rounded-lg border border-[#242f40]">
                  Graft Survival: 98%+
                </span>
                <span className="bg-[#0e121a] px-3 py-1.5 rounded-lg border border-[#242f40]">
                  Technique: Micro-Sapphire FUE
                </span>
                <span className="bg-[#0e121a] px-3 py-1.5 rounded-lg border border-[#242f40]">
                  Recovery: 3 - 5 Days
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('hair-treatment')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#f4a261] hover:bg-[#f4a261]/90 text-[#0c0e12] font-bold text-sm shadow-xl shadow-[#f4a261]/20 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Read Full Hair Treatment Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED TREATMENTS & PRICING (From PDF screenshots) */}
      <section className="py-20 bg-[#0a0c10] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
                SPECIALIZED TREATMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Targeted Clinical Procedures
              </h2>
              <p className="text-sm text-neutral-400 mt-2">
                Transparent starting pricing per session with no hidden consumables fee.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('treatments')}
              className="text-xs font-bold text-[#f4a261] hover:text-[#f4a261]/80 flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>View Complete Treatment Menu ({TREATMENTS.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-[#11151e] border border-[#202837] rounded-2xl p-6 flex flex-col justify-between hover:border-[#f4a261]/40 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#1b2332] text-[#f4a261] border border-[#2b3950]">
                      {treatment.category}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {treatment.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#f4a261] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {treatment.tagline}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Recommended</div>
                    <div className="text-xs text-neutral-300 font-medium">{treatment.recommendedSessions}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1b2330] mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-500 block">From</span>
                    <span className="text-lg font-bold text-white">
                      ₹{treatment.priceStarting.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-neutral-400"> / session</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {treatment.id === 'hair-transplant-restoration' ? (
                      <button
                        type="button"
                        onClick={() => onNavigate('hair-treatment')}
                        className="px-3 py-1.5 rounded-lg bg-[#192231] hover:bg-[#202b3d] text-[#f4a261] text-xs font-semibold border border-[#2b3b53] transition-colors"
                      >
                        Clinical Details &gt;
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNavigate('treatments')}
                        className="px-3 py-1.5 rounded-lg bg-[#192231] hover:bg-[#202b3d] text-neutral-300 text-xs font-semibold border border-[#2b3b53] transition-colors"
                      >
                        Clinical Details &gt;
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleBookTreatment(treatment.id)}
                      className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/90 hover:to-[#e76f51]/90 text-[#0c0e12] font-bold text-xs shadow transition-all cursor-pointer"
                    >
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "WHY PATIENTS CHOOSE US" & DOCTOR QUOTE (From PDF pages 31-32, 59) */}
      <section className="py-20 bg-[#0e1117] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Dr Quote & Credential */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block">
                WHY PATIENTS CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Precision care. Honest advice.
              </h2>

              {/* Quote Card (PDF Page 59 quote) */}
              <div className="bg-[#141822] border-l-4 border-[#f4a261] rounded-2xl p-6 sm:p-7 shadow-xl">
                <span className="text-3xl font-serif text-[#f4a261] leading-none block mb-2 font-black">
                  “
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-neutral-200 leading-relaxed">
                  Good skin work needs time. I'd rather listen carefully than rush you through three appointments.
                </p>
                <div className="mt-4 pt-4 border-t border-[#232c3d] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Dr. Mohit Giri</h4>
                    <p className="text-xs text-neutral-400">MBBS, MD Dermatology, Venereology &amp; Leprosy</p>
                  </div>
                  <span className="text-xs text-[#f4a261] font-mono font-medium">Ulwe Clinic</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn more about Dr. Mohit Giri &amp; Dr. Pooja Giri</span>
                  <ArrowRight className="w-4 h-4 text-[#f4a261]" />
                </button>
              </div>
            </div>

            {/* Right: Key Trust Pillars from PDF */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#121620] border border-[#222a3a] rounded-2xl p-6">
                <div className="text-3xl font-serif font-bold text-amber-400 mb-1">
                  4.8★
                </div>
                <div className="text-sm font-bold text-white">51 Google Reviews</div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Verified local patients in Ulwe and Navi Mumbai praising thorough diagnosis and gentle touch.
                </p>
              </div>

              <div className="bg-[#121620] border border-[#222a3a] rounded-2xl p-6">
                <div className="text-3xl font-serif font-bold text-[#f4a261] mb-1">
                  10+
                </div>
                <div className="text-sm font-bold text-white">Years of Clinical Experience</div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Decade of institutional hospital training and thousands of completed clinical procedures.
                </p>
              </div>

              <div className="bg-[#121620] border border-[#222a3a] rounded-2xl p-6">
                <div className="text-2xl font-serif font-bold text-emerald-400 mb-1">
                  MBBS MD
                </div>
                <div className="text-sm font-bold text-white">Board-Qualified Dermatologists</div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Formal post-graduate MD and DNB credentials, not salon cosmetologists or uncertified practitioners.
                </p>
              </div>

              <div className="bg-[#121620] border border-[#222a3a] rounded-2xl p-6">
                <div className="text-2xl font-serif font-bold text-sky-400 mb-1">
                  ₹500
                </div>
                <div className="text-sm font-bold text-white">Transparent Consultation</div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Clear, honest pricing with zero pressure to buy unwanted packages or luxury retail lines.
                </p>
              </div>

              <div className="bg-[#121620] border border-[#222a3a] rounded-2xl p-6 sm:col-span-2">
                <div className="flex items-center gap-2 mb-2 text-[#f4a261]">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="text-sm font-bold text-white">Evidence-Based Medicine Only</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every treatment at Gurukrupa Skin Clinic is backed by clinical dermatology consensus and gold-standard US-FDA technologies. We do not promote unscientific fads or quick-fix miracles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL WORK / CLINICAL BEFORE & AFTER RESULTS (Pages 1-17, 30 of PDF) */}
      <section className="py-20 bg-[#0a0c10] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
              VERIFIED CLINICAL ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Real work. Real results.
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Explore verified before &amp; after clinical treatment results achieved under Dr. Mohit Giri’s direct protocol.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {caseCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCaseCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCaseCategory === cat
                    ? 'bg-[#f4a261] text-[#0c0e12] shadow-md font-bold'
                    : 'bg-[#141a24] text-neutral-400 hover:text-white border border-[#242e3f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid with Interactive Before/After Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((clinicalCase) => (
              <BeforeAfterSlider key={clinicalCase.id} clinicalCase={clinicalCase} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-neutral-500 max-w-xl mx-auto mb-4">
              * Note: Individual clinical responses vary based on dermal histology, hormonal baseline, compliance, and severity. Photographs taken under standardized clinical illumination.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('appointment')}
              className="px-6 py-3 rounded-xl bg-[#171f2b] hover:bg-[#202a3a] border border-[#2f3d54] text-neutral-200 text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#f4a261]" />
              <span>Discuss Your Specific Skin or Hair Concern With Doctor</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. THE MACHINES BEHIND THE RESULTS (Equipment Showcase, PDF pages 50-58, 62) */}
      <section className="py-20 bg-[#0e1117] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
              CLINICALLY PROVEN TECHNOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              The Machines Behind The Results
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Advanced US-FDA approved laser, hydrodynamic, and radiofrequency workstations calibrated specifically for Indian skin phototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EQUIPMENT_LIST.map((item) => (
              <div
                key={item.id}
                className="bg-[#121620] border border-[#222a38] rounded-2xl overflow-hidden hover:border-[#f4a261]/40 transition-all flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-56 sm:h-auto relative bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-85"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#0c0e12]/80 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded border border-[#f4a261]/30">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#f4a261] font-medium mt-1">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-neutral-300 pt-2 border-t border-[#1d2533]">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (PDF pages 28-29, 36) */}
      <section className="py-20 bg-[#0a0c10] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
              PATIENTS SAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              4.8★ · 51 Google Reviews
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Honest impressions from verified patients treated at Gurukrupa Skin Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#121620] border border-[#202837] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1f2635] mt-5">
                  <h4 className="text-sm font-bold text-white">
                    {t.patientName}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-0.5">
                    <span>{t.treatmentType}</span>
                    <span className="text-emerald-400 font-medium">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (PDF pages 20-22) */}
      <section className="py-20 bg-[#0e1117] border-b border-[#1b2230]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
              SKIN CARE FAQS • वारंवार विचारले जाणारे प्रश्न
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Clear, transparent answers about dermatological treatments, laser safety, consultation hours, and aftercare.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-[#141924] border-[#f4a261]/50'
                      : 'bg-[#11141c] border-[#222a38] hover:border-[#2f3a4e]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#1c2331] flex items-center justify-center shrink-0 text-neutral-300">
                      {isOpen ? <Minus className="w-4 h-4 text-[#f4a261]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#1f2633] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp Direct Help question box from PDF Page 20 */}
          <div className="mt-10 p-6 rounded-2xl bg-[#141a24] border border-[#253245] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific skin or hair question?</h4>
              <p className="text-xs text-neutral-400 mt-1">
                Ask Dr. Mohit Giri directly on WhatsApp for personalized clinical guidance.
              </p>
            </div>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Dr.%20Mohit%20Giri,%20I%20have%20a%20specific%20skin/hair%20question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. CLINIC LOCATION & DIRECT TIMINGS (PDF pages 23-27) */}
      <section className="py-20 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Info */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block">
                VISIT US • क्लिनिक कसे पोहचावे
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Find the Clinic in Ulwe
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Conveniently located in Sector 20, Ulwe, opposite Redcliff School. Fully sanitized clinical suites, modern diagnostic dermatoscope, and dedicated procedure rooms.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 bg-[#121620] p-6 rounded-2xl border border-[#212938]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f4a261] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Clinic Address:</strong>
                    {CLINIC_INFO.address.full}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#1f2635]">
                  <Clock className="w-5 h-5 text-[#f4a261] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Doctor Consultation Hours:</strong>
                    <div>Morning: 10:30 AM – 02:30 PM (Mon – Sun)</div>
                    <div>Evening: 05:30 PM – 10:00 PM (Mon – Sun)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#1f2635]">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Reception Desk:</strong>
                    <div>{CLINIC_INFO.phoneDisplay} · Instant WhatsApp Support</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-[#f4a261] hover:bg-[#f4a261]/90 text-[#0c0e12] font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('appointment')}
                  className="px-6 py-3 rounded-xl bg-[#141b25] hover:bg-[#1a2331] text-white font-semibold text-xs border border-[#273447] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#f4a261]" />
                  <span>Book Slot Online</span>
                </button>
              </div>
            </div>

            {/* Map Card Mock matching PDF Page 23 */}
            <div className="bg-[#121620] border border-[#212938] rounded-2xl overflow-hidden p-3 shadow-2xl">
              <div className="relative h-[340px] sm:h-[400px] w-full rounded-xl overflow-hidden bg-[#18202c]">
                {/* Visual map preview */}
                <iframe
                  title="Gurukrupa Skin Clinic Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3853112270923!2d73.01633517594954!3d18.97743998220556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39055812e9b%3A0xe406796c9c6ec519!2sSector%2020%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-80"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0c1017]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#222d3d] flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">Dr. Mohit Giri, Gurukrupa Skin Clinic</h4>
                    <p className="text-[11px] text-neutral-400">MBBS MD Dermatology · Ulwe Sector 20</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sector+20+Ulwe+Navi+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#f4a261] hover:underline"
                  >
                    Open Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
