"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { SectionPill } from "./PanelSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="faq" className="px-5 py-10">
      <SectionPill label="FAQ" />
      <p
        className="text-center text-sm mb-6"
        style={{ color: "#666", fontStyle: "italic", fontFamily: "var(--font-body)" }}
      >
        Pertanyaan yang sering ditanyakan
      </p>

      <div
        ref={ref}
        className="reveal rounded-2xl overflow-hidden border"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        {FAQS.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-[14px] font-semibold text-white border-none cursor-pointer transition-colors duration-150"
              style={{
                background: openIdx === i ? "var(--card2)" : "var(--card)",
                borderBottom:
                  i < FAQS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                fontFamily: "var(--font-body)",
              }}
            >
              <span>{item.q}</span>
              <span
                className={`faq-arrow text-lg flex-shrink-0 ml-3 font-bold ${openIdx === i ? "open" : ""}`}
                style={{ color: "var(--teal-light)" }}
              >
                →
              </span>
            </button>

            {openIdx === i && (
              <div
                className="px-4 pb-4 pt-1 text-[13px] leading-relaxed"
                style={{
                  background: "var(--card2)",
                  color: "#999",
                  fontFamily: "var(--font-body)",
                  borderBottom:
                    i < FAQS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
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
