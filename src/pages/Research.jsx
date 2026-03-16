const TIMELINE = [
  {
    phase: "01",
    title: "Literature Review & Problem Definition",
    period: "Dec 2024 – Jan 2025",
    status: "done",
    points: [
      "Surveyed existing NIDS approaches — signature-based, anomaly-based, and hybrid",
      "Identified limitations of static rule-based systems against zero-day attacks",
      "Defined research objective: adaptive, self-improving NIDS using Reinforcement Learning",
    ],
  },
  {
    phase: "02",
    title: "Dataset Acquisition & Preprocessing",
    period: "Jan 2025 – Feb 2025",
    status: "done",
    points: [
      "Acquired NSL-KDD and CICIDS2017 benchmark datasets",
      "Applied label encoding, min-max normalisation, and feature selection",
      "Handled class imbalance via SMOTE oversampling on minority attack classes",
    ],
  },
  {
    phase: "03",
    title: "Baseline ML Models",
    period: "Feb 2025 – Mar 2025",
    status: "done",
    points: [
      "Implemented Random Forest, Decision Tree, Naive Bayes, SVM, and MLP classifiers",
      "Evaluated accuracy, precision, recall, and F1-score across all models",
      "Random Forest achieved highest baseline accuracy — used as benchmark for DQN",
    ],
  },
  {
    phase: "04",
    title: "DQN Architecture Design",
    period: "Mar 2025 – Jun 2025",
    status: "done",
    points: [
      "Designed state space (network flow features), action space (alert / allow / block), and reward function",
      "Built DQN with experience replay and target network using PyTorch",
      "Implemented epsilon-greedy exploration with decay schedule",
    ],
  },
  {
    phase: "05",
    title: "Training & Evaluation",
    period: "Jun 2025 – Present",
    status: "active",
    points: [
      "Training DQN agent on NSL-KDD; evaluating generalisation on CICIDS2017",
      "Comparing DQN performance against baseline ML models",
      "Tuning hyperparameters: learning rate, replay buffer size, discount factor γ",
    ],
  },
  {
    phase: "06",
    title: "Paper Writing & Submission",
    period: "2026",
    status: "upcoming",
    points: [
      "Compiling experimental results and comparative analysis",
      "Writing final undergraduate research paper",
      "Target: submission to an IEEE / Scopus-indexed conference",
    ],
  },
];

const STACK = [
  { label: "Framework",  value: "PyTorch" },
  { label: "Algorithm",  value: "Deep Q-Network (DQN)" },
  { label: "Datasets",   value: "NSL-KDD · CICIDS2017" },
  { label: "Baselines",  value: "RF · DT · NB · SVM · MLP" },
  { label: "Language",   value: "Python 3" },
  { label: "Status",     value: "Active Research", highlight: true },
];

const STATUS_COLOR = { done: "#39ff14", active: "#00e5ff", upcoming: "#4a5a6a" };
const STATUS_LABEL = { done: "DONE", active: "IN PROGRESS", upcoming: "UPCOMING" };

export default function Research() {
  return (
    <section id="research" style={{
      height: "100%",
      overflow: "auto",
      background: "var(--bg)",
      padding: "3rem 5rem",
      boxSizing: "border-box",
    }}>

      {/* ── HEADER ── */}
      <div style={{ marginBottom: "2.5rem" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          fontFamily: "var(--mono)", fontSize: 11,
          color: "var(--accent)", letterSpacing: "0.22em",
          marginBottom: "0.6rem",
        }}>
          <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} />
          UNDERGRADUATE RESEARCH
        </div>
        <div style={{
          fontFamily: "var(--display)",
          fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
          color: "#fff", lineHeight: 1, letterSpacing: "0.04em",
          marginBottom: "1.25rem",
        }}>
          DQN-BASED
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--accent)", marginLeft: "0.3em" }}>
            ADAPTIVE NIDS
          </span>
        </div>

        {/* abstract */}
        <p style={{
          fontFamily: "var(--body)", fontSize: "0.9rem",
          color: "var(--muted)", lineHeight: 1.8, maxWidth: 780,
          borderLeft: "2px solid rgba(0,229,255,0.2)",
          paddingLeft: "1.25rem",
        }}>
          A Reinforcement Learning-based Network Intrusion Detection System using{" "}
          <span style={{ color: "var(--text)" }}>Deep Q-Network (DQN)</span> that adaptively
          learns to classify and respond to network threats. Unlike static rule-based systems,
          the agent continuously improves through interaction with{" "}
          <span style={{ color: "var(--text)" }}>NSL-KDD</span> and{" "}
          <span style={{ color: "var(--text)" }}>CICIDS2017</span> benchmark datasets,
          enabling detection of novel attack patterns without manual rule updates.
        </p>
      </div>

      {/* ── MAIN GRID: timeline + stack ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 260px",
        gap: "1px",
        background: "rgba(0,229,255,0.06)",
        alignItems: "start",
      }}>

        {/* ── TIMELINE ── */}
        <div style={{ background: "var(--bg)", padding: "1.5rem" }}>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10,
            color: "var(--accent)", letterSpacing: "0.2em",
            marginBottom: "1.25rem",
          }}>
            RESEARCH TIMELINE
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((item, i) => {
              const color = STATUS_COLOR[item.status];
              const isLast = i === TIMELINE.length - 1;
              return (
                <div key={item.phase} style={{ display: "flex", gap: "1rem" }}>

                  {/* left: phase + connector line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32, flexShrink: 0 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%",
                      border: `1px solid ${color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--mono)", fontSize: 9,
                      color, letterSpacing: "0.05em", flexShrink: 0,
                      background: item.status === "active" ? `${color}15` : "transparent",
                    }}>
                      {item.phase}
                    </div>
                    {!isLast && (
                      <div style={{
                        width: 1, flex: 1, minHeight: 20,
                        background: item.status === "done"
                          ? "rgba(57,255,20,0.2)"
                          : "rgba(0,229,255,0.08)",
                        margin: "4px 0",
                      }} />
                    )}
                  </div>

                  {/* right: content */}
                  <div style={{ paddingBottom: isLast ? 0 : "1.5rem", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{
                        fontFamily: "var(--display)", fontSize: "1rem",
                        color: "#fff", letterSpacing: "0.04em",
                      }}>
                        {item.title}
                      </span>
                      <span style={{
                        fontFamily: "var(--mono)", fontSize: 9,
                        color, border: `1px solid ${color}44`,
                        padding: "1px 7px", letterSpacing: "0.1em",
                      }}>
                        {STATUS_LABEL[item.status]}
                      </span>
                    </div>

                    <div style={{
                      fontFamily: "var(--mono)", fontSize: 10,
                      color: "var(--muted)", letterSpacing: "0.1em",
                      marginBottom: 8,
                    }}>
                      {item.period}
                    </div>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                      {item.points.map((pt, j) => (
                        <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ color, fontFamily: "var(--mono)", fontSize: 10, marginTop: 2, flexShrink: 0 }}>▸</span>
                          <span style={{ fontFamily: "var(--body)", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── STACK SIDEBAR ── */}
        <div style={{ background: "var(--bg)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1px" }}>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10,
            color: "var(--accent)", letterSpacing: "0.2em",
            marginBottom: "1.25rem",
          }}>
            TECH STACK
          </div>

          {STACK.map(({ label, value, highlight }) => (
            <div key={label} style={{
              padding: "0.75rem 0",
              borderBottom: "1px solid rgba(0,229,255,0.06)",
            }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 4 }}>
                {label}
              </div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 12,
                color: highlight ? "#39ff14" : "var(--text)",
                letterSpacing: "0.06em",
              }}>
                {value}
              </div>
            </div>
          ))}

          {/* legend */}
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              LEGEND
            </div>
            {Object.entries(STATUS_COLOR).map(([k, c]) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
                  {STATUS_LABEL[k]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
