"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (pathname !== "/") return;

      // Active section detection
      const scrollableItems = navItems.filter((item) => item.id !== "projects");
      const sections = scrollableItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(scrollableItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Scroll ke section tujuan setelah pindah halaman (contoh: /#about)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleNav = (item) => {
    setIsMenuOpen(false);

    if (item.id === "projects") {
      router.push("/projects");
      return;
    }

    if (pathname === "/") {
      scrollToSection(item.id);
    } else {
      router.push(item.href);
    }
  };

  const isActive = (item) =>
    item.id === "projects" ? pathname === "/projects" : pathname === "/" && activeSection === item.id;

  if (!mounted) return null;

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(11,12,15,0.92)"
          : "rgba(11,12,15,0.0)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNav(navItems[0])}
          className="font-serif text-xl tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          AD<span style={{ color: "var(--text-secondary)" }}>.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.id === "projects" ? (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm capitalize tracking-widest transition-colors duration-200"
                style={{
                  color: isActive(item) ? "var(--accent)" : "var(--text-secondary)",
                  letterSpacing: "0.08em",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className="text-sm capitalize tracking-widest transition-colors duration-200"
                style={{
                  color: isActive(item)
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                  letterSpacing: "0.08em",
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text-primary)",
              transform: isMenuOpen ? "rotate(45deg) translate(3px, 3px)" : "",
            }}
          />
          <span
            className="block w-4 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text-primary)",
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text-primary)",
              transform: isMenuOpen
                ? "rotate(-45deg) translate(3px, -3px)"
                : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: isMenuOpen ? "200px" : "0",
          background: "rgba(11,12,15,0.97)",
          borderBottom: isMenuOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) =>
            item.id === "projects" ? (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm capitalize text-left tracking-widest transition-colors duration-200"
                style={{
                  color: isActive(item)
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className="text-sm capitalize text-left tracking-widest transition-colors duration-200"
                style={{
                  color: isActive(item)
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
