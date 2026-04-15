import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DinHost — Solusi Bot WhatsApp Murah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #0f1a15 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,157,128,0.25) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: 100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,157,128,0.12) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(42,157,128,0.15)",
            border: "1px solid rgba(42,157,128,0.4)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
            color: "#33c49f",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          WHATSAPP BOT AUTOMATION
        </div>

        {/* Main logo */}
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 900,
            letterSpacing: "0.08em",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#ffffff" }}>DIN</span>
          <span style={{ color: "#2a9d80" }}>HOST</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#888",
            marginBottom: 48,
            fontWeight: 500,
          }}
        >
          Solusi Bot WhatsApp yang Siap Pakai & Mudah Dikembangkan
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { val: "Rp500", label: "Mulai dari /bulan" },
            { val: "24/7", label: "Support Aktif" },
            { val: "100+", label: "Pengguna Aktif" },
          ].map((s) => (
            <div
              key={s.val}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 32px",
                background: "rgba(42,157,128,0.08)",
                border: "1px solid rgba(42,157,128,0.2)",
                borderRadius: 16,
              }}
            >
              <span
                style={{ fontSize: 36, fontWeight: 900, color: "#33c49f", lineHeight: 1.1 }}
              >
                {s.val}
              </span>
              <span style={{ fontSize: 15, color: "#555", marginTop: 4 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 18,
            color: "#333",
            letterSpacing: "0.05em",
          }}
        >
          dinhost-landing.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
