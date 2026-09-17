import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, DOCTORS, TREATMENTS } from '../data/clinicData';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  Star, 
  ChevronRight, 
  Sparkles, 
  Download,
  Share2,
  CalendarDays,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface AppointmentPageProps {
  onNavigate: (page: PageId) => void;
  preselectedTreatmentId?: string;
}

export const AppointmentPage: React.FC<AppointmentPageProps> = ({ 
  onNavigate, 
  preselectedTreatmentId 
}) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Get next 7 days dates starting today
  const today = new Date();
  const currentDayName = daysOfWeek[(today.getDay() + 6) % 7];

  const [selectedDay, setSelectedDay] = useState<string>(currentDayName);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM');
  
  // Form fields
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [treatmentId, setTreatmentId] = useState<string>(preselectedTreatmentId || 'hair-transplant-restoration');
  const [doctorPreference, setDoctorPreference] = useState<string>('dr-mohit-giri');
  const [message, setMessage] = useState('');

  // Confirmation state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentToken, setAppointmentToken] = useState('');

  useEffect(() => {
    if (preselectedTreatmentId) {
      setTreatmentId(preselectedTreatmentId);
    }
  }, [preselectedTreatmentId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `GK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppointmentToken(token);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedDoctorObj = DOCTORS.find(d => d.id === doctorPreference) || DOCTORS[0];
  const selectedTreatmentObj = TREATMENTS.find(t => t.id === treatmentId);

  const handleWhatsAppConfirm = () => {
    const text = `Hello Gurukrupa Skin Clinic!%0A%0A*Appointment Request Confirmation*%0A• Token: ${appointmentToken}%0A• Patient Name: ${encodeURIComponent(patientName)}%0A• Phone: ${encodeURIComponent(phoneNumber)}%0A• Doctor: ${encodeURIComponent(selectedDoctorObj.name)}%0A• Treatment/Concern: ${encodeURIComponent(selectedTreatmentObj?.name || treatmentId)}%0A• Day & Slot: ${selectedDay}, ${selectedTimeSlot}%0A• Notes: ${encodeURIComponent(message || 'No additional notes')}%0A%0APlease confirm slot availability. Thank you!`;
    window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Gurukrupa Skin Clinic//Appointment//EN
BEGIN:VEVENT
SUMMARY:Doctor Consultation: ${selectedDoctorObj.name} - Gurukrupa Skin Clinic
DESCRIPTION:Appointment for ${patientName} (${selectedTreatmentObj?.name || 'Dermatology Consultation'}). Token: ${appointmentToken}. Location: Sector 20, Ulwe, Navi Mumbai.
LOCATION:Shop No. 20, Siddhivinayak Utopia, opp. Redcliff School, Sector 20, Ulwe, Wahal, Navi Mumbai 410206
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Gurukrupa_Appointment_${appointmentToken}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-[#0a0c10] text-[#f0f2f5] min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header info matching PDF Screenshot Page 26 */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block">
            APPOINTMENTS • भेटीची वेळ बुक करा
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Book a visit.
          </h1>
          <div className="flex items-center justify-center gap-2 pt-1 text-sm">
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.8</span>
            </div>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">51 Google reviews</span>
            <span className="text-neutral-500">•</span>
            <span className="text-emerald-400 font-medium">Ulwe Sector 20</span>
          </div>
        </div>

        {isSubmitted ? (
          /* Confirmation / Next Step Card (Matches flowchart: Submit Request -> Confirmation / Next Step) */
          <div className="bg-[#121722] border border-[#27354a] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                APPOINTMENT REQUEST SUBMITTED
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                We're Looking Forward to Seeing You
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
                Your consultation request has been logged in our clinic management system. Please save your appointment token for reception check-in.
              </p>
            </div>

            {/* Summary Ticket Box */}
            <div className="bg-[#0b0e14] border border-[#1f2838] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#1f2838]">
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Token Number</span>
                  <span className="text-xl font-mono font-bold text-[#f4a261]">{appointmentToken}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Consultation Fee</span>
                  <span className="text-base font-bold text-white">₹500 (Pay at Clinic)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-neutral-400 block">Patient Name:</span>
                  <strong className="text-white">{patientName}</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block">Contact Phone:</span>
                  <strong className="text-white">{phoneNumber}</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block">Doctor:</span>
                  <strong className="text-[#f4a261]">{selectedDoctorObj.name} ({selectedDoctorObj.qualifications})</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block">Scheduled Time:</span>
                  <strong className="text-white">{selectedDay}, {selectedTimeSlot}</strong>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-neutral-400 block">Treatment / Concern:</span>
                  <strong className="text-white">{selectedTreatmentObj?.name || 'General Consultation'}</strong>
                </div>
                {message && (
                  <div className="sm:col-span-2">
                    <span className="text-neutral-400 block">Notes for Doctor:</span>
                    <span className="text-neutral-300 italic">{message}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Clinic Arrival Checklist */}
            <div className="p-4 rounded-xl bg-[#141b25] border border-[#232f42] text-xs text-neutral-300 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#f4a261]" />
                Important Instructions for Your Visit:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-neutral-400 pl-1">
                <li>Please arrive 10 minutes prior to your slot time at Sector 20, Ulwe (opp. Redcliff School).</li>
                <li>Bring any prior dermatological prescriptions, blood reports, or skincare products you currently use.</li>
                <li>For hair transplant evaluations, please avoid cutting or trimming donor hair 5 days before the visit.</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppConfirm}
                className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp Desk</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadICS}
                className="py-3.5 px-5 rounded-xl bg-[#1a2332] hover:bg-[#232f44] text-neutral-200 border border-[#2d3b52] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Add to Calendar (.ics)</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setPatientName('');
                  setPhoneNumber('');
                  setEmail('');
                  setMessage('');
                }}
                className="text-xs text-neutral-400 hover:text-white underline"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        ) : (
          /* The Interactive Booking Form (Flowchart implementation) */
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Day Selection (From PDF Screenshot Page 26-27) */}
            <div className="bg-[#121620] border border-[#222a38] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <label className="block text-xs font-bold text-white uppercase tracking-wider">
                1. Select Preferred Day of Week
              </label>
              <div className="flex flex-wrap gap-2">
                {daysOfWeek.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedDay === day
                        ? 'bg-[#f4a261] text-[#0c0e12] shadow-md font-bold scale-105'
                        : 'bg-[#151c27] text-neutral-300 hover:text-white border border-[#232e42]'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Morning vs Evening Time Slot Selection (From PDF Screenshots Pages 24-27) */}
            <div className="bg-[#121620] border border-[#222a38] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-white uppercase tracking-wider">
                  2. Select Consultation Time Slot
                </label>
                <span className="text-[11px] text-[#f4a261] font-medium">Selected: {selectedTimeSlot}</span>
              </div>

              {/* Morning Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#f4a261]" />
                    Morning Session
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">10:30 AM – 02:30 PM</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {CLINIC_INFO.morningSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-medium transition-all text-center cursor-pointer ${
                        selectedTimeSlot === slot
                          ? 'bg-[#f4a261] text-[#0c0e12] font-bold shadow-md'
                          : 'bg-[#151c27] text-neutral-300 hover:bg-[#1c2636] border border-[#232e42]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Evening Section */}
              <div className="space-y-3 pt-3 border-t border-[#1e2535]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Evening Session
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">05:30 PM – 10:00 PM</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {CLINIC_INFO.eveningSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-medium transition-all text-center cursor-pointer ${
                        selectedTimeSlot === slot
                          ? 'bg-[#f4a261] text-[#0c0e12] font-bold shadow-md'
                          : 'bg-[#151c27] text-neutral-300 hover:bg-[#1c2636] border border-[#232e42]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-neutral-500 italic">
                * Note: Slot availability is synchronized with our front desk. Please confirm the exact time on WhatsApp — the clinic will sync it with real doctor schedule.
              </p>
            </div>

            {/* Step 3: Patient & Clinical Information */}
            <div className="bg-[#121620] border border-[#222a38] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
              <label className="block text-xs font-bold text-white uppercase tracking-wider">
                3. Patient Details &amp; Treatment Selection
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Patient Full Name <span className="text-[#f4a261]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kadam"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Phone Number (+91) <span className="text-[#f4a261]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Doctor Preference
                  </label>
                  <select
                    value={doctorPreference}
                    onChange={(e) => setDoctorPreference(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                  >
                    <option value="dr-mohit-giri">Dr. Mohit Giri (MD Dermatology - Hair & Laser Lead)</option>
                    <option value="dr-pooja-giri">Dr. Pooja Giri (DNB Dermatology - Aesthetics & Pediatric)</option>
                    <option value="any">First Available Doctor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Treatment / Primary Concern <span className="text-[#f4a261]">*</span>
                </label>
                <select
                  value={treatmentId}
                  onChange={(e) => setTreatmentId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} (From ₹{t.priceStarting.toLocaleString('en-IN')})
                    </option>
                  ))}
                  <option value="general-consultation">General Skin / Hair Consultation (₹500)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Brief Medical Message / Symptoms (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your concern (e.g. hair thinning in crown area, active pimples on forehead for 6 months)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1017] border border-[#242f42] text-white text-sm focus:border-[#f4a261] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/95 text-[#0c0e12] font-bold text-base shadow-xl shadow-[#f4a261]/25 hover:shadow-[#f4a261]/40 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Submit Appointment Request (Next Step) →</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
