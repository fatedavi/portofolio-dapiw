import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Mail } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Projects",
  description:
    "Daftar project yang pernah saya kerjakan, mulai dari aplikasi manajemen, dashboard administrasi, hingga platform digital hub.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: `${siteConfig.url}/projects`,
  },
};

export default function Projects() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={15} />
            Kembali ke Beranda
          </Link>

          <div className="mt-10">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Portfolio
            </span>
            <h1
              className="font-serif text-5xl md:text-6xl mt-3"
              style={{ color: "var(--text-primary)" }}
            >
              Projects
            </h1>
            <div className="section-divider" />
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Kumpulan project yang pernah saya kerjakan, mulai dari aplikasi
              manajemen, dashboard administrasi, hingga platform digital hub.
              Klik salah satu card untuk membuka panel detail dari samping.
            </p>
            <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
              {projects.length} project ditampilkan
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECT LIST ─────────────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif text-4xl md:text-5xl mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Punya Project Menarik?
          </h2>
          <p
            className="text-base leading-relaxed mb-12 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Saya terbuka untuk kolaborasi maupun kebutuhan digitalisasi
            di tempat kerja. Silakan hubungi saya, dan saya akan membalas
            dalam 24 jam.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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
            <Link href="/" className="btn-outline">
              <ArrowUpRight size={16} />
              About Saya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
