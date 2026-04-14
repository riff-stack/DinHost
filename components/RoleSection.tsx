import { ROLES } from "@/lib/constants";
import { SectionPill, WaButton } from "./PanelSection";

export default function RoleSection() {
  return (
    <section id="role" className="px-5 py-10">
      <SectionPill label="Role" />
      <p className="text-[#888] italic text-center text-sm mb-7">
        Raih keuntungan dengan Role
      </p>

      {ROLES.map((role) => (
        <div
          key={role.title}
          className="price-card rounded-[18px] p-6 mb-3.5 border"
          style={{ background: "var(--card2)", borderColor: "var(--border)" }}
        >
          <h3 className="text-[22px] font-bold text-center mb-1">
            {role.title}
          </h3>
          <div
            className="text-center text-sm font-semibold mb-4"
            style={{ color: "var(--teal)" }}
          >
            Keuntungan
          </div>
          <ul className="list-none mb-6 space-y-2">
            {role.benefits.map((b) => (
              <li
                key={b}
                className="flex gap-2 items-start text-[14px] italic text-[#c0c0c0]"
              >
                <span
                  className="not-italic font-bold mt-0.5"
                  style={{ color: "var(--teal)" }}
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
    </section>
  );
}
