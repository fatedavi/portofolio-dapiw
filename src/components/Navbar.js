"use client";

import React, { useState, useEffect } from "react";

const navItems = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navItems.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

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
          onClick={() => scrollToSection("home")}
          className="font-serif text-xl tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          AD<span style={{ color: "var(--text-secondary)" }}>.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm capitalize tracking-widest transition-colors duration-200"
              style={{
                color:
                  activeSection === item
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                letterSpacing: "0.08em",
              }}
            >
              {item}
            </button>
          ))}
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
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm capitalize text-left tracking-widest transition-colors duration-200"
              style={{
                color:
                  activeSection === item
                    ? "var(--accent)"
                    : "var(--text-secondary)",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
