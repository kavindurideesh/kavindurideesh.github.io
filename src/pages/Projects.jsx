const PROJECTS = [
  {
    num: "01",
    year: "2026",
    title: "Network Bandwidth Usage Monitoring System",
    desc: "Real-time LAN monitoring tool with per-device traffic attribution, TLS SNI extraction via manual ClientHello byte parsing, DNS query logging, MAC-based device tracking, blacklist management, and alerting. Distributed master-slave architecture designed for 100-PC lab environments using port mirroring.",
    tags: ["React", "Python", "Flask", "Scapy", "JavaScript"],
    lang: { JS: 68.6, Python: 29.5, HTML: 1.4, CSS: 0.5 },
    role: "Team Lead",
    github: "https://github.com/kavindurideesh/Network-Bandwidth-Usage-Monitoring-System",
    accent: "#00e5ff",
  },
  {
    num: "02",
    year: "2025",
    title: "Centralized Livestock Monitoring & Governance System",
    desc: "Full-stack web application for the Department of Animal Production and Health (DAPH), Sri Lanka. Supports livestock farmers and five hierarchical officer levels with continuous data updates, role-based access, and a robust validation process for national-scale cattle governance.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "CSS"],
    lang: { JS: 50.2, CSS: 41.3, HTML: 8.5 },
    role: "Team Lead",
    github: "https://github.com/kavindurideesh/Cattle-Management-App",
    accent: "#00e5ff",
  },
  {
    num: "03",
    year: "2024",
    title: "Complaint Management System",
    desc: "Multi-role complaint tracking platform for an academic institution. Features master admin, staff, and student roles with complaint submission, image upload, serial number tracking, location tagging, OTP-based password reset via PHPMailer, upvoting, and real-time status dashboards.",
    tags: ["PHP", "Laravel", "MySQL", "CSS", "JavaScript"],
    lang: { PHP: 80.0, CSS: 19.6, JS: 0.4 },
    role: "Team Lead",
    github: "https://github.com/kavindurideesh/ComplaintMS",
    accent: "#ff2d6b",
  },
];

function LangBar({ lang }) {
  const colors = {
    JS: "#f7df1e", Python: "#3572A5", HTML: "#e34c26",
    CSS: "#563d7c", PHP: "#4F5D95",
  };
  const total = Object.values(lang).reduce((a, b) => a + b, 0);

  return (
    <div>
      {/* bar */}
      <div style={{ display: "flex", height: 3, borderRadius: 2, overflow: "hidden", marginBottom: 6 }}>
        {Object.entries(lang).map(([k, v]) => (
          <div key={k} style={{
            width: `${(v / total) * 100}%`,
            background: colors[k] || "#4a5a6a",
          }} />
        ))}
      </div>
      {/* legend */}
      <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
        {Object.entries(lang).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: colors[k] || "#4a5a6a", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em" }}>
              {k} {v}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ num, year, title, desc, tags, lang, role, github, accent }) {
  return (
    <div style={{
      background: "#0b0e14",
      border: "1px solid rgba(0,229,255,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "1.1rem",
      padding: "1.75rem",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.2s, transform 0.2s",
      cursor: "default",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accent}44`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(0,229,255,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* left accent bar */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 2,
        background: `linear-gradient(to bottom, ${accent}, transparent)`,
      }} />

      {/* top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", align: "center", gap: 10 }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em" }}>
            {num} / {year}
          </span>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 9, color: accent,
            border: `1px solid ${accent}44`, padding: "1px 8px",
            letterSpacing: "0.12em", marginLeft: 8,
          }}>
            {role}
          </span>
        </div>
        <a href={github} target="_blank" rel="noreferrer" style={{
          fontFamily: "var(--mono)", fontSize: 10,
          color: "var(--muted)", textDecoration: "none",
          letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 4,
          transition: "color 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.color = accent}
          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
        >
          ↗ GitHub
        </a>
      </div>

      {/* title */}
      <div style={{
        fontFamily: "var(--display)",
        fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
        color: "#fff", lineHeight: 1.1, letterSpacing: "0.03em",
      }}>
        {title}
      </div>

      {/* desc */}
      <p style={{
        fontFamily: "var(--body)", fontSize: "0.82rem",
        color: "var(--muted)", lineHeight: 1.75, flex: 1,
      }}>
        {desc}
      </p>

      {/* tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map(t => (
          <span key={t} style={{
            fontFamily: "var(--mono)", fontSize: 10,
            color: "var(--muted)", letterSpacing: "0.08em",
            border: "1px solid rgba(0,229,255,0.1)",
            padding: "2px 10px",
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* language bar */}
      <LangBar lang={lang} />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{
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
          FEATURED WORK
        </div>
        <div style={{
          fontFamily: "var(--display)",
          fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
          color: "#fff", lineHeight: 1, letterSpacing: "0.04em",
        }}>
          MY
          <span style={{
            color: "transparent",
            WebkitTextStroke: "1.5px var(--accent)",
            marginLeft: "0.3em",
          }}>
            PROJECTS
          </span>
        </div>
      </div>

      {/* 3-column grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1px",
        background: "rgba(0,229,255,0.06)",
      }}>
        {PROJECTS.map(p => <ProjectCard key={p.num} {...p} />)}
      </div>

    </section>
  );
}
