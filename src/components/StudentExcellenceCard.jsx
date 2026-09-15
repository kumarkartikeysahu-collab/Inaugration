import React from 'react';
import { GraduationCap, Award, Users, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

export default function StudentExcellenceCard() {
  const points = [
    {
      icon: Users,
      title: "Direct Mentorship",
      text: "Guidance from senior leaders and architects at TCS & top tech enterprises."
    },
    {
      icon: Trophy,
      title: "Showcases & Contests",
      text: "Monthly hackathons, peer coding contests, and industry skill certifications."
    },
    {
      icon: Award,
      title: "Innovation Hub",
      text: "Building Eastern UP's premier engineering and technical excellence ecosystem."
    }
  ];

  return (
    <div className="showcase-card tech15-card student-excellence-card">
      <div className="card-badge-header">
        <span className="section-pill cyan">
          <GraduationCap size={15} /> STUDENT EXCELLENCE
        </span>
      </div>

      <h3 className="card-main-title">Empowering Engineers</h3>

      <div className="excellence-points-list">
        {points.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div key={idx} className="excellence-point-row">
              <div className="point-icon-box">
                <Icon size={16} />
              </div>
              <div className="point-text-wrap">
                <span className="point-title">{point.title}: </span>
                <span className="point-desc">{point.text}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Student Focus Tag Pills */}
      <div className="card-tags-pills-row">
        <span className="mini-pill">Hackathons</span>
        <span className="mini-pill">Skill Certs</span>
        <span className="mini-pill">Peer Coding</span>
        <span className="mini-pill highlight">Placement Edge</span>
      </div>

      {/* 3 Metric Pills at Bottom (Matching other cards) */}
      <div className="guest-event-metrics card-bottom-metrics">
        <div className="metric-pill-box">
          <span className="metric-primary">100%</span>
          <span className="metric-secondary">PRACTICAL</span>
        </div>

        <div className="metric-pill-box">
          <span className="metric-primary">TCS & Tech</span>
          <span className="metric-secondary">MENTORSHIP</span>
        </div>

        <div className="metric-pill-box">
          <span className="metric-primary">Monthly</span>
          <span className="metric-secondary">AWARDS</span>
        </div>
      </div>
    </div>
  );
}
