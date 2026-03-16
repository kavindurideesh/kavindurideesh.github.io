import { useState, useEffect } from "react";
import DustBackground from "../components/DustBackground";
import profileImg from "../assets/rideesh.png";

const ROLES = [
  "Computer Science Student",
  "Aspiring Software Engineer",
  "AI & Machine Learning Enthusiast",
  "Networking Enthusiast",
  "Cybersecurity Enthusiast",
];

function useTyped(strings, speed = 75, pause = 1600) {
  const [display, setDisplay] = useState("");
  const [si, setSi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[si];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, ci + 1));
        if (ci + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCi((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setSi((s) => (s + 1) % strings.length);
          setCi(0);
        } else {
          setCi((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [ci, deleting, si, strings, speed, pause]);

  return display;
}

export default function Home({ setActivePage }) {
  const typed = useTyped(ROLES);


  return (
    <section style={{
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "stretch",
      overflow: "hidden",
      background: "var(--bg)",
    }}>
      <DustBackground />

      {/* ── LEFT ── */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "0 3rem 0 5rem",
        position: "relative",
        zIndex: 2,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>

          {/* eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            fontFamily: "var(--mono)", fontSize: 11,
            color: "var(--accent)", letterSpacing: "0.22em",
          }}>
            <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} />
            UNIVERSITY OF JAFFNA · CS DEPT
          </div>

          {/* name */}
          <div>
            <div style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(3.5rem, 6vw, 6rem)",
              color: "#fff", lineHeight: 0.92, letterSpacing: "0.04em",
            }}>
              RIDEESH
            </div>
            <div style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(3.5rem, 6vw, 6rem)",
              color: "transparent",
              WebkitTextStroke: "1.5px var(--accent)",
              lineHeight: 1, letterSpacing: "0.04em",
            }}>
              KAVINDU
            </div>
          </div>

          {/* typed */}
          <div style={{
            fontFamily: "var(--mono)", fontSize: "0.9rem",
            color: "var(--text)", letterSpacing: "0.08em", minHeight: 20,
          }}>
            <span style={{ color: "var(--muted)" }}>&gt;&nbsp;</span>
            {typed}
            <span style={{
              display: "inline-block", width: 8, height: 14,
              background: "var(--accent)", marginLeft: 2,
              animation: "blink 1s step-end infinite",
            }} />
          </div>

          {/* tagline */}
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 420 }}>
            Passionate about building
            <span style={{ color: "var(--text)" }}> scalable software</span>,
            <span style={{ color: "var(--text)" }}> intelligent systems</span>, and
            <span style={{ color: "var(--text)" }}> secure network solutions</span>.
          </p>

          {/* social links */}
          <div style={{ display: "flex", gap: "1rem" }}>
            {[
              { label: "GitHub",   href: "https://github.com/kavindurideesh" },
              { label: "LinkedIn", href: "https://linkedin.com/in/kavindurideesh" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                fontFamily: "var(--mono)", fontSize: 11,
                color: "var(--muted)", textDecoration: "none",
                letterSpacing: "0.12em", textTransform: "uppercase",
                borderBottom: "1px solid rgba(0,229,255,0.2)",
                paddingBottom: 2,
                transition: "color 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "rgba(0,229,255,0.2)"; }}
              >
                ↗ {label}
              </a>
            ))}
          </div>

          {/* buttons */}
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <button onClick={() => setActivePage("Projects")} style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em",
              padding: "0.7rem 1.6rem", background: "var(--accent)", color: "#000",
              border: "none", cursor: "pointer", textTransform: "uppercase", fontWeight: 700,
              clipPath: "polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              View Projects
            </button>

            <a href="/rideesh_cv.pdf" download="Rideesh_Kavindu_CV.pdf" style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em",
              padding: "0.7rem 1.6rem", background: "transparent",
              color: "var(--accent2)", border: "1px solid var(--accent2)",
              cursor: "pointer", textTransform: "uppercase",
              clipPath: "polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)",
              transition: "background 0.2s",
              textDecoration: "none", display: "inline-block",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,45,107,0.08)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Download CV
            </a>

            <button onClick={() => setActivePage("Contact")} style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em",
              padding: "0.7rem 1.6rem", background: "transparent",
              color: "var(--muted)", border: "1px solid rgba(0,229,255,0.2)",
              cursor: "pointer", textTransform: "uppercase",
              clipPath: "polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)",
              transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.2)"; e.currentTarget.style.color = "var(--muted)"; }}
            >
              Contact
            </button>
          </div>

        </div>
      </div>

      {/* ── RIGHT — photo, full height flush bottom ── */}
      <div style={{
        width: "clamp(260px, 30vw, 400px)",
        height: "100%",
        position: "relative",
        zIndex: 2,
        flexShrink: 0,
      }}>
        {/* cyan glow */}
        <div style={{
          position: "absolute", bottom: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "100%", height: "50%",
          background: "radial-gradient(ellipse at bottom, rgba(0,229,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* divider */}
        <div style={{
          position: "absolute", left: 0, top: "8%", bottom: 0, width: 1,
          background: "linear-gradient(to bottom, transparent, rgba(0,229,255,0.18), transparent)",
        }} />

        <img
          src={profileImg}
          alt="Rideesh Kavindu"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "100%",
            width: "auto",
            maxWidth: "none",
            objectFit: "contain",
            objectPosition: "bottom center",
            filter: "drop-shadow(0 0 32px rgba(0,229,255,0.12))",
          }}
        />
      </div>

    </section>
  );
}