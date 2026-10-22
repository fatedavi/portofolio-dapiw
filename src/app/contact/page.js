import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Hubungi ${siteConfig.name}, Fullstack Developer di ${siteConfig.location}. Email, WhatsApp, telepon, dan GitHub.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: `${siteConfig.url}/contact`,
  },
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    action: "Kirim Email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    action: "Chat WhatsApp",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    action: "Telepon",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/fatedavi",
    href: siteConfig.github,
    action: "Lihat Repository",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: siteConfig.location,
    href: null,
    action: null,
  },
];

export default function Contact() {
  return (
    <div
      className="min-h-screen pt-32 pb-28 px-6"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={15} />
          Kembali ke Beranda
        </Link>

        <div className="mt-10 text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Kontak
          </span>
          <h1
            className="font-serif text-4xl md:text-5xl mt-3 mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Mari Berkolaborasi
          </h1>
          <p
            className="text-base leading-relaxed max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Punya project menarik atau ingin mendiskusikan peluang kerja sama?
            Pilih salah satu kanal di bawah ini — biasanya saya membalas dalam
            24 jam.
          </p>
        </div>

        {/* Channels */}
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {channels.map(({ icon: Icon, label, value, href, action }) => (
            <div
              key={label}
              className="card p-6"
              style={{ transition: "none", transform: "none" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(200,169,110,0.1)" }}
                >
                  <Icon size={17} style={{ color: "var(--accent)" }} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs tracking-wider uppercase mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm break-words transition-colors duration-200 hover:text-[var(--accent)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {value}
                    </p>
                  )}
                </div>
              </div>

              {action && (
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 text-xs font-medium mt-5 pt-4 w-full"
                  style={{
                    color: "var(--text-muted)",
                    borderTop: "1px solid var(--border)",
                  }}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {action}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a href={`mailto:${siteConfig.email}`} className="btn-primary">
            <Mail size={16} />
            Kirim Email
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <Link href="/#contact" className="btn-outline">
            Kembali ke Section Kontak
          </Link>
        </div>
      </div>
    </div>
  );
}
