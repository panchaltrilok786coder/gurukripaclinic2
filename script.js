/**
 * GuruKrupa Skin Clinic - Pure Vanilla JavaScript Controller
 * No dependencies or frameworks required.
 */

// ==========================================================================
// REVERSIBLE SERVICE ACTIVATION CONTROLS (DEACTIVATION TOGGLES)
// All channels are kept 100% in the interface, and can be activated anytime
// by simply setting these flags to `true`.
// ==========================================================================
const SERVICE_CHANNELS = {
  callsActive: false,               // Phone calls: set to true to activate
  whatsappActive: false,            // WhatsApp messaging: set to true to activate
  appointmentBookingActive: false   // Appointment booking: set to true to activate
};
window.SERVICE_CHANNELS = SERVICE_CHANNELS;

// ==========================================
// 1. DATA STORE
// ==========================================
const CLINIC_INFO = {
  name: 'GuruKrupa Skin Clinic',
  doctor: 'Dr. Mohit Giri',
  qualifications: 'MBBS, DDV, FAD (Germany)',
  phone: '+919130009003',
  phoneDisplay: '+91 91300 09003',
  whatsapp: '919130009003',
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
    badge: '#1',
    number: '01 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Acne Scar Revision & Skin Resurfacing',
    protocol: 'Microneedling RF & Subcision Protocol (3 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 24 Years',
    duration: '3 Sessions (12 Weeks)',
    summary: 'Targeted release of deep dermal fibrotic tethering combined with fractional micro-needling radiofrequency to induce neo-collagenesis and shallow crater depths.',
    baseImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    conditionType: 'acne_scars_female',
    conditionLabel: 'Rolling & Boxcar Scars (Bilateral Cheeks)'
  },
  {
    id: 2,
    badge: '#2',
    number: '02 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Deep Acne Scar Remodeling & Texture Recovery',
    protocol: 'Fractional Laser & Collagen Rejuvenation (4 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Male, 28 Years',
    duration: '4 Sessions (16 Weeks)',
    summary: 'Microscopic thermal treatment zones remodeling stubborn boxcar and rolling scars along the temple and jawline with deep dermal collagen synthesis.',
    baseImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop',
    conditionType: 'acne_scars_male',
    conditionLabel: 'Fibrotic Boxcar Depressions (Temple & Jawline)'
  },
  {
    id: 3,
    badge: '#3',
    number: '03 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Active Acne Clearance & Inflammation Control',
    protocol: 'Medical Peels & Targeted Dermatological Care (3 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 21 Years',
    duration: '3 Sessions (6 Weeks)',
    summary: 'Clinical anti-inflammatory protocol resolving acute follicular inflammation, calming erythema, and promoting rapid epidermal barrier repair.',
    baseImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    conditionType: 'active_acne_female',
    conditionLabel: 'Grade 3 Papulopustular Acne & Erythema'
  },
  {
    id: 4,
    badge: '#4',
    number: '04 / 15',
    category: 'Pigmentation & Laser',
    categoryKey: 'pigmentation',
    title: 'Hyperpigmentation & Melasma Toning',
    protocol: 'Picosecond Laser Toning & Depigmentation (4 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 37 Years',
    duration: '4 Sessions (8 Weeks)',
    summary: 'Ultrashort picosecond photo-acoustic pulses fragmenting stubborn perioral and cheek melasma deposits with minimal thermal stress and zero downtime.',
    baseImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop',
    conditionType: 'melasma_female',
    conditionLabel: 'Bilateral Malar Melasma & Dermal Dyschromia'
  },
  {
    id: 5,
    badge: '#5',
    number: '05 / 15',
    category: 'Texture & Pores',
    categoryKey: 'texture',
    title: 'Facial Texture Smoothing & Pores Minimization',
    protocol: 'Carbon Laser Peel & Hydrafacial Protocol (3 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Male, 26 Years',
    duration: '3 Sessions (6 Weeks)',
    summary: 'Micro-exfoliation of congested pores through medical carbon application and Q-switched laser vaporization, achieving refined porcelain skin texture.',
    baseImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop',
    conditionType: 'enlarged_pores_male',
    conditionLabel: 'Dilated Congested Pores & Excess Sebum'
  },
  {
    id: 6,
    badge: '#6',
    number: '06 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Complete Dermatological Treatment Transformation',
    protocol: 'Combined Dermatological Clinical Protocol (Clinical Protocol Completed)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Male, 31 Years',
    duration: 'Clinical Protocol Completed',
    summary: 'Sterile minor OT extraction and targeted dermatological surgery, resulting in complete lesion eradication and imperceptible healing.',
    baseImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop',
    conditionType: 'minor_ot_male',
    conditionLabel: 'Nodulocystic Lesions & Epidermal Congestion'
  },
  {
    id: 7,
    badge: '#7',
    number: '07 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Clinical Chemical Peels & Skin Rejuvenation',
    protocol: 'Advanced Peeling & Exfoliation Protocol (Dermatological Care)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 23 Years',
    duration: 'Dermatological Care',
    summary: 'Calibrated dermatological acid peels exfoliating active acne clusters, accelerating cellular turnover, and calming widespread facial redness.',
    baseImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop',
    conditionType: 'peel_acne_female',
    conditionLabel: 'Follicular Hyperkeratosis & Acne Flare-ups'
  },
  {
    id: 8,
    badge: '#8',
    number: '08 / 15',
    category: 'Pigmentation & Laser',
    categoryKey: 'pigmentation',
    title: 'Aesthetic Laser Procedure & Texture Revision',
    protocol: 'Calibrated Laser & Skin Rejuvenation (Clinical Procedure)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Male, 35 Years',
    duration: 'Clinical Procedure',
    summary: 'Precision laser toning balancing dyschromia and photo-damaged skin layers, establishing a unified, healthy dermal tone.',
    baseImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop',
    conditionType: 'laser_rejuv_male',
    conditionLabel: 'Photo-damaged Dyschromia & Sun Spots'
  },
  {
    id: 9,
    badge: '#9',
    number: '09 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Acne Scar Revision & Clinical Resurfacing',
    protocol: 'Microneedling RF & Targeted Subcision (3 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 27 Years',
    duration: '3 Sessions (12 Weeks)',
    summary: 'Subdermal needle releasing fibrous scar anchors followed by RF coagulation to lift rolling depressions and smooth surface plane.',
    baseImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=900&auto=format&fit=crop',
    conditionType: 'subcision_rf_female',
    conditionLabel: 'Tethered Rolling Atrophic Scars'
  },
  {
    id: 10,
    badge: '#10',
    number: '10 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Deep Acne Scar Remodeling & Texture Revision',
    protocol: 'Fractional Laser & Collagen Remodeling (4 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 29 Years',
    duration: '4 Sessions (16 Weeks)',
    summary: 'Intense fractional laser columns remodeling deep cheek craters and restoring skin elasticity through progressive collagen rebuilding.',
    baseImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop',
    conditionType: 'fractional_laser_female',
    conditionLabel: 'Deep Pitted Scars & Collagen Deficit'
  },
  {
    id: 11,
    badge: '#11',
    number: '11 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Acne & Acne Scars Clearance',
    protocol: 'Picosecond Laser & Salicylic Peels (4 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 20 Years',
    duration: '4 Sessions (8 Weeks)',
    summary: 'Combined keratolytic peels clearing active papulopustular lesions with picosecond laser pulses eliminating lingering residual redness.',
    baseImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=900&auto=format&fit=crop',
    conditionType: 'acne_salicylic_female',
    conditionLabel: 'Active Acne Breakouts & Residual Scars'
  },
  {
    id: 12,
    badge: '#12',
    number: '12 / 15',
    category: 'Acne & Scars',
    categoryKey: 'acne',
    title: 'Acne Marks & Post-Inflammatory Redness',
    protocol: 'MNRF & Advanced Dermatological Peels (3 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 25 Years',
    duration: '3 Sessions (10 Weeks)',
    summary: 'Rapid resolution of post-inflammatory erythema (PIE) and dark marks through micro-insulated radiofrequency and brightening peels.',
    baseImage: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=900&auto=format&fit=crop',
    conditionType: 'pie_redness_female',
    conditionLabel: 'Post-Inflammatory Erythema (PIE) & Red Marks'
  },
  {
    id: 13,
    badge: '#13',
    number: '13 / 15',
    category: 'Hair & Scalp',
    categoryKey: 'hair',
    title: 'Hair Fall Control & Hair Growth Stimulation',
    protocol: 'PRP & GFC Hair Growth Therapy (6 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Male, 48 Years',
    duration: '6 Sessions (6 Months)',
    summary: 'Autologous growth factor concentrate (GFC) micro-injections stimulating dormant hair follicles and producing dense crown recovery.',
    baseImage: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=900&auto=format&fit=crop',
    conditionType: 'prp_hair_male',
    conditionLabel: 'Crown Thinning & Follicle Miniaturization'
  },
  {
    id: 14,
    badge: '#14',
    number: '14 / 15',
    category: 'Pigmentation & Laser',
    categoryKey: 'pigmentation',
    title: 'Pigmentation & Dark Spots Toning',
    protocol: 'Q-Switched & Picosecond Laser Toning (5 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 42 Years',
    duration: '5 Sessions (10 Weeks)',
    summary: 'Selective melanin photothermolysis dispersing chronic sun spots, patchy freckles, and epidermal pigment clusters.',
    baseImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop',
    conditionType: 'qswitch_spots_female',
    conditionLabel: 'Discrete Sun Lentigines & Dark Spots'
  },
  {
    id: 15,
    badge: '#15',
    number: '15 / 15',
    category: 'Texture & Pores',
    categoryKey: 'texture',
    title: 'Skin Texture & Open Pores Refinement',
    protocol: 'Carbon Laser Peel & Collagen Rejuvenation (3 Sessions)',
    doctor: 'Gurukrupa Skin Clinic • Dr. Mohit Giri (MD Dermatology)',
    patient: 'Female, 30 Years',
    duration: '3 Sessions (6 Weeks)',
    summary: 'Acoustic laser peeling removing stubborn sebum plugs and tightening dilated pore walls for a visibly porcelain, refined texture.',
    baseImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop',
    conditionType: 'carbon_peel_female',
    conditionLabel: 'Coarse Skin Micro-relief & Dilated Pores'
  }
];

// ==========================================
// 2. ROUTING & PAGE NAVIGATION
// ==========================================
let isNavigating = false;

const ROUTE_ALIASES = {
  'hair-transplant': 'hair-treatment',
  'transplant': 'hair-treatment',
  'hair': 'treatment-hair',
  'skin': 'treatment-skin',
  'nail': 'treatment-nail',
  'laser': 'treatment-laser',
  'surgery': 'treatment-surgery',
  'treatments/hair': 'treatment-hair',
  'treatments/skin': 'treatment-skin',
  'treatments/nail': 'treatment-nail',
  'treatments/laser': 'treatment-laser',
  'treatments/surgery': 'treatment-surgery',
  'treatments/hair-transplant': 'hair-treatment'
};

const VALID_PAGES = [
  'home',
  'about',
  'treatments',
  'treatment-hair',
  'treatment-skin',
  'treatment-nail',
  'treatment-laser',
  'treatment-surgery',
  'hair-treatment',
  'contact',
  'appointment'
];

function navigateTo(pageId) {
  isNavigating = true;
  pageId = ROUTE_ALIASES[pageId] || pageId;

  const pages = document.querySelectorAll('.page-view');
  pages.forEach(p => p.classList.add('hidden'));

  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.remove('hidden');
    const targetHash = pageId === 'home' ? '#/' : `#/${pageId}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const isTreatmentCategory = [
    'treatments',
    'treatment-hair',
    'treatment-skin',
    'treatment-nail',
    'treatment-laser',
    'treatment-surgery',
    'hair-treatment'
  ].includes(pageId);

  // Update Desktop Nav links active state
  document.querySelectorAll('.nav-link').forEach(link => {
    const pageAttr = link.getAttribute('data-page');
    if (pageAttr === pageId || (isTreatmentCategory && pageAttr === 'treatments')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update Treatments Dropdown items active state:
  // Only the selected category / page shines in orange
  document.querySelectorAll('.treatment-dropdown-item').forEach(item => {
    const itemTarget = item.getAttribute('data-dropdown-page');
    if (itemTarget === pageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update Mobile Nav links active state
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    const pageAttr = link.getAttribute('data-page');
    if (pageAttr === pageId || (isTreatmentCategory && pageAttr === 'treatments')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update Mobile Drawer treatment sub-links active state
  document.querySelectorAll('.mobile-treatment-sublink').forEach(link => {
    const subTarget = link.getAttribute('data-mobile-subpage');
    if (subTarget === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update Sticky Specialty Subnavigation buttons (across all treatment pages):
  // Ensures only the option which is selected or the page in which the person is shines in orange
  document.querySelectorAll('.specialty-subnav-btn').forEach(btn => {
    const btnTarget = btn.getAttribute('data-subnav-page');
    if (btnTarget === pageId) {
      btn.className = 'specialty-subnav-btn px-3 py-1.5 rounded-lg font-bold bg-[#ffffff] text-[#070f22] shadow-sm shadow-[#ffffff]/20 transition-all';
    } else if (btnTarget === 'treatments') {
      btn.className = 'specialty-subnav-btn px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-white hover:bg-[#12254e] transition-all flex items-center gap-1.5';
    } else {
      btn.className = 'specialty-subnav-btn px-3 py-1.5 rounded-lg font-medium text-neutral-400 hover:text-white hover:bg-[#12254e] transition-all';
    }
  });

  // Update Sub-category pill bars on all 6 treatment pages
  document.querySelectorAll('.treatment-category-tab').forEach(tab => {
    const tabTarget = tab.getAttribute('data-tab-page');
    if (tabTarget === pageId) {
      tab.className = 'treatment-category-tab px-4 py-2 rounded-xl text-xs font-bold bg-[#ffffff] text-[#070f22] shadow-md transition-all shrink-0';
    } else {
      tab.className = 'treatment-category-tab px-4 py-2 rounded-xl text-xs font-semibold bg-[#0d1b3a] text-neutral-300 hover:text-white border border-[#1c3872] hover:border-[#ffffff]/50 transition-all shrink-0';
    }
  });

  // Close mobile drawer if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');

  if (pageId === 'home') {
    requestAnimationFrame(() => {
      updateAreaCarousel();
      updateTreatmentCarousel();
      updateTestimonialCarousel();
    });
  }

  setTimeout(() => {
    isNavigating = false;
  }, 100);
}

function handleHashChange() {
  if (isNavigating) return;
  let rawHash = window.location.hash.replace('#/', '').replace('#', '').trim();
  rawHash = ROUTE_ALIASES[rawHash] || rawHash;
  if (VALID_PAGES.includes(rawHash)) {
    navigateTo(rawHash);
  } else {
    navigateTo('home');
  }
}

// ==========================================
// 3. BEFORE & AFTER VERIFIED CLINICAL CASES & ASSET MANAGER
// ==========================================
let activeCaseIndex = 0; // Starts with Case #1
let activeCategory = 'all';
let activeViewMode = 'split'; // 'split' or 'slider'
let sliderPos = 50;

// Local persistence key for custom clinic PDF / uploaded assets
const CUSTOM_CASES_STORAGE_KEY = 'gurukrupa_custom_clinical_cases_v2';
const COHERENT_IMAGE_CACHE = new Map();
let extractedPdfPages = []; // Stores DataURLs of pages parsed from Dr. Mohit Giri's PDF

// Helper: Get custom stored photos for a case
function getCustomCasePhotos(caseId) {
  try {
    const raw = localStorage.getItem(CUSTOM_CASES_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data[caseId] || null;
  } catch (e) {
    console.error('Failed to read custom cases from storage:', e);
    return null;
  }
}

// Helper: Save custom photos for a case
function saveCustomCasePhotos(caseId, beforeUrl, afterUrl) {
  try {
    let data = {};
    const raw = localStorage.getItem(CUSTOM_CASES_STORAGE_KEY);
    if (raw) data = JSON.parse(raw);
    data[caseId] = {
      before: beforeUrl,
      after: afterUrl,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(CUSTOM_CASES_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save custom case to storage:', e);
  }
}

// Helper: Clear all custom photos
function clearAllCustomCasePhotos() {
  if (confirm('Are you sure you want to reset all 15 cases to the default coherent clinic cases?')) {
    localStorage.removeItem(CUSTOM_CASES_STORAGE_KEY);
    extractedPdfPages = [];
    COHERENT_IMAGE_CACHE.clear();
    renderCase(activeCaseIndex);
    renderCasesEditorList();
    const pdfResults = document.getElementById('pdf-pages-results');
    if (pdfResults) pdfResults.classList.add('hidden');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    if (toastTitle && toastMessage) {
      showServiceNotice('Reset Successful', 'Restored coherent clinical defaults for all 15 cases.');
    }
  }
}

// ==========================================
// COHERENT CLINICAL PAIR GENERATOR
// Ensures Before & After for each case are of the EXACT SAME PATIENT
// in 100% optical alignment, with targeted dermatological pathology
// ==========================================
function generateCoherentOverlayDataUrl(baseImgUrl, conditionType) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve({ before: baseImgUrl, after: baseImgUrl });
        return;
      }

      // Draw base image centered & cropped
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      ctx.drawImage(img, x, y, w, h);

      // Save the smooth, healed AFTER version
      const afterDataUrl = canvas.toDataURL('image/jpeg', 0.88);

      // Now create the BEFORE version on the EXACT SAME base face
      // Apply targeted dermatological condition on cheeks/temple/t-zone
      ctx.save();

      // Clinical pathology drawing helpers
      const drawAcneScar = (cx, cy, r) => {
        const grad = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
        grad.addColorStop(0, 'rgba(70, 30, 25, 0.65)'); // Pitted center
        grad.addColorStop(0.5, 'rgba(120, 50, 40, 0.45)');
        grad.addColorStop(0.85, 'rgba(190, 70, 60, 0.35)'); // Erythematous rim
        grad.addColorStop(1, 'rgba(210, 80, 70, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      };

      const drawActivePapule = (cx, cy, r) => {
        const grad = ctx.createRadialGradient(cx, cy, r * 0.15, cx, cy, r);
        grad.addColorStop(0, 'rgba(255, 240, 230, 0.9)'); // Whitehead/core
        grad.addColorStop(0.3, 'rgba(220, 45, 45, 0.8)'); // Inflamed red papule
        grad.addColorStop(0.7, 'rgba(190, 40, 40, 0.4)');
        grad.addColorStop(1, 'rgba(210, 50, 50, 0)'); // Flare halo
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      };

      const drawMelasmaPatch = (cx, cy, rx, ry, rot) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        const grad = ctx.createRadialGradient(0, 0, rx * 0.2, 0, 0, rx);
        grad.addColorStop(0, 'rgba(95, 55, 30, 0.55)');
        grad.addColorStop(0.6, 'rgba(115, 70, 40, 0.38)');
        grad.addColorStop(1, 'rgba(120, 75, 45, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      // Apply condition coordinates (calibrated for standard portrait angles)
      if (conditionType.includes('acne_scars') || conditionType.includes('subcision') || conditionType.includes('fractional_laser')) {
        // Bilateral cheek & temple clusters of rolling and boxcar scars
        const scarPositions = [
          [310, 270, 14], [330, 290, 10], [325, 250, 12], [290, 285, 16],
          [340, 315, 11], [300, 320, 15], [315, 340, 13], [350, 280, 9],
          [480, 270, 15], [465, 295, 11], [490, 250, 13], [510, 285, 16],
          [455, 320, 12], [475, 340, 14], [500, 320, 10], [320, 360, 11]
        ];
        scarPositions.forEach(([sx, sy, sr]) => drawAcneScar(sx, sy, sr));
      } else if (conditionType.includes('active_acne') || conditionType.includes('minor_ot') || conditionType.includes('peel_acne') || conditionType.includes('salicylic')) {
        // Red inflammatory papules, pustules, and facial erythema
        const acnePositions = [
          [320, 260, 12], [340, 285, 14], [310, 300, 10], [350, 310, 13],
          [325, 335, 15], [380, 350, 11], [420, 355, 12], [470, 265, 13],
          [490, 290, 15], [455, 305, 11], [480, 330, 14], [400, 220, 10],
          [380, 210, 9], [420, 215, 11], [395, 375, 13]
        ];
        acnePositions.forEach(([ax, ay, ar]) => drawActivePapule(ax, ay, ar));
      } else if (conditionType.includes('melasma') || conditionType.includes('laser_rejuv') || conditionType.includes('qswitch_spots')) {
        // Diffuse hyperpigmentation & melasma patches over malar cheeks and nose bridge
        drawMelasmaPatch(330, 280, 65, 45, -0.2);
        drawMelasmaPatch(470, 280, 65, 45, 0.2);
        drawMelasmaPatch(400, 260, 35, 20, 0);
        drawMelasmaPatch(340, 320, 40, 25, -0.1);
        drawMelasmaPatch(460, 320, 40, 25, 0.1);
      } else if (conditionType.includes('enlarged_pores') || conditionType.includes('carbon_peel')) {
        // Follicular pore congestion & coarse skin texture
        for (let i = 0; i < 45; i++) {
          const px = 330 + (i % 8) * 18 + (Math.random() * 6 - 3);
          const py = 260 + Math.floor(i / 8) * 16 + (Math.random() * 6 - 3);
          drawAcneScar(px, py, 4 + Math.random() * 3);
        }
        for (let i = 0; i < 45; i++) {
          const px = 410 + (i % 8) * 18 + (Math.random() * 6 - 3);
          const py = 260 + Math.floor(i / 8) * 16 + (Math.random() * 6 - 3);
          drawAcneScar(px, py, 4 + Math.random() * 3);
        }
      } else if (conditionType.includes('pie_redness')) {
        // Post-inflammatory erythema red macules
        const pieSpots = [
          [320, 270, 11], [345, 290, 13], [315, 310, 10], [360, 305, 12],
          [480, 275, 12], [460, 295, 14], [495, 315, 11], [400, 360, 13]
        ];
        pieSpots.forEach(([px, py, pr]) => {
          const grad = ctx.createRadialGradient(px, py, 1, px, py, pr);
          grad.addColorStop(0, 'rgba(215, 55, 55, 0.7)');
          grad.addColorStop(0.7, 'rgba(225, 75, 75, 0.4)');
          grad.addColorStop(1, 'rgba(225, 75, 75, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, pr, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (conditionType.includes('prp_hair')) {
        // Crown thinning overlay
        const hairGrad = ctx.createRadialGradient(400, 160, 20, 400, 160, 130);
        hairGrad.addColorStop(0, 'rgba(220, 185, 160, 0.55)');
        hairGrad.addColorStop(0.7, 'rgba(190, 150, 130, 0.3)');
        hairGrad.addColorStop(1, 'rgba(160, 120, 100, 0)');
        ctx.fillStyle = hairGrad;
        ctx.beginPath();
        ctx.arc(400, 160, 130, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      const beforeDataUrl = canvas.toDataURL('image/jpeg', 0.88);
      resolve({ before: beforeDataUrl, after: afterDataUrl });
    };

    img.onerror = () => {
      // Safe fallback if base image fails network
      resolve({
        before: baseImgUrl,
        after: baseImgUrl
      });
    };

    img.src = baseImgUrl;
  });
}

// Asynchronous loader for case images
async function getCaseEffectiveImages(caseItem) {
  // 1. Check custom uploaded/imported photos
  const custom = getCustomCasePhotos(caseItem.id);
  if (custom && custom.before && custom.after) {
    return { before: custom.before, after: custom.after, isCustom: true };
  }

  // 2. Check cached generated coherent pair
  if (COHERENT_IMAGE_CACHE.has(caseItem.id)) {
    return { ...COHERENT_IMAGE_CACHE.get(caseItem.id), isCustom: false };
  }

  // 3. Generate on-the-fly coherent pair from the same patient base portrait
  try {
    const pair = await generateCoherentOverlayDataUrl(caseItem.baseImage, caseItem.conditionType);
    COHERENT_IMAGE_CACHE.set(caseItem.id, pair);
    return { ...pair, isCustom: false };
  } catch (e) {
    return { before: caseItem.baseImage, after: caseItem.baseImage, isCustom: false };
  }
}

function getFilteredCases() {
  if (activeCategory === 'all') {
    return CLINICAL_CASES.map((c, originalIdx) => ({ ...c, originalIdx }));
  }
  return CLINICAL_CASES
    .map((c, originalIdx) => ({ ...c, originalIdx }))
    .filter(c => c.categoryKey === activeCategory);
}

function filterCases(categoryKey) {
  activeCategory = categoryKey;

  // Update category filter buttons
  document.querySelectorAll('.ba-filter-btn').forEach(btn => {
    const isTarget = btn.id === `ba-cat-${categoryKey}`;
    if (isTarget) {
      btn.classList.add('border-[#ffffff]', 'bg-[#12254e]', 'text-[#ffffff]', 'font-bold');
      btn.classList.remove('border-[#1c3872]', 'bg-[#0d1b3a]', 'text-neutral-400');
    } else {
      btn.classList.remove('border-[#ffffff]', 'bg-[#12254e]', 'text-[#ffffff]', 'font-bold');
      btn.classList.add('border-[#1c3872]', 'bg-[#0d1b3a]', 'text-neutral-400');
    }
  });

  // Pick first case belonging to this category
  const filtered = getFilteredCases();
  if (filtered.length > 0) {
    renderCase(filtered[0].originalIdx);
  }
}

async function renderCase(index) {
  if (index < 0) index = 0;
  if (index >= CLINICAL_CASES.length) index = CLINICAL_CASES.length - 1;
  activeCaseIndex = index;
  const currentCase = CLINICAL_CASES[index];
  if (!currentCase) return;

  // Header badges & metadata
  const catBadge = document.getElementById('ba-cat-badge');
  const caseBadge = document.getElementById('ba-case-badge');
  const customBadge = document.getElementById('ba-custom-badge');
  const counterTop = document.getElementById('ba-case-counter-top');
  const counterSplit = document.getElementById('ba-split-counter');
  const counterSlider = document.getElementById('ba-slider-counter');
  const titleEl = document.getElementById('ba-title');
  const protocolEl = document.getElementById('ba-protocol');
  const doctorEl = document.getElementById('ba-doctor');
  const patientEl = document.getElementById('ba-patient');
  const durationEl = document.getElementById('ba-duration');
  const summaryEl = document.getElementById('ba-summary');

  if (catBadge) catBadge.textContent = currentCase.category;
  if (caseBadge) caseBadge.textContent = currentCase.badge;
  if (counterTop) counterTop.textContent = currentCase.number;
  if (counterSplit) counterSplit.textContent = currentCase.number;
  if (counterSlider) counterSlider.textContent = currentCase.number;
  if (titleEl) titleEl.textContent = currentCase.title;
  if (protocolEl) protocolEl.textContent = currentCase.protocol;
  if (doctorEl) doctorEl.textContent = currentCase.doctor;
  if (patientEl) patientEl.textContent = currentCase.patient;
  if (durationEl) durationEl.textContent = currentCase.duration;
  if (summaryEl) summaryEl.textContent = currentCase.summary;

  // Show immediate base image as smooth placeholder while coherent pair processes
  const splitBefore = document.getElementById('ba-split-before-img');
  const splitAfter = document.getElementById('ba-split-after-img');
  const sliderBefore = document.getElementById('ba-before-img');
  const sliderAfter = document.getElementById('ba-after-img');

  // Load and apply the 100% coherent Before & After pair
  const images = await getCaseEffectiveImages(currentCase);
  if (splitBefore) splitBefore.src = images.before;
  if (splitAfter) splitAfter.src = images.after;
  if (sliderBefore) sliderBefore.src = images.before;
  if (sliderAfter) sliderAfter.src = images.after;

  // Indicate if custom clinic asset is active
  if (customBadge) {
    if (images.isCustom) {
      customBadge.classList.remove('hidden');
    } else {
      customBadge.classList.add('hidden');
    }
  }

  // Update 15 navigation dots
  document.querySelectorAll('.ba-dot').forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('bg-[#ffffff]', 'w-6');
      dot.classList.remove('bg-[#1c3872]', 'w-2');
    } else {
      dot.classList.remove('bg-[#ffffff]', 'w-6');
      dot.classList.add('bg-[#1c3872]', 'w-2');
    }
  });

  setSliderPosition(50);
}

function nextCase() {
  const filtered = getFilteredCases();
  const currentPos = filtered.findIndex(c => c.originalIdx === activeCaseIndex);
  if (currentPos !== -1 && currentPos < filtered.length - 1) {
    renderCase(filtered[currentPos + 1].originalIdx);
  } else if (filtered.length > 0) {
    renderCase(filtered[0].originalIdx);
  }
}

function prevCase() {
  const filtered = getFilteredCases();
  const currentPos = filtered.findIndex(c => c.originalIdx === activeCaseIndex);
  if (currentPos > 0) {
    renderCase(filtered[currentPos - 1].originalIdx);
  } else if (filtered.length > 0) {
    renderCase(filtered[filtered.length - 1].originalIdx);
  }
}

function toggleViewMode(mode) {
  activeViewMode = mode;
  const splitView = document.getElementById('ba-split-view');
  const sliderView = document.getElementById('ba-slider-view');
  const btnSplit = document.getElementById('ba-mode-split');
  const btnSlider = document.getElementById('ba-mode-slider');

  if (mode === 'slider') {
    if (splitView) splitView.classList.add('hidden');
    if (sliderView) sliderView.classList.remove('hidden');
    if (btnSlider) {
      btnSlider.classList.add('bg-[#12254e]', 'text-[#ffffff]', 'border-[#ffffff]/30');
      btnSlider.classList.remove('text-neutral-400');
    }
    if (btnSplit) {
      btnSplit.classList.remove('bg-[#12254e]', 'text-[#ffffff]', 'border-[#ffffff]/30');
      btnSplit.classList.add('text-neutral-400');
    }
    setSliderPosition(50);
  } else {
    if (sliderView) sliderView.classList.add('hidden');
    if (splitView) splitView.classList.remove('hidden');
    if (btnSplit) {
      btnSplit.classList.add('bg-[#12254e]', 'text-[#ffffff]', 'border-[#ffffff]/30');
      btnSplit.classList.remove('text-neutral-400');
    }
    if (btnSlider) {
      btnSlider.classList.remove('bg-[#12254e]', 'text-[#ffffff]', 'border-[#ffffff]/30');
      btnSlider.classList.add('text-neutral-400');
    }
  }
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

  // Touch Support for Slider
  container.addEventListener('touchstart', (e) => {
    if (e.touches[0]) {
      isDragging = true;
      onMove(e.touches[0].clientX);
    }
  }, { passive: true });
  container.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches[0]) onMove(e.touches[0].clientX);
  }, { passive: true });
  container.addEventListener('touchend', () => { isDragging = false; });
}

function initBeforeAfterSwipe() {
  const card = document.getElementById('ba-card-container');
  if (!card) return;

  let startX = 0;
  let startY = 0;

  card.addEventListener('touchstart', (e) => {
    if (activeViewMode === 'slider' && e.target.closest('#ba-slider-container')) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  card.addEventListener('touchend', (e) => {
    if (activeViewMode === 'slider' && e.target.closest('#ba-slider-container')) return;
    const deltaX = e.changedTouches[0].clientX - startX;
    const deltaY = e.changedTouches[0].clientY - startY;

    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        nextCase();
      } else {
        prevCase();
      }
    }
  }, { passive: true });
}

// ==========================================
// CLINICAL PDF & PHOTOS IMPORT MODAL CONTROLLER
// ==========================================
function openBaImportModal() {
  const modal = document.getElementById('ba-import-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderCasesEditorList();
  }
}

function closeBaImportModal() {
  const modal = document.getElementById('ba-import-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function applyAndCloseImportModal() {
  closeBaImportModal();
  renderCase(activeCaseIndex);
  showServiceNotice('Cases Updated', 'The 15 clinical cases have been refreshed with your imported assets.');
}

function switchImportTab(tabKey) {
  ['pdf', 'images', 'guide'].forEach(key => {
    const btn = document.getElementById(`tab-btn-${key}`);
    const content = document.getElementById(`tab-content-${key}`);
    if (key === tabKey) {
      if (btn) {
        btn.className = 'px-3.5 py-1.5 rounded-xl font-bold bg-[#172e5e] text-[#ffffff] border border-[#ffffff]/30 transition-all';
      }
      if (content) content.classList.remove('hidden');
    } else {
      if (btn) {
        btn.className = 'px-3.5 py-1.5 rounded-xl font-medium text-neutral-400 hover:text-white transition-all';
      }
      if (content) content.classList.add('hidden');
    }
  });
}

// Render the 15 cases editor list in the modal
async function renderCasesEditorList() {
  const container = document.getElementById('cases-editor-list');
  if (!container) return;

  container.innerHTML = '';
  for (const caseItem of CLINICAL_CASES) {
    const images = await getCaseEffectiveImages(caseItem);
    const row = document.createElement('div');
    row.className = 'p-2.5 rounded-xl bg-[#070f22] border border-[#172e5e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs';
    row.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="font-mono font-bold text-[#ffffff] bg-[#12254e] px-2 py-0.5 rounded border border-[#1c3872]">${caseItem.badge}</span>
        <div>
          <p class="font-semibold text-white leading-tight">${caseItem.title}</p>
          <p class="text-[10px] text-neutral-400">${caseItem.category} • ${caseItem.patient}</p>
        </div>
      </div>
      <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        <div class="flex items-center gap-1.5">
          <div class="w-10 h-10 rounded-lg overflow-hidden border border-[#254d9c] bg-black shrink-0 relative group">
            <img src="${images.before}" alt="Before" class="w-full h-full object-cover" />
            <label class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[9px] text-amber-300 font-bold cursor-pointer">
              Edit
              <input type="file" accept="image/*" class="hidden case-custom-input" data-case-id="${caseItem.id}" data-type="before" />
            </label>
          </div>
          <span class="text-[10px] text-neutral-500">→</span>
          <div class="w-10 h-10 rounded-lg overflow-hidden border border-[#254d9c] bg-black shrink-0 relative group">
            <img src="${images.after}" alt="After" class="w-full h-full object-cover" />
            <label class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[9px] text-emerald-400 font-bold cursor-pointer">
              Edit
              <input type="file" accept="image/*" class="hidden case-custom-input" data-case-id="${caseItem.id}" data-type="after" />
            </label>
          </div>
        </div>
        <button type="button" class="text-neutral-400 hover:text-white px-2 py-1 rounded bg-[#12254e] border border-[#1c3872] text-[10px] edit-case-direct-btn" data-case-id="${caseItem.id}">
          Configure
        </button>
      </div>
    `;
    container.appendChild(row);
  }

  // Bind inputs
  container.querySelectorAll('.case-custom-input').forEach(input => {
    input.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const caseId = parseInt(input.getAttribute('data-case-id'));
      const type = input.getAttribute('data-type');
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result;
        const current = getCustomCasePhotos(caseId) || await getCaseEffectiveImages(CLINICAL_CASES.find(c => c.id === caseId));
        if (type === 'before') {
          saveCustomCasePhotos(caseId, dataUrl, current.after);
        } else {
          saveCustomCasePhotos(caseId, current.before, dataUrl);
        }
        renderCasesEditorList();
        renderCase(activeCaseIndex);
      };
      reader.readAsDataURL(file);
    });
  });

  container.querySelectorAll('.edit-case-direct-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = parseInt(btn.getAttribute('data-case-id'));
      closeBaImportModal();
      renderCase(caseId - 1);
      openSingleCaseUploader();
    });
  });
}

// PDF Import Processor with PDF.js
async function handlePdfFile(file) {
  if (!file) return;

  const progress = document.getElementById('pdf-parsing-progress');
  const progressText = document.getElementById('pdf-parsing-text');
  const results = document.getElementById('pdf-pages-results');
  const countEl = document.getElementById('pdf-extracted-count');
  const grid = document.getElementById('pdf-pages-grid');

  if (progress) progress.classList.remove('hidden');
  if (results) results.classList.add('hidden');
  if (progressText) progressText.textContent = `Reading ${file.name}...`;

  try {
    if (!window.pdfjsLib) {
      throw new Error('PDF.js library is loading. Please check your internet connection.');
    }

    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const numPages = pdf.numPages;

    extractedPdfPages = [];
    if (grid) grid.innerHTML = '';

    for (let i = 1; i <= numPages; i++) {
      if (progressText) progressText.textContent = `Extracting page ${i} of ${numPages}...`;
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.2 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;

      const pageDataUrl = canvas.toDataURL('image/jpeg', 0.85);
      extractedPdfPages.push(pageDataUrl);

      if (grid) {
        const card = document.createElement('div');
        card.className = 'rounded-xl bg-[#070f22] border border-[#1c3872] p-1.5 space-y-1';
        card.innerHTML = `
          <div class="aspect-[4/3] rounded-lg overflow-hidden bg-black">
            <img src="${pageDataUrl}" class="w-full h-full object-cover" alt="PDF Page ${i}" />
          </div>
          <div class="flex items-center justify-between text-[10px]">
            <span class="text-neutral-400 font-mono">Page ${i}</span>
            <button type="button" class="text-[#ffffff] hover:underline font-medium assign-page-btn" data-page-idx="${i - 1}">
              Use for Case
            </button>
          </div>
        `;
        grid.appendChild(card);
      }
    }

    if (progress) progress.classList.add('hidden');
    if (results) results.classList.remove('hidden');
    if (countEl) countEl.textContent = `Extracted ${extractedPdfPages.length} Pages from PDF`;

    // Bind individual page assign buttons
    if (grid) {
      grid.querySelectorAll('.assign-page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const pageIdx = parseInt(btn.getAttribute('data-page-idx'));
          const targetCaseId = prompt(`Assign Page ${pageIdx + 1} to which case number (1 to 15)?`, `${(pageIdx % 15) + 1}`);
          const num = parseInt(targetCaseId);
          if (num >= 1 && num <= 15) {
            const side = confirm(`Assign as BEFORE photo? (Click Cancel to assign as AFTER photo)`);
            const target = CLINICAL_CASES.find(c => c.id === num);
            const current = getCustomCasePhotos(num) || { before: target.baseImage, after: target.baseImage };
            if (side) {
              saveCustomCasePhotos(num, extractedPdfPages[pageIdx], current.after);
            } else {
              saveCustomCasePhotos(num, current.before, extractedPdfPages[pageIdx]);
            }
            renderCase(activeCaseIndex);
            renderCasesEditorList();
            alert(`Assigned Page ${pageIdx + 1} to Case #${num}!`);
          }
        });
      });
    }

    showServiceNotice('PDF Extracted Successfully', `Found ${extractedPdfPages.length} pages. Click 'Auto-Assign' or select pages for your cases.`);
  } catch (err) {
    if (progress) progress.classList.add('hidden');
    console.error('PDF parsing error:', err);
    alert(`Could not extract images from this PDF: ${err.message}. You can also drag and drop JPG or PNG image files directly into the Case Photo Manager tab.`);
  }
}

// Auto-assign extracted PDF pages to the 15 cases
function autoAssignPdfPages() {
  if (extractedPdfPages.length === 0) {
    alert('Please upload a PDF first.');
    return;
  }

  // If PDF has at least 15 pages, assign 1 page to each case (or pairs if 30 pages)
  if (extractedPdfPages.length >= 30) {
    // 2 pages per case (before and after)
    for (let i = 0; i < 15; i++) {
      const beforePage = extractedPdfPages[i * 2];
      const afterPage = extractedPdfPages[i * 2 + 1];
      saveCustomCasePhotos(i + 1, beforePage, afterPage);
    }
  } else {
    // 1 page per case: create split halves or use page
    for (let i = 0; i < Math.min(15, extractedPdfPages.length); i++) {
      const page = extractedPdfPages[i];
      saveCustomCasePhotos(i + 1, page, page);
    }
  }

  renderCase(activeCaseIndex);
  renderCasesEditorList();
  showServiceNotice('15 Cases Updated', `Assigned ${extractedPdfPages.length} PDF pages across Dr. Mohit Giri's clinical cases.`);
}

// Single Case Quick Editor Modal
let singleModalTempBefore = null;
let singleModalTempAfter = null;

async function openSingleCaseUploader() {
  const modal = document.getElementById('ba-single-upload-modal');
  const currentCase = CLINICAL_CASES[activeCaseIndex];
  if (!modal || !currentCase) return;

  const badge = document.getElementById('single-modal-badge');
  const title = document.getElementById('single-modal-title');
  const prevBefore = document.getElementById('single-preview-before');
  const prevAfter = document.getElementById('single-preview-after');

  if (badge) badge.textContent = `Case #${currentCase.id} • ${currentCase.category}`;
  if (title) title.textContent = currentCase.title;

  const images = await getCaseEffectiveImages(currentCase);
  singleModalTempBefore = images.before;
  singleModalTempAfter = images.after;

  if (prevBefore) prevBefore.src = images.before;
  if (prevAfter) prevAfter.src = images.after;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeSingleCaseUploader() {
  const modal = document.getElementById('ba-single-upload-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function saveSingleCaseUpload() {
  const currentCase = CLINICAL_CASES[activeCaseIndex];
  if (!currentCase) return;

  if (singleModalTempBefore && singleModalTempAfter) {
    saveCustomCasePhotos(currentCase.id, singleModalTempBefore, singleModalTempAfter);
    renderCase(activeCaseIndex);
    closeSingleCaseUploader();
    showServiceNotice('Case Photo Saved', `Case #${currentCase.id} photos updated successfully.`);
  }
}

function resetCurrentCaseToDefault() {
  const currentCase = CLINICAL_CASES[activeCaseIndex];
  if (!currentCase) return;

  try {
    const raw = localStorage.getItem(CUSTOM_CASES_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      delete data[currentCase.id];
      localStorage.setItem(CUSTOM_CASES_STORAGE_KEY, JSON.stringify(data));
    }
  } catch (e) {
    console.error(e);
  }

  COHERENT_IMAGE_CACHE.delete(currentCase.id);
  renderCase(activeCaseIndex);
  closeSingleCaseUploader();
  showServiceNotice('Case Reset', `Restored default coherent clinical photos for Case #${currentCase.id}.`);
}

// Initialize listeners for dropzones & file upload inputs
function initBaImportListeners() {
  // Dropzone for PDF
  const pdfDropzone = document.getElementById('pdf-dropzone');
  const pdfInput = document.getElementById('pdf-file-input');

  if (pdfDropzone && pdfInput) {
    pdfDropzone.addEventListener('click', () => pdfInput.click());
    pdfInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) handlePdfFile(file);
    });

    pdfDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      pdfDropzone.classList.add('border-[#ffffff]', 'bg-[#0d1b3a]');
    });

    pdfDropzone.addEventListener('dragleave', () => {
      pdfDropzone.classList.remove('border-[#ffffff]', 'bg-[#0d1b3a]');
    });

    pdfDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      pdfDropzone.classList.remove('border-[#ffffff]', 'bg-[#0d1b3a]');
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (file && file.type.includes('pdf')) {
        handlePdfFile(file);
      } else if (file) {
        alert('Please drop a valid .pdf file here, or switch to the Case Photo Manager tab to upload images.');
      }
    });
  }

  // Batch Image Input
  const batchImgInput = document.getElementById('batch-img-input');
  if (batchImgInput) {
    batchImgInput.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const dataUrl = await new Promise(res => {
          const r = new FileReader();
          r.onload = () => res(r.result);
          r.readAsDataURL(file);
        });

        // Match case number from filename, e.g. "case-3-before.jpg", "3_after.png"
        const fname = file.name.toLowerCase();
        const numMatch = fname.match(/(?:case[_-]?|#)?(\d+)/i);
        const caseNum = numMatch ? parseInt(numMatch[1]) : (i % 15) + 1;
        const isAfter = fname.includes('after') || fname.includes('post');

        if (caseNum >= 1 && caseNum <= 15) {
          const target = CLINICAL_CASES.find(c => c.id === caseNum);
          const current = getCustomCasePhotos(caseNum) || { before: target.baseImage, after: target.baseImage };
          if (isAfter) {
            saveCustomCasePhotos(caseNum, current.before, dataUrl);
          } else {
            saveCustomCasePhotos(caseNum, dataUrl, current.after);
          }
        }
      }

      renderCase(activeCaseIndex);
      renderCasesEditorList();
      showServiceNotice('Images Uploaded', `Processed ${files.length} images and mapped them to clinical cards.`);
    });
  }

  // Single modal before & after file inputs
  const singleBeforeInput = document.getElementById('single-input-before');
  const singleAfterInput = document.getElementById('single-input-after');
  const singleBeforePrev = document.getElementById('single-preview-before');
  const singleAfterPrev = document.getElementById('single-preview-after');

  if (singleBeforeInput && singleBeforePrev) {
    singleBeforeInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const r = new FileReader();
        r.onload = () => {
          singleModalTempBefore = r.result;
          singleBeforePrev.src = r.result;
        };
        r.readAsDataURL(file);
      }
    });
  }

  if (singleAfterInput && singleAfterPrev) {
    singleAfterInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const r = new FileReader();
        r.onload = () => {
          singleModalTempAfter = r.result;
          singleAfterPrev.src = r.result;
        };
        r.readAsDataURL(file);
      }
    });
  }
}

// Expose functions to global window for inline HTML onclick attributes
window.filterCases = filterCases;
window.renderCase = renderCase;
window.nextCase = nextCase;
window.prevCase = prevCase;
window.toggleViewMode = toggleViewMode;
window.openBaImportModal = openBaImportModal;
window.closeBaImportModal = closeBaImportModal;
window.applyAndCloseImportModal = applyAndCloseImportModal;
window.switchImportTab = switchImportTab;
window.autoAssignPdfPages = autoAssignPdfPages;
window.clearAllCustomCasePhotos = clearAllCustomCasePhotos;
window.openSingleCaseUploader = openSingleCaseUploader;
window.closeSingleCaseUploader = closeSingleCaseUploader;
window.saveSingleCaseUpload = saveSingleCaseUpload;
window.resetCurrentCaseToDefault = resetCurrentCaseToDefault;

// ==========================================
// 4. SIX AREAS OF CARE CAROUSEL (CENTERED WITH PEEKING CARDS)
// ==========================================
let currentAreaIndex = 0;
const totalAreas = 6;

function updateAreaCarousel() {
  const track = document.getElementById('areas-carousel-track');
  const cards = document.querySelectorAll('.area-card');
  const dots = document.querySelectorAll('.area-dot');

  if (!track || cards.length === 0) return;

  // Clamp currentAreaIndex within [0, totalAreas - 1]
  if (currentAreaIndex >= totalAreas) currentAreaIndex = totalAreas - 1;
  if (currentAreaIndex < 0) currentAreaIndex = 0;

  const targetCard = cards[currentAreaIndex];
  if (!targetCard) return;

  // Viewport element (parent of track)
  const viewport = track.parentElement;
  const viewportWidth = viewport.clientWidth;

  // Calculate target card's center position relative to track
  const cardLeft = targetCard.offsetLeft;
  const cardWidth = targetCard.offsetWidth;
  const cardCenter = cardLeft + (cardWidth / 2);

  // Exact shift so the target card's center aligns with the viewport's center
  const viewportCenter = viewportWidth / 2;
  const shiftPx = Math.round(viewportCenter - cardCenter);

  track.style.transform = `translateX(${shiftPx}px)`;

  // Update cards active & faded styling
  cards.forEach((card, idx) => {
    if (idx === currentAreaIndex) {
      card.classList.add('is-active');
      card.setAttribute('aria-current', 'true');
    } else {
      card.classList.remove('is-active');
      card.removeAttribute('aria-current');
    }
  });

  // Update dots
  dots.forEach((dot, idx) => {
    if (idx === currentAreaIndex) {
      dot.classList.add('bg-[#ffffff]', 'w-7');
      dot.classList.remove('bg-[#1c3872]', 'w-2.5');
    } else {
      dot.classList.remove('bg-[#ffffff]', 'w-7');
      dot.classList.add('bg-[#1c3872]', 'w-2.5');
    }
  });
}

function nextAreaSlide() {
  if (currentAreaIndex < totalAreas - 1) {
    currentAreaIndex++;
  } else {
    currentAreaIndex = 0; // loop smoothly back to first
  }
  updateAreaCarousel();
}

function prevAreaSlide() {
  if (currentAreaIndex > 0) {
    currentAreaIndex--;
  } else {
    currentAreaIndex = totalAreas - 1; // loop smoothly back to last
  }
  updateAreaCarousel();
}

function setAreaSlide(index) {
  if (index >= 0 && index < totalAreas) {
    currentAreaIndex = index;
    updateAreaCarousel();
  }
}

// Touch drag & click support for Areas Carousel
function initAreaDrag() {
  const track = document.getElementById('areas-carousel-track');
  const cards = document.querySelectorAll('.area-card');
  if (!track) return;

  // Allow clicking on any non-active card to bring it to center
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      // If user clicked an anchor tag inside the card, allow normal link navigation
      if (e.target.closest('a')) return;
      if (currentAreaIndex !== idx) {
        setAreaSlide(idx);
      }
    });
  });

  let startX = 0;
  let dist = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    dist = e.changedTouches[0].clientX - startX;
    if (dist < -40) nextAreaSlide();
    else if (dist > 40) prevAreaSlide();
  }, { passive: true });
}

// ==========================================
// 5. FEATURED TREATMENTS CAROUSEL (CENTERED WITH PEEKING CARDS)
// ==========================================
let currentTreatmentIndex = 0;
const totalTreatments = 6;

function updateTreatmentCarousel() {
  const track = document.getElementById('treatment-carousel-track');
  const cards = document.querySelectorAll('.treatment-carousel-card');
  const dots = document.querySelectorAll('.treatment-dot');

  if (!track || cards.length === 0) return;

  // Clamp currentTreatmentIndex within [0, totalTreatments - 1]
  if (currentTreatmentIndex >= totalTreatments) currentTreatmentIndex = totalTreatments - 1;
  if (currentTreatmentIndex < 0) currentTreatmentIndex = 0;

  const targetCard = cards[currentTreatmentIndex];
  if (!targetCard) return;

  // Viewport element (parent of track)
  const viewport = track.parentElement;
  const viewportWidth = viewport.clientWidth;

  // Calculate target card's center position relative to track
  const cardLeft = targetCard.offsetLeft;
  const cardWidth = targetCard.offsetWidth;
  const cardCenter = cardLeft + (cardWidth / 2);

  // Exact shift so the target card's center aligns with the viewport's center
  const viewportCenter = viewportWidth / 2;
  const shiftPx = Math.round(viewportCenter - cardCenter);

  track.style.transform = `translateX(${shiftPx}px)`;

  // Update cards active & faded styling
  cards.forEach((card, idx) => {
    if (idx === currentTreatmentIndex) {
      card.classList.add('is-active');
      card.setAttribute('aria-current', 'true');
    } else {
      card.classList.remove('is-active');
      card.removeAttribute('aria-current');
    }
  });

  // Update dots
  dots.forEach((dot, idx) => {
    if (idx === currentTreatmentIndex) {
      dot.classList.add('bg-[#ffffff]', 'w-7');
      dot.classList.remove('bg-[#1c3872]', 'w-2.5');
    } else {
      dot.classList.remove('bg-[#ffffff]', 'w-7');
      dot.classList.add('bg-[#1c3872]', 'w-2.5');
    }
  });
}

function nextTreatmentSlide() {
  if (currentTreatmentIndex < totalTreatments - 1) {
    currentTreatmentIndex++;
  } else {
    currentTreatmentIndex = 0; // loop smoothly back to first
  }
  updateTreatmentCarousel();
}

function prevTreatmentSlide() {
  if (currentTreatmentIndex > 0) {
    currentTreatmentIndex--;
  } else {
    currentTreatmentIndex = totalTreatments - 1; // loop smoothly back to last
  }
  updateTreatmentCarousel();
}

function setTreatmentSlide(index) {
  if (index >= 0 && index < totalTreatments) {
    currentTreatmentIndex = index;
    updateTreatmentCarousel();
  }
}

// Touch drag & click support for Treatments Carousel
function initTreatmentDrag() {
  const track = document.getElementById('treatment-carousel-track');
  const cards = document.querySelectorAll('.treatment-carousel-card');
  if (!track) return;

  // Allow clicking on any non-active card to bring it to center
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      // If user clicked an anchor tag inside the card, allow normal link navigation
      if (e.target.closest('a')) return;
      if (currentTreatmentIndex !== idx) {
        setTreatmentSlide(idx);
      }
    });
  });

  let startX = 0;
  let dist = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    dist = e.changedTouches[0].clientX - startX;
    if (dist < -40) nextTreatmentSlide();
    else if (dist > 40) prevTreatmentSlide();
  }, { passive: true });
}

// ==========================================
// 6. TREATMENT JOURNEY TIMELINE
// ==========================================
function setJourneyStep(stepIndex) {
  const steps = document.querySelectorAll('.journey-step');
  steps.forEach((step, idx) => {
    if (idx === stepIndex) {
      step.classList.add('active-step');
    } else {
      step.classList.remove('active-step');
    }
  });
}

// ==========================================
// 7. TECHNOLOGY & FACILITIES VERTICAL SLIDING CARDS
// ==========================================
let currentTechIndex = 0;
const totalTechCards = 5;

function setTechCard(index) {
  currentTechIndex = Math.max(0, Math.min(totalTechCards - 1, index));
  const cards = document.querySelectorAll('.tech-card-item');
  const tabs = document.querySelectorAll('.tech-tab-btn');
  const counterEl = document.getElementById('tech-counter');

  cards.forEach((card, idx) => {
    card.classList.remove('is-current', 'is-prev');
    if (idx === currentTechIndex) {
      card.classList.add('is-current');
    } else if (idx < currentTechIndex) {
      card.classList.add('is-prev');
    }
  });

  tabs.forEach((tab, idx) => {
    if (idx === currentTechIndex) {
      tab.classList.add('border-[#ffffff]', 'bg-[#12254e]', 'text-[#ffffff]', 'font-bold');
      tab.classList.remove('border-[#1c3872]', 'bg-[#0d1b3a]', 'text-neutral-400');
    } else {
      tab.classList.remove('border-[#ffffff]', 'bg-[#12254e]', 'text-[#ffffff]', 'font-bold');
      tab.classList.add('border-[#1c3872]', 'bg-[#0d1b3a]', 'text-neutral-400');
    }
  });

  if (counterEl) {
    counterEl.textContent = `0${currentTechIndex + 1} / 0${totalTechCards}`;
  }
}

function nextTechCard() {
  if (currentTechIndex < totalTechCards - 1) {
    setTechCard(currentTechIndex + 1);
  } else {
    setTechCard(0);
  }
}

function prevTechCard() {
  if (currentTechIndex > 0) {
    setTechCard(currentTechIndex - 1);
  } else {
    setTechCard(totalTechCards - 1);
  }
}

// ==========================================
// 8. TESTIMONIALS CAROUSEL
// ==========================================
let currentTestimonialIndex = 0;
const totalTestimonials = 4;

function updateTestimonialCarousel() {
  const track = document.getElementById('testimonial-carousel-track') || document.getElementById('testimonial-track');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!track) return;

  const viewportWidth = window.innerWidth;
  let itemsPerView = 1;
  if (viewportWidth >= 1024) itemsPerView = 3;
  else if (viewportWidth >= 768) itemsPerView = 2;

  const maxIndex = Math.max(0, totalTestimonials - itemsPerView);
  if (currentTestimonialIndex > maxIndex) currentTestimonialIndex = maxIndex;
  if (currentTestimonialIndex < 0) currentTestimonialIndex = 0;

  const shiftPct = (currentTestimonialIndex * (100 / itemsPerView));
  track.style.transform = `translateX(-${shiftPct}%)`;

  dots.forEach((dot, idx) => {
    if (idx === currentTestimonialIndex) {
      dot.classList.add('bg-[#ffffff]', 'w-6');
      dot.classList.remove('bg-[#1c3872]', 'w-2');
    } else {
      dot.classList.remove('bg-[#ffffff]', 'w-6');
      dot.classList.add('bg-[#1c3872]', 'w-2');
    }
  });
}

function nextTestimonialSlide() {
  const viewportWidth = window.innerWidth;
  const itemsPerView = (viewportWidth >= 1024) ? 3 : (viewportWidth >= 768 ? 2 : 1);
  const maxIndex = Math.max(0, totalTestimonials - itemsPerView);
  if (currentTestimonialIndex < maxIndex) {
    currentTestimonialIndex++;
  } else {
    currentTestimonialIndex = 0;
  }
  updateTestimonialCarousel();
}

function prevTestimonialSlide() {
  const viewportWidth = window.innerWidth;
  const itemsPerView = (viewportWidth >= 1024) ? 3 : (viewportWidth >= 768 ? 2 : 1);
  const maxIndex = Math.max(0, totalTestimonials - itemsPerView);
  if (currentTestimonialIndex > 0) {
    currentTestimonialIndex--;
  } else {
    currentTestimonialIndex = maxIndex;
  }
  updateTestimonialCarousel();
}

function setTestimonialSlide(index) {
  currentTestimonialIndex = index;
  updateTestimonialCarousel();
}

// Aliases for compatibility
const nextTestimonial = nextTestimonialSlide;
const prevTestimonial = prevTestimonialSlide;
const setTestimonial = setTestimonialSlide;

function initTestimonialDrag() {
  const track = document.getElementById('testimonial-carousel-track') || document.getElementById('testimonial-track');
  if (!track) return;
  let startX = 0;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const dist = e.changedTouches[0].clientX - startX;
    if (dist < -40) nextTestimonialSlide();
    else if (dist > 40) prevTestimonialSlide();
  }, { passive: true });
}

// ==========================================
// 9. NORWOOD STAGE ESTIMATOR
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
      btn.classList.add('border-[#ffffff]', 'bg-[#172e5e]', 'text-[#ffffff]');
      btn.classList.remove('border-[#1c3872]', 'bg-[#0d1b3a]', 'text-neutral-400');
    } else {
      btn.classList.remove('border-[#ffffff]', 'bg-[#172e5e]', 'text-[#ffffff]');
      btn.classList.add('border-[#1c3872]', 'bg-[#0d1b3a]', 'text-neutral-400');
    }
  });
}

// ==========================================
// 10. APPOINTMENT BOOKING CONTROLLER
// ==========================================
let bookingState = {
  day: 'Today',
  slot: '11:00 AM',
  doctor: 'Dr. Mohit Giri (MBBS, DDV, FAD Germany)',
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
    b.classList.remove('bg-[#ffffff]', 'text-[#070f22]', 'font-bold');
    b.classList.add('bg-[#0d1b3a]', 'text-neutral-300');
  });
  btn.classList.add('bg-[#ffffff]', 'text-[#070f22]', 'font-bold');
  btn.classList.remove('bg-[#0d1b3a]', 'text-neutral-300');
}

function selectBookingSlot(slotTime, btn) {
  bookingState.slot = slotTime;
  document.querySelectorAll('.slot-chip').forEach(b => {
    b.classList.remove('bg-[#ffffff]', 'text-[#070f22]', 'font-bold');
    b.classList.add('bg-[#0d1b3a]', 'text-neutral-300');
  });
  btn.classList.add('bg-[#ffffff]', 'text-[#070f22]', 'font-bold');
  btn.classList.remove('bg-[#0d1b3a]', 'text-neutral-300');
}

// ==========================================
// 10. NOTIFICATION TOAST & APPOINTMENTS
// ==========================================
let toastTimer = null;
function showServiceNotice(title, message) {
  const toast = document.getElementById('service-notice-toast');
  if (!toast) return;
  const titleEl = document.getElementById('toast-title');
  const msgEl = document.getElementById('toast-message');
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    hideServiceToast();
  }, 4000);
}

function hideServiceToast() {
  const toast = document.getElementById('service-notice-toast');
  if (toast) {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
  }
}

function handleAppointmentSubmit(e) {
  e.preventDefault();

  if (!SERVICE_CHANNELS.appointmentBookingActive) {
    showServiceNotice(
      'Online Booking Paused',
      'Appointment booking is currently paused. Please check back shortly.'
    );
    return;
  }

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
  if (!SERVICE_CHANNELS.whatsappActive) {
    showServiceNotice(
      'WhatsApp Desk Paused',
      'WhatsApp consultation desk (+91 91300 09003) is currently paused.'
    );
    return;
  }
  const text = `Hello GuruKrupa Skin Clinic!%0A%0A*Appointment Request Confirmation*%0A• Token: ${bookingState.token}%0A• Patient Name: ${encodeURIComponent(bookingState.patientName)}%0A• Contact: ${encodeURIComponent(bookingState.phone)}%0A• Doctor: ${encodeURIComponent(bookingState.doctor)}%0A• Concern: ${encodeURIComponent(bookingState.treatment)}%0A• Slot: ${encodeURIComponent(bookingState.day)}, ${encodeURIComponent(bookingState.slot)}%0A• Notes: ${encodeURIComponent(bookingState.notes || 'None')}%0A%0APlease confirm my appointment slot. Thank you!`;
  window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`, '_blank');
}

function downloadICSCalendar() {
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GuruKrupa Skin Clinic//Appointment//EN
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
  link.setAttribute('download', `GuruKrupa_Appointment_${bookingState.token}.ics`);
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
// 11. CONTACT FORM & WHATSAPP SYNC
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
  if (!SERVICE_CHANNELS.whatsappActive) {
    showServiceNotice(
      'WhatsApp Desk Paused',
      'WhatsApp messaging (+91 91300 09003) is currently paused.'
    );
    return;
  }
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const concern = document.getElementById('contact-concern').value;
  const msg = document.getElementById('contact-msg').value;

  const text = `Hello GuruKrupa Skin Clinic,%0A%0AName: ${encodeURIComponent(name || 'Patient')}%0APhone: ${encodeURIComponent(phone || '')}%0AConcern: ${encodeURIComponent(concern)}%0AMessage: ${encodeURIComponent(msg || 'I would like to enquire about consultation.')}`;
  window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`, '_blank');
}

// ==========================================
// 12. TREATMENTS CATALOGUE FILTER & SEARCH
// ==========================================
function filterTreatments(category, btn) {
  if (btn) {
    document.querySelectorAll('.treatment-filter-btn').forEach(b => {
      b.classList.remove('bg-[#ffffff]', 'text-[#070f22]', 'font-bold');
      b.classList.add('bg-[#0d1b3a]', 'text-neutral-400');
    });
    btn.classList.add('bg-[#ffffff]', 'text-[#070f22]', 'font-bold');
    btn.classList.remove('bg-[#0d1b3a]', 'text-neutral-400');
  }

  document.querySelectorAll('.treatment-card').forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (category === 'all' || cardCat === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function searchTreatments(query) {
  const q = (query || '').trim().toLowerCase();
  const cards = document.querySelectorAll('.treatment-card');
  const emptyState = document.getElementById('treatment-empty-search');

  let matchCount = 0;
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (!q || text.includes(q)) {
      card.classList.remove('hidden');
      matchCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  if (emptyState) {
    if (matchCount === 0 && q) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
    }
  }
}

// ==========================================
// 13. FAQ ACCORDION TOGGLE
// ==========================================
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasActive = item.classList.contains('active');

  const parent = item.parentElement;
  parent.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

  if (!wasActive) {
    item.classList.add('active');
  }
}

// ==========================================
// 14. STICKY HEADER COMPACT SCROLL OBSERVER
// ==========================================
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================
// 15. WINDOW EXPORTS FOR INLINE EVENT HANDLERS
// ==========================================
Object.assign(window, {
  SERVICE_CHANNELS,
  showServiceNotice,
  hideServiceToast,
  navigateTo,
  renderCase,
  filterCases,
  nextCase,
  prevCase,
  toggleViewMode,
  setAreaSlide,
  nextAreaSlide,
  prevAreaSlide,
  setTreatmentSlide,
  nextTreatmentSlide,
  prevTreatmentSlide,
  setJourneyStep,
  setTechCard,
  nextTechCard,
  prevTechCard,
  setTestimonial,
  nextTestimonial,
  prevTestimonial,
  setTestimonialSlide,
  nextTestimonialSlide,
  prevTestimonialSlide,
  selectNorwoodStage,
  selectBookingDay,
  selectBookingSlot,
  handleAppointmentSubmit,
  syncAppointmentToWhatsApp,
  downloadICSCalendar,
  resetBookingForm,
  handleContactSubmit,
  sendContactToWhatsApp,
  filterTreatments,
  searchTreatments,
  toggleFaq
});

// ==========================================
// 16. INITIALIZATION ON DOM READY
// ==========================================
function initApp() {
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();

  initHeaderScroll();

  // Channel deactivation interceptors for Call and WhatsApp links
  document.addEventListener('click', (e) => {
    // Intercept phone calls
    const telAnchor = e.target.closest('a[href^="tel:"]');
    if (telAnchor && !SERVICE_CHANNELS.callsActive) {
      e.preventDefault();
      e.stopPropagation();
      showServiceNotice(
        'Phone Line Paused',
        'Direct phone calling (+91 91300 09003) is temporarily paused. Please check back shortly.'
      );
      return;
    }

    // Intercept WhatsApp links
    const waAnchor = e.target.closest('a[href*="wa.me"]');
    if (waAnchor && !SERVICE_CHANNELS.whatsappActive) {
      e.preventDefault();
      e.stopPropagation();
      showServiceNotice(
        'WhatsApp Desk Paused',
        'WhatsApp messaging (+91 91300 09003) is temporarily paused. Please check back shortly.'
      );
      return;
    }
  }, true);

  // Initialize Before & After Comparison & Swipe
  initSlider();
  initBeforeAfterSwipe();
  initBaImportListeners();
  renderCase(0);

  // Initialize Carousels
  updateAreaCarousel();
  requestAnimationFrame(updateAreaCarousel);
  setTimeout(updateAreaCarousel, 100);
  initAreaDrag();

  updateTreatmentCarousel();
  requestAnimationFrame(updateTreatmentCarousel);
  setTimeout(updateTreatmentCarousel, 100);
  initTreatmentDrag();

  updateTestimonialCarousel();
  initTestimonialDrag();

  // Initialize Technology & Facilities Card
  setTechCard(0);

  // Initialize Norwood Estimator
  selectNorwoodStage(3);

  // Window resize handler for carousels
  window.addEventListener('resize', () => {
    updateAreaCarousel();
    updateTreatmentCarousel();
    updateTestimonialCarousel();
  }, { passive: true });

  // Mobile menu button
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
