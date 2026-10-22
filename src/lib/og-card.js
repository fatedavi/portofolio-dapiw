import { siteConfig } from "@/lib/site";

const COLORS = {
  bg: "#0b0c0f",
  card: "#161820",
  accent: "#c8a96e",
  text: "#f0ede8",
  secondary: "#9a9697",
  muted: "#55525a",
  border: "rgba(255,255,255,0.10)",
};

// Layout OG image (1200x630). Satori hanya mendukung subset CSS:
// semua container wajib display:flex dan tidak boleh pakai shorthand.
export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: COLORS.bg,
        padding: "72px 80px",
        position: "relative",
      }}
    >
      {/* Accent bar kiri */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 10,
          background: COLORS.accent,
          display: "flex",
        }}
      />

      {/* Header: monogram + label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: COLORS.accent,
              letterSpacing: 1,
            }}
          >
            {siteConfig.initials}
          </span>
          <span
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: COLORS.muted,
              letterSpacing: 1,
            }}
          >
            .
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: `1px solid ${COLORS.border}`,
            borderRadius: 999,
            padding: "10px 24px",
          }}
        >
          <span
            style={{
              fontSize: 20,
              letterSpacing: 6,
              color: COLORS.secondary,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>
      </div>

      {/* Nama + role */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            color: COLORS.text,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          Achmad Dafi
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            color: COLORS.accent,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          Ihsannudin
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 30,
            color: COLORS.secondary,
          }}
        >
          {siteConfig.role} · {siteConfig.location}
        </div>
      </div>

      {/* Tech + footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          {siteConfig.tech.slice(0, 5).map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: `1px solid ${COLORS.border}`,
                background: COLORS.card,
                fontSize: 22,
                color: COLORS.secondary,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: COLORS.muted,
          }}
        >
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    </div>
  );
}
