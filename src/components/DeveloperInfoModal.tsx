import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  BookOpen, 
  User, 
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

interface DeveloperInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperInfoModal: React.FC<DeveloperInfoModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [hasPrayed, setHasPrayed] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const whatsappNumber = '085881914997';
  const whatsappIntl = '6285881914997';
  const emailAddress = 'abuzair998@gmail.com';
  const defaultWaMessage = encodeURIComponent(
    "Assalamu'alaikum Ustadz Muhammad Siroj (Abu Uzair). Semoga antum dan keluarga senantiasa dalam lindungan serta keberkahan Allah SWT. Saya pengguna aplikasi Tahfidz Tracker..."
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl border border-emerald-100 dark:border-emerald-900/60 overflow-hidden text-slate-800 dark:text-slate-100 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dev-info-title"
      >
        {/* Header with Islamic Pattern Accent */}
        <div className="relative bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-5 sm:p-6 shrink-0 overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute right-16 -bottom-10 w-28 h-28 rounded-full bg-emerald-400/10 pointer-events-none" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-inner shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-200 border border-amber-300/30 tracking-wide uppercase">
                    Profil Pengembang
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-200/90 font-medium">
                    <Sparkles className="w-3 h-3 text-amber-300" /> Tahfidz Tracker
                  </span>
                </div>
                <h2 id="dev-info-title" className="text-lg sm:text-xl font-bold text-white mt-1">
                  Informasi & Pesan Pengembang
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-sm leading-relaxed">
          {/* Basmalah & Greeting */}
          <div className="text-center py-2 border-b border-slate-100 dark:border-slate-800">
            <p className="font-serif text-lg sm:text-xl text-emerald-800 dark:text-emerald-300 font-semibold tracking-wide mb-1.5">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              Assalamu’alaikum warahmatullahi wabarakatuh.
            </p>
          </div>

          {/* Developer Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-slate-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-slate-850 border border-emerald-200/80 dark:border-emerald-800/60 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-2xl shadow-md border-2 border-white dark:border-slate-800">
                AU
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 p-1 rounded-full shadow-xs" title="Pengembang Resmi">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Muhammad Siroj <span className="text-emerald-700 dark:text-emerald-400 font-medium">(Abu Uzair)</span>
              </h3>
              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                Pengembang & Inisiator Tahfidz Tracker
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 pt-0.5">
                Didedikasikan untuk dakwah, pendidikan Islam, dan para penghafal Al-Qur’an di seluruh Nusantara.
              </p>
            </div>
          </div>

          {/* Heartfelt Letter */}
          <div className="space-y-3.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
            <p>
              Perkenalkan, saya <strong>Muhammad Siroj</strong>, yang dikenal dengan nama <strong>Abu Uzair</strong>, pengembang Tahfidz Tracker.
            </p>

            <p>
              Tahfidz Tracker dikembangkan sebagai bentuk ikhtiar untuk membantu para pengajar, pengelola lembaga pendidikan Islam, dan wali santri dalam memantau perkembangan hafalan Al-Qur’an dengan lebih mudah dan terstruktur.
            </p>

            <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/25 border border-amber-200/80 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 space-y-1">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-800 dark:text-amber-300">
                <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Prinsip Gratis & Terbuka untuk Ummat</span>
              </div>
              <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                Website ini dapat digunakan secara gratis. Saya berusaha membangunnya dengan memanfaatkan berbagai tools gratis agar manfaatnya bisa dirasakan oleh lebih banyak orang.
              </p>
            </div>

            <p>
              Meskipun gratis untuk digunakan, proses pembuatannya membutuhkan waktu, pembelajaran, riset, dan pengembangan selama berbulan-bulan. Tentu masih banyak kekurangan yang perlu diperbaiki, dan saya berharap website ini dapat terus berkembang serta memberikan manfaat yang lebih luas.
            </p>

            <p className="italic text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
              "Saya tidak mengharapkan imbalan materi untuk penggunaan website ini. Saya hanya memohon doa yang baik dari para pengguna, semoga Allah memberkahi ilmu dan usaha ini, mengampuni dosa-dosa saya, serta melimpahkan kebaikan, kesehatan, dan keberkahan rezeki kepada saya dan keluarga."
            </p>

            <p>
              Semoga setiap kemudahan yang hadir melalui website ini menjadi amal jariyah dan sebab bertambahnya kecintaan kita terhadap Al-Qur’an.
            </p>

            <p className="font-semibold text-emerald-800 dark:text-emerald-300">
              Jazakumullahu khairan atas doa dan dukungannya.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Kontak Pengembang</span>
              </h4>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Silaturahmi & Masukan
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                      WhatsApp Resmi
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      {whatsappNumber}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                  <a
                    href={`https://wa.me/${whatsappIntl}?text=${defaultWaMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Hubungi WA</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(whatsappNumber, 'wa')}
                    className="p-1.5 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl transition-colors cursor-pointer"
                    title="Salin Nomor WhatsApp"
                  >
                    {copiedField === 'wa' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                      Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                  <a
                    href={`mailto:${emailAddress}?subject=${encodeURIComponent('Pesan Pengguna Tahfidz Tracker')}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Kirim Email</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(emailAddress, 'email')}
                    className="p-1.5 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl transition-colors cursor-pointer"
                    title="Salin Alamat Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dua Action & Closing */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2.5">
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
              Barakallahu fiikum. Semoga Allah menerima setiap amal kebaikan kita dan menjadikannya pemberat timbangan amal di akhirat.
            </p>

            <button
              type="button"
              onClick={() => setHasPrayed(true)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                hasPrayed
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                  : 'bg-white dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-slate-700 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${hasPrayed ? 'text-amber-300' : 'text-amber-500'}`} />
              <span>{hasPrayed ? 'Aamiin ya Rabbal \'Alamin 🤲 (Jazakumullah Khair)' : 'Kirim Doa Kebaikan untuk Pengembang 🤲'}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <span>Tahfidz Tracker · Dikelola Mandiri Lillah</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-xl font-bold transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
