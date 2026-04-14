"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ROLES } from "@/lib/constants";
import { SectionPill, WaButton } from "./PanelSection";

export default function RoleSection() {
  const ref = useScrollReveal();

  return (
    <section id="role" className="px-5 py-10">
      <SectionPill label="Role" />
      <p
        className="text-center text-sm mb-7"
        style={{ color: "#666", fontStyle: "italic", fontFamily: "var(--font-body)" }}
      >
        Raih keuntungan dengan Role
      </p>

      <div ref={ref} className="reveal space-y-3">
        {ROLES.map((role, idx) => (
          <div
            key={role.title}
            className="price-card rounded-[20px] p-6 border relative overflow-hidden"
            style={{
              background: "var(--card2)",
              borderColor: idx === 2 ? "rgba(42,157,128,0.3)" : "var(--border)",
            }}
          >
            {/* "Best" badge for Owner Panel */}
            {idx === 2 && (
              <div
                className="absolute top-4 right-4 teal-badge pulse-glow"
                style={{ fontSize: 10 }}
              >
                TERBAIK
              </div>
            )}

            <h3
              className="text-[20px] font-bold text-center mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {role.title}
            </h3>
            <div
              className="text-center text-[13px] font-semibold mb-4"
              style={{ color: "var(--teal-light)", fontFamily: "var(--font-body)" }}
            >
              Keuntungan
            </div>
            <ul className="mb-6 space-y-2">
              {role.benefits.map((b) => (
                <li
                  key={b}
                  className="flex gap-2 items-start text-[13px] italic"
                  style={{ color: "#b0b0b0", fontFamily: "var(--font-body)" }}
                >
                  <span
                    className="not-italic font-bold mt-0.5 flex-shrink-0"
                    style={{ color: "var(--teal-light)" }}
                  >
                    •
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <WaButton />
          </div>
        ))}
      </div>
    </section>
  );
}
