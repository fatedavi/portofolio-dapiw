"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

// ── DATA ───────────────────────────────────────────────────────────────────

const experiences = [
  {
    year: "Agustus 2025",
    duration: "1 Bulan",
    company: "PT Multi Power Abadi",
    role: "Web Developer Intern",
    description:
      "Membangun aplikasi Invoice Management dan HR Management berbasis web menggunakan Laravel, mempresentasikan aplikasi kepada stakeholder, serta mengenalkan konsep IT dasar kepada staf non-teknis.",
  },
  {
    year: "Agustus 2023",
    duration: "4 Bulan",
    company: "Azlogistic",
    role: "Software Quality Control (QC)",
    description:
      "Mengidentifikasi dan mendokumentasikan bug pada aplikasi dan website yang sedang dikembangkan, melakukan public speaking untuk komunikasi peningkatan proyek, serta mereview komponen kritis proyek.",
  },
  {
    year: "Juni 2021",
    duration: "4 Bulan",
    company: "Badan Pusat Statistik (Regsokdes)",
    role: "Data Entry Staff",
    description:
      "Mengelola dan memproses data yang dikumpulkan dari masyarakat dan dikirimkan oleh tim lapangan untuk keperluan survei statistik nasional.",
  },
  {
    year: "Agustus 2020",
    duration: "4 Bulan",
    company: "Astracom",
    role: "Warehouse Administrator",
    description:
      "Bertanggung jawab mencatat laptop masuk, mengelola inventaris, serta melakukan reinstalasi Windows pada perangkat yang memerlukan perbaikan.",
  },
];

const education = [
  {
    year: "2019 – 2022",
    institution: "SMK Darma Siswa 1",
    major: "Teknik Komputer dan Jaringan",
    description:
      "Mempelajari fondasi teknik komputer termasuk komponen hardware dan keterampilan perakitan PC/laptop. Pernah mengikuti kompetisi Cloud Computing antar kabupaten.",
  },
  {
    year: "2022 – 2026",
    institution: "Institut Teknologi Adhitama Surabaya",
    major: "Sistem dan Teknologi Informasi",
    description:
      "Mempelajari konsep dasar teknologi informasi, pengembangan perangkat lunak, dan manajemen sistem informasi. Aktif dalam proyek pengembangan aplikasi berbasis web.",
    GPA: "3.44/4.00",
  },
];

// ── COMPONENTS ─────────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-16">
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </span>
      <h2
        className="font-serif text-4xl md:text-5xl mt-3"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div className="section-divider" />
    </div>
  );
}

// ── MAIN ───────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(200,169,110,0.06) 0%, transparent 60%)",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          className={`text-center max-w-3xl mx-auto relative z-10 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 animate-fade-in"
            style={{
              background: "rgba(200,169,110,0.1)",
              color: "var(--accent)",
              border: "1px solid rgba(200,169,110,0.2)",
            }}
          >
            {siteConfig.tagline}
          </span>
          <h1
            className="font-serif mb-6 leading-tight animate-fade-up delay-100"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "var(--text-primary)",
            }}
          >
            Achmad Dafi
            <br />
            <span style={{ color: "var(--accent)" }}>Ihsannudin</span>
          </h1>

          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10 animate-fade-up delay-200"
            style={{ color: "var(--text-secondary)" }}
          >
            Seorang individual dengan minat kuat di bidang teknologi informasi,
            khususnya pengembangan perangkat lunak. Berfokus pada membangun
            solusi web yang bersih, fungsional, dan berdampak.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300">
            <Link href="/projects" className="btn-primary">
              Lihat Projects
              <ArrowUpRight size={16} />
            </Link>
            <button onClick={() => scrollTo("contact")} className="btn-outline">
              Hubungi Saya
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mt-12 animate-fade-up delay-400">
            {[
              {
                icon: Github,
                href: siteConfig.github,
                label: "GitHub",
              },
              {
                icon: Mail,
                href: `mailto:${siteConfig.email}`,
                label: "Email",
              },
              {
                icon: Phone,
                href: `tel:${siteConfig.phone}`,
                label: "Phone",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-200"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
          aria-label="Scroll to about"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Tentang Saya" title="About Me" />

          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-start">
            {/* Photo */}
            <div className="animate-fade-up">
              <div
                className="overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  aspectRatio: "3/4",
                  borderRadius: "16px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Achmad Dafi Ihsannudin"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;font-family:serif;color:var(--accent)">AD</div>';
                  }}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="animate-fade-up delay-200">
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                Saya adalah seorang{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Fullstack Developer
                </strong>{" "}
                dengan latar belakang pendidikan Sistem dan Teknologi Informasi.
                Saya memiliki pemahaman yang baik tentang konsep teknologi,
                terbiasa menggunakan berbagai software komputer, dan memiliki
                keterampilan pemrograman yang solid.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Selain itu, saya selalu antusias untuk menjelajahi bidang baru
                dan terus mengembangkan kemampuan melalui pembelajaran
                berkelanjutan dan pengalaman nyata di dunia kerja.
              </p>

              {/* Stats */}
              <div className="flex gap-10 mt-10">
                {[
                  { value: `${experiences.length}`, label: "Pengalaman Kerja" },
                  { value: `${projects.length}`, label: "Projects" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-serif text-3xl mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-xs tracking-wider uppercase"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SkillsSection />
        </div>
      </section>

      {/* ── EXPERIENCE & EDUCATION ───────────────────────────────────────── */}
      <section
        id="experience"
        className="py-28 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Work Experience */}
            <div>
              <SectionHeader label="Karier" title="Work Experience" />
              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-0 top-2 bottom-2 w-px"
                  style={{ background: "var(--border)" }}
                />
                <div className="space-y-10 pl-8">
                  {experiences.map((exp, i) => (
                    <div
                      key={i}
                      className="relative animate-fade-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {/* Dot */}
                      <div
                        className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full"
                        style={{
                          background:
                            i === 0 ? "var(--accent)" : "var(--text-muted)",
                          boxShadow:
                            i === 0
                              ? "0 0 0 3px rgba(200,169,110,0.15)"
                              : "none",
                          transform: "translateX(-50%) translateX(0.5px)",
                        }}
                      />
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div>
                          <h3
                            className="text-base font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {exp.role}
                          </h3>
                          <p
                            className="text-sm"
                            style={{ color: "var(--accent)" }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p
                            className="text-xs"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {exp.year}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {exp.duration}
                          </p>
                        </div>
                      </div>
                      <p
                        className="text-sm leading-relaxed mt-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionHeader label="Pendidikan" title="Education" />
              <div className="relative">
                <div
                  className="absolute left-0 top-2 bottom-2 w-px"
                  style={{ background: "var(--border)" }}
                />
                <div className="space-y-10 pl-8">
                  {education.map((edu, i) => (
                    <div
                      key={i}
                      className="relative animate-fade-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div
                        className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full"
                        style={{
                          background: "var(--accent)",
                          boxShadow: "0 0 0 3px rgba(200,169,110,0.15)",
                          transform: "translateX(-50%) translateX(0.5px)",
                        }}
                      />
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div>
                          <h3
                            className="text-base font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {edu.institution}
                          </h3>
                          <p
                            className="text-sm"
                            style={{ color: "var(--accent)" }}
                          >
                            {edu.major}
                          </p>
                        </div>
                        <span
                          className="text-xs shrink-0"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {edu.year}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed mt-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {edu.description}
                      </p>
                      {edu.GPA && (
                        <p
                          className="text-sm leading-relaxed mt-1"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          GPA: {edu.GPA}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                Portfolio
              </span>
              <h2
                className="font-serif text-4xl md:text-5xl mt-3"
                style={{ color: "var(--text-primary)" }}
              >
                Projects
              </h2>
              <div className="section-divider" />
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link href="/projects" className="btn-outline">
                <ArrowUpRight size={16} />
                Lihat Semua
              </Link>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Kontak
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl mt-3 mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Mari Berkolaborasi
          </h2>
          <p
            className="text-base leading-relaxed mb-12 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Punya project menarik atau ingin mendiskusikan peluang kerja sama?
            Saya dengan senang hati akan menghubungi Anda kembali dalam waktu 24
            jam.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
              <Mail size={16} />
              Kirim Email
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          {/* Contact details */}
          <div
            className="flex flex-wrap justify-center gap-8 pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: Phone,
                label: "WhatsApp",
                value: siteConfig.phoneDisplay,
                href: `tel:${siteConfig.phone}`,
              },
              {
                icon: MapPin,
                label: "Lokasi",
                value: siteConfig.location,
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3 group">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(200,169,110,0.1)" }}
                >
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div className="text-left">
                  <p
                    className="text-xs tracking-wider uppercase mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span
              className="font-serif text-xl"
              style={{ color: "var(--accent)" }}
            >
              AD.
            </span>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} {siteConfig.name}. Dibuat di Surabaya.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Built with <span style={{ color: "var(--accent)" }}>Next.js</span>{" "}
              & <span style={{ color: "var(--accent)" }}>Tailwind CSS</span>
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/fatedavi/",
                  label: "GitHub",
                },
                {
                  icon: Mail,
                  href: `mailto:${siteConfig.email}`,
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
