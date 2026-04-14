import { WA_CS } from "@/lib/constants";
import { WaIcon } from "./ContactSection";

export function Komunitas() {
  return (
    <section
      id="komunitas"
      className="px-5 py-10 text-center"
    >
      <div className="mb-4">
        <a
          href={WA_CS}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-9 py-2.5 rounded-full text-white text-[15px] font-semibold border no-underline hover:border-[var(--teal)] transition-colors"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          Komunitas
        </a>
      </div>
      <a
        href={WA_CS}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#c0c0c0] no-underline text-[14px] italic hover:opacity-80 transition-opacity"
      >
        <WaIcon size={20} />
        Saluran Whatsapp
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="px-5 pt-8 pb-7 text-center border-t"
      style={{
        background: "#161616",
        borderRadius: "28px 28px 0 0",
        borderColor: "var(--border)",
      }}
    >
      <div className="text-[34px] font-black tracking-[3px] mb-3.5">
        <span className="text-white">DIN</span>
        <span style={{ color: "var(--teal)" }}>HOST</span>
      </div>
      <p className="text-[#666] text-xs">
        © 2026 DinHost - All Rights Reserved
      </p>
    </footer>
  );
}
