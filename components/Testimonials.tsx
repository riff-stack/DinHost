"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionPill } from "./PanelSection";

const TESTIMONIALS = [
  {
    name: "Andi R.",
    role: "Reseller Panel",
    avatar: "AR",
    text: "Udah 3 bulan pake DinHost, panel stabil banget. CS juga cepet balesin. Worth it banget buat harga segini!",
    rating: 5,
  },
  {
    name: "Fajar M.",
    role: "Owner Panel",
    avatar: "FM",
    text: "Awalnya ragu, tapi setelah coba langsung ketagihan. Sekarang udah jadi Owner dan bisa jualan ke orang lain. Passive income real!",
    rating: 5,
  },
  {
    name: "Rizky D.",
    role: "Admin Panel",
    avatar: "RD",
    text: "Setup-nya gampang banget, udah dikasih tutorial lengkap. Bot langsung jalan dalam 5 menit. Recommended!",
    rating: 5,
  },
  {
    name: "Budi S.",
    role: "Reseller Panel",
    avatar: "BS",
    text: "Harga paling murah yang pernah aku temuin. Udah coba 2 provider lain sebelumnya, DinHost yang paling worth.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--teal-light)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section id="testimonial" className="px-5 py-10">
      <SectionPill label="Testimonial" />
      <p
        className="text-center text-sm mb-7"
        style={{ color: "#666", fontStyle: "italic", fontFamily: "var(--font-body)" }}
      >
        Apa kata pengguna DinHost
      </p>

      <div ref={ref} className="reveal space-y-3">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="price-card rounded-2xl p-5 border"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            {/* Header: avatar + name + rating */}
            <div className="flex items-center gap-3 mb-3">
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[13px] font-black"
                style={{
                  background: "linear-gradient(135deg, var(--teal-dark), var(--teal))",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                }}
              >
                {t.avatar}
              </div>

              {/* Name & role */}
              <div className="flex-1">
                <div
                  className="text-[14px] font-bold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-[11px] mt-0.5"
                  style={{ color: "var(--teal-light)", fontFamily: "var(--font-body)" }}
                >
                  {t.role}
                </div>
              </div>

              {/* Rating */}
              <StarRating count={t.rating} />
            </div>

            {/* Quote */}
            <div
              className="relative pl-3"
              style={{ borderLeft: "2px solid rgba(42,157,128,0.3)" }}
            >
              <p
                className="text-[13px] leading-relaxed italic"
                style={{ color: "#999", fontFamily: "var(--font-body)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust indicator */}
      <div
        className="mt-6 py-4 px-5 rounded-2xl text-center border"
        style={{
          background: "rgba(42,157,128,0.06)",
          borderColor: "rgba(42,157,128,0.15)",
        }}
      >
        <div
          className="text-2xl font-black"
          style={{ color: "var(--teal-light)", fontFamily: "var(--font-display)" }}
        >
          100+
        </div>
        <div
          className="text-[12px] mt-0.5"
          style={{ color: "#666", fontFamily: "var(--font-body)" }}
        >
          Pengguna aktif sudah bergabung
        </div>
      </div>
    </section>
  );
}
