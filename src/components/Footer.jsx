export default function Footer() {
  return (
    <footer style={{
      background: "#050709",
      borderTop: "1px solid rgba(0,229,255,0.08)",
      padding: "1.5rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <span style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 10, color: "#4a5a6a", letterSpacing: "0.1em",
      }}>
        © 2026 RIDEESH KAVINDU · ALL RIGHTS RESERVED
      </span>
      <span style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 10, color: "#4a5a6a", letterSpacing: "0.1em",
      }}>
        BSc (HONS) COMPUTER SCIENCE · UOJ
      </span>
    </footer>
  );
}