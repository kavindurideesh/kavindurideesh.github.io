import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "Skills", "Projects", "Research", "Contact"];

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 3rem",
      background: scrolled ? "rgba(5,7,9,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled
        ? "1px solid rgba(0,229,255,0.08)"
        : "1px solid transparent",
      transition: "background 0.3s, border-color 0.3s",
    }}>

      {/* Logo */}
      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 13, color: "#00e5ff", letterSpacing: "0.06em",
        cursor: "pointer",
      }} onClick={() => setActivePage("Home")}>
        <span style={{ color: "#4a5a6a" }}>~/</span>rideesh.dev
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => setActivePage(link)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
              color: activePage === link ? "#00e5ff" : "#4a5a6a",
              position: "relative", padding: "4px 0",
              transition: "color 0.2s",
            }}
          >
            {link}
            {activePage === link && (
              <span style={{
                position: "absolute", bottom: -2, left: 0, right: 0,
                height: 1, background: "#00e5ff",
              }} />
            )}
          </button>
        ))}
      </div>

      {/* Status badge */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 10, color: "#39ff14",
        border: "1px solid rgba(57,255,20,0.22)",
        padding: "6px 14px", letterSpacing: "0.12em",
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "#39ff14", display: "inline-block",
          animation: "pulse 1.8s ease-in-out infinite",
        }} />
        OPEN TO INTERNSHIPS
      </div>

    </nav>
  );
}