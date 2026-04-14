"use client";

import { useState } from "react";
import { WA_CS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Panel", id: "panel" },
  { label: "Role", id: "role" },
  { label: "FAQ", id: "faq" },
  { label: "Komunitas", id: "komunitas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b border-white/[0.08]"
        style={{ background: "rgba(15,15,15,0.92)", backdropFilter: "blur(12px)" }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="bg-transparent border-none cursor-pointer p-0">
          <span className="text-xl font-extrabold tracking-wide">
            <span className="text-white">Din</span>
            <span style={{ color: "var(--teal)" }}>Host</span>
          </span>
        </button>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a
            href={WA_CS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold text-white border border-white/[0.08]"
            style={{ background: "#2a2a2a" }}
          >
            CS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#aaa">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 items-center justify-center p-2 rounded-lg border border-white/[0.08] cursor-pointer"
            style={{ background: "#2a2a2a" }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-4 h-0.5 rounded bg-white" />
            ))}
          </button>
        </div>
      </nav>

      {/* Dropdown */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed top-16 right-4 z-50 rounded-2xl p-2 border border-white/[0.08] min-w-44 shadow-2xl"
            style={{ background: "#1e1e1e" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer bg-transparent border-none"
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
