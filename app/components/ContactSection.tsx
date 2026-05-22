"use client";

import { useState } from "react";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, BookUser } from "lucide-react";
import { SectionLabel } from "./AboutSection";

type FormState = "idle" | "submitting" | "success" | "error";

const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Randolph County, North Carolina" },
  { icon: Phone, label: "Phone", value: "(336) 953-3812" },
  { icon: Mail, label: "Email", value: "info@playabanc.com" },
  { icon: Clock, label: "Response Time", value: "Within 24 business hours" },
  { icon: BookUser, label: "Facebook", value: "Follow us on Facebook!", href: "https://www.facebook.com/profile.php?id=100087543253864" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Consultation - PlayABA Web Submission",
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          preferred_contact: form.preferredContact,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.625rem",
    border: "1px solid var(--card-border)",
    background: "var(--bg-primary)",
    color: "var(--text-primary)",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contact"
      className="section-primary"
      style={{ padding: "6rem 1.5rem" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <SectionLabel>Get in Touch</SectionLabel>
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
            Let&apos;s Start Your Child&apos;s{" "}
            <span className="text-rainbow">Journey Today</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Reach out to schedule a free consultation — no commitment required.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div>
            <h3
              style={{
                color: "var(--text-primary)",
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: "1.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              Contact Information
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "0.625rem",
                      background: "var(--bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <Icon size={15} style={{ color: "var(--accent-2)" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "0.1rem",
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent-2)", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ color: "var(--text-primary)", fontSize: "0.9375rem", fontWeight: 500 }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Insurance note */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1rem 1.25rem",
                borderRadius: "0.875rem",
                background: "var(--bg-secondary)",
                border: "1px solid var(--card-border)",
              }}
            >
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>Insurance & Funding:</strong>{" "}
                We accept Medicaid and most commercial insurances. Private pay and waiver funding also accepted.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="theme-card" style={{ padding: "2rem" }}>
            {formState === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "2rem 0",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={52} style={{ color: "var(--accent-3)" }} />
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                  }}
                >
                  Message Received!
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Thank you for reaching out. We&apos;ll be in touch within one business
                  day to schedule your free consultation.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", phone: "", preferredContact: "email", message: "" });
                  }}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--card-border)",
                    background: "transparent",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : formState === "error" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "2rem 0",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.375rem" }}>
                  Something went wrong
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  We couldn&apos;t send your message. Please try again or reach us
                  directly at{" "}
                  <a href="mailto:info@playabanc.com" style={{ color: "var(--accent-2)" }}>
                    info@playabanc.com
                  </a>
                  .
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--card-border)",
                    background: "transparent",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                  }}
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <FormField label="Full Name *">
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="[Parent / Guardian Name]"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent-2)";
                      e.target.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent-2) 15%, transparent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--card-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </FormField>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <FormField label="Email *">
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-2)";
                        e.target.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent-2) 15%, transparent)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--card-border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </FormField>
                  <FormField label="Phone">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(XXX) XXX-XXXX"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-2)";
                        e.target.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent-2) 15%, transparent)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--card-border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </FormField>
                </div>

                <FormField label="Preferred Contact Method">
                  <select
                    name="preferredContact"
                    value={form.preferredContact}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent-2)";
                      e.target.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent-2) 15%, transparent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--card-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone call</option>
                    <option value="text">Text message</option>
                  </select>
                </FormField>

                <FormField label="Tell us about your child *">
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Age, diagnosis (if any), main goals or concerns..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent-2)";
                      e.target.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent-2) 15%, transparent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--card-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </FormField>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-rainbow"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    opacity: formState === "submitting" ? 0.7 : 1,
                    cursor: formState === "submitting" ? "not-allowed" : "pointer",
                    marginTop: "0.25rem",
                  }}
                >
                  {formState === "submitting" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  Your privacy is important to us. Information shared here is
                  strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.8125rem",
          fontWeight: 600,
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
