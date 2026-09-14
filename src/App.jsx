import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Countdown from './components/Countdown';
import EventModal from './components/EventModal';
import BackgroundEffects from './components/BackgroundEffects';
import { sound } from './utils/audioFx';

export default function App() {
  const [stage, setStage] = useState('countdown'); // 'countdown' | 'revealed'
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleCountdownComplete = () => {
    setTriggerConfetti(true);
    setStage('revealed');
    // Reset confetti trigger after burst
    setTimeout(() => {
      setTriggerConfetti(false);
    }, 4000);
  };

  const handleToggleMute = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  return (
    <main className="app-viewport">
      {/* Dynamic Stardust & Ambient Glow Backdrop */}
      <BackgroundEffects triggerConfetti={triggerConfetti} />

      {/* Floating Discreet Audio Toggle (Visible during countdown phase) */}
      {stage === 'countdown' && (
        <button
          className={`floating-audio-btn ${isMuted ? 'muted' : ''}`}
          onClick={handleToggleMute}
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
          aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}

      {/* Primary Stage Interface */}
      <div className="stage-content-wrapper">
        {stage === 'countdown' ? (
          <Countdown
            onComplete={handleCountdownComplete}
          />
        ) : (
          <EventModal
            isMuted={isMuted}
            onToggleMute={handleToggleMute}
          />
        )}
      </div>
    </main>
  );
}
