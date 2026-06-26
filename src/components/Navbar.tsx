import { useState } from "react";
import { Handshake, Menu, X, Globe } from "lucide-react";
import { Language } from "../types";
import { UI_STRINGS } from "../data";

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ currentLang, setLang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_STRINGS[currentLang];

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-slate-950/75 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 group-hover:scale-105">
            <Handshake className="text-white w-5 h-5" />
          </div>
          <span className="font-display text-xl md:text-2xl font-black tracking-tight text-white uppercase bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
            {t.navTitle}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white font-extrabold hover:text-indigo-400 transition-all text-sm uppercase tracking-wider"
          >
            {t.navHome}
          </button>
          <button 
            onClick={() => handleScroll("philosophy")}
            className="text-slate-400 hover:text-white font-bold transition-colors text-sm uppercase tracking-wider"
          >
            {t.navPhilosophy}
          </button>
          <button 
            onClick={() => handleScroll("engine")}
            className="text-slate-400 hover:text-white font-bold transition-colors text-sm uppercase tracking-wider"
          >
            {t.navEngine}
          </button>
          <button 
            onClick={() => handleScroll("lifecycle")}
            className="text-slate-400 hover:text-white font-bold transition-colors text-sm uppercase tracking-wider"
          >
            {t.navLifecycle}
          </button>
          <button 
            onClick={() => handleScroll("faq")}
            className="text-slate-400 hover:text-white font-bold transition-colors text-sm uppercase tracking-wider"
          >
            FAQ
          </button>
        </div>

        {/* Language Toggler & CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-white/10">
            <Globe className="text-slate-400 w-4 h-4 ml-1.5" />
            <button
              onClick={() => setLang(Language.KO)}
              className={`text-xs font-black px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currentLang === Language.KO
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              KO
            </button>
            <button
              onClick={() => setLang(Language.EN)}
              className={`text-xs font-black px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currentLang === Language.EN
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              EN
            </button>
          </div>
          
          <button
            onClick={() => handleScroll("contact")}
            className="premium-button-accent px-4 py-2.5 text-xs font-extrabold"
          >
            {t.navContact}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Quick Language Toggle on Mobile */}
          <button
            onClick={() => setLang(currentLang === Language.KO ? Language.EN : Language.KO)}
            className="flex items-center gap-1 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/10 text-xs font-black text-slate-200"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>{currentLang}</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-xl bg-slate-900/80 text-white border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-slate-950/95 backdrop-blur-lg border-b border-white/10 absolute top-20 left-0 py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="w-full text-left py-2.5 text-white font-extrabold border-b border-white/5"
            >
              {t.navHome}
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScroll("philosophy"); }}
              className="w-full text-left py-2.5 text-slate-300 font-bold hover:text-white"
            >
              {t.navPhilosophy}
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScroll("engine"); }}
              className="w-full text-left py-2.5 text-slate-300 font-bold hover:text-white"
            >
              {t.navEngine}
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScroll("lifecycle"); }}
              className="w-full text-left py-2.5 text-slate-300 font-bold hover:text-white"
            >
              {t.navLifecycle}
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScroll("faq"); }}
              className="w-full text-left py-2.5 text-slate-300 font-bold hover:text-white"
            >
              FAQ
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScroll("contact"); }}
              className="w-full text-center py-3.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-black rounded-xl mt-4 border border-white/10 shadow-[0_4px_15px_rgba(99,102,241,0.4)]"
            >
              {t.navContact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
