import React, { useState } from 'react';
import Countdown from './components/Countdown';
import EventModal from './components/EventModal';
import BackgroundEffects from './components/BackgroundEffects';

export default function App() {
  const [stage, setStage] = useState('countdown'); // 'countdown' | 'revealed'
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  const handleCountdownComplete = () => {
    setTriggerConfetti(true);
    setStage('revealed');
    // Reset confetti trigger after burst
    setTimeout(() => {
      setTriggerConfetti(false);
    }, 4000);
  };

  return (
    <main className="app-viewport">
      {/* Dynamic Stardust & Ambient Glow Backdrop */}
      <BackgroundEffects triggerConfetti={triggerConfetti} />

      {/* Primary Stage Interface */}
      <div className="stage-content-wrapper">
        {stage === 'countdown' ? (
          <Countdown
            onComplete={handleCountdownComplete}
          />
        ) : (
          <EventModal />
        )}
      </div>
    </main>
  );
}
