"use client";

import { WA_CS, WA_GROUP } from "@/lib/constants";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pt-12 pb-16 text-center"
    >
      {/* Glow background */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div
        className="hero-arc absolute pointer-events-none"
        style={{
          top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 360, height: 360, borderRadius: "50%",
        }}
      />

      <div className="relative z-10">
        {/* Big logo */}
        <div className="mb-11 text-6xl font-black tracking-widest leading-none">
          <span className="text-white">DIN</span>
          <span style={{ color: "var(--teal)" }}>HOST</span>
        </div>

        {/* Headline */}
        <h1 className="text-[28px] font-bold leading-relaxed mb-3">
          Solusi Bot Whatsapp Dengan{" "}
          <span style={{ color: "var(--teal)" }}>DinHost.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#c0c0c0] text-[15px] leading-7 mb-8">
          Untuk menyediakan solusi otomatisasi WhatsApp yang siap pakai dan
          mudah dikembangkan.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 justify-center">
          <a
            href={WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-[170px] py-3 px-4 rounded-xl border-2 border-white text-white font-bold text-[15px] text-center no-underline hover:bg-white/10 transition-colors"
          >
            Coba Gratis
          </a>
          <button
            onClick={() => scrollTo("panel")}
            className="btn-primary flex-1 max-w-[170px] py-3 px-4 rounded-xl text-white font-bold text-[15px] cursor-pointer border-none"
          >
            Katalog
          </button>
        </div>
      </div>
    </section>
  );
}
