import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileActionBarProps {
  onNavigate: (page: PageId) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#0a0c10]/95 backdrop-blur-xl border-t border-[#1e2533] px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 items-center">
        {/* Call button */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#141b24] hover:bg-[#1a2330] border border-[#263143] text-neutral-300 transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-medium tracking-tight">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Gurukrupa%20Skin%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20doctor%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#141b24] hover:bg-[#1a2330] border border-[#263143] text-neutral-300 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-medium tracking-tight">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          type="button"
          onClick={() => onNavigate('appointment')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] text-[#0c0e12] font-bold text-xs shadow-md shadow-[#f4a261]/25 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
