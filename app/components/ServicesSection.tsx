import {
  ClipboardList,
  Home,
  BookOpen,
  Users,
  Video,
  HeartHandshake,
} from "lucide-react";
import { SectionLabel } from "./AboutSection";

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Initial Assessment",
    description:
      "A comprehensive behavioral evaluation to understand your child's strengths, needs, and learning profile. Forms the foundation for a personalized treatment plan.",
    accentVar: "--accent-1",
  },
  {
    icon: Home,
    title: "In-Home ABA Therapy",
    description:
      "Individualized therapy delivered in your home environment, where children are most comfortable. We work on daily living skills, communication, and social behaviors.",
    accentVar: "--accent-2",
  },
  {
    icon: BookOpen,
    title: "School Consultation",
    description:
      "Collaborating with educators and IEP teams to create consistent, effective support strategies that bridge home and school progress.",
    accentVar: "--accent-3",
  },
  {
    icon: Users,
    title: "Parent Training",
    description:
      "Empowering families with practical, evidence-based strategies to reinforce skills in everyday routines and advocate confidently for their child.",
    accentVar: "--accent-4",
  },
  {
    icon: Video,
    title: "Telehealth Services",
    description:
      "Flexible remote consultation and parent training sessions for families who prefer virtual support or are located outside our in-person service area.",
    accentVar: "--accent-5",
  },
  {
    icon: HeartHandshake,
    title: "Social Skills Groups",
    description:
      "Small-group sessions that build peer interaction, communication, and play skills in a structured, supportive setting. [Coming soon]",
    accentVar: "--accent-1",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-secondary"
      style={{ padding: "6rem 1.5rem" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <SectionLabel>What We Offer</SectionLabel>
          <h2
            style={{
              color: "var(--text-primary)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginTop: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            Services Tailored to{" "}
            <span className="text-rainbow">Your Family</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Every program is designed around your child's unique goals, delivered
            in the environment where they thrive most.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES.map(({ icon: Icon, title, description, accentVar }) => (
            <div key={title} className="theme-card" style={{ padding: "1.75rem" }}>
              {/* Icon circle */}
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.875rem",
                  background: `color-mix(in srgb, var(${accentVar}) 18%, transparent)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.125rem",
                  border: `1px solid color-mix(in srgb, var(${accentVar}) 30%, transparent)`,
                }}
              >
                <Icon
                  size={20}
                  style={{ color: `var(${accentVar})` }}
                  strokeWidth={2}
                />
              </div>

              {/* Top accent stripe */}
              <div
                className="rainbow-stripe"
                style={{
                  height: "3px",
                  borderRadius: "9999px",
                  marginBottom: "1rem",
                  width: "2.5rem",
                }}
              />

              <h3
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  marginBottom: "0.625rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            Not sure where to start? Let&apos;s talk — the first consultation is free.
          </p>
          <a href="#contact" className="btn-rainbow">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
