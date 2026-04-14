"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { SectionPill } from "./PanelSection";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="px-5 py-10">
      <SectionPill label="FAQ" />
      <p className="text-[#888] italic text-center text-sm mb-6">
        Pertanyaan yang sering ditanyakan
      </p>

      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: "rgba(255,255,255,0.12)" }}
      >
        {FAQS.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white border-none cursor-pointer transition-colors"
              style={{
                background: openIdx === i ? "var(--card2)" : "transparent",
                borderBottom:
                  i < FAQS.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <span>{item.q}</span>
              <span
                className={`faq-arrow text-lg flex-shrink-0 ml-3 ${openIdx === i ? "open" : ""}`}
                style={{ color: "var(--teal)" }}
              >
                →
              </span>
            </button>

            {openIdx === i && (
              <div
                className="px-4 pb-4 text-[13px] leading-relaxed"
                style={{
                  background: "var(--card2)",
                  color: "#c0c0c0",
                  borderBottom:
                    i < FAQS.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
