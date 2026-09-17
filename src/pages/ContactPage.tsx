import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar, 
  Send, 
  CheckCircle2, 
  AlertTriangle,
  Navigation,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: 'General Dermatology Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Gurukrupa Skin Clinic,%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AConcern: ${encodeURIComponent(formData.concern)}%0AMessage: ${encodeURIComponent(formData.message || 'I would like to enquire about consultation.')}`;
    window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-[#0a0c10] text-[#f0f2f5]">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-[#0e1117] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase mb-2 block">
            GET IN TOUCH • संपर्क साधा
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Contact &amp; Clinic Location
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mt-4 font-light">
            We welcome both scheduled appointments and walk-in patients. Reach out directly or visit our modern clinic in Ulwe, Navi Mumbai.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Timings */}
            <div className="lg:col-span-5 space-y-8">
              {/* Address Card */}
              <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
                <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#f4a261]" />
                  Clinic Address &amp; Landmark
                </h3>
                <address className="not-italic text-sm text-neutral-300 leading-relaxed">
                  <strong className="text-white block font-semibold text-base mb-1">
                    Gurukrupa Skin Clinic
                  </strong>
                  Shop No. 20, Siddhivinayak Utopia,<br />
                  Opposite Redcliff School, Sector 20,<br />
                  Ulwe, Wahal, Navi Mumbai,<br />
                  Maharashtra – 410206
                </address>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://maps.google.com/?q=Gurukrupa+Skin+Clinic+Sector+20+Ulwe+Navi+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#1b2332] hover:bg-[#232f44] text-[#f4a261] font-semibold border border-[#2b3950] transition-colors inline-flex items-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Timings & Fee */}
              <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
                <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#f4a261]" />
                  Consultation Timings
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1e2535]">
                    <span className="font-semibold text-white">Monday – Sunday (7 Days)</span>
                    <span className="text-emerald-400 font-bold">Open Daily</span>
                  </div>

                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Morning Consultation:</span>
                    <span className="text-white font-medium">10:30 AM – 02:30 PM</span>
                  </div>

                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Evening Consultation:</span>
                    <span className="text-white font-medium">05:30 PM – 10:00 PM</span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-[#1e2535] text-xs">
                    <span className="text-neutral-400">Consultation Fee:</span>
                    <span className="text-[#f4a261] font-bold">₹500 (Detailed Examination)</span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#121620] hover:bg-[#181e2b] border border-[#222a38] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                      Call Reception
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {CLINIC_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Gurukrupa%20Skin%20Clinic,%20I%20would%20like%20to%20inquire.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#121620] hover:bg-[#181e2b] border border-[#222a38] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      WhatsApp Quick Help
                    </span>
                    <span className="text-sm font-bold text-white">
                      Send a Message Anytime (Replies within hours)
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#121620] hover:bg-[#181e2b] border border-[#222a38] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1b2332] text-neutral-300 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                      Email Communication
                    </span>
                    <span className="text-sm font-medium text-white">
                      {CLINIC_INFO.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Direct Book Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('appointment')}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/90 text-[#0c0e12] font-bold text-sm shadow-xl shadow-[#f4a261]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Go to Appointment Booking Page →</span>
                </button>
              </div>
            </div>

            {/* Right: Interactive Enquiry Form & Map */}
            <div className="lg:col-span-7 space-y-8">
              {/* Form Card */}
              <div className="bg-[#121620] border border-[#222a38] rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#f4a261] tracking-wider uppercase block">
                    PATIENT ENQUIRY FORM
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Have a Skin or Hair Concern?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Fill out the form below or submit directly to our clinic WhatsApp desk.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Enquiry Received Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. The Gurukrupa Skin Clinic coordinator will get in touch with you shortly at <strong className="text-white">{formData.phone}</strong>.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleSendViaWhatsApp}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send to WhatsApp Desk</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-2.5 rounded-xl bg-[#1a2332] text-neutral-300 hover:text-white text-xs font-semibold"
                      >
                        Submit Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          Patient Name <span className="text-[#f4a261]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          Phone Number <span className="text-[#f4a261]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          Primary Concern <span className="text-[#f4a261]">*</span>
                        </label>
                        <select
                          value={formData.concern}
                          onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                        >
                          <option value="Hair Loss & Hair Transplant">Hair Loss &amp; Hair Transplant</option>
                          <option value="PRP & GFC Hair Growth">PRP &amp; GFC Hair Growth</option>
                          <option value="Active Acne & Cystic Pimples">Active Acne &amp; Cystic Pimples</option>
                          <option value="Acne Scars & Subcision">Acne Scars &amp; Subcision</option>
                          <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                          <option value="Melasma & Pigmentation">Melasma &amp; Pigmentation</option>
                          <option value="Medi-HydraFacial & Glow">Medi-HydraFacial &amp; Glow</option>
                          <option value="Chronic Eczema / Psoriasis / Allergy">Chronic Eczema / Psoriasis / Allergy</option>
                          <option value="General Dermatology Inquiry">General Dermatology Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Your Message or Symptoms (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly mention your symptoms, duration, or any previous treatments..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 px-6 rounded-xl bg-[#f4a261] hover:bg-[#f4a261]/90 text-[#0c0e12] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Clinic Enquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendViaWhatsApp}
                        className="py-3.5 px-6 rounded-xl bg-[#16202d] hover:bg-[#1d2a3c] text-emerald-400 border border-emerald-500/30 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Instant WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Map Preview */}
              <div className="bg-[#121620] border border-[#222a38] rounded-2xl overflow-hidden shadow-xl p-3">
                <div className="h-[280px] w-full rounded-xl overflow-hidden relative">
                  <iframe
                    title="Gurukrupa Skin Clinic Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3853112270923!2d73.01633517594954!3d18.97743998220556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39055812e9b%3A0xe406796c9c6ec519!2sSector%2020%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter invert contrast-125 opacity-80"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY DISCLAIMER & INSTRUCTIONS */}
      <section className="py-12 bg-[#0d1016] border-t border-[#1b2230]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#1a1412] border border-amber-500/30 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                Emergency &amp; Acute Care Disclaimer
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Gurukrupa Skin Clinic is an outpatient dermatology &amp; dermatosurgery facility. If you are experiencing sudden severe acute emergencies—such as an anaphylactic allergic reaction, breathing difficulty, swelling of the lips/throat, extensive blistering drug rash (SJS/TEN), or high systemic fever—please report immediately to the nearest tertiary emergency hospital casualty department or call 108/112 emergency medical services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
