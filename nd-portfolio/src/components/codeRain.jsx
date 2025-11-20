import { useEffect, useRef } from "react";

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();

    // Your characters + colour preserved
    const characters = "ff7b007f".split("");
    const fontSize = 18;

    // Particle system
    const particles = [];
    const bottomPool = [];

    // Mouse tracking for push effect
    const mouse = { x: 0, y: 0, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      // Reset all particle velocities
      particles.forEach((p) => {
        p.vx = 0;
        p.vy = Math.random() * 1 + 2;
      });
    };

    const handleMouseEnter = () => {
      mouse.active = true;
    };

    const handleResize = () => {
      resize();
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("resize", handleResize);

    function drawBottomPool() {
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "#ff7b007f"; // keep your orange
      //bottomPool.forEach((p) => ctx.fillText(p.char, p.x, p.y));
    }

    function animate() {
      // Your background fade effect preserved
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff7b007f"; // your orange rain colour
      ctx.font = `${fontSize}px monospace`;

      particles.forEach((p) => {
        // Mouse repulsion force - only apply when mouse is active
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            const force = (10 - dist) / 10;
            p.vx += (dx / dist) * force * 1;
            p.vy += (dy / dist) * force * 1;
          }
        }

        // Apply movement
        p.x += p.vx;
        p.y += p.vy;

        // Friction + gravity cap
        p.vx *= 0.95;
        p.vy = Math.min(p.vy + 0.05, 7);

        ctx.fillText(p.char, p.x, p.y);

        // Hit bottom
        if (p.y >= canvas.height - 10) {
          bottomPool.push({
            x: p.x,
            y: canvas.height - 10,
            char: p.char,
          });

          // Respawn at top
          p.y = Math.random() * -canvas.height;
          p.x = Math.floor(Math.random() * (canvas.width / fontSize)) * fontSize;
          p.vx = 0;
          p.vy = Math.random() * 1 + 2;
        }
      });

      requestAnimationFrame(animate);
    }

    // Spawn new falling particle
    function spawnParticle(x, y) {
      particles.push({
        x,
        y,
        vx: 0,
        vy: Math.random() * 1 + 2,
        char: characters[Math.floor(Math.random() * characters.length)],
      });
    }

    // Make one particle per column
    const columns = Math.floor(canvas.width / fontSize);
    for (let i = 0; i < columns; i++) {
      spawnParticle(i * fontSize, Math.random() * -canvas.height);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
