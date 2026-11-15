"use client";

import { useEffect, useCallback } from "react";
import { X, ExternalLink } from "lucide-react";

export interface CertificateModalData {
  imageUrl: string;
  title: string;
  issuer?: string;
  certificateId?: string;
}

interface CertificateModalProps {
  data: CertificateModalData | null;
  onClose: () => void;
}

export default function CertificateModal({
  data,
  onClose,
}: CertificateModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, handleKeyDown]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full liquid-glass-card rounded-3xl border border-white/80 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/50 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
          <div className="pr-4">
            <h3
              id="cert-modal-title"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight"
            >
              {data.title}
            </h3>
            {data.issuer && (
              <p className="text-xs text-blue-600 dark:text-sky-400 font-semibold mt-0.5">
                {data.issuer}
                {data.certificateId && (
                  <span className="text-slate-500 dark:text-slate-400 ml-2 font-mono font-normal">
                    · ID: {data.certificateId}
                  </span>
                )}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors shrink-0"
            aria-label="Close certificate preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate View */}
        <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-900/5 dark:bg-black/40 min-h-[300px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.imageUrl}
            alt={data.title}
            className="max-h-[72vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-white/70 dark:border-white/15"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/50 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-xs text-slate-600 dark:text-slate-400">
          <span>Click outside or press ESC to dismiss</span>
          <a
            href={data.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-sky-400 hover:underline font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            Open Full Resolution <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
