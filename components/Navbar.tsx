"use client";

import { useState, useEffect } from "react";
import { WA_CS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Panel", id: "panel" },
  { label: "Role", id: "role" },
  { label: "Fitur", id: "fitur" },
  { label: "FAQ", id: "faq" },
  { label: "Komunitas", id: "komunitas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.96)"
            : "rgba(10,10,10,0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(42,157,128,0.15)"
            : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="bg-transparent border-none cursor-pointer p-0 font-display"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-[20px] font-extrabold tracking-wide">
            <span className="text-white">Din</span>
            <span style={{ color: "var(--teal-light)" }}>Host</span>
          </span>
        </button>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a
            href={WA_CS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-white border transition-all duration-200 hover:border-[var(--teal)] no-underline"
            style={{ background: "#1e1e1e", borderColor: "rgba(255,255,255,0.08)" }}
          >
            CS
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#aaa">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-[5px] items-center justify-center p-2.5 rounded-lg border cursor-pointer transition-all duration-200"
            style={{
              background: open ? "rgba(42,157,128,0.15)" : "#1e1e1e",
              borderColor: open ? "var(--teal)" : "rgba(255,255,255,0.08)",
            }}
            aria-label="Menu"
          >
            <span
              className="block w-[17px] h-[2px] rounded bg-white transition-all duration-300"
              style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }}
            />
            <span
              className="block w-[17px] h-[2px] rounded bg-white transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-[17px] h-[2px] rounded bg-white transition-all duration-300"
              style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
            />
          </button>
        </div>
      </nav>

      {/* Dropdown */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(2px)" }}
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed top-[60px] right-4 z-50 rounded-2xl p-2 border min-w-[180px] shadow-2xl"
            style={{
              background: "#141414",
              borderColor: "rgba(42,157,128,0.2)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(42,157,128,0.1)",
              animation: "fadeUp 0.2s ease both",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-2.5 text-[14px] font-medium text-white rounded-xl cursor-pointer bg-transparent border-none transition-all duration-150 hover:bg-white/[0.06]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
