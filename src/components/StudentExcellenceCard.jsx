import React from 'react';
import { GraduationCap, Award, Users, Trophy } from 'lucide-react';

export default function StudentExcellenceCard() {
  const points = [
    {
      icon: Users,
      text: "Direct mentorship with industry leaders from TCS & top tech giants."
    },
    {
      icon: Trophy,
      text: "Monthly project showcases, peer competitions, & skill certifications."
    },
    {
      icon: Award,
      text: "Building the premiere tech and innovation ecosystem of Eastern UP."
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
              <p className="point-text">{point.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
