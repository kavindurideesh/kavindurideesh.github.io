import { useState } from "react";

const LINKS = [
  {
    label: "GitHub",
    value: "github.com/kavindurideesh",
    href: "https://github.com/kavindurideesh",
    icon: "GH",
    accent: "#00e5ff",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kavindurideesh",
    href: "https://linkedin.com/in/kavindurideesh",
    icon: "LI",
    accent: "#00e5ff",
  },
  {
    label: "Email",
    value: "kavindurideesh@gmail.com",
    href: "mailto:kavindurideesh@gmail.com",
    icon: "@",
    accent: "#ff2d6b",
  },
  {
    label: "Phone / WhatsApp",
    value: "+94 76 904 1036",
    href: "https://wa.me/94769041036",
    icon: "WA",
    accent: "#39ff14",
  },
  {
    label: "Location",
    value: "Puttalam, Sri Lanka",
    href: null,
    icon: "//",
    accent: "#4a5a6a",
  },
];

function Input({ label, type = "text", value, onChange, multiline }) {
  const [focused, setFocused] = useState(false);
  const base = {
    width: "100%",
    background: "#0b0e14",
    border: `1px solid ${focused ? "rgba(0,229,255,0.35)" : "rgba(0,229,255,0.1)"}`,
    color: "var(--text)",
    fontFamily: "var(--mono)",
    fontSize: 12,
    letterSpacing: "0.06em",
    padding: "0.75rem 1rem",
    outline: "none",
    resize: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    display: "block",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{
        fontFamily: "var(--mono)", fontSize: 10,
        color: focused ? "var(--accent)" : "var(--muted)",
        letterSpacing: "0.18em", textTransform: "uppercase",
        transition: "color 0.2s",
      }}>
        {label}
      </label>
      {multiline
        ? <textarea rows={4} value={value} onChange={onChange}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            style={base} />
        : <input type={type} value={value} onChange={onChange}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            style={base} />
      }
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const mailto = `mailto:kavindurideesh@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto);
    setSent(true);
  };

  return (
    <section id="contact" style={{
      height: "100%",
      overflow: "auto",
      background: "var(--bg)",
      padding: "3rem 5rem",
      boxSizing: "border-box",
    }}>

      {/* header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          fontFamily: "var(--mono)", fontSize: 11,
          color: "var(--accent)", letterSpacing: "0.22em",
          marginBottom: "0.6rem",
        }}>
          <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} />
          GET IN TOUCH
        </div>
        <div style={{
          fontFamily: "var(--display)",
          fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
          color: "#fff", lineHeight: 1, letterSpacing: "0.04em",
        }}>
          CONTACT
          <span style={{
            color: "transparent",
            WebkitTextStroke: "1.5px var(--accent)",
            marginLeft: "0.3em",
          }}>
            ME
          </span>
        </div>
      </div>

      {/* main grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        gap: "1px",
        background: "rgba(0,229,255,0.06)",
      }}>

        {/* ── FORM ── */}
        <div style={{ background: "var(--bg)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {sent ? (
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              height: "100%", gap: "1rem",
              fontFamily: "var(--mono)",
            }}>
              <div style={{ fontSize: "2rem", color: "#39ff14" }}>✓</div>
              <div style={{ fontSize: 13, color: "#39ff14", letterSpacing: "0.15em" }}>MESSAGE SENT</div>
              <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
                I'll get back to you soon.
              </div>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }} style={{
                marginTop: "0.5rem",
                fontFamily: "var(--mono)", fontSize: 11,
                letterSpacing: "0.12em", padding: "0.6rem 1.4rem",
                background: "transparent", color: "var(--accent)",
                border: "1px solid rgba(0,229,255,0.3)",
                cursor: "pointer", textTransform: "uppercase",
              }}>
                Send Another
              </button>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Input label="Name"  value={form.name}  onChange={set("name")} />
                <Input label="Email" type="email" value={form.email} onChange={set("email")} />
              </div>
              <Input label="Subject" value={form.subject} onChange={set("subject")} />
              <Input label="Message" value={form.message} onChange={set("message")} multiline />

              <button onClick={handleSubmit} style={{
                fontFamily: "var(--mono)", fontSize: 11,
                letterSpacing: "0.14em", padding: "0.8rem 2rem",
                background: "var(--accent)", color: "#000",
                border: "none", cursor: "pointer",
                textTransform: "uppercase", fontWeight: 700,
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                alignSelf: "flex-start",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Send Message ↗
              </button>
            </>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <div style={{ background: "var(--bg)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* availability badge */}
          <div style={{
            background: "#0b0e14",
            border: "1px solid rgba(57,255,20,0.15)",
            padding: "1rem 1.25rem",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#39ff14", display: "inline-block",
              animation: "pulse 1.8s ease-in-out infinite",
              flexShrink: 0,
            }} />
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#39ff14", letterSpacing: "0.1em" }}>
                OPEN TO INTERNSHIPS
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em", marginTop: 2 }}>
                Available mid-2026 · Remote or LK
              </div>
            </div>
          </div>

          {/* contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(0,229,255,0.06)" }}>
            {LINKS.map(({ label, value, href, icon, accent }) => {
              const inner = (
                <div style={{
                  background: "var(--bg)", padding: "0.85rem 1rem",
                  display: "flex", alignItems: "center", gap: 12,
                  transition: "background 0.2s",
                  cursor: href ? "pointer" : "default",
                }}
                  onMouseEnter={e => { if (href) e.currentTarget.style.background = "#0b0e14"; }}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--bg)"}
                >
                  <div style={{
                    width: 30, height: 30, borderRadius: "50%",
                    border: `1px solid ${accent}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--mono)", fontSize: 9, color: accent,
                    flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 2 }}>
                      {label}
                    </div>
                    <div style={{
                      fontFamily: "var(--mono)", fontSize: 11,
                      color: href ? accent : "var(--text)",
                      letterSpacing: "0.04em",
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {value}
                    </div>
                  </div>
                  {href && <span style={{ color: "var(--muted)", fontSize: 11, flexShrink: 0 }}>↗</span>}
                </div>
              );

              return href
                ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ textDecoration: "none" }}>{inner}</a>
                : <div key={label}>{inner}</div>;
            })}
          </div>

          {/* note */}
          <p style={{
            fontFamily: "var(--mono)", fontSize: 10,
            color: "var(--muted)", lineHeight: 1.9,
            letterSpacing: "0.05em",
            borderLeft: "1px solid rgba(0,229,255,0.15)",
            paddingLeft: "0.75rem",
          }}>
            Seeking internships in software engineering, cybersecurity, networking, or ML — remote or Sri Lanka-based.
          </p>

        </div>
      </div>
    </section>
  );
}
