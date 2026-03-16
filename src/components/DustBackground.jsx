import { useEffect, useRef } from "react";

export default function DustBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let W, H;
    let particles = [];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function spawn() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,         // tiny radius
        opacity: Math.random() * 0.45 + 0.05,  // subtle
        vx: (Math.random() - 0.5) * 0.18,      // very slow drift
        vy: (Math.random() - 0.5) * 0.12 - 0.08, // slight upward bias
        flicker: Math.random() * Math.PI * 2,  // phase offset for shimmer
        flickerSpeed: 0.008 + Math.random() * 0.012,
      };
    }

    function init() {
      particles = Array.from({ length: 180 }, spawn);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        // drift
        p.x += p.vx;
        p.y += p.vy;

        // flicker opacity
        p.flicker += p.flickerSpeed;
        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.flicker));

        // wrap around edges
        if (p.x < -2)  p.x = W + 2;
        if (p.x > W + 2) p.x = -2;
        if (p.y < -2)  p.y = H + 2;
        if (p.y > H + 2) p.y = -2;

        // draw dust speck
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 220, 255, ${alpha})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener("resize", () => { resize(); init(); });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
