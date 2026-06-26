import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Sparkles, Send, CheckCircle2, X } from "lucide-react";
import { Language, Submission } from "../types";
import { UI_STRINGS } from "../data";

interface CtaFormProps {
  currentLang: Language;
}

export default function CtaForm({ currentLang }: CtaFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const t = UI_STRINGS[currentLang];

  // Helper to format phone as 010-XXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 7) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    } else if (value.length > 3) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    }
    setPhone(value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError(currentLang === Language.KO ? "성함을 입력해 주세요." : "Please enter your name.");
      return;
    }

    if (phone.length < 11) {
      setError(currentLang === Language.KO ? "올바른 연락처 형식(11자리)으로 입력해 주세요." : "Please enter a valid 11-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate server action
    setTimeout(() => {
      const submission: Submission = {
        id: Math.random().toString(36).substr(2, 9),
        name: name.trim(),
        phone: phone,
        timestamp: new Date().toISOString(),
      };

      // Save submission to localStorage to show functional depth
      try {
        const existing = JSON.parse(localStorage.getItem("pumassi_submissions") || "[]");
        existing.push(submission);
        localStorage.setItem("pumassi_submissions", JSON.stringify(existing));
      } catch (err) {
        console.error("Local storage error:", err);
      }

      setIsSubmitting(false);
      setShowSuccess(true);
      setName("");
      setPhone("");
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto space-y-12">
      {/* Title block */}
      <div className="text-center space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight uppercase bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
          {t.ctaTitle}
        </h2>
        <p className="font-sans text-sm md:text-base text-slate-400 font-medium leading-relaxed">
          {t.ctaSub}
        </p>
      </div>

      {/* Form Card styled as a translucent premium card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card bg-slate-950/45 border border-white/5"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block font-sans text-xs uppercase tracking-wider text-slate-300 font-black">
              {t.ctaLabelName}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder={t.ctaPlaceholderName}
              className="w-full bg-slate-900/60 border border-white/10 focus:border-indigo-500/50 rounded-xl py-4 px-6 text-white text-sm font-semibold transition-all outline-none"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="block font-sans text-xs uppercase tracking-wider text-slate-300 font-black">
              {t.ctaLabelPhone}
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={handlePhoneChange}
              placeholder={t.ctaPlaceholderPhone}
              className="w-full bg-slate-900/60 border border-white/10 focus:border-indigo-500/50 rounded-xl py-4 px-6 text-white text-sm font-bold transition-all outline-none font-mono"
            />
          </div>

          {/* Validation Alert */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs font-black text-center"
            >
              {error}
            </motion.p>
          )}

          {/* Submit Button (Premium style) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4.5 premium-button-accent ${
              isSubmitting ? "opacity-60 cursor-not-allowed scale-95" : "cursor-pointer"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-white" />
                <span>{t.ctaBtn}</span>
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Secure Foundation info card styled as a premium sky-blue outline block */}
      <div className="premium-card bg-sky-500/5 border border-sky-500/15 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/25 shrink-0 shadow-lg">
          <ShieldCheck className="text-sky-400 w-6 h-6" />
        </div>
        <div className="space-y-1">
          <p className="text-white font-black text-sm md:text-base leading-none">
            {t.ctaSecureTitle}
          </p>
          <p className="text-xs text-slate-400 font-bold leading-relaxed">
            {t.ctaSecureDesc}
          </p>
        </div>
      </div>

      {/* Pop-up Success Modal using Framer Motion */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-slate-900 p-8 rounded-3xl border border-white/10 max-w-sm w-full text-center space-y-6 shadow-2xl relative overflow-hidden"
            >
              {/* Confetti decoration bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />

              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="text-emerald-400 w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-black text-white uppercase tracking-tight flex items-center justify-center gap-1.5">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  {t.successAlertTitle}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-400 font-medium leading-relaxed">
                  {t.successAlertDesc}
                </p>
              </div>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3.5 premium-button-accent font-display font-black rounded-xl transition-all"
              >
                {t.successAlertBtn}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
