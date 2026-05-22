export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--hero-gradient)",
        backgroundSize: "200% 200%",
        animation: "shimmer 12s ease infinite",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 1.5rem 4rem",
      }}
    >
      {/* Decorative orbs */}
      <Orb size={520} top="-160px" right="-140px" opacity={0.18} delay="0s" />
      <Orb size={360} bottom="-80px" left="-80px" opacity={0.15} delay="2s" />
      <Orb size={200} top="30%" left="10%" opacity={0.1} delay="1s" />

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative" style={{ zIndex: 1 }}>
        <p
          className="animate-fade-up"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontWeight: 600,
            fontSize: "0.9375rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Board Certified Behavior Analyst · Randolph County, NC
        </p>

        <h1
          className="animate-fade-up-1"
          style={{
            color: "#ffffff",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Empowering Every Child
          <br />
          <span
            style={{
              background: "rgba(255,255,255,0.9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            to Reach Their Potential
          </span>
        </h1>

        <p
          className="animate-fade-up-2"
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: "540px",
            margin: "0 auto 2.5rem",
          }}
        >
          Compassionate, evidence-based ABA therapy tailored to your child's
          unique strengths — delivered in home, school, and community settings.
        </p>

        <div
          className="animate-fade-up-3"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#contact" className="btn-rainbow">
            Book a Free Consultation
          </a>
          <a href="#services" className="btn-outline-hero">
            Explore Services
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up-3"
          style={{
            display: "flex",
            gap: "2.5rem",
            justifyContent: "center",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "100+", label: "Families Served" },
            { value: "BCBA", label: "Board Certified" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.375rem",
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          className="animate-float"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            border: "2px solid rgba(255,255,255,0.5)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ↓
        </div>
      </div>

      {/* Rainbow stripe at bottom */}
      <div
        className="rainbow-stripe"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "5px",
        }}
      />
    </section>
  );
}

function Orb({
  size,
  top,
  bottom,
  left,
  right,
  opacity,
  delay,
}: {
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity: number;
  delay: string;
}) {
  return (
    <div
      className="animate-pulse-glow"
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
        opacity,
        animationDelay: delay,
        pointerEvents: "none",
      }}
    />
  );
}
