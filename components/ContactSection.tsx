"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WA_CS, WA_PHONE } from "@/lib/constants";

export function WaIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--teal-light)">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section className="px-5 py-10 text-center">
      <div
        ref={ref}
        className="reveal rounded-3xl p-8 border relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--card2), var(--card3))",
          borderColor: "rgba(42,157,128,0.2)",
          boxShadow: "0 0 60px rgba(42,157,128,0.08)",
        }}
      >
        {/* Glow blob */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -40, left: "50%", transform: "translateX(-50%)",
            width: 200, height: 200,
            background: "radial-gradient(circle, rgba(42,157,128,0.15), transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10">
          <p
            className="text-[18px] font-semibold leading-relaxed mb-5"
            style={{ color: "var(--teal-light)", fontFamily: "var(--font-display)" }}
          >
            Untuk lebih detailnya
            <br />
            Hubungi :
          </p>
          <a
            href={WA_CS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white no-underline text-[17px] font-bold px-6 py-3 rounded-2xl border transition-all duration-200 hover:bg-white/5"
            style={{
              borderColor: "rgba(42,157,128,0.3)",
              background: "rgba(42,157,128,0.08)",
              fontFamily: "var(--font-body)",
            }}
          >
            <WaIcon size={22} />
            {WA_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
