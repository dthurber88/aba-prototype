const CREDENTIALS = [
  { icon: "🎓", text: "Board Certified Behavior Analyst (BCBA)" },
  { icon: "📋", text: "Licensed Behavior Analyst, NC" },
  { icon: "🏅", text: "[X] Years Clinical Experience" },
  { icon: "📚", text: "M.S. Applied Behavior Analysis, [University]" },
];

const ACCENT_COLORS = [
  "var(--accent-1)",
  "var(--accent-2)",
  "var(--accent-3)",
  "var(--accent-4)",
  "var(--accent-5)",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-primary"
      style={{ padding: "6rem 1.5rem" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <SectionLabel>About Me</SectionLabel>
          <h2
            style={{
              color: "var(--text-primary)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginTop: "0.75rem",
            }}
          >
            Dedicated to Making a{" "}
            <span className="text-rainbow">Lasting Difference</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Photo column */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Rainbow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-6px",
                  borderRadius: "1.5rem",
                  background: "var(--rainbow-stripe)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 5s linear infinite",
                  zIndex: 0,
                }}
              />
              {/* Photo placeholder */}
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "340px",
                  borderRadius: "1.25rem",
                  background: "var(--bg-secondary)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  gap: "0.75rem",
                }}
              >
                <div style={{ fontSize: "4rem" }}>👩‍⚕️</div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                  }}
                >
                  Photo Placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div>
            <h3
              style={{
                color: "var(--text-primary)",
                fontWeight: 800,
                fontSize: "1.625rem",
                marginBottom: "0.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Styn Hardin, BCBA
            </h3>
            <p
              style={{
                color: "var(--accent-2)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                marginBottom: "1.5rem",
              }}
            >
              Board Certified Behavior Analyst · Randolph County, NC
            </p>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. I became
              passionate about ABA therapy after seeing firsthand how
              evidence-based interventions can transform the lives of children
              and families. Every child deserves a champion who believes in
              their potential.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "2rem",
              }}
            >
              My approach centers on building meaningful skills in naturalistic
              settings, celebrating every milestone — big and small — and
              partnering closely with families to carry progress into daily
              life.
            </p>

            {/* Credentials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {CREDENTIALS.map(({ icon, text }, i) => (
                <div key={i} className="credential-badge" style={{ width: "fit-content" }}>
                  <span>{icon}</span>
                  <span>{text}</span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: ACCENT_COLORS[i % ACCENT_COLORS.length],
                      flexShrink: 0,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
      <div
        className="rainbow-stripe"
        style={{ width: "28px", height: "3px", borderRadius: "9999px" }}
      />
      <span
        style={{
          color: "var(--text-secondary)",
          fontWeight: 700,
          fontSize: "0.8125rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
      <div
        className="rainbow-stripe"
        style={{ width: "28px", height: "3px", borderRadius: "9999px" }}
      />
    </div>
  );
}
