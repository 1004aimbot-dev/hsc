import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { CoreValue, Language } from "../types";

interface ValueCardProps {
  key?: any;
  value: CoreValue;
  index: number;
  currentLang: Language;
}

export default function ValueCard({ value, index, currentLang }: ValueCardProps) {
  const isKo = currentLang === Language.KO;
  const title = isKo ? value.titleKo : value.titleEn;
  const desc = isKo ? value.descKo : value.descEn;

  // Dynamically resolve lucide icon or fallback
  const IconComponent = (LucideIcons as any)[value.iconName] || LucideIcons.HelpCircle;

  // Determine glowing accents based on index
  const highlightGlow = [
    "from-amber-400 to-yellow-500 text-amber-400 shadow-amber-500/10",
    "from-emerald-400 to-teal-500 text-emerald-400 shadow-emerald-500/10",
    "from-indigo-400 to-indigo-600 text-indigo-400 shadow-indigo-500/10",
  ][index % 3];

  const iconColor = [
    "text-amber-400",
    "text-emerald-400",
    "text-indigo-400",
  ][index % 3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="premium-card relative group overflow-hidden"
    >
      {/* Decorative top corner gradient line */}
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${highlightGlow} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Icon Container */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-900/80 border border-white/10 mb-6 transition-all duration-300 group-hover:scale-115 group-hover:border-indigo-500/30 shadow-inner shadow-black/40`}>
        <IconComponent className={`${iconColor} w-7 h-7 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.2)]`} />
      </div>

      {/* Text Elements */}
      <h3 className="font-display text-2xl font-black text-white mb-4 tracking-tight group-hover:text-indigo-300 transition-colors">
        {title}
      </h3>
      <p className="font-sans text-sm md:text-base text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
        {desc}
      </p>
    </motion.div>
  );
}
