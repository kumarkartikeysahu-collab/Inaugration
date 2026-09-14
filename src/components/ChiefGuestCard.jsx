import React from 'react';
import { Crown, Building2, Calendar, Clock, MapPin } from 'lucide-react';

export default function ChiefGuestCard() {
  return (
    <div className="showcase-card tech15-card chief-guest-card highlight-border">
      <div className="card-badge-header">
        <span className="section-pill gold">
          <Crown size={14} /> INAUGURATED BY CHIEF GUEST
        </span>
      </div>

      <div className="guest-profile-row">
        <div className="guest-avatar-box">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            alt="Mr. Ravi Kohli"
            className="guest-avatar-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="avatar-fallback" style={{ display: 'none' }}>
            <span>Mr. Ravi Kohli, TCS Varanasi Centre</span>
          </div>
          <div className="avatar-glow-ring"></div>
        </div>

        <div className="guest-meta-info">
          <h3 className="guest-name">Mr. Ravi Kohli</h3>
          <p className="guest-role">Centre Head</p>
          <p className="guest-company">
            <Building2 size={15} className="company-icon" />
            <span>Tata Consultancy Services (TCS), Varanasi</span>
          </p>
        </div>
      </div>

      {/* 3 Metric Pills at Bottom */}
      <div className="guest-event-metrics">
        <div className="metric-pill-box">
          <span className="metric-primary">15th Sept</span>
          <span className="metric-secondary">ENGINEERS' DAY</span>
        </div>

        <div className="metric-pill-box">
          <span className="metric-primary">12:00 PM</span>
          <span className="metric-secondary">LAUNCH TIME</span>
        </div>

        <div className="metric-pill-box">
          <span className="metric-primary">KIT Auditorium</span>
          <span className="metric-secondary">MAIN STAGE</span>
        </div>
      </div>
    </div>
  );
}
