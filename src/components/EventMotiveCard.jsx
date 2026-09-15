import React from 'react';
import { Compass, Lightbulb, Cpu, Code2 } from 'lucide-react';

export default function EventMotiveCard() {
  const motiveItems = [
    {
      icon: Lightbulb,
      title: "Consistent Innovation",
      desc: "Dedicated technical immersion every month on the 15th."
    },
    {
      icon: Code2,
      title: "Industry-Ready Minds",
      desc: "Hands-on workshops, keynote sessions, and hackathons."
    },
    {
      icon: Cpu,
      title: "Future Tech Focus",
      desc: "AI/ML, Cloud Computing, IoT, and Cyber Security."
    }
  ];

  return (
    <div className="showcase-card tech15-card motive-card">
      <div className="card-badge-header">
        <span className="section-pill cyan">
          <Compass size={14} /> THE MOTIVE
        </span>
      </div>

      <h3 className="card-main-title">Every 15th of The Month</h3>

      <div className="motive-bullets-list">
        {motiveItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="motive-bullet-item">
              <span className="bullet-dot"></span>
              <div className="bullet-content">
                <span className="bullet-highlight">{item.title}: </span>
                <span className="bullet-text">{item.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech Domain Tag Pills */}
      <div className="card-tags-pills-row">
        <span className="mini-pill">AI & ML</span>
        <span className="mini-pill">Cloud Ops</span>
        <span className="mini-pill">CyberSec</span>
        <span className="mini-pill highlight">IoT Systems</span>
      </div>

      {/* 3 Metric Pills at Bottom */}
      <div className="guest-event-metrics card-bottom-metrics">
        <div className="metric-pill-box">
          <span className="metric-primary">12 Events</span>
          <span className="metric-secondary">ANNUAL SERIES</span>
        </div>

        <div className="metric-pill-box">
          <span className="metric-primary">KIT Stage</span>
          <span className="metric-secondary">MAIN VENUE</span>
        </div>

        <div className="metric-pill-box">
          <span className="metric-primary">Future Tech</span>
          <span className="metric-secondary">CORE FOCUS</span>
        </div>
      </div>
    </div>
  );
}
