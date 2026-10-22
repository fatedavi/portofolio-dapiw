"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import SkillsModal from "@/components/SkillsModal";
import { skillCategories } from "@/data/skills";

function PreviewIcons({ items }) {
  return (
    <span className="flex items-center gap-2.5" aria-hidden="true">
      {items.map(({ name, icon: Icon }) => (
        <Icon key={name} size={16} style={{ color: "var(--text-secondary)" }} />
      ))}
    </span>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openCategory = (category) => {
    setActiveCategory(category);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div id="skills" className="mt-16">
      <div className="flex items-end justify-between gap-6 mb-6 flex-wrap">
        <div>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Keahlian
          </span>
          <h3
            className="font-serif text-2xl md:text-3xl mt-2"
            style={{ color: "var(--text-primary)" }}
          >
            Skills &amp; Expertise
          </h3>
        </div>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Klik card untuk melihat seluruh skill
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
        {skillCategories.map((category) => {
          const muted = Boolean(category.muted);
          const allItems = category.groups.flatMap((group) => group.items);
          const total = allItems.length;
          const preview = allItems.slice(0, 6);
          const CategoryIcon = category.icon;
          const isActive = modalOpen && activeCategory?.id === category.id;

          return (
            <div
              key={category.id}
              className="skill-card"
              data-open={isActive ? "true" : "false"}
              data-muted={muted ? "true" : "false"}
            >
              <button
                type="button"
                onClick={() => openCategory(category)}
                aria-haspopup="dialog"
                aria-expanded={isActive}
                aria-controls={`skills-modal-title-${category.id}`}
                className="w-full text-left p-6 flex items-start gap-4 cursor-pointer"
              >
                <span
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: muted
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(200,169,110,0.1)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <CategoryIcon
                    size={19}
                    style={{
                      color: muted ? "var(--text-secondary)" : "var(--accent)",
                    }}
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className="block text-base font-semibold leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {category.title}
                  </span>
                  <span
                    className="block text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {total} skill
                  </span>
                  <span className="mt-4 flex items-center gap-2">
                    <PreviewIcons items={preview} />
                    {total > preview.length && (
                      <span
                        className="text-[11px] font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        +{total - preview.length}
                      </span>
                    )}
                  </span>
                </span>

                <span
                  className="shrink-0 mt-1 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  <ArrowUpRight size={15} />
                </span>
              </button>
            </div>
          );
        })}
      </div>

      <SkillsModal
        category={activeCategory}
        open={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
