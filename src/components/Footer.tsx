import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, DOCTORS } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Heart,
  ChevronRight,
  CheckCircle2,
  X
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showDoctorLoginModal, setShowDoctorLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginStatus('Checking clinic credentials...');
    setTimeout(() => {
      setLoginStatus('Clinical Portal Demo: Dr. Mohit Giri & Dr. Pooja Giri verified. Access to EMR records is protected by local HIPAA/NABH hospital firewall.');
    }, 1000);
  };

  return (
    <footer className="bg-[#080a0d] border-t border-[#1b2230] text-neutral-400 text-sm pb-24 lg:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#1b2230]">
          {/* Column 1: Clinic Overview & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f4a261] to-[#e76f51] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0c0e12] rounded-[10px] flex items-center justify-center font-serif text-white font-bold text-lg">
                  G
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-[#f4a261] font-medium">
                  {CLINIC_INFO.nameMarathi}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Dr. Mohit Giri (MBBS, MD Dermatology) &amp; Dr. Pooja Giri (MBBS, DNB Dermatology). 
              Providing ethical, evidence-based skin, hair, and laser surgeries in Ulwe, Navi Mumbai with unhurried clinical attention.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#161d29] border border-[#273347] text-neutral-300 font-medium">
                ★ 4.8 Rating (51 Reviews)
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-medium">
                10+ Years Experience
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#201815] border border-[#f4a261]/30 text-[#f4a261] font-medium">
                ₹500 Consultation
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links & Key Treatments */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Specialized Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('hair-treatment')}
                  className="hover:text-[#f4a261] transition-colors flex items-center gap-1.5 text-left text-neutral-300"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#f4a261]" />
                  <span>Hair Transplant &amp; FUE Restoration</span>
                  <span className="text-[10px] bg-[#f4a261]/20 text-[#f4a261] px-1.5 py-0.5 rounded font-bold">
                    Flagship
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('hair-treatment')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span>PRP &amp; GFC Hair Loss Therapy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Acne Scar Subcision &amp; MNRF</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Triple-Wavelength Diode Laser Hair Removal</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Picosecond Melasma &amp; Pigment Toning</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Clinical Medi-HydraFacial &amp; Glow</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinic Hours & Address */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Clinic Timings &amp; Location
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#f4a261] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Mon – Sun (All 7 Days)</div>
                  <div>Morning: 10:30 AM – 02:30 PM</div>
                  <div>Evening: 05:30 PM – 10:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#f4a261] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {CLINIC_INFO.address.full}
                </address>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="text-xs text-[#f4a261] hover:underline font-semibold flex items-center gap-1"
              >
                View Directions &amp; Landmark Map →
              </button>
            </div>
          </div>

          {/* Column 4: Contact & Doctor Portal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Appointments &amp; Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#12161f] border border-[#212938] text-neutral-200 hover:text-white hover:border-[#f4a261]/50 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Direct Call</div>
                  <div className="font-semibold">{CLINIC_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Dr.%20Mohit%20Giri,%20I%20would%20like%20to%20consult.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#12161f] border border-[#212938] text-neutral-200 hover:text-white hover:border-emerald-500/50 transition-all"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">WhatsApp Helpdesk</div>
                  <div className="font-semibold text-emerald-400">Quick Response</div>
                </div>
              </a>

              <button
                type="button"
                onClick={() => setShowDoctorLoginModal(true)}
                className="w-full mt-2 py-2 px-3 rounded-lg bg-[#151c27] hover:bg-[#1e2736] border border-[#263143] text-neutral-400 hover:text-neutral-200 text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Doctor / Staff Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimer Banner */}
        <div className="py-6 border-b border-[#1b2230] text-xs text-neutral-500 leading-relaxed">
          <p className="max-w-4xl">
            <strong className="text-neutral-400">Medical Disclaimer:</strong> The clinical photographs, treatment descriptions, and dermatological information presented on this website are for educational and patient information purposes only. Every individual’s skin and hair biology is unique; diagnosis, candidacy, and procedure outcomes vary. Treatments are prescribed and performed exclusively after in-person clinical examination by Dr. Mohit Giri (MD Dermatology) or Dr. Pooja Giri (DNB Dermatology) under aseptic medical protocols.
          </p>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © 2026 {CLINIC_INFO.name}, Ulwe, Navi Mumbai. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="hover:text-neutral-300 cursor-pointer">Medical Disclaimer</span>
            <span>•</span>
            <span className="hover:text-neutral-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-neutral-300 cursor-pointer">Patient Consent</span>
            <span>•</span>
            <span className="hover:text-neutral-300 cursor-pointer">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>

      {/* Doctor Login Modal */}
      {showDoctorLoginModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121722] border border-[#263245] rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => {
                setShowDoctorLoginModal(false);
                setLoginStatus(null);
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-[#f4a261]">
              <Lock className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">
                Doctor / Clinical Staff Portal
              </h3>
            </div>
            <p className="text-xs text-neutral-400 mb-5">
              Secure authentication for Dr. Mohit Giri &amp; Dr. Pooja Giri to review daily appointments, patient case histories, and laser machine calibration logs.
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Doctor ID / Registered Email
                </label>
                <input
                  type="text"
                  placeholder="dr.mohitgiri@gurukrupa.clinic"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1017] border border-[#232d3d] text-white text-xs focus:border-[#f4a261] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Clinical PIN / Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1017] border border-[#232d3d] text-white text-xs focus:border-[#f4a261] focus:outline-none"
                />
              </div>

              {loginStatus && (
                <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{loginStatus}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#f4a261] hover:bg-[#f4a261]/90 text-[#0c0e12] font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Access Clinical EMR Dashboard
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};
