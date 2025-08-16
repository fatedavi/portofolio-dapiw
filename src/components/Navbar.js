"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  // Track scroll
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    setScrollY(window.scrollY);
    

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll ke section tertentu
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Hindari hydration mismatch
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-40 transition-all duration-300">
      <div
        className="backdrop-blur-xl border-b border-white/10"
        style={{
          backgroundColor:
            scrollY > 50 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.2)",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              ⚡ Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects",  "contact"].map(
                (item, idx) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative capitalize transition-all duration-300 hover:text-purple-400 group ${
                      activeSection === item
                        ? "text-purple-400"
                        : "text-white"
                    }`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-3 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-6 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 pb-4 space-y-2">
              {["home", "about", "projects",  "contact"].map(
                (item, idx) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-3 capitalize hover:text-purple-400 transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg px-4"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
