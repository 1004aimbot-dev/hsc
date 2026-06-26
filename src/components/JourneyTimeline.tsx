import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { TimelineEvent, Language } from "../types";
import { TIMELINE_EVENTS } from "../data";

interface JourneyTimelineProps {
  currentLang: Language;
}

export default function JourneyTimeline({ currentLang }: JourneyTimelineProps) {
  const isKo = currentLang === Language.KO;

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Central Connector Line (Elegant glowing path) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0" />

      {/* Events Stream */}
      <div className="space-y-16 relative">
        {TIMELINE_EVENTS.map((event: TimelineEvent, index: number) => {
          const title = isKo ? event.titleKo : event.titleEn;
          const desc = isKo ? event.descKo : event.descEn;

          // Resolve lucide icons or fallback
          const IconComponent = (LucideIcons as any)[event.iconName] || LucideIcons.HeartHandshake;

          // Translucent colored rings for each badge node
          const badgeRingColor = [
            "border-amber-400 text-amber-400 shadow-amber-500/10",
            "border-emerald-400 text-emerald-400 shadow-emerald-500/10",
            "border-rose-400 text-rose-400 shadow-rose-500/10",
            "border-sky-400 text-sky-400 shadow-sky-500/10",
            "border-indigo-400 text-indigo-400 shadow-indigo-500/10",
          ][index % 5];

          const iconColor = [
            "text-amber-400",
            "text-emerald-400",
            "text-rose-400",
            "text-sky-400",
            "text-indigo-400",
          ][index % 5];

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center group/item"
            >
              {/* Event Badge Icon */}
              <div className={`z-10 w-14 h-14 rounded-full border bg-slate-950 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-115 group cursor-pointer ${badgeRingColor}`}>
                <IconComponent className={`w-5 h-5 transition-transform duration-300 group-hover/item:scale-110 ${iconColor}`} />
              </div>

              {/* Event Text Card styled as an elegant compact premium card */}
              <div className="mt-5 text-center max-w-sm premium-card bg-slate-950/40 py-5 px-6 border border-white/5 shadow-xl transition-all duration-300 group-hover/item:border-indigo-500/20">
                <h4 className="font-display text-lg md:text-xl font-black text-white mb-2 tracking-tight group-hover/item:text-indigo-300 transition-colors">
                  {title}
                </h4>
                <p className="font-sans text-xs md:text-sm text-slate-400 font-medium leading-relaxed group-hover/item:text-slate-300 transition-colors">
                  {desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
