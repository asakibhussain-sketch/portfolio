"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <div className="pr-4">
            <h3
              id="cert-modal-title"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight"
            >
              {data.title}
            </h3>
            {data.issuer && (
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                {data.issuer}
                {data.certificateId && (
                  <span className="text-slate-400 dark:text-slate-500 ml-2 font-normal">
                    · ID: {data.certificateId}
                  </span>
                )}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close certificate preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate View */}
        <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-slate-100 dark:bg-slate-950/60 min-h-[300px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.imageUrl}
            alt={data.title}
            className="max-h-[72vh] w-auto max-w-full rounded-lg shadow-md object-contain border border-slate-200 dark:border-slate-800"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 text-xs text-slate-500 dark:text-slate-400">
          <span>Click outside or press ESC to dismiss</span>
          <a
            href={data.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1"
          >
            Open Full Resolution ↗
          </a>
        </div>
      </div>
    </div>
  );
}

