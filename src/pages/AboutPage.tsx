import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, DOCTORS, EQUIPMENT_LIST } from '../data/clinicData';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Heart, 
  Users, 
  Building2, 
  Microscope,
  Stethoscope
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const clinicFacilities = [
    {
      title: 'Consultation & Trichoscopy Suite',
      desc: 'Comfortable, private evaluation room equipped with polarized digital dermatoscope for detailed scalp and epidermal inspection.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Sterile Minor Dermato-Surgical OT',
      desc: 'Aseptic environment with medical-grade HEPA air filtration designed specifically for sapphire FUE hair transplants, subcision, and biopsy procedures.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Aesthetic Laser & Medi-Facial Lounge',
      desc: 'Dedicated suites housing our triple-wavelength Sparsh diode laser, picosecond pigment system, and clinical 14-in-1 hydrodynamic Medi-HydraFacial workstation.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full bg-[#0a0c10] text-[#f0f2f5]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-[#0e1117] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
            ABOUT GURUKRUPA SKIN CLINIC • ULWE
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Clinical Precision. Compassionate Dermatology.
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mt-4 font-light">
            Founded with a steadfast commitment to medical ethics, thorough patient examination, and gold-standard laser technology in Navi Mumbai.
          </p>
        </div>
      </section>

      {/* DOCTORS SHOWCASE (Dr. Mohit Giri & Dr. Pooja Giri) */}
      <section className="py-20 border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              MEET YOUR DERMATOLOGISTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Board-Qualified Clinical Leaders
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Holding postgraduate medical qualifications from premier government institutes with MMC registration.
            </p>
          </div>

          <div className="space-y-16">
            {DOCTORS.map((doc, idx) => (
              <div
                key={doc.id}
                className="bg-[#121620] border border-[#222a38] rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image Col */}
                <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto border-2 border-[#2b374d]">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-bold text-[#f4a261] uppercase tracking-wider block">
                        {doc.experienceYears}+ Years Clinical Practice
                      </span>
                      <span className="text-xs text-neutral-300 font-mono">
                        Reg: {doc.registrationNo}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Col */}
                <div className={`lg:col-span-8 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                        {doc.name}
                      </h3>
                      {doc.nameMarathi && (
                        <span className="text-sm text-[#f4a261] font-medium hidden sm:inline-block">
                          {doc.nameMarathi}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#f4a261] mt-1">
                      {doc.qualifications}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {doc.title} • {doc.specialization}
                    </p>
                  </div>

                  {/* Doctor quote */}
                  <div className="p-4 rounded-xl bg-[#0d1017] border-l-4 border-[#f4a261] text-sm italic text-neutral-200 font-serif">
                    "{doc.quote}"
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Clinical Focus Areas */}
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Microscope className="w-4 h-4 text-[#f4a261]" />
                      Clinical &amp; Surgical Focus Areas:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {doc.focusAreas.map((area, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 bg-[#0c1017] p-2.5 rounded-lg border border-[#1f2838]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Credentials */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#f4a261]" />
                      Education &amp; Memberships:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-400">
                      {doc.education.map((edu, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#f4a261] font-bold">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINIC PHILOSOPHY & ETHICAL APPROACH */}
      <section className="py-20 bg-[#0e1117] border-b border-[#1b2230]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              OUR CLINICAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              The Gurukrupa Philosophy
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Why our approach is fundamentally different from commercial chain clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#121620] border border-[#212938] rounded-2xl p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1d2535] text-[#f4a261] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                Unhurried 25-Minute Consultations
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We reject the 5-minute rush visit model. Dr. Giri spends dedicated time listening to your medical history, examining your skin with dermoscopy, and explaining the "why" behind every recommendation.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#212938] rounded-2xl p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1d2535] text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                Zero Aggressive Sales Tactics
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                You will never be pressured into unnecessary packages, expensive retail creams, or procedures you do not medically require. We present options with clear clinical justification and honest expectations.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#212938] rounded-2xl p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1d2535] text-sky-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                Strict Medical Asepsis
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Autoclaved surgical instruments, disposable single-use micro-punches for hair transplants, sterile surgical drapes, and hospital-grade sanitization protocols for absolute patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC PHOTOGRAPHS & FACILITIES */}
      <section className="py-20 border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              THE ENVIRONMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Modern Clinical Facilities
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Designed around patient comfort, clinical efficiency, and absolute privacy in Ulwe Sector 20.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicFacilities.map((facility, idx) => (
              <div
                key={idx}
                className="bg-[#121620] border border-[#222a38] rounded-2xl overflow-hidden hover:border-[#f4a261]/40 transition-all shadow-xl"
              >
                <div className="h-56 relative overflow-hidden bg-black">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-base font-serif font-bold text-white">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0a0c10] to-[#141822]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Ready for a Genuine, Plain-Language Consultation?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Experience clinical dermatology the way it should be. Meet Dr. Mohit Giri or Dr. Pooja Giri at Gurukrupa Skin Clinic in Ulwe.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('appointment')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/90 text-[#0c0e12] font-bold text-sm shadow-xl shadow-[#f4a261]/25 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Doctor Visit (₹500)</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-xl bg-[#141b25] hover:bg-[#1a2331] text-neutral-200 border border-[#273447] text-sm font-semibold transition-all"
            >
              View Clinic Map &amp; Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
