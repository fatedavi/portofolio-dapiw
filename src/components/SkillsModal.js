"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

// Hindari warning "useLayoutEffect does nothing on the server"
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function SkillsModal({ category, open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // onClose selalu funkcional terbaru tanpa memicu efek ulang
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Mount saat modal dibuka
  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  // Animasi keluar
  useEffect(() => {
    if (open) return;

    setEntered(false);
    const timer = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(timer);
  }, [open]);

  // Animasi masuk: gaya awal harus sempat ter-render dulu supaya
  // browser tidak langsung lompat ke posisi akhir tanpa transisi
  useIsomorphicLayoutEffect(() => {
    if (!open || !mounted) return;

    void panelRef.current?.offsetHeight;
    setEntered(true);
  }, [open, mounted]);

  // Kunci scroll body + tutup dengan ESC + jaga fokus di dalam panel
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusables = panel.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Fokus ke tombol tutup, kembalikan fokus ke card pemicu saat ditutup
  useEffect(() => {
    if (!open || !mounted) return;

    lastFocusedRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    return () => {
      lastFocusedRef.current?.focus?.();
    };
  }, [open, mounted]);

  if (!mounted || !category) return null;

  const titleId = `skills-modal-title-${category.id}`;
  const CategoryIcon = category.icon;
  const muted = Boolean(category.muted);
  const total = category.groups.reduce((sum, group) => sum + group.items.length, 0);

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => onCloseRef.current()}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`skill-modal-panel relative w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-out ${
          entered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        {/* Header */}
        <div
          className="shrink-0 flex items-start gap-4 px-6 pt-6 pb-5"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <span
            className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: muted
                ? "rgba(255,255,255,0.04)"
                : "rgba(200,169,110,0.1)",
              border: "1px solid var(--border)",
            }}
          >
            <CategoryIcon
              size={22}
              style={{
                color: muted ? "var(--text-secondary)" : "var(--accent)",
              }}
            />
          </span>

          <div className="min-w-0 flex-1">
            <h3
              id={titleId}
              className="font-serif text-2xl leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {category.title}
            </h3>
            <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>
              {total} skill
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => onCloseRef.current()}
            aria-label="Tutup daftar skill"
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{
              background: "rgba(11,12,15,0.6)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <X size={17} />
          </button>
        </div>

        {/* Konten */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {category.blurb}
          </p>

          <div className="flex flex-col gap-6">
            {category.groups.map((group) => (
              <div key={group.label}>
                <p
                  className="text-[10px] uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(({ name, icon: ItemIcon }) => (
                    <span
                      key={name}
                      className="tag skill-pill"
                      style={
                        muted
                          ? { borderStyle: "dashed", background: "transparent" }
                          : undefined
                      }
                    >
                      <ItemIcon size={13} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
