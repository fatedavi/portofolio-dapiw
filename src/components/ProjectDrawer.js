"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Github, ExternalLink, Check, ChevronLeft, ChevronRight } from "lucide-react";

// Hindari warning "useLayoutEffect does nothing on the server"
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ProjectDrawer({ project, open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Screenshot yang tersedia: pakai gallery kalau ada, kalau tidak fallback ke image
  const gallery = project.gallery?.length
    ? project.gallery
    : [{ src: project.image, thumb: null, label: null }];
  const hasGallery = gallery.length > 1;
  const current = gallery[activeIndex] || gallery[0];

  const goTo = (index) =>
    setActiveIndex(((index % gallery.length) + gallery.length) % gallery.length);

  // Navigasi gallery selalu memakai nilai terbaru tanpa re-subscribe listener
  const navRef = useRef({ goTo, length: gallery.length });
  useEffect(() => {
    navRef.current = { goTo, length: gallery.length };
  });

  // onClose selalu funkcional terbaru tanpa memicu efek ulang
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Mount saat drawer dibuka
  useEffect(() => {
    if (open) {
      setMounted(true);
      setActiveIndex(0);
    }
  }, [open]);

  // Animasi keluar
  useEffect(() => {
    if (open) return;

    setEntered(false);
    const timer = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(timer);
  }, [open]);

  // Animasi masuk: nilai awal (translate-x-full) harus sempat ter-render
  // dulu, kalau tidak browser langsung melompat ke posisi akhir tanpa transisi
  useIsomorphicLayoutEffect(() => {
    if (!open || !mounted) return;

    // paksa reflow supaya gaya awal tercatat oleh browser
    void panelRef.current?.offsetHeight;
    setEntered(true);
  }, [open, mounted]);

  // Kunci scroll body + tutup dengan ESC
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      // Navigasi screenshot dengan panah kiri/kanan
      if (navRef.current.length > 1) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          navRef.current.goTo(activeIndexRef.current - 1);
          return;
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          navRef.current.goTo(activeIndexRef.current + 1);
          return;
        }
      }

      if (event.key !== "Tab") return;

      // Jaga fokus tetap di dalam panel
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

  // Fokus ke tombol tutup, kembalikan fokus ke pemicu saat drawer ditutup
  useEffect(() => {
    if (!open || !mounted) return;

    lastFocusedRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    return () => {
      lastFocusedRef.current?.focus?.();
    };
  }, [open, mounted]);

  if (!mounted) return null;

  const titleId = `drawer-title-${project.id}`;
  const meta = [
    project.role && { label: "Peran", value: project.role },
    project.year && { label: "Tahun", value: project.year },
    project.category && { label: "Kategori", value: project.category },
  ].filter(Boolean);

  return createPortal(
    <div
      className="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => onCloseRef.current()}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        className={`absolute inset-y-0 right-0 w-full max-w-lg flex flex-col transition-transform duration-300 ease-out ${
          entered ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "var(--bg-card)",
          borderLeft: "1px solid var(--border)",
          boxShadow: "-30px 0 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* Image + tombol tutup */}
        <div
          className="relative shrink-0 overflow-hidden"
          style={{
            height: hasGallery ? "240px" : "220px",
            background: "var(--bg-secondary)",
          }}
        >
          <img
            key={current.src}
            src={current.src}
            alt={
              current.label
                ? `${project.title} - ${current.label}`
                : project.title
            }
            className={`w-full h-full animate-fade-gallery ${
              hasGallery ? "object-contain" : "object-cover"
            }`}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg, #161820, #1e2030)";
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(22,24,32,0.9), transparent 42%)",
            }}
          />

          {hasGallery && (
            <>
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Screenshot sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(11,12,15,0.65)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Screenshot berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(11,12,15,0.65)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ChevronRight size={17} />
              </button>

              {/* Counter */}
              <span
                className="absolute bottom-3 right-4 text-[11px] font-medium tabular-nums px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(11,12,15,0.7)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {activeIndex + 1} / {gallery.length}
              </span>
            </>
          )}

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => onCloseRef.current()}
            aria-label="Tutup detail project"
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{
              background: "rgba(11,12,15,0.7)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              backdropFilter: "blur(8px)",
            }}
          >
            <X size={17} />
          </button>
        </div>

        {/* Caption + thumbnail screenshot */}
        {hasGallery && (
          <div
            className="shrink-0"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="flex items-center justify-between gap-4 px-5 pt-4 pb-3">
              <p
                className="text-xs font-medium truncate"
                style={{ color: "var(--text-secondary)" }}
              >
                {current.label}
              </p>
              <p
                className="text-[11px] uppercase tracking-wider shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                Screenshot
              </p>
            </div>

            <div
              className="flex gap-2 overflow-x-auto px-5 pb-4"
              style={{ scrollbarWidth: "none" }}
            >
              {gallery.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Lihat screenshot ${item.label || index + 1}`}
                  aria-current={index === activeIndex}
                  className="shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                  style={{
                    width: "84px",
                    height: "52px",
                    border:
                      index === activeIndex
                        ? "2px solid var(--accent)"
                        : "1px solid var(--border)",
                    opacity: index === activeIndex ? 1 : 0.45,
                    transform:
                      index === activeIndex ? "translateY(-2px)" : "none",
                  }}
                >
                  <img
                    src={item.thumb || item.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Konten */}
        <div className="flex-1 overflow-y-auto px-7 pt-5 pb-8">
          {project.category && (
            <span
              className="text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              {project.category}
            </span>
          )}

          <h2
            id={titleId}
            className="font-serif text-3xl leading-tight mt-2 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h2>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="mb-6" style={{ borderTop: "1px solid var(--border)" }} />

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {project.features?.length > 0 && (
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Fitur Utama
              </p>
              <ul className="flex flex-col gap-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Check
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {meta.length > 0 && (
            <div
              className="flex flex-wrap gap-x-10 gap-y-4 pt-5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {meta.map((item) => (
                <div key={item.label}>
                  <p
                    className="text-[11px] uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div
          className="shrink-0 flex items-center gap-4 px-7 py-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <Github size={15} />
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
          {!project.github && !project.live && (
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Private Project
            </span>
          )}
        </div>
      </aside>
    </div>,
    document.body
  );
}
