/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Language } from "./types";
import { UI_STRINGS, CORE_VALUES } from "./data";

// Components
import Navbar from "./components/Navbar";
import ValueCard from "./components/ValueCard";
import Simulator from "./components/Simulator";
import JourneyTimeline from "./components/JourneyTimeline";
import NoLossBanner from "./components/NoLossBanner";
import CtaForm from "./components/CtaForm";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  const [currentLang, setLang] = useState<Language>(Language.KO);
  const [adminOpen, setAdminOpen] = useState(false);
  const t = UI_STRINGS[currentLang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#030712] text-slate-100 font-sans overflow-x-hidden min-h-screen selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Header Navbar */}
      <Navbar currentLang={currentLang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden pt-28">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 space-y-8 max-w-3xl mx-auto flex flex-col items-center">
          {/* Est. pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs tracking-widest uppercase font-black shadow-[0_0_15px_rgba(99,102,241,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>{t.heroTag}</span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase max-w-2xl"
          >
            {t.heroTitlePart1}{" "}
            <span className="block mt-1 sm:inline sm:mt-0 bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              {t.heroTitlePart2}{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent tracking-tight">
                {t.heroTitleHighlight}
              </span>
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-sans text-sm sm:text-base md:text-lg text-slate-400 font-medium max-w-xl leading-relaxed"
          >
            {t.heroDesc}
          </motion.p>

          {/* CTA & stats summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-6 w-full max-w-sm space-y-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-5 premium-button-accent font-display font-black text-base uppercase tracking-wider transition-all cursor-pointer"
            >
              {t.heroBtn}
            </button>
            
            <p className="font-mono text-[10px] md:text-xs text-slate-500 tracking-wider uppercase font-black">
              {t.heroSub}
            </p>
          </motion.div>
        </div>

        {/* Floating bounce-down indicator */}
        <motion.button
          onClick={() => scrollToSection("philosophy")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-1 cursor-pointer group text-slate-400 hover:text-indigo-400 transition-colors"
          aria-label="Scroll Down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </section>

      {/* Core Values Section */}
      <section id="philosophy" className="py-24 md:py-32 px-6 bg-[#030712] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              {t.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((value, index) => (
              <ValueCard 
                key={value.id} 
                value={value} 
                index={index} 
                currentLang={currentLang} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engine (Simulator) Section */}
      <section id="engine" className="py-24 md:py-32 px-6 bg-slate-950/40 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              {t.engineTitle}
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-400 font-medium leading-relaxed">
              {t.engineSub}
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Simulator currentLang={currentLang} />
          </div>
        </div>
      </section>

      {/* Lifecycle Timeline Section */}
      <section id="lifecycle" className="py-24 md:py-32 px-6 bg-[#030712] relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              {t.journeyTitle}
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-400 font-medium leading-relaxed">
              {t.journeySub}
            </p>
          </div>

          <JourneyTimeline currentLang={currentLang} />
        </div>
      </section>

      {/* No-Loss System Section */}
      <section className="py-24 md:py-32 px-6 bg-slate-950/40 relative overflow-hidden border-t border-white/5">
        <div className="max-w-3xl mx-auto relative z-10">
          <NoLossBanner currentLang={currentLang} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-6 bg-[#030712] relative overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <FaqSection currentLang={currentLang} />
        </div>
      </section>

      {/* CTA & Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-slate-950/40 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <CtaForm currentLang={currentLang} />
        </div>
      </section>

      {/* Shared Footer component */}
      <Footer currentLang={currentLang} onAdminOpen={() => setAdminOpen(true)} />

      {/* Admin DB Console Overlay Modal */}
      <AdminPanel 
        currentLang={currentLang} 
        isOpen={adminOpen} 
        onClose={() => setAdminOpen(false)} 
      />
    </div>
  );
}
