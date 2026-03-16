import { useEffect, useRef, useState } from "react";

const SKILLS = [
  {
    category: "Languages",
    icon: "</>",
    items: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 83 },
      { name: "PHP", level: 72 },
      { name: "C++", level: 68 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    category: "Frameworks",
    icon: "[ ]",
    items: [
      { name: "React.js", level: 84 },
      { name: "Node.js", level: 80 },
      { name: "Flask", level: 82 },
      { name: "Laravel", level: 74 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    category: "Databases",
    icon: "{ }",
    items: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: ">>",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Linux", level: 80 },
      { name: "Postman", level: 82 },
    ],
  },
  {
    category: "Networking & Security",
    icon: "~~",
    items: [
      { name: "Cisco Packet Tracer", level: 95 },
      { name: "Wireshark", level: 75 },
      { name: "Network Protocols", level: 80 },
      { name: "Cybersecurity Basics", level: 72 },
    ],
  },
  {
    category: "Machine Learning",
    icon: "**",
    items: [
      { name: "PyTorch", level: 74 },
      { name: "TensorFlow", level: 66 },
      { name: "Scikit-learn", level: 78 },
    ],
  },
];

function Bar({ level, accent }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(level);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div
      ref={ref}
      style={{
        height: 3,
        background: "rgba(255,255,255,0.07)",
        borderRadius: 2,
        overflow: "hidden",
        flex: 1,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: accent,
          transition: "width 1s ease",
          boxShadow: `0 0 8px ${accent}55`,
        }}
      />
    </div>
  );
}

function SkillCard({ category, icon, items }) {
  const accent =
    category === "Databases" || category === "Networking & Security"
      ? "#ff2d6b"
      : "#00e5ff";

  return (
    <div
      style={{
        background: "#0b0e14",
        border: "1px solid rgba(0,229,255,0.08)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "rgba(0,229,255,0.25)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(0,229,255,0.08)")
      }
    >
      {/* header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: accent,
            opacity: 0.7,
          }}
        >
          {icon}
        </span>

        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: accent,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {category}
        </span>
      </div>

      {/* skills */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        {items.map(({ name, level }) => (
          <div key={name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--text)",
                }}
              >
                {name}
              </span>

              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--muted)",
                }}
              >
                {level}%
              </span>
            </div>

            <Bar level={level} accent={accent} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        height: "100%",
        overflow: "auto",
        background: "var(--bg)",
        padding: "3rem 5rem",
      }}
    >
      {/* header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.22em",
            marginBottom: "0.6rem",
          }}
        >
          <span
            style={{
              width: 28,
              height: 1,
              background: "var(--accent)",
              display: "block",
            }}
          />
          TECHNICAL STACK
        </div>

        <div
          style={{
            fontFamily: "var(--display)",
            fontSize: "clamp(2.2rem,4vw,3.5rem)",
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          SKILLS &
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--accent)",
              marginLeft: "0.3em",
            }}
          >
            EXPERTISE
          </span>
        </div>
      </div>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: "1px",
          background: "rgba(0,229,255,0.06)",
        }}
      >
        {SKILLS.map((s) => (
          <SkillCard key={s.category} {...s} />
        ))}
      </div>
    </section>
  );
}