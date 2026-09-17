import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, DOCTORS, CLINICAL_CASES } from '../data/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { 
  Scissors, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Microscope, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  FileCheck,
  HeartPulse,
  Award
} from 'lucide-react';

interface HairTreatmentPageProps {
  onNavigate: (page: PageId) => void;
  onSelectTreatmentForBooking?: (treatmentId: string) => void;
}

export const HairTreatmentPage: React.FC<HairTreatmentPageProps> = ({ onNavigate, onSelectTreatmentForBooking }) => {
  // Norwood Hair Loss Stage Selector for interactive estimator
  const [norwoodStage, setNorwoodStage] = useState<number>(3);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const norwoodStagesData = [
    {
      stage: 2,
      name: 'Stage 2: Mild Temple Recession',
      desc: 'Slight recession of hairline around temples. Ideal for medical therapy, PRP/GFC, and minor hairline restoration.',
      grafts: '1,000 – 1,500 Grafts',
      sessions: '1 Day Procedure or 4 PRP sessions',
      prpBenefit: 'High response for stabilizing further recession'
    },
    {
      stage: 3,
      name: 'Stage 3: Deep Frontal Recession & Early Crown',
      desc: 'Noticeable M-shaped recession. Follicles have miniaturized significantly in frontal zones.',
      grafts: '1,800 – 2,500 Grafts',
      sessions: '1 Full Session (Sapphire FUE)',
      prpBenefit: 'Essential pre- and post-transplant biological anchoring'
    },
    {
      stage: 4,
      name: 'Stage 4: Significant Frontal Loss & Crown Vertex Thinning',
      desc: 'Frontal hairline bridge thin or absent; distinct bald circle developing at crown.',
      grafts: '2,500 – 3,200 Grafts',
      sessions: 'Sapphire Micro-FUE + 6 PRP Sessions',
      prpBenefit: 'Stabilizes vertex thinning while grafts restore frontal density'
    },
    {
      stage: 5,
      name: 'Stage 5: Extensive Frontal & Vertex Baldness',
      desc: 'The band between frontal loss and crown has broken down. Requires dense donor harvesting.',
      grafts: '3,200 – 4,000 Grafts',
      sessions: 'Mega-Session FUE + GFC Growth Factor cycles',
      prpBenefit: 'Maximizes graft survival and revives borderline roots'
    },
    {
      stage: 6,
      name: 'Stage 6 & 7: Advanced Scalp Baldness',
      desc: 'Only horseshoe donor rim remains at sides and occipital area. Multi-stage or beard-donor combo.',
      grafts: '4,000+ Grafts (Multi-Stage)',
      sessions: 'Staged FUE + Intensive Hair Restorative Therapy',
      prpBenefit: 'Boosts blood perfusion in fibrotic scalp tissue'
    }
  ];

  const currentStage = norwoodStagesData.find((s) => s.stage === norwoodStage) || norwoodStagesData[1];

  const hairFaqs = [
    {
      q: 'Does an FUE hair transplant look artificial or "pluggy"?',
      a: 'Not under modern microscopic dermatosurgical techniques. Old procedures used large mini-grafts. At Gurukrupa Skin Clinic, Dr. Mohit Giri extracts single hair follicle units for the leading hairline row and places them using micro-sapphire incisions that match your exact natural hair angle and whorl direction. Once grown, it is completely indistinguishable from original hair.'
    },
    {
      q: 'Is the procedure painful?',
      a: 'The procedure is performed under local micro-anesthesia. Aside from mild pinching sensations during initial numbing (which takes under 3 minutes), patients experience zero pain during graft extraction or implantation. Many patients watch videos or take restful naps during the session.'
    },
    {
      q: 'When will I see the final hair growth results?',
      a: 'Hair follows a biological growth cycle: between weeks 2 and 8, transplanted hair shafts undergo expected temporary shedding (shock loss). New natural hair begins sprouting around Month 3–4, with noticeable density by Month 6, and full, mature density achieved between Months 9 and 12.'
    },
    {
      q: 'Can I combine PRP or GFC with a hair transplant?',
      a: 'Yes, in fact, Dr. Giri strongly recommends autologous PRP / GFC both as a preparatory treatment before surgery and during the healing phase to deliver vital growth factors (VEGF, PDGF) that maximize graft take rate above 98%.'
    },
    {
      q: 'How many days of rest or leave do I need from work?',
      a: 'Most patients return to desk work and daily routine within 3 to 4 days. Tiny micro-scabs heal within 7 to 10 days, after which regular head washing resumes normally.'
    }
  ];

  const hairCase = CLINICAL_CASES.find((c) => c.category === 'Hair & Scalp') || CLINICAL_CASES[2];

  const handleBookNow = () => {
    if (onSelectTreatmentForBooking) {
      onSelectTreatmentForBooking('hair-transplant-restoration');
    }
    onNavigate('appointment');
  };

  return (
    <div className="w-full bg-[#0a0c10] text-[#f0f2f5]">
      {/* Prototype Notice Header Bar */}
      <div className="bg-[#171410] border-b border-[#3d2e1b] py-2 px-4 text-center text-xs text-[#f4a261]">
        <span className="font-bold uppercase tracking-wider mr-2">Prototype Demonstration Page:</span>
        Structured treatment template illustrating clinical depth, patient journey &amp; SEO content architecture for Dr. Mohit Giri’s approval.
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400">
          <button type="button" onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <button type="button" onClick={() => onNavigate('treatments')} className="hover:text-white transition-colors">
            Treatments
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-[#f4a261] font-medium">Hair Restoration &amp; FUE Hair Transplant</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="relative py-14 lg:py-20 border-b border-[#1b2230] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b2231] border border-[#2d3a50] text-xs font-semibold text-[#f4a261]">
                <Scissors className="w-3.5 h-3.5" />
                <span>EVIDENCE-BASED TRICHOLOGY &amp; DERMATO-SURGERY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Hair Restoration &amp; Sapphire FUE Hair Transplant
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                Permanent, natural-looking hairline restoration and follicle rejuvenation by <strong className="text-white font-semibold">Dr. Mohit Giri (MD Dermatology)</strong>. Utilizing precision micro-motor extraction, sapphire slit incisions, and biological GFC therapy in Ulwe, Navi Mumbai.
              </p>

              {/* Quick Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#121620] border border-[#202837]">
                  <span className="text-xl sm:text-2xl font-bold text-[#f4a261] font-serif block">98%+</span>
                  <span className="text-xs text-neutral-400">Graft Survival Rate</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121620] border border-[#202837]">
                  <span className="text-xl sm:text-2xl font-bold text-emerald-400 font-serif block">0.75mm</span>
                  <span className="text-xs text-neutral-400">Micro-Sapphire Punch</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121620] border border-[#202837] col-span-2 sm:col-span-1">
                  <span className="text-xl sm:text-2xl font-bold text-sky-400 font-serif block">Zero</span>
                  <span className="text-xs text-neutral-400">Linear Scarring</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/95 text-[#0c0e12] font-bold text-sm shadow-xl shadow-[#f4a261]/25 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Hair Evaluation (₹500)</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Dr.%20Mohit%20Giri,%20I%20would%20like%20to%20consult%20regarding%20Hair%20Transplant%20or%20PRP.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#141b25] hover:bg-[#1a2331] text-neutral-200 border border-[#283447] text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Ask Dr. Giri on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Featured Doctor & Clinical Case Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#121620] border border-[#263143] rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#1e2736]">
                  <img
                    src={DOCTORS[0].image}
                    alt={DOCTORS[0].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#f4a261]"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white">{DOCTORS[0].name}</h3>
                    <p className="text-xs text-[#f4a261] font-medium">{DOCTORS[0].qualifications}</p>
                    <p className="text-[11px] text-neutral-400">Laser Surgeon &amp; Trichology Expert</p>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 italic leading-relaxed">
                  "Hair restoration isn't simply punching holes and sticking hair. It requires clinical artistry: establishing natural graft exit angles, feathering the hairline, and preserving the donor bank for your entire lifetime."
                </p>

                <div className="mt-4 pt-3 border-t border-[#1e2736] flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> MMC Registered
                  </span>
                  <span>Ulwe, Navi Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. WHAT IS THE PROBLEM? */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0e1117]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              CLINICAL UNDERSTANDING
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              What is the Problem?
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Hair loss (alopecia) is a biological medical condition, not a cosmetic flaw or lack of hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#121620] border border-[#202837] rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f4a261]" />
                Androgenetic Alopecia (Pattern Baldness)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                The most prevalent cause affecting both men (receding hairline, crown thinning) and women (widening center part). Genetically sensitized hair follicles progressively miniaturize when exposed to dihydrotestosterone (DHT), producing thinner, shorter hairs until the follicle becomes dormant.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#202837] rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Telogen Effluvium (Acute Shedding)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Sudden, widespread shedding triggered by systemic stress, post-fever illness (such as Dengue or Typhoid), hormonal changes, severe nutritional deficiency (Iron, Vitamin D, B12), or metabolic disruptions that push hundreds of hairs prematurely into the resting phase.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#202837] rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                Alopecia Areata (Autoimmune Patchy Loss)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Coin-shaped, smooth bald patches where the body's immune T-cells mistakenly attack hair bulb cells. Requires targeted medical anti-inflammatory and immunomodulatory dermatological therapies.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#202837] rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Traction &amp; Scalp Barrier Disorders
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Damage from persistent tight hairstyling, chronic seborrheic dermatitis, dandruff scaling, or follicle inflammation (folliculitis) that impairs hair root anchoring and leads to irreversible scarring without prompt medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMON CAUSES & TRIGGERS */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0a0c10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              ETIOLOGY &amp; TRIGGERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Common Causes of Hair Miniaturization
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Understanding why roots weaken enables Dr. Giri to design a multi-pronged clinical intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#11151e] border border-[#1f2635] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#1a2332] text-[#f4a261] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-sm font-bold text-white">DHT &amp; Genetic Sensitivity</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                5-alpha reductase enzyme converts testosterone into DHT, which binds to androgen receptors on frontal follicles and shrinks them over time.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#11151e] border border-[#1f2635] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#1a2332] text-emerald-400 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-sm font-bold text-white">Nutritional Depletion</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Deficiencies in serum ferritin (iron stores), zinc, biotin, Vitamin D3, and essential amino acids directly starve the rapidly dividing hair matrix.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#11151e] border border-[#1f2635] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#1a2332] text-sky-400 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-sm font-bold text-white">Scalp Micro-Vascularity</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Reduced dermal papilla capillary perfusion deprives roots of oxygen. PRP and GFC specifically target and repair this vascular network.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#11151e] border border-[#1f2635] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#1a2332] text-amber-400 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-sm font-bold text-white">Scalp Microbiome Imbalance</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Malassezia yeast proliferation, stubborn dandruff flakes, and excess sebum oxidize and trigger perifollicular inflammation, loosening hair anchors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYMPTOMS & WHO MAY NEED TREATMENT (With Interactive Norwood Estimator!) */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0e1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              SELF-ASSESSMENT TOOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Who May Need Treatment?
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Select your current stage of hairline recession to see estimated graft requirements and doctor recommendations.
            </p>
          </div>

          {/* Interactive Norwood Stage Selector */}
          <div className="bg-[#121620] border border-[#222a3a] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Microscope className="w-5 h-5 text-[#f4a261]" />
                Norwood-Hamilton Hair Loss Classification
              </h3>
              <span className="text-xs text-neutral-400">Click a stage to simulate clinical estimate</span>
            </div>

            {/* Stage Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
              {norwoodStagesData.map((s) => (
                <button
                  key={s.stage}
                  type="button"
                  onClick={() => setNorwoodStage(s.stage)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    norwoodStage === s.stage
                      ? 'bg-[#1b2434] border-[#f4a261] shadow-lg shadow-[#f4a261]/15'
                      : 'bg-[#0f121a] border-[#1e2636] hover:border-[#2f3d54]'
                  }`}
                >
                  <span className={`text-xs font-bold block ${norwoodStage === s.stage ? 'text-[#f4a261]' : 'text-neutral-400'}`}>
                    STAGE {s.stage}
                  </span>
                  <span className="text-xs font-medium text-white truncate block mt-1">
                    {s.name.split(':')[1]}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Stage Output Card */}
            <div className="bg-[#0b0e14] border border-[#1f2838] rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#f4a261]/20 text-[#f4a261] text-xs font-bold border border-[#f4a261]/30">
                    Selected: {currentStage.name}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {currentStage.desc}
                </p>
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span><strong>Biological Care:</strong> {currentStage.prpBenefit}</span>
                </div>
              </div>

              <div className="bg-[#131822] p-4 rounded-xl border border-[#253245] space-y-2 text-center md:text-left">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Estimated Graft Count
                </div>
                <div className="text-xl font-bold text-[#f4a261] font-serif">
                  {currentStage.grafts}
                </div>
                <div className="text-[11px] text-neutral-400">
                  Protocol: <strong className="text-white">{currentStage.sessions}</strong>
                </div>
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-[#f4a261] hover:bg-[#f4a261]/90 text-[#0c0e12] font-bold text-xs shadow transition-all cursor-pointer"
                >
                  Book Exact Dermoscopy Scan →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENT OPTIONS (TRANSPLANT VS PRP/GFC VS MEDICAL) */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0a0c10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              CLINICAL TREATMENT MODALITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Treatment Options at Gurukrupa Skin Clinic
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              From microscopic surgical transplantation to autologous cell therapies, we offer individualized pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1: Sapphire FUE Hair Transplant */}
            <div className="bg-[#121620] border-2 border-[#f4a261]/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative">
              <span className="absolute top-3 right-3 bg-[#f4a261] text-[#0c0e12] text-[10px] font-bold px-2 py-0.5 rounded">
                PERMANENT SURGICAL
              </span>
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-bold text-white">
                  Sapphire FUE Hair Transplant
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Individual follicular unit extraction from DHT-resistant donor areas (occipital scalp) with sapphire blade micro-slits for maximum density and zero linear scarring.
                </p>
                <ul className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-[#1e2636]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f4a261] shrink-0" />
                    <span>Permanent lifelong growing hair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f4a261] shrink-0" />
                    <span>Micro-sapphire blades: faster healing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f4a261] shrink-0" />
                    <span>Angle-calibrated natural hairline design</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#1e2636] mt-6">
                <div className="text-xs text-neutral-400 mb-1">Starting Investment</div>
                <div className="text-lg font-bold text-white">Customized / Graft</div>
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="w-full mt-3 py-2 px-3 rounded-xl bg-[#f4a261] hover:bg-[#f4a261]/90 text-[#0c0e12] font-bold text-xs shadow cursor-pointer"
                >
                  Consult Dr. Mohit Giri
                </button>
              </div>
            </div>

            {/* Option 2: GFC & PRP Therapy */}
            <div className="bg-[#121620] border border-[#212938] rounded-2xl p-6 flex flex-col justify-between hover:border-[#f4a261]/40 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30 uppercase">
                    BIOLOGICAL REGENERATION
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  Growth Factor Concentrate (GFC) &amp; PRP
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Advanced autologous blood therapy extracting platelet growth factors to rejuvenate miniaturized hair bulbs, stop diffuse shedding, and stimulate new shaft diameter.
                </p>
                <ul className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-[#1e2636]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero surgery, 100% natural autologous</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>High concentration of VEGF &amp; PDGF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>45-min procedure; walk in &amp; walk out</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#1e2636] mt-6">
                <div className="text-xs text-neutral-400 mb-1">Starting from</div>
                <div className="text-lg font-bold text-white">₹2,500 <span className="text-xs font-normal text-neutral-400">/ session</span></div>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectTreatmentForBooking) onSelectTreatmentForBooking('hair-fall-prp-gfc');
                    onNavigate('appointment');
                  }}
                  className="w-full mt-3 py-2 px-3 rounded-xl bg-[#1a2230] hover:bg-[#222d3f] text-white font-semibold text-xs border border-[#2b394f] cursor-pointer"
                >
                  Book PRP Session
                </button>
              </div>
            </div>

            {/* Option 3: Medical Dermatology Stabilization */}
            <div className="bg-[#121620] border border-[#212938] rounded-2xl p-6 flex flex-col justify-between hover:border-[#f4a261]/40 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] bg-sky-950 text-sky-400 font-bold px-2 py-0.5 rounded border border-sky-500/30 uppercase">
                    PHARMACOLOGICAL
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  Medical Trichology &amp; DHT Blockers
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Scientifically proven oral and topical regimens (Minoxidil, topical Finasteride, peptide serums, and nutritional co-factors) to arrest ongoing root miniaturization.
                </p>
                <ul className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-[#1e2636]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Prescribed strictly by MD Dermatologist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Stabilizes existing non-transplanted hair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Scalp anti-dandruff detox protocol</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#1e2636] mt-6">
                <div className="text-xs text-neutral-400 mb-1">Doctor Evaluation</div>
                <div className="text-lg font-bold text-white">₹500 <span className="text-xs font-normal text-neutral-400">Consultation</span></div>
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="w-full mt-3 py-2 px-3 rounded-xl bg-[#1a2230] hover:bg-[#222d3f] text-white font-semibold text-xs border border-[#2b394f] cursor-pointer"
                >
                  Schedule Evaluation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW THE TREATMENT WORKS (Step-by-Step Clinical Journey) */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0e1117]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              THE SURGICAL BLUEPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              How Sapphire FUE Hair Transplant Works
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              A 6-step microscopic precision process carried out under strict surgical sterility.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#f4a261]/15 text-[#f4a261] border border-[#f4a261]/30 flex items-center justify-center font-bold text-lg shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Digital Tricho-Dermoscopy &amp; Donor Mapping</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  High-magnification dermatoscope evaluates donor follicle density per cm² in the occipital region, follicle groupings (1s, 2s, 3s), and calculates exact safe graft count without over-harvesting.
                </p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#f4a261]/15 text-[#f4a261] border border-[#f4a261]/30 flex items-center justify-center font-bold text-lg shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Artistic Natural Hairline Designing</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Dr. Mohit Giri hand-draws your customized hairline respecting age, facial geometry, forehead contours, and natural micro-irregularities so the line never looks blunt or artificial.
                </p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#f4a261]/15 text-[#f4a261] border border-[#f4a261]/30 flex items-center justify-center font-bold text-lg shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Painless Local Micro-Anesthesia</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Vibration-assisted, ultra-fine needle infiltration ensures complete numbness of donor and recipient areas in under 3 minutes with zero systemic sedation risks.
                </p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#f4a261]/15 text-[#f4a261] border border-[#f4a261]/30 flex items-center justify-center font-bold text-lg shrink-0">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Micro-Punch Extraction &amp; Hypothermic Preservation</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  0.75mm–0.85mm motorized micro-punches extract intact follicular units one by one. Grafts are immediately chilled in sterile bio-preservation holding solution to maintain 98%+ viability.
                </p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#f4a261]/15 text-[#f4a261] border border-[#f4a261]/30 flex items-center justify-center font-bold text-lg shrink-0">
                5
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Sapphire Slit Incision with Calibrated Angulation</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Precious sapphire gemstone blades create v-shaped micro-channels that cause minimal tissue disruption. Dr. Giri calibrates the 30°–45° exit angle to match your native hair flow.
                </p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#222a38] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#f4a261]/15 text-[#f4a261] border border-[#f4a261]/30 flex items-center justify-center font-bold text-lg shrink-0">
                6
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Delicate Follicle Implantation &amp; Sterile Bandaging</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Single-hair grafts are positioned along the delicate anterior transition zone, while multi-hair follicular units are placed behind for maximum structural visual density.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT TO EXPECT: RECOVERY & GROWTH TIMELINE (Month by Month) */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0a0c10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              PATIENT EXPECTATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Recovery &amp; Hair Growth Timeline
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Complete transparency on post-operative healing, shedding phases, and when to expect full density.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-[#121620] border border-[#202837] rounded-xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#f4a261] font-mono">DAYS 1 – 10</span>
              <h3 className="text-sm font-bold text-white">Healing &amp; Scabbing</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Micro-punches heal rapidly. Tiny protective crusts form around grafts and gently wash away by day 10 with clinical saline spray.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#202837] rounded-xl p-5 space-y-2">
              <span className="text-xs font-bold text-amber-400 font-mono">WEEKS 2 – 8</span>
              <h3 className="text-sm font-bold text-white">Expected Shedding</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                "Shock loss" occurs where transplanted hair shafts shed while the living dermal root stays securely anchored underneath. Completely normal.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#202837] rounded-xl p-5 space-y-2">
              <span className="text-xs font-bold text-sky-400 font-mono">MONTHS 3 – 4</span>
              <h3 className="text-sm font-bold text-white">Early Sprouting</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Fine, soft new hairs start emerging from the scalp dermis. Early PRP maintenance session is recommended here to accelerate growth.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#202837] rounded-xl p-5 space-y-2">
              <span className="text-xs font-bold text-emerald-400 font-mono">MONTHS 6 – 8</span>
              <h3 className="text-sm font-bold text-white">Visible Thickness</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Around 60%–70% of grafts have matured into thicker, pigmented hair shafts. Major visual hairline transformation is evident.
              </p>
            </div>

            <div className="bg-[#121620] border border-[#202837] rounded-xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#f4a261] font-mono">MONTHS 9 – 12</span>
              <h3 className="text-sm font-bold text-white">100% Mature Density</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Full thickness, natural texture, and complete density achieved. You can cut, style, dye, and wash your permanent hair normally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL HAIR RESULTS CASE STUDY (From PDF Screenshots Case #13) */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0e1117]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              CLINICAL EVIDENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Real Hair &amp; Scalp Case Study
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Documented hair density restoration from Dr. Mohit Giri’s clinic archive.
            </p>
          </div>

          <BeforeAfterSlider clinicalCase={hairCase} />
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 border-b border-[#1b2230] bg-[#0a0c10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#f4a261] tracking-widest uppercase block mb-1">
              EXPERT ANSWERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Frequently Asked Questions on Hair Restoration
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Everything you need to know before scheduling your trichology consultation.
            </p>
          </div>

          <div className="space-y-4">
            {hairFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-[#141924] border-[#f4a261]/50'
                      : 'bg-[#11141c] border-[#222a38] hover:border-[#2e3a4e]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#1c2331] flex items-center justify-center shrink-0 text-neutral-300">
                      {isOpen ? <Minus className="w-4 h-4 text-[#f4a261]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#1f2633] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. STRONG APPOINTMENT CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0a0c10] to-[#121622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#f4a261]/20 border border-[#f4a261]/40 flex items-center justify-center mx-auto text-[#f4a261]">
            <Scissors className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Take the First Step Towards Natural Hair Density
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Schedule an unhurried digital trichoscopy consultation with <strong className="text-white">Dr. Mohit Giri</strong> at Gurukrupa Skin Clinic in Ulwe, Navi Mumbai. Transparent ₹500 fee with no aggressive sales tactics.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleBookNow}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] hover:from-[#f4a261]/90 text-[#0c0e12] font-bold text-sm shadow-xl shadow-[#f4a261]/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation Now</span>
            </button>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Dr.%20Mohit%20Giri,%20I%20would%20like%20to%20consult%20for%20Hair%20Transplant.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-[#141b25] hover:bg-[#1b2432] text-white border border-[#273447] text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
