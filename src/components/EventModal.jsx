import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  Minimize2, 
  Volume2, 
  VolumeX, 
  Monitor, 
  Layers,
  Award
} from 'lucide-react';
import ChiefGuestCard from './ChiefGuestCard';
import EventMotiveCard from './EventMotiveCard';
import StudentExcellenceCard from './StudentExcellenceCard';
import { sound } from '../utils/audioFx';

export default function EventModal({ isMuted, onToggleMute }) {
  const [activeScreen, setActiveScreen] = useState('projector'); // 'projector' | 'banner'
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    sound.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  return (
    <div className="event-popup-backdrop animate-fade-in">
      <div className={`event-frame-modal tech15-main-frame ${activeScreen === 'banner' ? 'banner-view-mode' : ''}`}>
        {/* Ambient Glow Aura */}
        <div className="frame-ambient-glow" />

        {/* Top Control Bar */}
        <div className="tech15-top-navbar">
          {/* Top Left Brand Pill */}
          <div className="nav-brand-pill">
            <span className="brand-dot"></span>
            <span className="brand-title">Tech15@KIT</span>
            <span className="brand-divider">|</span>
            <span className="brand-event">Engineers' Day Inauguration</span>
          </div>

          {/* Center Screen Selectors */}
          <div className="nav-screen-selectors">
            <button
              className={`screen-select-btn ${activeScreen === 'projector' ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setActiveScreen('projector');
              }}
            >
              <Monitor size={15} />
              <span>Projector Launch Screen</span>
            </button>

            <button
              className={`screen-select-btn ${activeScreen === 'banner' ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setActiveScreen('banner');
              }}
            >
              <Layers size={15} />
              <span>22×6 Flex Banner Design</span>
            </button>
          </div>

          {/* Top Right Utilities */}
          <div className="nav-utility-controls">
            <button
              className={`utility-btn ${isMuted ? 'muted' : ''}`}
              onClick={onToggleMute}
              title={isMuted ? "SFX: OFF" : "SFX: ON"}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span>{isMuted ? "SFX: OFF" : "SFX: ON"}</span>
            </button>

            <button
              className="utility-btn"
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              <span>Fullscreen</span>
            </button>
          </div>
        </div>

        {/* Main Stage Content */}
        <div className="tech15-body-container">
          {/* Golden Ribbon Banner */}
          <div className="launch-ribbon-badge">
            <Award size={16} className="ribbon-icon" />
            <span>OFFICIALLY LAUNCHED ON ENGINEERS' DAY 2024</span>
          </div>

          {/* Hero Branding */}
          <div className="tech15-hero-header">
            <h1 className="tech15-brand-logo">
              <span className="logo-cyan">Tech15</span>
              <span className="logo-yellow">@KIT</span>
            </h1>
            <h2 className="tech15-subheading">
              A Prestigious <span className="highlight-text">Monthly Technical Series</span> by Kashi Institute of Technology
            </h2>
          </div>

          {/* 3 Core Showcase Cards */}
          <div className="tech15-cards-grid">
            <div className="grid-card-item">
              <EventMotiveCard />
            </div>

            <div className="grid-card-item center-feature">
              <ChiefGuestCard />
            </div>

            <div className="grid-card-item">
              <StudentExcellenceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
