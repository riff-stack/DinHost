"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WA_CS } from "@/lib/constants";
import { WaIcon } from "./ContactSection";

export function Komunitas() {
  const ref = useScrollReveal();

  return (
    <section id="komunitas" className="px-5 py-10 text-center">
      <div ref={ref} className="reveal">
        <div className="mb-4">
          <a
            href={WA_CS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-2.5 rounded-full text-white text-[15px] font-semibold border no-underline transition-all duration-200 hover:bg-white/5"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.03em",
            }}
          >
            Komunitas
          </a>
        </div>
        <a
          href={WA_CS}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 no-underline text-[14px] italic transition-opacity duration-200 hover:opacity-70"
          style={{ color: "#888", fontFamily: "var(--font-body)" }}
        >
          <WaIcon size={18} />
          Saluran Whatsapp
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="px-5 pt-8 pb-8 text-center border-t"
      style={{
        background: "linear-gradient(180deg, #111 0%, #0a0a0a 100%)",
        borderRadius: "24px 24px 0 0",
        borderColor: "rgba(42,157,128,0.12)",
      }}
    >
      {/* Teal line top */}
      <div className="teal-line mb-6 opacity-30" />

      <div
        className="mb-2 leading-none select-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 900,
          letterSpacing: "0.1em",
        }}
      >
        <span className="text-white">DIN</span>
        <span style={{ color: "var(--teal-light)" }}>HOST</span>
      </div>

      <p
        className="text-[11px] mb-4"
        style={{ color: "#444", fontFamily: "var(--font-body)" }}
      >
        Solusi Bot WhatsApp yang siap pakai dan mudah dikembangkan
      </p>

      <div className="teal-line mb-4 opacity-20" />

      <p
        className="text-[11px]"
        style={{ color: "#3a3a3a", fontFamily: "var(--font-body)" }}
      >
        © 2026 DinHost — All Rights Reserved
      </p>
    </footer>
  );
}
