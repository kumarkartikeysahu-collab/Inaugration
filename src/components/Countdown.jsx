import React, { useState, useEffect } from 'react';
import { Award, MousePointerClick } from 'lucide-react';
import { sound } from '../utils/audioFx';

const STAGE_MESSAGES = {
  10: "Inauguration Protocol Initiated at Kashi Institute of Technology",
  9: "Calibrating High-Definition Stage Projections",
  8: "Welcoming Distinguished Faculty & Dignitaries",
  7: "Honoring Student Innovators & Future Engineers",
  6: "Gathering Attendees Across the KIT Main Stage Auditorium",
  5: "Dimming Main Lights • Soundstage Ready",
  4: "Distinguished Chief Guest Mr. Ravi Kohli (TCS Varanasi) Arriving",
  3: "Stand by for Official Launch of Tech15@KIT...",
  2: "Final Seconds Before Launch...",
  1: "The Moment Has Arrived!",
  0: "WELCOME TO TECH15@KIT!"
};

export default function Countdown({ onComplete }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const totalTime = 10;

  // Listen for clicks anywhere on the screen to begin countdown
  useEffect(() => {
    const handleScreenClick = (e) => {
      // Prevent audio toggle or explicit exclusions from triggering if clicked
      if (e.target && e.target.closest && e.target.closest('.floating-audio-btn')) {
        return;
      }

      if (!hasStarted) {
        sound.init();
        sound.playClick();
        sound.playTick(10);
        setHasStarted(true);
      }
    };

    window.addEventListener('click', handleScreenClick);
    window.addEventListener('touchstart', handleScreenClick, { passive: true });

    return () => {
      window.removeEventListener('click', handleScreenClick);
      window.removeEventListener('touchstart', handleScreenClick);
    };
  }, [hasStarted]);

  // Countdown timer effect
  useEffect(() => {
    let timer = null;

    if (hasStarted && timeLeft > 0) {
      timer = setTimeout(() => {
        const nextTime = timeLeft - 1;
        setTimeLeft(nextTime);
        sound.playTick(nextTime);

        if (nextTime === 0) {
          sound.playFanfare();
          setTimeout(() => {
            onComplete();
          }, 900);
        }
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [hasStarted, timeLeft, onComplete]);

  // SVG Circular progress math
  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / totalTime) * circumference;

  return (
    <div className={`countdown-wrapper animate-fade-in ${!hasStarted ? 'waiting-for-click' : ''}`}>
      {/* Ceremony Header */}
      <div className="ceremony-header-block">
        <div className="event-pill gold-pill">
          <Award className="pill-icon" size={17} />
          <span>OFFICIALLY LAUNCHED ON ENGINEERS' DAY 2026</span>
          <span className="live-indicator">
            <span className="live-dot"></span> {hasStarted ? 'LIVE COUNTDOWN' : 'READY'}
          </span>
        </div>

        <h1 className="tech15-brand-logo countdown-logo">
          <span className="logo-cyan">Tech15</span>
          <span className="logo-yellow">@KIT</span>
        </h1>
        <p className="ceremony-subtitle">
          A Prestigious <span className="highlight-text">Monthly Technical Series</span> by Kashi Institute of Technology
        </p>
      </div>

      {/* Futuristic Circular Gauge */}
      <div className="timer-container">
        <svg className="timer-svg" viewBox="0 0 320 320">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track */}
          <circle
            className="timer-track"
            cx="160"
            cy="160"
            r={radius}
            strokeWidth="10"
          />

          {/* Glowing Animated Progress Stroke */}
          <circle
            className="timer-progress"
            cx="160"
            cy="160"
            r={radius}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={hasStarted ? strokeDashoffset : 0}
            strokeLinecap="round"
            filter="url(#glow)"
          />
        </svg>

        {/* Central Display */}
        <div className="timer-content">
          <div key={timeLeft} className={`timer-digit ${timeLeft <= 3 && hasStarted ? 'urgent-pulse' : 'tick-pulse'}`}>
            {timeLeft}
          </div>
          <span className="timer-unit">SECONDS</span>
        </div>
      </div>

      {/* Dynamic Status / Interactive Click Invitation */}
      {!hasStarted ? (
        <div className="click-prompt-badge animate-pulse-gentle">
          <MousePointerClick className="click-prompt-icon" size={20} />
          <span className="click-prompt-text">Click anywhere on the screen to begin launch</span>
        </div>
      ) : (
        <div className="stage-status-box">
          <p className="stage-status-text" key={`msg-${timeLeft}`}>
            {STAGE_MESSAGES[timeLeft] || STAGE_MESSAGES[0]}
          </p>
        </div>
      )}
    </div>
  );
}
