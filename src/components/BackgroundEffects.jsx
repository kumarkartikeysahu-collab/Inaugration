import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export default function BackgroundEffects({ triggerConfetti = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        hue: Math.random() > 0.6 ? 260 : 45, // Violet or Gold
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow gradients
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 45 
          ? `hsla(45, 95%, 65%, ${p.alpha})`
          : `hsla(260, 90%, 75%, ${p.alpha})`;
        ctx.shadowBlur = p.radius * 4;
        ctx.shadowColor = p.hue === 45 ? 'rgba(251, 191, 36, 0.6)' : 'rgba(168, 85, 247, 0.6)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Subtle constellation links for nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / 110) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Confetti burst on trigger
  useEffect(() => {
    if (triggerConfetti) {
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.7 },
          colors: colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.7 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [triggerConfetti]);

  return (
    <div className="background-effects-container">
      <div className="ambient-blob blob-gold" />
      <div className="ambient-blob blob-purple" />
      <div className="ambient-blob blob-cyan" />
      <canvas ref={canvasRef} className="background-canvas" />
    </div>
  );
}
