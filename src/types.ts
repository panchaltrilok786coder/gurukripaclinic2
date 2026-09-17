export type PageId = 'home' | 'hair-treatment' | 'about' | 'contact' | 'appointment' | 'treatments';

export interface Treatment {
  id: string;
  name: string;
  category: 'medical' | 'aesthetic' | 'hair';
  priceStarting: number;
  duration: string;
  recommendedSessions: string;
  tagline: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  downtime: string;
  isPopular?: boolean;
  isHairFeature?: boolean;
}

export interface ClinicalCase {
  id: number;
  title: string;
  category: 'Acne & Scars' | 'Pigmentation & Laser' | 'Texture & Pores' | 'Hair & Scalp';
  procedure: string;
  sessions: string;
  beforeImg: string;
  afterImg: string;
  description: string;
  patientAge?: string;
  patientGender?: string;
  doctor: string;
}

export interface Doctor {
  id: string;
  name: string;
  nameMarathi?: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  registrationNo: string;
  quote: string;
  image: string;
  bio: string;
  focusAreas: string[];
  education: string[];
}

export interface MachineEquipment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatmentType: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'hair' | 'skin' | 'laser';
}

export interface BookingFormData {
  patientName: string;
  phoneNumber: string;
  email?: string;
  treatmentId: string;
  doctorPreference: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
}
