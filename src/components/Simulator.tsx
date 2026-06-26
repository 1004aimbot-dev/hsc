import { useState } from "react";
import { motion } from "motion/react";
import { Coins, Users, Zap } from "lucide-react";
import { Language } from "../types";
import { UI_STRINGS } from "../data";

interface SimulatorProps {
  currentLang: Language;
}

export default function Simulator({ currentLang }: SimulatorProps) {
  const [members, setMembers] = useState(5000);
  const t = UI_STRINGS[currentLang];

  const baseBenefit = 3000000;
  const bonusAmount = members * 1000;
  const totalFund = Math.min(baseBenefit + bonusAmount, 15000000);
  
  // Calculate percentage of progress bar relative to max 15,000,000 KRW
  const progressPercent = (totalFund / 15000000) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="premium-card bg-slate-950/45 relative overflow-hidden group"
    >
      <div className="space-y-8 relative z-10">
        
        {/* Slider input */}
        <div className="space-y-4">
          <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <Users className="w-4 h-4 text-indigo-400" />
              {t.engineSliderLabel}
            </span>
            <div className="flex justify-between items-baseline w-full md:w-auto gap-1 mt-1 md:mt-0">
              <span className="font-display text-3xl font-black text-white">
                {members.toLocaleString()}
              </span>
              <span className="font-sans text-sm text-slate-400 font-bold">
                {t.engineUnit}
              </span>
            </div>
          </div>

          <div className="relative pt-2">
            <input
              type="range"
              min="0"
              max="12000"
              step="100"
              value={members}
              onChange={(e) => setMembers(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-900/90 rounded-full border border-white/10 appearance-none cursor-pointer focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Dynamic Calculation Banner styled in a premium dark neon overlay */}
        <div className="text-center py-6 px-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 relative shadow-inner overflow-hidden">
          {/* Neon Top Edge Accent */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          
          <span className="block font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">
            {t.engineFundLabel}
          </span>
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="font-display text-3xl md:text-5xl font-black text-amber-400 tracking-tight transition-all duration-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.25)]">
              {totalFund.toLocaleString()}
            </span>
            <span className="font-display text-lg md:text-2xl font-black text-amber-400">
              {t.engineCurrency}
            </span>
          </div>
        </div>

        {/* Breakdown details */}
        <div className="space-y-5">
          <div className="space-y-3 font-sans text-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-2 font-semibold">
                <Coins className="w-4 h-4 text-indigo-400" />
                {t.engineBaseLabel}
              </span>
              <span className="text-white font-black">{t.engineBaseValue}</span>
            </div>
            
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-2 font-semibold">
                <Zap className="w-4 h-4 text-amber-400" />
                {t.engineBonusLabel}
              </span>
              <span className="text-white font-black">
                {t.engineBonusPrefix}
                {bonusAmount.toLocaleString()}
                {t.engineBonusSuffix}
              </span>
            </div>
          </div>

          {/* Styled linear progress bar (Modern tech glowing) */}
          <div className="space-y-3">
            <div className="w-full bg-slate-900/80 h-3 rounded-full border border-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              />
            </div>
            <p className="text-center font-sans text-xs text-slate-500 font-bold leading-relaxed pt-1">
              {t.engineProgressSub}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
