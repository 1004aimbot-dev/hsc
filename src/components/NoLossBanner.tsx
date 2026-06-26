import { motion } from "motion/react";
import { PlaneTakeoff, Heart } from "lucide-react";
import { Language } from "../types";
import { UI_STRINGS } from "../data";

interface NoLossBannerProps {
  currentLang: Language;
}

export default function NoLossBanner({ currentLang }: NoLossBannerProps) {
  const t = UI_STRINGS[currentLang];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="premium-card-colored p-8 md:p-12 relative overflow-hidden group text-white"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
        {/* Airplane takeoff circle badge */}
        <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
          <PlaneTakeoff className="text-rose-400 w-10 h-10 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
        </div>

        {/* Small label */}
        <span className="font-mono text-xs font-black text-rose-300 uppercase tracking-widest bg-rose-500/20 px-4 py-1.5 rounded-full border border-rose-500/30">
          {t.noLossTag}
        </span>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight whitespace-pre-line bg-gradient-to-r from-white via-slate-100 to-rose-200 bg-clip-text text-transparent">
          {t.noLossTitle}
        </h2>

        {/* Description */}
        <p className="font-sans text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-lg">
          {t.noLossDesc}
        </p>

        {/* Image Card Container in Glass Frame */}
        <div className="w-full max-w-md h-60 rounded-2xl overflow-hidden shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] relative border border-white/10 mt-4 group/img">
          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-70 group-hover/img:opacity-40 transition-opacity duration-300" />
          
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEGdLuQa0XhDC6vi80r-ATCM4jN2jSkST4ybqtVj8fMwCAGPkl7_wclYwm_CDnj8DaUMLuS8oz4mT86MTozgJSFbk7JyujkNK51gweVdxS17CzALS2_bNDOGSnOiZCh3_uKJXCQJlgwsDbt7Y-nevR7VrYVDwhTfjgFAa5c3mLwaPwJ68gb_bYWXGOJiQ_deZsl34FPTa4Af963Hx8_uDn6qkLswDWk9CAy1bLWWq9tsDedSbqfEOepuCsFqbTD-HU8awJsTtn3w"
            alt={t.noLossImgAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform duration-700 group-hover/img:scale-105"
          />

          {/* Premium tag overlay inside image */}
          <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md text-slate-100 px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-black flex items-center gap-1 shadow-lg">
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 animate-pulse" />
            <span>Premium Trip</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
