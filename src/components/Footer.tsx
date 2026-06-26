import { Handshake, MessageSquare, Instagram, Share2 } from "lucide-react";
import { Language } from "../types";
import { UI_STRINGS } from "../data";

interface FooterProps {
  currentLang: Language;
  onAdminOpen: () => void;
}

export default function Footer({ currentLang, onAdminOpen }: FooterProps) {
  const t = UI_STRINGS[currentLang];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-20 bg-slate-950 border-t border-white/5 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Brand Left Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Handshake className="text-white w-4 h-4" />
            </div>
            <span className="font-display text-lg font-black tracking-tight text-white uppercase">
              {t.navTitle}
            </span>
          </div>
          <p className="text-slate-400 font-sans text-xs md:text-sm max-w-sm leading-relaxed font-medium">
            {t.footerDesc}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-slate-800 transition-all text-slate-400 hover:text-white shadow-lg">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-slate-800 transition-all text-slate-400 hover:text-white shadow-lg">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-slate-800 transition-all text-slate-400 hover:text-white shadow-lg">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Right Column */}
        <div className="grid grid-cols-2 gap-8 md:justify-items-end">
          {/* Menu Column 1 */}
          <div className="space-y-4">
            <div className="text-white font-display font-black uppercase text-xs tracking-widest">
              {t.footerMenu1Title}
            </div>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400 font-sans font-medium">
              <li>
                <button onClick={() => handleScroll("philosophy")} className="hover:text-indigo-300 transition-colors text-left cursor-pointer">
                  {currentLang === Language.KO ? "세 가지 뿌리" : "Three Pillars"}
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("engine")} className="hover:text-indigo-300 transition-colors text-left cursor-pointer">
                  {currentLang === Language.KO ? "상생 엔진" : "The Engine"}
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("lifecycle")} className="hover:text-indigo-300 transition-colors text-left cursor-pointer">
                  {currentLang === Language.KO ? "복지 로드맵" : "Life's Journey"}
                </button>
              </li>
            </ul>
          </div>

          {/* Menu Column 2 */}
          <div className="space-y-4">
            <div className="text-white font-display font-black uppercase text-xs tracking-widest">
              {t.footerMenu2Title}
            </div>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400 font-sans font-medium">
              <li>
                <button onClick={() => handleScroll("contact")} className="hover:text-indigo-300 transition-colors text-left cursor-pointer">
                  {currentLang === Language.KO ? "문의하기" : "Contact Support"}
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("faq")} className="hover:text-indigo-300 transition-colors text-left cursor-pointer">
                  {currentLang === Language.KO ? "자주 묻는 질문" : "FAQ"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom row */}
        <div className="col-span-1 md:col-span-2 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-semibold">
            {t.footerCopy}
          </p>
          <button 
            onClick={onAdminOpen}
            className="flex items-center gap-1.5 font-mono text-[10px] md:text-xs text-slate-500 hover:text-indigo-400 uppercase tracking-widest font-bold transition-colors cursor-pointer border border-white/5 hover:border-indigo-500/20 bg-slate-900/40 px-3 py-1.5 rounded-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{currentLang === Language.KO ? "관리자 DB 콘솔" : "Admin DB Console"}</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
