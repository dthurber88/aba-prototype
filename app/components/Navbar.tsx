"use client";

import { useEffect, useState } from "react";
import { useTheme, type Theme } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
    background: isScrolled ? "var(--nav-bg-solid)" : "transparent",
    backdropFilter: isScrolled ? "blur(14px)" : "none",
    borderBottom: isScrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
  };

  const linkStyle: React.CSSProperties = {
    color: isScrolled ? "var(--nav-text)" : "#ffffff",
    fontWeight: 500,
    fontSize: "0.9375rem",
    textDecoration: "none",
    transition: "opacity 0.2s",
  };

  return (
    <nav style={navStyle}>
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.125rem",
              color: isScrolled ? "var(--nav-text)" : "#ffffff",
              transition: "color 0.3s ease",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="text-rainbow" style={{ marginRight: "0.25rem" }}>
              ✦
            </span>
            Kristyn Hardin, BCBA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitcher theme={theme} setTheme={setTheme} scrolled={isScrolled} />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: isScrolled ? "var(--nav-text)" : "#ffffff" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--nav-bg-solid)",
            borderTop: "1px solid var(--nav-border)",
            padding: "1rem 1.25rem 1.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "var(--nav-text)",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid var(--nav-border)",
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <ThemeSwitcher theme={theme} setTheme={setTheme} scrolled />
          </div>
        </div>
      )}
    </nav>
  );
}

function ThemeSwitcher({
  theme,
  setTheme,
  scrolled,
}: {
  theme: Theme;
  setTheme: (t: Theme) => void;
  scrolled: boolean;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        background: scrolled ? "var(--switcher-bg)" : "rgba(255,255,255,0.15)",
        borderRadius: "9999px",
        padding: "3px",
        gap: "2px",
      }}
    >
      {(
        [
          { value: "playful", label: "✨ Playful" },
          { value: "spectrum", label: "◈ Spectrum" },
        ] as { value: Theme; label: string }[]
      ).map(({ value, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              fontWeight: active ? 700 : 500,
              fontSize: "0.8125rem",
              background: active ? "var(--switcher-active-bg)" : "transparent",
              color: active
                ? "var(--switcher-active-text)"
                : scrolled
                ? "var(--switcher-inactive-text)"
                : "rgba(255,255,255,0.7)",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
