"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEPS = [
  {
    number: "01",
    icon: "🛒",
    title: "Pilih Paket",
    desc: "Pilih paket Panel atau Role yang sesuai kebutuhanmu. Mulai dari Rp500/bulan.",
  },
  {
    number: "02",
    icon: "💬",
    title: "Hubungi CS",
    desc: "Chat WhatsApp kami. Proses cepat, CS responsif dan siap bantu 24/7.",
  },
  {
    number: "03",
    icon: "🤖",
    title: "Bot Aktif",
    desc: "Panel langsung aktif. Bot WhatsApp kamu siap digunakan dalam hitungan menit.",
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="cara-kerja" className="px-5 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="teal-badge mb-3 inline-block">Mudah & Cepat</span>
        <h2
          className="text-2xl font-bold mt-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Cara <span style={{ color: "var(--teal-light)" }}>Kerja</span>
        </h2>
        <p
          className="text-sm mt-2"
          style={{ color: "#666", fontFamily: "var(--font-body)" }}
        >
          3 langkah mudah untuk memulai
        </p>
      </div>

      {/* Steps */}
      <div ref={ref} className="reveal relative">
        {/* Connector line */}
        <div
          className="absolute left-[28px] top-[44px] bottom-[44px] w-[1px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent, var(--teal), var(--teal), transparent)",
            opacity: 0.25,
          }}
        />

        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="feature-card flex gap-4 items-start p-5 rounded-2xl border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Number circle */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center"
                style={{
                  background: "rgba(42,157,128,0.1)",
                  border: "1px solid rgba(42,157,128,0.25)",
                }}
              >
                <span
                  className="text-[10px] font-black"
                  style={{ color: "var(--teal)", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
                >
                  {step.number}
                </span>
                <span className="text-xl leading-none">{step.icon}</span>
              </div>

              {/* Text */}
              <div className="flex-1 pt-1">
                <div
                  className="text-[15px] font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </div>
                <div
                  className="text-[13px] leading-relaxed"
                  style={{ color: "#888", fontFamily: "var(--font-body)" }}
                >
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
