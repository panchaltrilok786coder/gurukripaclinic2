import React, { useState } from 'react';
import { PageId } from '../types';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  Filter,
  ShieldCheck,
  Scissors,
  Zap,
  Stethoscope
} from 'lucide-react';

interface TreatmentsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectTreatmentForBooking?: (treatmentId: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ 
  onNavigate, 
  onSelectTreatmentForBooking 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'hair', label: 'Hair & Scalp (Transplant & PRP)' },
    { id: 'medical', label: 'Medical Dermatology' },
    { id: 'aesthetic', label: 'Aesthetic & Laser Surgery' }
  ];

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  const handleBook = (treatmentId: string) => {
    if (onSelectTreatmentForBooking) {
      onSelectTreatmentForBooking(treatmentId);
    }
    onNavigate('appointment');
  };

  return (
    <div className="w-full bg-[#0a0c10] text-[#f0f2f5] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
            CLINICAL CATALOGUE • उपचार सूची
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Evidence-Based Treatments
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 mt-4 font-light">
            Every procedure is planned and supervised directly by board-qualified dermatologists Dr. Mohit Giri and Dr. Pooja Giri using calibrated US-FDA equipment.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#f4a261] text-[#0c0e12] shadow-md font-bold'
                  : 'bg-[#121620] text-neutral-400 hover:text-white border border-[#232c3d]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTreatments.map((treatment) => {
            const isHairFlagship = treatment.id === 'hair-transplant-restoration';

            return (
              <div
                key={treatment.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isHairFlagship
                    ? 'bg-gradient-to-b from-[#181f2b] to-[#121620] border-2 border-[#f4a261] shadow-2xl shadow-[#f4a261]/15'
                    : 'bg-[#121620] border border-[#222a38] hover:border-[#f4a261]/40'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1b2332] text-[#f4a261] border border-[#2b3950] uppercase tracking-wider">
                      {treatment.category === 'hair' ? 'Hair & Scalp' : treatment.category === 'medical' ? 'Medical Dermatology' : 'Laser & Aesthetics'}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {treatment.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {treatment.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#f4a261] font-medium mt-1">
                      {treatment.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1.5 pt-2 border-t border-[#1e2636]">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-2">
                      Key Clinical Benefits:
                    </span>
                    {treatment.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For & Downtime */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                    <span>
                      <strong className="text-neutral-300">Downtime:</strong> {treatment.downtime}
                    </span>
                    <span>•</span>
                    <span>
                      <strong className="text-neutral-300">Sessions:</strong> {treatment.recommendedSessions}
                    </span>
                  </div>
                </div>

                {/* Footer / CTA */}
                <div className="pt-6 border-t border-[#1e2636] mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-neutral-400 block">Starting from</span>
                    <span className="text-2xl font-bold text-white font-serif">
                      ₹{treatment.priceStarting.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-neutral-400"> / session</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {isHairFlagship ? (
                      <button
                        type="button"
                        onClick={() => onNavigate('hair-treatment')}
                        className="px-4 py-2.5 rounded-xl bg-[#1d2737] hover:bg-[#253247] text-[#f4a261] text-xs font-bold border border-[#f4a261]/40 transition-colors"
                      >
                        Detailed Guide →
                      </button>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => handleBook(treatment.id)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/90 text-[#0c0e12] font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
