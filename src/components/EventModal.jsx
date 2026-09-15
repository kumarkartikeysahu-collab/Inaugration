import React from 'react';
import { Award } from 'lucide-react';
import ChiefGuestCard from './ChiefGuestCard';
import EventMotiveCard from './EventMotiveCard';
import StudentExcellenceCard from './StudentExcellenceCard';

export default function EventModal() {
  return (
    <div className="event-popup-backdrop animate-fade-in">
      <div className="event-frame-modal tech15-main-frame">
        {/* Ambient Glow Aura */}
        <div className="frame-ambient-glow" />

        {/* Main Stage Content */}
        <div className="tech15-body-container">
          {/* Golden Ribbon Badge */}
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
