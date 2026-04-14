"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const FEATURES = [
  {
    icon: "⚡",
    title: "Siap Pakai",
    desc: "Bot langsung aktif tanpa konfigurasi rumit. Setup dalam hitungan menit.",
  },
  {
    icon: "🔄",
    title: "Auto Reply",
    desc: "Balas pesan otomatis 24/7 tanpa harus online manual.",
  },
  {
    icon: "📱",
    title: "Multi Device",
    desc: "Satu panel bisa digunakan di beberapa perangkat sekaligus.",
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    desc: "Mulai dari Rp500/bulan. Cocok untuk personal maupun bisnis.",
  },
  {
    icon: "🛡️",
    title: "Stabil & Aman",
    desc: "Server terjaga uptime tinggi dengan proteksi penuh.",
  },
  {
    icon: "🤝",
    title: "Support 24/7",
    desc: "Tim siap membantu via WhatsApp kapanpun kamu butuh.",
  },
];

export default function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section id="fitur" className="px-5 py-12">
      {/* Teal divider */}
      <div className="teal-line mb-12" />

      <div ref={ref} className="reveal">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="teal-badge mb-3 inline-block">Kenapa DinHost?</span>
          <h2
            className="text-2xl font-bold mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fitur <span style={{ color: "var(--teal-light)" }}>Unggulan</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="feature-card rounded-2xl p-4 border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <div
                className="text-[13px] font-bold mb-1 text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </div>
              <div
                className="text-[12px] leading-relaxed"
                style={{ color: "#777", fontFamily: "var(--font-body)" }}
              >
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="teal-line mt-12" />
    </section>
  );
}
