import React, { useState, useRef } from 'react';
import { ClinicalCase } from '../types';
import { ChevronLeft, ChevronRight, SlidersHorizontal, Sparkles, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  clinicalCase: ClinicalCase;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ clinicalCase }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-[#12161f] border border-[#222a38] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#f4a261]/40">
      {/* Top Header info */}
      <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#1f2633] bg-[#0e121a]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f4a261]/15 text-[#f4a261] border border-[#f4a261]/30 uppercase tracking-wider">
            {clinicalCase.category}
          </span>
          <span className="text-xs text-neutral-400 font-mono">
            Case #{clinicalCase.id}
          </span>
          {clinicalCase.patientAge && (
            <span className="text-xs bg-[#1e2533] text-neutral-300 px-2 py-0.5 rounded border border-[#2c3749]">
              {clinicalCase.patientAge}
            </span>
          )}
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1.5 bg-[#171e2b] p-1 rounded-lg border border-[#263143]">
          <button
            type="button"
            onClick={() => setViewMode('slider')}
            className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
              viewMode === 'slider'
                ? 'bg-[#f4a261] text-[#0c0e12] shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Interactive Slider
          </button>
          <button
            type="button"
            onClick={() => setViewMode('side-by-side')}
            className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
              viewMode === 'side-by-side'
                ? 'bg-[#f4a261] text-[#0c0e12] shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Side-by-Side
          </button>
        </div>
      </div>

      {/* Visual Area */}
      {viewMode === 'slider' ? (
        <div
          ref={containerRef}
          className="relative w-full h-[320px] sm:h-[400px] select-none cursor-ew-resize overflow-hidden bg-black"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* AFTER Image (Full background) */}
          <img
            src={clinicalCase.afterImg}
            alt={`${clinicalCase.title} - After clinical treatment`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-md border border-emerald-500/40 uppercase tracking-widest shadow-md pointer-events-none flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            AFTER ({clinicalCase.sessions})
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={clinicalCase.beforeImg}
              alt={`${clinicalCase.title} - Before treatment`}
              className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
              }}
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1.5 rounded-md border border-amber-500/40 uppercase tracking-widest shadow-md">
              BEFORE
            </div>
          </div>

          {/* Slider Divider Bar */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#f4a261] text-[#0c0e12] border-2 border-white shadow-xl flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Hint Overlay for first-time interaction */}
          <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
            <span className="bg-black/75 backdrop-blur-md text-neutral-300 text-[11px] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
              <ChevronLeft className="w-3 h-3 text-[#f4a261]" />
              Drag slider left or right to inspect dermal change
              <ChevronRight className="w-3 h-3 text-[#f4a261]" />
            </span>
          </div>
        </div>
      ) : (
        /* Side by Side layout */
        <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-black">
          <div className="relative h-[280px] sm:h-[360px] overflow-hidden rounded-lg">
            <img
              src={clinicalCase.beforeImg}
              alt="Before treatment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-black/85 text-amber-300 text-xs font-bold px-2.5 py-1 rounded border border-amber-500/40 uppercase tracking-wider">
              BEFORE
            </span>
          </div>
          <div className="relative h-[280px] sm:h-[360px] overflow-hidden rounded-lg">
            <img
              src={clinicalCase.afterImg}
              alt="After treatment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded border border-emerald-500/40 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              AFTER
            </span>
          </div>
        </div>
      )}

      {/* Case Details Footer */}
      <div className="p-5 bg-[#10141d]">
        <h4 className="text-lg font-semibold text-white tracking-tight mb-2">
          {clinicalCase.title}
        </h4>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-300 mb-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            {clinicalCase.procedure}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-[#f4a261] font-medium">
            {clinicalCase.sessions}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">
            {clinicalCase.doctor}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          {clinicalCase.description}
        </p>
      </div>
    </div>
  );
};
