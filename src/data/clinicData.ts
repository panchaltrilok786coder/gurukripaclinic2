import { ClinicalCase, Doctor, FAQItem, MachineEquipment, Testimonial, Treatment } from '../types';

export const CLINIC_INFO = {
  name: 'Gurukrupa Skin Clinic',
  nameMarathi: 'गुरुकृपा स्किन क्लिनिक',
  taglines: [
    'Skin, hair & confidence.',
    'Skin that speaks for itself.',
    'A clinic built around you. Calm, unhurried consultations with plain-language answers.',
    'Precision care. Honest advice.',
    'Real work. Real results.'
  ],
  rating: 4.8,
  reviewCount: 51,
  yearsOfExperience: 10,
  consultationFee: 500,
  address: {
    line1: 'Shop No. 20, Siddhivinayak Utopia',
    line2: 'opp. Redcliff School, Sector 20',
    area: 'Ulwe, Wahal',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    pincode: '410206',
    full: 'Shop No. 20, Siddhivinayak Utopia, opp. Redcliff School, Sector 20, Ulwe, Wahal, Navi Mumbai, Maharashtra 410206'
  },
  phone: '+91 98200 12345',
  phoneDisplay: '+91 98200 12345',
  whatsapp: '919820012345',
  email: 'care@gurukrupaskinclinic.com',
  timings: {
    days: 'Monday – Sunday (All 7 Days)',
    morning: '10:30 AM – 02:30 PM',
    evening: '05:30 PM – 10:00 PM',
  },
  morningSlots: [
    '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
    '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM'
  ],
  eveningSlots: [
    '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM',
    '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
  ]
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-mohit-giri',
    name: 'Dr. Mohit Giri',
    nameMarathi: 'डॉ. मोहित गिरी',
    title: 'Lead Dermatologist & Dermato-Surgeon',
    qualifications: 'MBBS, MD - Dermatology, Venereology & Leprosy',
    specialization: 'Clinical Dermatology, Hair Restoration & Laser Surgery',
    experienceYears: 10,
    registrationNo: 'MMC-2014/05/2198',
    quote: "Good skin work needs time. I'd rather listen carefully than rush you through three appointments.",
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    bio: 'Dr. Mohit Giri is a dedicated dermatologist and laser surgeon practicing in Ulwe, Navi Mumbai. With a post-graduate MD degree in Dermatology from a premier government medical college and over a decade of hands-on procedural experience, Dr. Giri is renowned for his evidence-based diagnostics, ethical treatment plans without commercial pressure, and precise execution in hair restoration and laser surgery.',
    focusAreas: [
      'Hair Loss Evaluation, PRP & FUE Hair Restoration',
      'Acne Scar Revision (Subcision, MNRF & Fractional Laser)',
      'Aesthetic & Pigment Laser Technologies (Picosecond, Q-Switched)',
      'Chronic Dermatological Conditions (Psoriasis, Vitiligo, Eczema)'
    ],
    education: [
      'MBBS - Grant Government Medical College & Sir J.J. Group of Hospitals, Mumbai',
      'MD Dermatology, Venereology & Leprosy - Topiwala National Medical College & BYL Nair Hospital',
      'Fellowship in Dermatosurgery & Hair Restoration Surgery',
      'Member of Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)'
    ]
  },
  {
    id: 'dr-pooja-giri',
    name: 'Dr. Pooja Giri',
    nameMarathi: 'डॉ. पूजा गिरी',
    title: 'Consultant Dermatologist & Aesthetician',
    qualifications: 'MBBS, DNB Dermatology',
    specialization: 'Cosmetic Dermatology, Anti-Aging & Pediatric Skin Care',
    experienceYears: 9,
    registrationNo: 'MMC-2015/08/3412',
    quote: "Healthy, luminous skin is achieved through clinical scientific protocols, gentle barrier repair, and personalized attention.",
    image: 'https://images.unsplash.com/photo-1594824813576-965352c3c976?q=80&w=800&auto=format&fit=crop',
    bio: 'Dr. Pooja Giri brings specialized clinical expertise in medical aesthetics, skin rejuvenation, chemical peels, and pediatric dermatology. She focuses on subtle, natural-looking aesthetic transformations and long-term epidermal barrier wellness.',
    focusAreas: [
      'Medi-HydraFacial & Advanced Medical Peels',
      'Anti-Aging, Collagen Remodeling & Skin Tightening',
      'Pediatric & Allergy Dermatology',
      'Melasma & Post-Inflammatory Hyperpigmentation Toning'
    ],
    education: [
      'MBBS - Maharashtra University of Health Sciences (MUHS)',
      'DNB Dermatology - National Board of Examinations (NBE), New Delhi',
      'Certified Clinical Aesthetician & Chemical Peels Specialist',
      'Active Life Member of IADVL & Cosmetic Dermatology Society of India (CDSI)'
    ]
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'hair-transplant-restoration',
    name: 'Hair Restoration & FUE Hair Transplant',
    category: 'hair',
    priceStarting: 25000,
    duration: '4 - 6 Hours',
    recommendedSessions: '1 Procedure (+ 4 Maintenance PRP)',
    tagline: 'Permanent, natural-density follicular unit extraction & hair growth rejuvenation',
    description: 'Advanced micro-motor FUE (Follicular Unit Extraction) combined with Sapphire slit incisions to restore receding hairlines, temple thinning, and crown baldness with zero linear scarring and natural graft angling.',
    benefits: [
      'Permanent, lifelong growing natural hair',
      'Micro-sapphire blades for minimal trauma and rapid healing',
      'High graft survival rate (>98%) with hypothermic holding solution',
      'Artistically designed natural hairline matching your facial symmetry'
    ],
    idealFor: ['Male & Female Pattern Baldness', 'Receding Hairlines', 'Thinning Crown', 'Patchy Hair Loss'],
    downtime: '3 - 5 days minimal downtime',
    isPopular: true,
    isHairFeature: true
  },
  {
    id: 'hair-fall-prp-gfc',
    name: 'Hair Fall Control & PRP / GFC Therapy',
    category: 'hair',
    priceStarting: 2500,
    duration: '45 Minutes',
    recommendedSessions: '4 - 6 Sessions (Monthly)',
    tagline: 'Growth Factor Concentrate (GFC) and Platelet-Rich Plasma to awaken dormant follicles',
    description: 'Autologous platelet-rich plasma and second-generation GFC enriched with high-concentration natural growth factors (VEGF, PDGF, EGF) micro-injected into the scalp dermis to stop shedding and thicken thinning shafts.',
    benefits: [
      'Reduces active shedding within 2 to 3 sessions',
      'Stimulates miniaturized hair follicles into active anagen growth',
      '100% autologous biological therapy with zero risk of allergic reaction',
      'Pairs synergistically with medical DHT blockers'
    ],
    idealFor: ['Early Stage Hair Thinning', 'Telogen Effluvium', 'Post-Transplant Density Boost'],
    downtime: 'Zero downtime; resume daily routine immediately',
    isPopular: true
  },
  {
    id: 'pimples-acne-scars',
    name: 'Pimples & Acne Scars Clearance',
    category: 'medical',
    priceStarting: 1200,
    duration: '45 - 60 Minutes',
    recommendedSessions: '3 - 4 Sessions',
    tagline: 'Customized chemical peels, microneedling RF, and fractional laser therapy',
    description: 'A multi-modal dermatological protocol targeting active acne breakouts, reducing P. acnes bacteria, and remodeling deep rolling, boxcar, and ice-pick scars using subcision and fractional laser resurfacing.',
    benefits: [
      'Eliminates active cystic acne and inflammation',
      'Fades post-acne dark marks (PIH) and erythema (PIE)',
      'Subcision unbinds fibrotic scar bands underneath the skin',
      'Stimulates fresh neocollagenesis to raise pitted scars'
    ],
    idealFor: ['Pitted Acne Scars', 'Active Cystic Acne', 'Clogged Pores & Blemishes'],
    downtime: '1 - 3 days mild erythema',
    isPopular: true
  },
  {
    id: 'laser-hair-reduction',
    name: 'Painless Laser Hair Reduction',
    category: 'aesthetic',
    priceStarting: 1500,
    duration: '30 - 60 Minutes',
    recommendedSessions: '6 - 8 Sessions',
    tagline: 'Painless triple-wavelength Diode laser hair removal for long-lasting smooth skin',
    description: 'Gold-standard triple-wavelength (755nm + 808nm + 1064nm) laser system with integrated sub-zero ice-contact sapphire tip, calibrated specifically for safe, burn-free treatment on Indian skin types (Fitzpatrick III-V).',
    benefits: [
      'Up to 90% permanent hair reduction across face and body',
      'Contact sapphire cooling prevents pain, burns, and pigmentation',
      'Effectively treats ingrown hairs, folliculitis, and coarse stubble',
      'Smooth, silky skin without razor bumps or waxing irritation'
    ],
    idealFor: ['Facial Hair (Upper Lip, Chin)', 'Underarms & Bikini', 'Full Arms & Legs', 'Chest & Back'],
    downtime: 'Zero downtime',
    isPopular: true
  },
  {
    id: 'pigmentation-melasma',
    name: 'Pigmentation & Melasma Toning',
    category: 'aesthetic',
    priceStarting: 2000,
    duration: '45 Minutes',
    recommendedSessions: '4 - 5 Sessions',
    tagline: 'Advanced Picosecond laser and tailored topical regimes for stubborn dark spots and sun tan',
    description: 'Ultra-short picosecond photomechanical acoustic pulses shatter deep dermal melanin deposits into dust-like particles without causing thermal injury or rebound pigmentation.',
    benefits: [
      'Evens out patchy skin tone and stubborn butterfly melasma',
      'Clears deep sun damage, freckles, and age spots',
      'No thermal damage, preventing post-inflammatory darkening',
      'Combined with medical-grade barrier repair serums'
    ],
    idealFor: ['Melasma', 'Dark Sun Spots', 'Tan Removal', 'Under-Eye Dark Circles'],
    downtime: 'Zero to few hours mild flush'
  },
  {
    id: 'medi-hydrafacial-glow',
    name: 'Medi-HydraFacial & Glow',
    category: 'aesthetic',
    priceStarting: 2200,
    duration: '50 Minutes',
    recommendedSessions: 'Monthly Maintenance',
    tagline: 'Deep cleansing, vortex pore extraction, hydration boost, and antioxidant infusion',
    description: 'Clinical 14-in-1 medical grade hydrodynamic treatment combining vortex vacuum extraction of sebum and blackheads with deep multi-molecular hyaluronic acid and peptide nourishment.',
    benefits: [
      'Painless blackhead & sebum extraction without manual squeezing',
      'Infuses medical-grade antioxidants and hyaluronic acid',
      'Immediate dewy radiance and camera-ready clarity',
      'Smoothens rough skin texture and refines congested pores'
    ],
    idealFor: ['Dull, Tired Skin', 'Enlarged & Clogged Pores', 'Pre-Event & Bridal Glow'],
    downtime: 'Zero downtime'
  },
  {
    id: 'anti-aging-skin-tightening',
    name: 'Anti-Aging & Skin Tightening',
    category: 'aesthetic',
    priceStarting: 3000,
    duration: '60 Minutes',
    recommendedSessions: '3 - 4 Sessions',
    tagline: 'Radiofrequency energy to stimulate deep collagen, firm sagging skin, and contour jawline',
    description: 'Non-surgical radiofrequency heating delivers controlled thermal energy into the deep reticular dermis, contracting loose collagen fibers and triggering long-term tissue tightening.',
    benefits: [
      'Sharpens jawline and tightens mild skin laxity',
      'Smoothens fine lines around eyes, mouth, and neck',
      'Feels like a warm therapeutic massage with zero needles',
      'Results build continuously over 8 to 12 weeks'
    ],
    idealFor: ['Mild Facial Sagging', 'Double Chin & Jowls', 'Nasolabial Creases', 'Fine Lines'],
    downtime: 'Walk in, walk out; zero downtime'
  }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 15,
    title: 'Skin Texture & Open Pores Refinement',
    category: 'Texture & Pores',
    procedure: 'Carbon Laser Peel & Collagen Rejuvenation',
    sessions: '3 Sessions',
    beforeImg: 'https://images.unsplash.com/photo-1512290900672-1f4142cfeb98?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&auto=format&fit=crop',
    description: 'Patient presented with severe open pore congestion and uneven texture across cheekbones. A combination of liquid carbon application with Q-switched laser vaporization delivered refined pore structure and smooth surface reflectivity.',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  },
  {
    id: 14,
    title: 'Pigmentation & Dark Spots Toning',
    category: 'Pigmentation & Laser',
    procedure: 'Q-Switched & Picosecond Laser Toning',
    sessions: '5 Sessions',
    beforeImg: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=700&auto=format&fit=crop',
    description: 'Diffuse dermal epidermal hyperpigmentation and chronic sun-induced dark patches treated with photoacoustic picosecond pulses, resulting in uniform skin tone and luminous clarity.',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  },
  {
    id: 13,
    title: 'Hair Fall Control & Hair Growth Stimulation',
    category: 'Hair & Scalp',
    procedure: 'PRP & GFC Hair Growth Therapy',
    sessions: '6 Sessions (12 Months)',
    beforeImg: 'https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=700&auto=format&fit=crop',
    description: 'Male patient, Age 48, presenting with Norwood Stage 3 vertex thinning and accelerated shed rate. Underwent 6 monthly sessions of autologous high-density PRP combined with topical finasteride/minoxidil protocol.',
    patientAge: 'Male, Age 48',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  },
  {
    id: 12,
    title: 'Acne Marks & Post-Inflammatory Redness',
    category: 'Acne & Scars',
    procedure: 'MNRF & Advanced Dermatological Peels',
    sessions: '3 Sessions',
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=700&auto=format&fit=crop',
    description: 'Severe post-inflammatory erythema (red spots) after cystic acne flare-ups. Treated with targeted salicylic-mandelic chemical peeling followed by insulated microneedling RF to rebuild dermal matrix.',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  },
  {
    id: 11,
    title: 'Acne & Acne Scars Clearance',
    category: 'Acne & Scars',
    procedure: 'Picosecond Laser & Salicylic Peels',
    sessions: '4 Sessions',
    beforeImg: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=700&auto=format&fit=crop',
    description: 'Active breakout suppression paired with low-fluence picosecond toning to prevent post-blemish pitting and restore clear, calm epidermal barrier health.',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  },
  {
    id: 10,
    title: 'Deep Acne Scar Remodeling & Texture Revision',
    category: 'Acne & Scars',
    procedure: 'Fractional Laser & Collagen Remodeling',
    sessions: '4 Sessions',
    beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop',
    description: 'Severe bilateral boxcar and rolling acne scars treated with deep micro-fractional ablative columns, allowing healthy surrounding tissue to bridge and elevate depressed scars.',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  },
  {
    id: 4,
    title: 'Hyperpigmentation & Melasma Toning',
    category: 'Pigmentation & Laser',
    procedure: 'Picosecond Laser Toning & Depigmentation',
    sessions: '4 Sessions',
    beforeImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=700&auto=format&fit=crop',
    description: 'Stubborn perioral and cheek melasma cleared using acoustic laser pulses without heat stimulation, ensuring long-term prevention of rebound pigmentation.',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  },
  {
    id: 1,
    title: 'Acne Scar Revision & Skin Resurfacing',
    category: 'Acne & Scars',
    procedure: 'Microneedling RF & Subcision Protocol',
    sessions: '3 Sessions',
    beforeImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=700&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=700&auto=format&fit=crop',
    description: 'Bilateral rolling acne scars tethered to deep facial fascia released via nokor needle subcision and followed by fractional radiofrequency for significant volumetric skin lifting.',
    doctor: 'Dr. Mohit Giri (MD Dermatology)'
  }
];

export const EQUIPMENT_LIST: MachineEquipment[] = [
  {
    id: 'sparsh-diode-laser',
    name: 'Sparsh Triple-Wavelength Diode Laser',
    subtitle: '755nm + 808nm + 1064nm with Continuous Ice-Contact Cooling',
    description: 'Combines Alexandrite (755nm), Speed Diode (808nm), and YAG (1064nm) wavelengths into a single handpiece to target hair follicles at varied depths while keeping the epidermal surface iced at -4°C for painless treatment.',
    highlights: [
      'Painless hair reduction on all Indian skin types',
      'Advanced in-motion fast gliding technology',
      'Safe for facial, bikini, and sensitive body areas'
    ],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop',
    badge: 'GOLD STANDARD LASER'
  },
  {
    id: 'picosecond-laser-system',
    name: 'Picosecond Laser System',
    subtitle: 'Ultra-Short Picosecond Photoacoustic Pulses',
    description: 'Delivers ultra-short trillionths-of-a-second acoustic shockwaves to shatter melanin pigment granules into fine micro-particles without damaging surrounding thermal tissue.',
    highlights: [
      'Gold standard for stubborn melasma and sun spots',
      'No thermal damage or rebound post-inflammatory dark marks',
      'Tattoo removal and carbon porcelain laser peels'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    badge: 'ADVANCED PIGMENT CARE'
  },
  {
    id: 'clinical-medi-hydrafacial',
    name: 'Clinical Medi-HydraFacial 14-in-1',
    subtitle: 'Hydrodynamic Multi-Step Dermal Infusion',
    description: 'Multi-step hydrodynamic technology that simultaneously exfoliates dull stratum corneum, extracts deep sebum and blackhead plugs via vortex suction, and saturates dermal layers with sterile hyaluronic acid.',
    highlights: [
      'Instant bridal and red-carpet luminous glow',
      'Painless blackhead extraction without needle trauma',
      'Customized antioxidant & brightening peptide cocktail'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    badge: '14-IN-1 DERMAL SUITE'
  },
  {
    id: 'radiofrequency-skin-tightening',
    name: 'Radiofrequency & Fractional Skin Tightening',
    subtitle: 'Controlled Deep Dermal Neocollagenesis',
    description: 'Heats dermal tissue at a precise, controlled temperature to denature aged collagen fibers and trigger the body’s natural fibroblasts to synthesize fresh, firm collagen and elastin.',
    highlights: [
      'Non-surgical face lift and jawline contouring',
      'Zero downtime — walk in and walk out',
      'Feels like a relaxing warm stone massage'
    ],
    image: 'https://images.unsplash.com/photo-1512290900672-1f4142cfeb98?q=80&w=800&auto=format&fit=crop',
    badge: 'NON-SURGICAL FIRMING'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    patientName: 'Ananya Sharma',
    treatmentType: 'Verified Skin Care Patient',
    rating: 5,
    comment: 'Thanks to Dr. Mohit and the team, I now look forward to my skin care visits knowing I’m in the best hands. My acne scars improved drastically in just 3 sessions! Dr. Giri spent 30 minutes explaining the biology of my skin instead of pushing random packages.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 't2',
    patientName: 'Priya Patel',
    treatmentType: 'Laser Hair Removal Patient',
    rating: 5,
    comment: 'Extremely clean clinic and genuine guidance. Dr. Giri explained the laser process thoroughly and the results were smooth and completely pain-free with their cooling diode laser. The best dermatologist in Ulwe.',
    date: '1 month ago',
    verified: true
  },
  {
    id: 't3',
    patientName: 'Rahul Verma',
    treatmentType: 'Hair Loss & PRP Patient',
    rating: 5,
    comment: 'Honest advice with zero pressure for unnecessary procedures. The PRP treatment revived my hair density within months. Other clinics told me to do immediate surgery, but Dr. Mohit took a scientific, phased approach. Highly recommended in Ulwe!',
    date: '3 weeks ago',
    verified: true
  },
  {
    id: 't4',
    patientName: 'Dr. Sameer Kulkarni',
    treatmentType: 'Melasma & Laser Toning Patient',
    rating: 5,
    comment: 'As a physician myself, I appreciate Dr. Mohit Giri’s strict adherence to medical ethics and evidence-based protocols. The equipment at Gurukrupa is world-class and the clinic hygiene is spotless.',
    date: '2 months ago',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need an appointment before visiting?',
    answer: 'Prior appointments are strongly recommended to ensure minimal waiting time and an unhurried, thorough consultation. Walk-in patients are also welcomed based on doctor availability, but priority is given to scheduled slots.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How many sessions are required for laser hair reduction?',
    answer: 'Most patients achieve 80%–90% permanent hair reduction within 6 to 8 sessions spaced 4 to 6 weeks apart. Hair grows in biological cycles (Anagen, Catagen, Telogen), and laser energy is effective only when follicles are in their active Anagen phase.',
    category: 'laser'
  },
  {
    id: 'faq-3',
    question: 'How does PRP & GFC Therapy work for hair thinning and loss?',
    answer: 'Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC) extract natural healing platelets and growth factors from a small sample of your own blood. When concentrated and infused into the scalp dermis, these growth factors (like VEGF and PDGF) stimulate dormant follicles, prolong the active growth phase, and halt excessive shedding.',
    category: 'hair'
  },
  {
    id: 'faq-4',
    question: 'What treatments are available for stubborn acne scars and pigmentation?',
    answer: 'We offer a multi-modal protocol combining subcision to detach anchored scar bands, Microneedling Radiofrequency (MNRF), fractional resurfacing lasers, and medical-grade chemical peels. For pigmentation and melasma, we use ultra-gentle picosecond laser toning and barrier-repair formulations.',
    category: 'skin'
  },
  {
    id: 'faq-5',
    question: 'Are chemical peels safe and is downtime required?',
    answer: 'Yes, when administered under dermatologist supervision with calibrated pH solutions (salicylic, glycolic, lactic, mandelic, or TCA), chemical peels are exceptionally safe. Most superficial clinical peels have zero downtime, while deeper peels may cause mild micro-flaking for 2–4 days.',
    category: 'skin'
  },
  {
    id: 'faq-6',
    question: 'What are the consultation hours and fee at Gurukrupa Skin Clinic?',
    answer: 'Our consultation hours are Monday through Sunday (All 7 Days): Morning 10:30 AM – 02:30 PM and Evening 05:30 PM – 10:00 PM. Our initial comprehensive consultation fee is ₹500, which includes detailed clinical examination, skin/hair analysis, and personalized treatment planning.',
    category: 'general'
  },
  {
    id: 'faq-7',
    question: 'Is a Hair Transplant permanent, and how natural does it look?',
    answer: 'Yes, FUE hair transplant uses genetically resistant donor hair follicles harvested from the permanent zone at the back of your head (occipital scalp). These roots are DHT-resistant and continue growing naturally for life. Under Dr. Giri’s surgical planning, incisions follow your natural hair whorl and hairline irregularities for an indistinguishable, natural result.',
    category: 'hair'
  }
];
