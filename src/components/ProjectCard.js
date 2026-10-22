"use client";

import React, { useState, useCallback } from "react";
import { ArrowUpRight, Images } from "lucide-react";
import ProjectDrawer from "@/components/ProjectDrawer";

export default function ProjectCard({ project, index = 0 }) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleCardClick = (event) => {
    if (event.target.closest("a, button")) return;
    if (typeof window !== "undefined" && window.getSelection()?.toString()) return;
    handleOpen();
  };

  return (
    <>
      <div
        className="card animate-fade-up flex flex-col cursor-pointer"
        style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
        onClick={handleCardClick}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden rounded-t-2xl shrink-0"
          style={{ height: "220px", background: "var(--bg-secondary)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg, #161820, #1e2030)";
            }}
          />

          {/* Jumlah screenshot */}
          {project.gallery?.length > 1 && (
            <span
              className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(11,12,15,0.7)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Images size={12} />
              {project.gallery.length} screenshot
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="min-w-0">
              {project.category && (
                <span
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  {project.category}
                </span>
              )}
              <h3 className="mt-1">
                <button
                  type="button"
                  onClick={handleOpen}
                  aria-haspopup="dialog"
                  className="text-left text-lg font-semibold leading-snug transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                >
                  {project.title}
                </button>
              </h3>
            </div>

            <button
              type="button"
              onClick={handleOpen}
              aria-haspopup="dialog"
              aria-label={`Lihat detail ${project.title}`}
              className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                background: "rgba(200,169,110,0.1)",
                color: "var(--accent)",
                border: "1px solid var(--border)",
              }}
            >
              <ArrowUpRight size={17} />
            </button>
          </div>

          <p
            className="text-sm leading-relaxed mb-5 line-clamp-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          {/* Detail trigger */}
          <div className="flex items-center mt-auto">
            <button
              type="button"
              onClick={handleOpen}
              aria-haspopup="dialog"
              className="ml-auto flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              Detail
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <ProjectDrawer project={project} open={open} onClose={handleClose} />
    </>
  );
}
