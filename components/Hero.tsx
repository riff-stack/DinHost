"use client";

import { WA_CS, WA_GROUP } from "@/lib/constants";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="hero-bg noise relative overflow-hidden px-5 pt-14 pb-20 text-center"
      style={{ minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      {/* Arc overlay */}
      <div
        className="hero-arc absolute pointer-events-none"
        style={{ inset: 0, zIndex: 0 }}
      />

      {/* Floating orb */}
      <div
        className="absolute pointer-events-none animate-float"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(42,157,128,0.14) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="animate-fade-up delay-100 mb-5">
          <span className="teal-badge">WhatsApp Bot Automation</span>
        </div>

        {/* Big logo */}
        <div
          className="animate-logo mb-8 leading-none select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 16vw, 80px)",
            fontWeight: 900,
            letterSpacing: "0.08em",
          }}
        >
          <span className="text-white">DIN</span>
          <span className="shimmer-text">HOST</span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-200 text-[26px] font-bold leading-snug mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Solusi Bot WhatsApp Dengan{" "}
          <span style={{ color: "var(--teal-light)" }}>DinHost.</span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-up delay-300 text-[15px] leading-relaxed mb-8 mx-auto"
          style={{ color: "#a0a0a0", maxWidth: 320, fontFamily: "var(--font-body)" }}
        >
          Untuk menyediakan solusi otomatisasi WhatsApp yang siap pakai dan
          mudah dikembangkan.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up delay-400 flex gap-3 justify-center">
          <a
            href={WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-[160px] py-3 px-4 rounded-xl border-2 border-white/30 text-white font-bold text-[14px] text-center no-underline transition-all duration-200 hover:border-white/70 hover:bg-white/5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Coba Gratis
          </a>
          <button
            onClick={() => scrollTo("panel")}
            className="btn-primary flex-1 max-w-[160px] py-3 px-4 rounded-xl text-white font-bold text-[14px] cursor-pointer border-none"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Katalog
          </button>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-500 flex justify-center gap-6 mt-10">
          {[
            { val: "Rp500", label: "Mulai dari /bulan" },
            { val: "24/7", label: "Support aktif" },
            { val: "3+", label: "Jenis role" },
          ].map((s) => (
            <div key={s.val} className="text-center">
              <div
                className="text-xl font-black"
                style={{ color: "var(--teal-light)", fontFamily: "var(--font-display)" }}
              >
                {s.val}
              </div>
              <div className="text-[11px] text-[#666] mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 80, background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />
    </section>
  );
}
