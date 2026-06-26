import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Lock, 
  Database, 
  X, 
  Trash2, 
  Download, 
  Search, 
  RefreshCw, 
  Users, 
  Calendar, 
  ChevronRight,
  Shield,
  PlusCircle,
  TrendingUp,
  FileSpreadsheet
} from "lucide-react";
import { Language, Submission } from "../types";

interface AdminPanelProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ currentLang, isOpen, onClose }: AdminPanelProps) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loginError, setLoginError] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Load submissions from localStorage
  const loadSubmissions = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("pumassi_submissions") || "[]");
      // Sort newest first
      const sorted = saved.sort((a: any, b: any) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      setSubmissions(sorted);
    } catch (err) {
      console.error("Failed to load submissions", err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadSubmissions();
    }
  }, [isOpen]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123" || password === "1234") {
      setIsUnlocked(true);
      setLoginError("");
    } else {
      setLoginError(currentLang === Language.KO ? "비밀번호가 일치하지 않습니다. (힌트: admin123)" : "Incorrect password. (Hint: admin123)");
    }
  };

  const handleDelete = (id: string) => {
    try {
      const updated = submissions.filter(sub => sub.id !== id);
      localStorage.setItem("pumassi_submissions", JSON.stringify(updated));
      setSubmissions(updated);
      setConfirmDeleteId(null);
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const handleClearAll = () => {
    if (window.confirm(currentLang === Language.KO ? "정말로 모든 데이터를 삭제하시겠습니까?" : "Are you sure you want to delete all database entries?")) {
      try {
        localStorage.removeItem("pumassi_submissions");
        setSubmissions([]);
      } catch (err) {
        console.error("Failed to clear", err);
      }
    }
  };

  const handleGenerateMockData = () => {
    const mockNames = ["김철수", "이영희", "박지민", "정수현", "최강우", "정다은", "이민혁", "윤서진", "강동우"];
    const mockPhones = ["010-3456-7890", "010-9876-5432", "010-2345-6789", "010-5678-1234", "010-8765-4321", "010-1234-5678", "010-7788-9900", "010-4455-6677", "010-2211-3344"];
    
    const mockData: Submission[] = Array.from({ length: 5 }).map((_, i) => {
      const randomOffsetDays = Math.floor(Math.random() * 5);
      const d = new Date();
      d.setDate(d.getDate() - randomOffsetDays);
      d.setHours(Math.floor(Math.random() * 12) + 9, Math.floor(Math.random() * 60));

      return {
        id: Math.random().toString(36).substr(2, 9),
        name: mockNames[Math.floor(Math.random() * mockNames.length)],
        phone: mockPhones[Math.floor(Math.random() * mockPhones.length)],
        timestamp: d.toISOString()
      };
    });

    try {
      const existing = JSON.parse(localStorage.getItem("pumassi_submissions") || "[]");
      const merged = [...existing, ...mockData].sort((a: any, b: any) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      localStorage.setItem("pumassi_submissions", JSON.stringify(merged));
      setSubmissions(merged);
    } catch (err) {
      console.error(err);
    }
  };

  // CSV Export Utility
  const handleExportCSV = () => {
    if (submissions.length === 0) {
      alert(currentLang === Language.KO ? "내보낼 데이터가 없습니다." : "No data to export.");
      return;
    }

    const headers = currentLang === Language.KO 
      ? ["ID", "이름", "연락처", "등록시간"]
      : ["ID", "Name", "Phone", "Timestamp"];

    const rows = submissions.map(sub => [
      sub.id,
      sub.name,
      sub.phone,
      new Date(sub.timestamp).toLocaleString(currentLang === Language.KO ? "ko-KR" : "en-US")
    ]);

    const csvContent = "\uFEFF" + [headers, ...rows]
      .map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `pumassi_db_export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSubmissions = submissions.filter(sub => 
    sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.phone.replace(/-/g, "").includes(searchQuery.replace(/-/g, ""))
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-5xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col h-[85vh] overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-slate-950/40 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-display font-black text-white text-lg tracking-tight uppercase flex items-center gap-2">
                    {currentLang === Language.KO ? "상생의 길 관리자 DB 콘솔" : "Pumassi Admin DB Console"}
                    <span className="text-[10px] font-mono tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md uppercase font-black">
                      Live Link
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 font-medium font-sans">
                    {currentLang === Language.KO ? "실시간 등록 데이터 관리 및 내보내기 시스템" : "Real-time registration database management & export system"}
                  </p>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Lock / Password Screen */}
            {!isUnlocked ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-950/20">
                <div className="max-w-sm w-full space-y-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/5">
                    <Lock className="w-8 h-8 text-indigo-400 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-xl text-white">
                      {currentLang === Language.KO ? "비밀번호 입력" : "Secure Password Access"}
                    </h4>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed font-semibold">
                      {currentLang === Language.KO 
                        ? "관리자 데이터 보장을 위해 보안 인증이 필요합니다."
                        : "Security verification is required to view confidential entries."}
                      <span className="block mt-1 text-indigo-400/80 font-mono text-[10px]">
                        (Password: <strong className="font-black">admin123</strong> or <strong className="font-black">1234</strong>)
                      </span>
                    </p>
                  </div>

                  <form onSubmit={handleUnlock} className="space-y-4">
                    <div className="space-y-1">
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setLoginError("");
                        }}
                        placeholder={currentLang === Language.KO ? "관리자 비밀번호 입력" : "Enter Admin Password"}
                        className="w-full bg-slate-950/80 border border-white/10 focus:border-indigo-500/50 rounded-xl py-3.5 px-5 text-white text-center text-sm font-semibold transition-all outline-none"
                      />
                      {loginError && (
                        <p className="text-red-400 text-xs font-black pt-1">{loginError}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 premium-button-accent font-display font-black text-sm uppercase tracking-wider transition-all cursor-pointer"
                    >
                      {currentLang === Language.KO ? "인증 및 데이터 열람" : "Verify & Access Database"}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              /* Actual Content Area (Dashboard view) */
              <div className="flex-1 flex flex-col overflow-hidden bg-slate-950/20">
                {/* Statistics banner */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border-b border-white/5 bg-slate-950/10 shrink-0">
                  <div className="premium-card bg-slate-950/40 py-4 px-5 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        {currentLang === Language.KO ? "누적 등록 수" : "Total Registrants"}
                      </span>
                      <span className="font-display text-2xl font-black text-white">{submissions.length}명</span>
                    </div>
                    <Users className="w-8 h-8 text-indigo-400/55" />
                  </div>

                  <div className="premium-card bg-slate-950/40 py-4 px-5 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        {currentLang === Language.KO ? "최근 24시간 등록" : "Recent 24 Hours"}
                      </span>
                      <span className="font-display text-2xl font-black text-emerald-400">
                        {submissions.filter(s => {
                          const limit = new Date().getTime() - 24 * 60 * 60 * 1000;
                          return new Date(s.timestamp).getTime() > limit;
                        }).length}건
                      </span>
                    </div>
                    <TrendingUp className="w-8 h-8 text-emerald-400/55" />
                  </div>

                  <div className="premium-card bg-slate-950/40 py-4 px-5 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        {currentLang === Language.KO ? "최종 갱신" : "Last Synchronized"}
                      </span>
                      <span className="font-mono text-xs text-slate-300 font-black flex items-center gap-1 mt-1">
                        <RefreshCw className="w-3.5 h-3.5 text-slate-400 animate-spin" />
                        Live Sync
                      </span>
                    </div>
                    <Calendar className="w-8 h-8 text-slate-400/55" />
                  </div>

                  {/* Actions Column */}
                  <div className="flex md:flex-col gap-2 justify-center">
                    <button
                      onClick={handleExportCSV}
                      className="flex-1 py-2 px-3.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>{currentLang === Language.KO ? "엑셀 다운로드" : "Download CSV"}</span>
                    </button>

                    <button
                      onClick={handleGenerateMockData}
                      className="flex-1 py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4 text-amber-400" />
                      <span>{currentLang === Language.KO ? "테스트 등록 생성" : "Generate Test Data"}</span>
                    </button>
                  </div>
                </div>

                {/* Search & Bulk Tools Row */}
                <div className="px-6 py-4 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-950/20 shrink-0">
                  <div className="relative w-full md:max-w-md">
                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={currentLang === Language.KO ? "등록자 이름 또는 연락처 검색..." : "Search by name or phone..."}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl py-2.5 pl-11 pr-5 text-white text-xs font-semibold outline-none focus:border-indigo-500/50 transition-all font-sans"
                    />
                  </div>

                  {submissions.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="text-xs font-black text-red-400/80 hover:text-red-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>{currentLang === Language.KO ? "데이터베이스 전체 초기화" : "Flush All DB Records"}</span>
                    </button>
                  )}
                </div>

                {/* Table Scroll Area */}
                <div className="flex-1 overflow-y-auto min-h-0">
                  {filteredSubmissions.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-500">
                        <Database className="w-6 h-6" />
                      </div>
                      <div className="space-y-1 max-w-sm">
                        <h5 className="font-display font-black text-white text-sm">
                          {currentLang === Language.KO ? "등록 데이터가 없습니다" : "No Records Found"}
                        </h5>
                        <p className="font-sans text-xs text-slate-400 leading-relaxed font-semibold">
                          {currentLang === Language.KO 
                            ? "등록을 완료하면 여기에 실시간으로 기록이 추가됩니다. 혹은 오른쪽 상단의 '테스트 등록 생성'을 클릭해보세요!"
                            : "New submissions will appear here in real-time. Or click 'Generate Test Data' to seed mock submissions!"}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-950/50 text-slate-400 font-mono text-[10px] uppercase tracking-widest border-b border-white/5">
                            <th className="py-4 px-6 font-bold">{currentLang === Language.KO ? "등록고유ID" : "Unique ID"}</th>
                            <th className="py-4 px-6 font-bold">{currentLang === Language.KO ? "이름" : "Full Name"}</th>
                            <th className="py-4 px-6 font-bold">{currentLang === Language.KO ? "연락처" : "Phone Number"}</th>
                            <th className="py-4 px-6 font-bold">{currentLang === Language.KO ? "등록 시각" : "Registration Time"}</th>
                            <th className="py-4 px-6 text-right font-bold">{currentLang === Language.KO ? "관리" : "Action"}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 font-sans text-xs font-semibold text-slate-300">
                          {filteredSubmissions.map((sub) => (
                            <tr key={sub.id} className="hover:bg-white/5 transition-colors group">
                              <td className="py-4 px-6 font-mono text-[11px] text-slate-500 group-hover:text-slate-400">
                                {sub.id}
                              </td>
                              <td className="py-4 px-6 text-white font-bold">
                                {sub.name}
                              </td>
                              <td className="py-4 px-6 font-mono text-slate-200">
                                {sub.phone}
                              </td>
                              <td className="py-4 px-6 text-slate-400 font-medium">
                                {new Date(sub.timestamp).toLocaleString(currentLang === Language.KO ? "ko-KR" : "en-US")}
                              </td>
                              <td className="py-4 px-6 text-right">
                                {confirmDeleteId === sub.id ? (
                                  <div className="flex gap-1 justify-end">
                                    <button
                                      onClick={() => handleDelete(sub.id)}
                                      className="bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-md text-[10px] font-black uppercase cursor-pointer"
                                    >
                                      {currentLang === Language.KO ? "정말삭제" : "Confirm"}
                                    </button>
                                    <button
                                      onClick={() => setConfirmDeleteId(null)}
                                      className="bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md text-[10px] font-black uppercase cursor-pointer"
                                    >
                                      {currentLang === Language.KO ? "취소" : "Cancel"}
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setConfirmDeleteId(sub.id)}
                                    className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                                    title={currentLang === Language.KO ? "삭제" : "Delete"}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Footer Status Bar */}
                <div className="px-6 py-3 border-t border-white/5 bg-slate-950/40 flex items-center justify-between text-[10px] font-mono text-slate-500 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SYSTEM ONLINE - SECURE LOCAL STORAGE DATABASE</span>
                  </div>
                  <div>
                    {filteredSubmissions.length} of {submissions.length} entries shown
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
