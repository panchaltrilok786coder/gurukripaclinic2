import React, { useEffect } from 'react';
import { PageId } from '../types';

interface SEOHeadProps {
  page: PageId;
  customTitle?: string;
  customDescription?: string;
}

const SEO_CONFIGS: Record<PageId, { title: string; description: string; canonical: string; schemaType: string }> = {
  home: {
    title: 'Gurukrupa Skin Clinic | Dr. Mohit Giri (MD Dermatology) | Ulwe, Navi Mumbai',
    description: 'Premier dermatology, hair transplant, PRP restoration & laser clinic in Ulwe, Navi Mumbai. Evidence-based skin care, acne scar removal, and hair loss solutions by Dr. Mohit Giri & Dr. Pooja Giri.',
    canonical: '/',
    schemaType: 'Dermatology'
  },
  'hair-treatment': {
    title: 'Hair Transplant & PRP Restoration in Ulwe, Navi Mumbai | Gurukrupa Skin Clinic',
    description: 'Natural hairline FUE hair transplant, GFC & PRP hair growth therapy by Dr. Mohit Giri. Micro-sapphire precision, zero visible scars, and 98% graft survival rate in Ulwe, Navi Mumbai.',
    canonical: '/hair-treatment',
    schemaType: 'MedicalProcedure'
  },
  about: {
    title: 'About Dr. Mohit Giri & Dr. Pooja Giri | Gurukrupa Skin Clinic Ulwe',
    description: 'Meet Dr. Mohit Giri (MBBS, MD Dermatology) and Dr. Pooja Giri (MBBS, DNB Dermatology). Over 10 years of clinical dermatosurgery, trichology, and aesthetic excellence in Ulwe, Navi Mumbai.',
    canonical: '/about',
    schemaType: 'Physician'
  },
  contact: {
    title: 'Contact Gurukrupa Skin Clinic | Ulwe Sector 20, Navi Mumbai | Timings & Directions',
    description: 'Visit Gurukrupa Skin Clinic at Siddhivinayak Utopia, opp. Redcliff School, Sector 20, Ulwe. Open Mon–Sun 10:30 AM–2:30 PM & 5:30 PM–10:00 PM. Call +91 98200 12345 or WhatsApp.',
    canonical: '/contact',
    schemaType: 'ContactPage'
  },
  appointment: {
    title: 'Book Doctor Appointment Online | Gurukrupa Skin Clinic Ulwe',
    description: 'Schedule your consultation with Dr. Mohit Giri or Dr. Pooja Giri. Instant appointment booking for skin, hair, and laser treatments in Ulwe, Navi Mumbai. Consultation fee ₹500.',
    canonical: '/appointment',
    schemaType: 'ScheduleAction'
  },
  treatments: {
    title: 'Clinical Skin, Hair & Laser Treatments | Gurukrupa Skin Clinic Ulwe',
    description: 'Explore comprehensive dermatology services: FUE Hair Transplant, PRP Therapy, Acne Scar Remodeling, Picosecond Laser Toning, Diode Laser Hair Removal, and Medi-HydraFacials in Ulwe.',
    canonical: '/treatments',
    schemaType: 'MedicalBusiness'
  }
};

export const SEOHead: React.FC<SEOHeadProps> = ({ page, customTitle, customDescription }) => {
  const config = SEO_CONFIGS[page] || SEO_CONFIGS.home;
  const pageTitle = customTitle || config.title;
  const pageDescription = customDescription || config.description;

  useEffect(() => {
    // 1. Update Document Title
    document.title = pageTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDescription);

    // 3. Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDescription);

    // 4. Update Twitter Card Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', pageDescription);

    // 5. Scroll to top on page switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, pageTitle, pageDescription]);

  return null;
};
