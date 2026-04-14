"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PANEL_PRICES, WA_CS } from "@/lib/constants";

export function SectionPill({ label }: { label: string }) {
  return (
    <div className="text-center mb-3">
      <span
        className="inline-block px-7 py-2 rounded-full text-[14px] font-bold tracking-wider border"
        style={{
          color: "var(--teal-light)",
          borderColor: "var(--teal)",
          background: "rgba(42,157,128,0.07)",
          fontFamily: "var(--font-display)",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function WaButton({ label = "Pesan Sekarang" }: { label?: string }) {
  return (
    <a
      href={WA_CS}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary block w-full py-3.5 rounded-xl text-center font-bold text-[15px] text-white no-underline"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {label}
    </a>
  );
}

export default function PanelSection() {
  const ref = useScrollReveal();

  return (
    <section id="panel" className="px-5 py-10">
      <SectionPill label="Panel" />
      <p
        className="text-center text-sm mb-5"
        style={{ color: "#666", fontStyle: "italic", fontFamily: "var(--font-body)" }}
      >
        Pilih paketmu. Wujudkan bot mu
      </p>
      <h2
        className="text-2xl font-bold text-center mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Panel <span style={{ color: "var(--teal-light)" }}>Murah</span>
      </h2>

      <div ref={ref} className="reveal space-y-3">
        {PANEL_PRICES.map((item) => (
          <div
            key={item.title}
            className="price-card rounded-[20px] p-6 border"
            style={{ background: "var(--card2)", borderColor: "var(--border)" }}
          >
            <div
              className="text-[17px] font-bold mb-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.title}
            </div>
            <div
              className="text-[12px] mb-2"
              style={{ color: "#666", fontFamily: "var(--font-body)" }}
            >
              mulai dari
            </div>
            <div className="flex items-end gap-1.5 mb-5">
              <span
                className="font-black leading-none"
                style={{
                  fontSize: 48,
                  color: "var(--teal-light)",
                  fontFamily: "var(--font-display)",
                  textShadow: "0 0 30px rgba(51,196,159,0.35)",
                }}
              >
                Rp{item.price}
              </span>
              <span
                className="text-[14px] italic pb-2"
                style={{ color: "#888", fontFamily: "var(--font-body)" }}
              >
                /bulan
              </span>
            </div>
            <WaButton />
          </div>
        ))}
      </div>
    </section>
  );
}
