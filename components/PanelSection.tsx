import { PANEL_PRICES, WA_CS } from "@/lib/constants";

function SectionPill({ label }: { label: string }) {
  return (
    <div className="text-center mb-3">
      <span
        className="inline-block px-7 py-2 rounded-full text-[15px] font-bold tracking-wide border"
        style={{ color: "var(--teal)", borderColor: "var(--teal)" }}
      >
        {label}
      </span>
    </div>
  );
}

function WaButton({ label = "Pesan Sekarang" }: { label?: string }) {
  return (
    <a
      href={WA_CS}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary block w-full py-3.5 rounded-xl text-center font-bold text-[16px] text-white no-underline"
    >
      {label}
    </a>
  );
}

export { SectionPill, WaButton };

export default function PanelSection() {
  return (
    <section id="panel" className="px-5 py-10">
      <SectionPill label="Panel" />
      <p className="text-[#888] italic text-center text-sm mb-5">
        Pilih paketmu. Wujudkan bot mu
      </p>
      <h2 className="text-2xl font-bold text-center mb-6">Panel Murah</h2>

      {PANEL_PRICES.map((item) => (
        <div
          key={item.title}
          className="price-card rounded-[18px] p-6 mb-3.5 border"
          style={{ background: "var(--card2)", borderColor: "var(--border)" }}
        >
          <div className="text-lg font-bold mb-0.5">{item.title}</div>
          <div className="text-[#888] text-[13px] mb-2.5">mulai dari</div>
          <div className="flex items-end gap-1.5 mb-5">
            <span
              className="text-5xl font-black leading-none"
              style={{ color: "var(--teal)" }}
            >
              Rp{item.price}
            </span>
            <span className="text-[15px] italic text-[#c0c0c0] pb-1.5">
              /bulan
            </span>
          </div>
          <WaButton />
        </div>
      ))}
    </section>
  );
}
