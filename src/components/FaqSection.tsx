import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Language } from "../types";
import { FAQ_ITEMS, UI_STRINGS } from "../data";

interface FaqSectionProps {
  currentLang: Language;
}

export default function FaqSection({ currentLang }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = UI_STRINGS[currentLang];
  const isKo = currentLang === Language.KO;

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* FAQ Header */}
      <div className="text-center space-y-3">
        <h2 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
          {t.faqTitle}
        </h2>
        <p className="font-sans text-sm md:text-base text-slate-400 font-medium max-w-md mx-auto">
          {t.faqSub}
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const question = isKo ? item.questionKo : item.questionEn;
          const answer = isKo ? item.answerKo : item.answerEn;
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="rounded-2xl border border-white/5 bg-slate-950/45 overflow-hidden transition-all duration-300 hover:border-indigo-500/20 shadow-lg"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-white/5 outline-none"
              >
                <div className="flex items-start gap-4 pr-4">
                  <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-display font-black text-sm md:text-base text-white hover:text-indigo-300 transition-colors">
                    {question}
                  </span>
                </div>
                <div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-white shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-4 text-xs md:text-sm text-slate-300 leading-relaxed font-sans font-medium border-t border-white/5 bg-slate-900/30 pl-14">
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
