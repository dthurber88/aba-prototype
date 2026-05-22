const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--card-border)",
        transition: "background-color 0.45s ease",
      }}
    >
      {/* Rainbow stripe */}
      <div
        className="rainbow-stripe"
        style={{ height: "4px" }}
      />

      <div
        className="max-w-6xl mx-auto"
        style={{ padding: "2.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {/* Brand */}
          <div>
            <span
              style={{
                fontWeight: 800,
                fontSize: "1rem",
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              <span className="text-rainbow" style={{ marginRight: "0.25rem" }}>
                ✦
              </span>
              Styn Hardin, BCBA
            </span>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.8125rem",
                marginTop: "0.25rem",
              }}
            >
              ABA Therapy Services · Randolph County, NC
            </p>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "2rem" }}>
            {LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="footer-link">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--card-border)",
          }}
        >
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.8125rem",
            }}
          >
            © {new Date().getFullYear()} Styn Hardin, BCBA. All rights
            reserved.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
            BCBA #{" "}
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
              [License #]
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
