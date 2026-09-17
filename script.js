/**
 * Gurukrupa Skin Clinic - Pure Vanilla JavaScript Controller
 * No dependencies or frameworks required.
 */

// ==========================================
// 1. DATA STORE
// ==========================================
const CLINIC_INFO = {
  name: 'Gurukrupa Skin Clinic',
  phone: '+919820012345',
  phoneDisplay: '+91 98200 12345',
  whatsapp: '919820012345',
  email: 'care@gurukrupaskinclinic.com',
  address: 'Shop No. 20, Siddhivinayak Utopia, opp. Redcliff School, Sector 20, Ulwe, Navi Mumbai, Maharashtra 410206',
  hours: 'Mon - Sun: 10:30 AM - 2:30 PM & 5:30 PM - 10:00 PM',
  consultationFee: '₹500'
};

const NORWOOD_DATA = {
  2: {
    title: 'Stage 2: Mild Temple Recession',
    desc: 'Slight recession of hairline around temples. Follicles are early in miniaturization.',
    grafts: '1,000 – 1,500 Grafts',
    protocol: '1 Minor FUE Session or 4 PRP Cycles',
    advice: 'High response rate for stabilizing native hair with biological GFC.'
  },
  3: {
    title: 'Stage 3: Deep Frontal Recession & Early Crown',
    desc: 'Noticeable M-shaped recession. Follicles have miniaturized significantly in frontal zones.',
    grafts: '1,800 – 2,500 Grafts',
    protocol: '1 Full Session (Sapphire Micro-FUE)',
    advice: 'Essential pre- and post-transplant biological anchoring with growth factors.'
  },
  4: {
    title: 'Stage 4: Significant Frontal Loss & Crown Vertex Thinning',
    desc: 'Frontal hairline bridge thin or absent; distinct bald circle developing at crown.',
    grafts: '2,500 – 3,200 Grafts',
    protocol: 'Sapphire Micro-FUE + 6 PRP Sessions',
    advice: 'Stabilizes vertex thinning while micro-slits restore frontal density.'
  },
  5: {
    title: 'Stage 5: Extensive Frontal & Vertex Baldness',
    desc: 'The band between frontal loss and crown has broken down. Requires dense donor harvesting.',
    grafts: '3,200 – 4,000 Grafts',
    protocol: 'Mega-Session FUE + GFC Growth Cycles',
    advice: 'Maximizes graft survival and revives borderline roots in peripheral zones.'
  },
  6: {
    title: 'Stage 6 & 7: Advanced Scalp Baldness',
    desc: 'Only horseshoe donor rim remains at sides and occipital area. Multi-stage or beard-donor combo.',
    grafts: '4,000+ Grafts (Multi-Stage)',
    protocol: 'Staged Sapphire FUE + Intensive Hair Therapy',
    advice: 'Boosts blood perfusion in fibrotic scalp tissue before graft implantation.'
  }
};

const CLINICAL_CASES = [
  {
    id: 1,
    title: 'Case #1: Grade 3 Inflammatory Acne & Erythema',
    category: 'acne',
    patient: 'Female, 22 Years',
    protocol: '4 Salicylic-Mandelic Peels + Oral Isotretinoin',
    duration: '10 Weeks Protocol',
    before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1512290900672-1f5be6343584?q=80&w=800&auto=format&fit=crop',
    summary: '90% resolution of inflammatory papules, clearance of active acne lesions, and restored epidermal barrier.'
  },
  {
    id: 10,
    title: 'Case #10: Rolling & Boxcar Acne Scar Revision',
    category: 'acne',
    patient: 'Male, 27 Years',
    protocol: 'Micro-Needling RF + Subcision & Autologous PRP',
    duration: '4 Sessions (16 Weeks)',
    before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    summary: 'Release of deep tethered dermal fibrotic bands and marked shallowing of scarred craters.'
  },
  {
    id: 13,
    title: 'Case #13: Frontal Recession & Crown Miniaturization',
    category: 'hair',
    patient: 'Male, 48 Years',
    protocol: '6 Sessions Autologous GFC + Topical 5% Minoxidil',
    duration: '6 Months Protocol',
    before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    summary: 'Reversal of follicle miniaturization, increased hair shaft thickness, and closure of crown thinning.'
  },
  {
    id: 15,
    title: 'Case #15: Epidermal Melasma & Post-Inflammatory Hyperpigmentation',
    category: 'pigmentation',
    patient: 'Female, 36 Years',
    protocol: 'Picosecond Laser + Tranexamic Acid Infusion',
    duration: '5 Sessions (12 Weeks)',
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    summary: 'Significant clearance of dermal pigment patches with even skin tone and zero post-laser redness.'
  }
];

// ==========================================
// 2. ROUTING & PAGE NAVIGATION
// ==========================================
function navigateTo(pageId) {
  const pages = document.querySelectorAll('.page-view');
  pages.forEach(p => p.classList.add('hidden'));

  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.remove('hidden');
    window.location.hash = `#/${pageId === 'home' ? '' : pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update Nav links active state
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile drawer if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');
}

function handleHashChange() {
  const rawHash = window.location.hash.replace('#/', '').replace('#', '').trim();
  const validPages = ['home', 'hair-treatment', 'about', 'treatments', 'contact', 'appointment'];
  if (validPages.includes(rawHash)) {
    navigateTo(rawHash);
  } else {
    navigateTo('home');
  }
}

// ==========================================
// 3. BEFORE & AFTER INTERACTIVE SLIDER
// ==========================================
let activeCaseIndex = 2; // Case 13 Hair by default
let sliderPos = 50;

function renderCase(index) {
  activeCaseIndex = index;
  const currentCase = CLINICAL_CASES[index];
  if (!currentCase) return;

  const titleEl = document.getElementById('ba-title');
  const patientEl = document.getElementById('ba-patient');
  const protocolEl = document.getElementById('ba-protocol');
  const durationEl = document.getElementById('ba-duration');
  const summaryEl = document.getElementById('ba-summary');
  const afterImg = document.getElementById('ba-after-img');
  const beforeImg = document.getElementById('ba-before-img');

  if (titleEl) titleEl.textContent = currentCase.title;
  if (patientEl) patientEl.textContent = currentCase.patient;
  if (protocolEl) protocolEl.textContent = currentCase.protocol;
  if (durationEl) durationEl.textContent = currentCase.duration;
  if (summaryEl) summaryEl.textContent = currentCase.summary;
  if (afterImg) afterImg.src = currentCase.after;
  if (beforeImg) beforeImg.src = currentCase.before;

  // Update case selector buttons
  document.querySelectorAll('.case-tab-btn').forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('border-[#f4a261]', 'bg-[#1b2332]', 'text-[#f4a261]');
      btn.classList.remove('border-[#222a38]', 'bg-[#121620]', 'text-neutral-400');
    } else {
      btn.classList.remove('border-[#f4a261]', 'bg-[#1b2332]', 'text-[#f4a261]');
      btn.classList.add('border-[#222a38]', 'bg-[#121620]', 'text-neutral-400');
    }
  });

  setSliderPosition(50);
}

function setSliderPosition(percentage) {
  sliderPos = Math.max(0, Math.min(100, percentage));
  const beforeLayer = document.getElementById('ba-before-layer');
  const handle = document.getElementById('ba-handle');
  if (beforeLayer) beforeLayer.style.width = `${sliderPos}%`;
  if (handle) handle.style.left = `${sliderPos}%`;
}

function initSlider() {
  const container = document.getElementById('ba-slider-container');
  if (!container) return;

  let isDragging = false;

  const onMove = (clientX) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setSliderPosition(pct);
  };

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    onMove(e.clientX);
  });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) onMove(e.clientX);
  });
  window.addEventListener('mouseup', () => { isDragging = false; });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    if (e.touches[0]) onMove(e.touches[0].clientX);
  }, { passive: true });
  container.addEventListener('touchmove', (e) => {
    if (e.touches[0]) onMove(e.touches[0].clientX);
  }, { passive: true });
}

// ==========================================
// 4. NORWOOD STAGE ESTIMATOR
// ==========================================
function selectNorwoodStage(stageNum) {
  const data = NORWOOD_DATA[stageNum];
  if (!data) return;

  const stageTitle = document.getElementById('norwood-title');
  const stageDesc = document.getElementById('norwood-desc');
  const stageAdvice = document.getElementById('norwood-advice');
  const stageGrafts = document.getElementById('norwood-grafts');
  const stageProtocol = document.getElementById('norwood-protocol');

  if (stageTitle) stageTitle.textContent = data.title;
  if (stageDesc) stageDesc.textContent = data.desc;
  if (stageAdvice) stageAdvice.textContent = data.advice;
  if (stageGrafts) stageGrafts.textContent = data.grafts;
  if (stageProtocol) stageProtocol.textContent = data.protocol;

  // Highlight button
  document.querySelectorAll('.norwood-btn').forEach(btn => {
    if (parseInt(btn.getAttribute('data-stage'), 10) === stageNum) {
      btn.classList.add('border-[#f4a261]', 'bg-[#1e2738]', 'text-[#f4a261]');
      btn.classList.remove('border-[#222a38]', 'bg-[#121620]', 'text-neutral-400');
    } else {
      btn.classList.remove('border-[#f4a261]', 'bg-[#1e2738]', 'text-[#f4a261]');
      btn.classList.add('border-[#222a38]', 'bg-[#121620]', 'text-neutral-400');
    }
  });
}

// ==========================================
// 5. APPOINTMENT BOOKING CONTROLLER
// ==========================================
let bookingState = {
  day: 'Today',
  slot: '11:00 AM',
  doctor: 'Dr. Mohit Giri (MD Dermatology)',
  treatment: 'Hair Transplant & Follicle Restoration',
  patientName: '',
  phone: '',
  email: '',
  notes: '',
  token: ''
};

function selectBookingDay(dayName, btn) {
  bookingState.day = dayName;
  document.querySelectorAll('.day-chip').forEach(b => {
    b.classList.remove('bg-[#f4a261]', 'text-[#0c0e12]', 'font-bold');
    b.classList.add('bg-[#151c27]', 'text-neutral-300');
  });
  btn.classList.add('bg-[#f4a261]', 'text-[#0c0e12]', 'font-bold');
  btn.classList.remove('bg-[#151c27]', 'text-neutral-300');
}

function selectBookingSlot(slotTime, btn) {
  bookingState.slot = slotTime;
  document.querySelectorAll('.slot-chip').forEach(b => {
    b.classList.remove('bg-[#f4a261]', 'text-[#0c0e12]', 'font-bold');
    b.classList.add('bg-[#151c27]', 'text-neutral-300');
  });
  btn.classList.add('bg-[#f4a261]', 'text-[#0c0e12]', 'font-bold');
  btn.classList.remove('bg-[#151c27]', 'text-neutral-300');
}

function handleAppointmentSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('apt-name').value;
  const phone = document.getElementById('apt-phone').value;
  const email = document.getElementById('apt-email')?.value || '';
  const doctor = document.getElementById('apt-doctor').value;
  const treatment = document.getElementById('apt-treatment').value;
  const notes = document.getElementById('apt-notes')?.value || '';

  const token = `GK-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  bookingState = {
    ...bookingState,
    patientName: name,
    phone: phone,
    email: email,
    doctor: doctor,
    treatment: treatment,
    notes: notes,
    token: token
  };

  // Populate ticket
  document.getElementById('ticket-token').textContent = token;
  document.getElementById('ticket-name').textContent = name;
  document.getElementById('ticket-phone').textContent = phone;
  document.getElementById('ticket-doctor').textContent = doctor;
  document.getElementById('ticket-slot').textContent = `${bookingState.day}, ${bookingState.slot}`;
  document.getElementById('ticket-treatment').textContent = treatment;
  if (document.getElementById('ticket-notes')) {
    document.getElementById('ticket-notes').textContent = notes || 'None specified';
  }

  // Switch form to confirmation card
  document.getElementById('apt-form-section').classList.add('hidden');
  document.getElementById('apt-success-section').classList.remove('hidden');
  window.scrollTo({ top: 100, behavior: 'smooth' });
}

function syncAppointmentToWhatsApp() {
  const text = `Hello Gurukrupa Skin Clinic!%0A%0A*Appointment Request Confirmation*%0A• Token: ${bookingState.token}%0A• Patient Name: ${encodeURIComponent(bookingState.patientName)}%0A• Contact: ${encodeURIComponent(bookingState.phone)}%0A• Doctor: ${encodeURIComponent(bookingState.doctor)}%0A• Concern: ${encodeURIComponent(bookingState.treatment)}%0A• Slot: ${encodeURIComponent(bookingState.day)}, ${encodeURIComponent(bookingState.slot)}%0A• Notes: ${encodeURIComponent(bookingState.notes || 'None')}%0A%0APlease confirm my appointment slot. Thank you!`;
  window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`, '_blank');
}

function downloadICSCalendar() {
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Gurukrupa Skin Clinic//Appointment//EN
BEGIN:VEVENT
SUMMARY:Doctor Consultation: ${bookingState.doctor}
DESCRIPTION:Patient: ${bookingState.patientName}. Concern: ${bookingState.treatment}. Token: ${bookingState.token}
LOCATION:${CLINIC_INFO.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `Gurukrupa_Appointment_${bookingState.token}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function resetBookingForm() {
  document.getElementById('apt-form').reset();
  document.getElementById('apt-success-section').classList.add('hidden');
  document.getElementById('apt-form-section').classList.remove('hidden');
}

// ==========================================
// 6. CONTACT FORM & WHATSAPP SYNC
// ==========================================
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const concern = document.getElementById('contact-concern').value;
  const msg = document.getElementById('contact-msg').value;

  document.getElementById('contact-form').classList.add('hidden');
  const alertEl = document.getElementById('contact-success');
  if (alertEl) {
    alertEl.classList.remove('hidden');
    document.getElementById('contact-success-name').textContent = name;
  }
}

function sendContactToWhatsApp() {
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const concern = document.getElementById('contact-concern').value;
  const msg = document.getElementById('contact-msg').value;

  const text = `Hello Gurukrupa Skin Clinic,%0A%0AName: ${encodeURIComponent(name || 'Patient')}%0APhone: ${encodeURIComponent(phone || '')}%0AConcern: ${encodeURIComponent(concern)}%0AMessage: ${encodeURIComponent(msg || 'I would like to enquire about consultation.')}`;
  window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`, '_blank');
}

// ==========================================
// 7. TREATMENTS CATALOGUE FILTER
// ==========================================
function filterTreatments(category, btn) {
  document.querySelectorAll('.treatment-filter-btn').forEach(b => {
    b.classList.remove('bg-[#f4a261]', 'text-[#0c0e12]', 'font-bold');
    b.classList.add('bg-[#121620]', 'text-neutral-400');
  });
  btn.classList.add('bg-[#f4a261]', 'text-[#0c0e12]', 'font-bold');
  btn.classList.remove('bg-[#121620]', 'text-neutral-400');

  document.querySelectorAll('.treatment-card').forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (category === 'all' || cardCat === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ==========================================
// 8. FAQ ACCORDION TOGGLE
// ==========================================
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasActive = item.classList.contains('active');

  // Close other open FAQs in same container
  const parent = item.parentElement;
  parent.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

  if (!wasActive) {
    item.classList.add('active');
  }
}

// ==========================================
// 9. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Hash listener
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();

  // Initialize Before & After Slider
  initSlider();
  renderCase(2);

  // Initialize Norwood Estimator
  selectNorwoodStage(3);

  // Mobile menu button
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
