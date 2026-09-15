import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Building2, 
  Sparkles, 
  UserCheck, 
  ChevronRight, 
  X, 
  Quote, 
  Globe2, 
  Code2, 
  Award,
  Layers
} from 'lucide-react';
import chiefGuestPhoto from '../assets/ravi_kohli.jpg';

export default function ChiefGuestCard() {
  const [showBioModal, setShowBioModal] = useState(false);

  // Close modal with Escape key and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowBioModal(false);
    };
    if (showBioModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [showBioModal]);

  return (
    <>
      <div className="showcase-card tech15-card chief-guest-card highlight-border">
        {/* Card Badge */}
        <div className="card-badge-header">
          <span className="section-pill gold">
            <Crown size={14} /> INAUGURATED BY CHIEF GUEST
          </span>
        </div>

        {/* Profile Header Row */}
        <div className="guest-profile-row">
          <div 
            className="guest-avatar-box clickable-avatar"
            onClick={() => setShowBioModal(true)}
            title="Click to view full photo & profile"
          >
            <img
              src={chiefGuestPhoto}
              alt="Mr. Ravi Kohli"
              className="guest-avatar-img"
              onError={(e) => {
                e.target.src = '/ravi_kohli.jpg';
              }}
            />
            <div className="avatar-fallback" style={{ display: 'none' }}>
              <span>Mr. Ravi Kohli, TCS Varanasi</span>
            </div>
            <div className="avatar-glow-ring"></div>
            <span className="avatar-expand-badge" title="Expand Profile">
              <Sparkles size={11} />
            </span>
          </div>

          <div className="guest-meta-info">
            <h3 className="guest-name">Mr. Ravi Kohli</h3>
            <p className="guest-role">Centre Head</p>
            <p className="guest-company">
              <Building2 size={15} className="company-icon" />
              <span>Tata Consultancy Services (TCS), Varanasi</span>
            </p>
            <div className="guest-quick-tags">
              <span className="quick-tag gold-tag">23+ Yrs Exp</span>
              <span className="quick-tag blue-tag">21+ Yrs @ TCS</span>
            </div>
          </div>
        </div>

        {/* Executive Bio Snippet on Card */}
        <div className="guest-bio-snippet-box">
          <p className="guest-bio-snippet">
            With over <strong>23 years of rich experience</strong> (21+ years at TCS), Mr. Ravi Kohli leads the <strong>TCS Varanasi Centre</strong>. Beginning as a software developer, he progressed through Solution Architect to Centre Head, driving high-impact digital transformation across global banking, healthcare, and retail.
          </p>

          <div className="guest-career-path">
            <span className="career-node">Trainee</span>
            <span className="career-sep">→</span>
            <span className="career-node">Developer</span>
            <span className="career-sep">→</span>
            <span className="career-node">Solution Architect</span>
            <span className="career-sep">→</span>
            <span className="career-node active">Centre Head</span>
          </div>
        </div>

        {/* Interactive Full Profile Button */}
        <button 
          className="guest-read-bio-btn"
          onClick={() => setShowBioModal(true)}
          aria-label="Read Chief Guest's complete biography"
        >
          <div className="btn-inner-left">
            <UserCheck size={16} className="btn-icon" />
            <span>Read Complete Biography & Journey</span>
          </div>
          <ChevronRight size={16} className="btn-arrow" />
        </button>

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

      {/* Full Biography Modal */}
      {showBioModal && (
        <div 
          className="guest-bio-modal-backdrop animate-fade-in"
          onClick={() => setShowBioModal(false)}
          role="presentation"
        >
          <div 
            className="guest-bio-modal-card animate-scale-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chief-guest-modal-heading"
          >
            {/* Modal Top Bar */}
            <div className="bio-modal-header">
              <div className="bio-modal-badge">
                <Crown size={15} className="text-gold" />
                <span>DISTINGUISHED CHIEF GUEST PROFILE</span>
              </div>
              <button 
                className="bio-modal-close-btn"
                onClick={() => setShowBioModal(false)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Two-Column Body */}
            <div className="bio-modal-body">
              {/* Left Column: Portrait & Key Stats */}
              <div className="bio-modal-sidebar">
                <div className="bio-portrait-box">
                  <img
                    src={chiefGuestPhoto}
                    alt="Mr. Ravi Kohli - Chief Guest"
                    className="bio-portrait-img"
                    onError={(e) => {
                      e.target.src = '/ravi_kohli.jpg';
                    }}
                  />
                  <div className="portrait-gold-glow"></div>
                </div>

                <div className="sidebar-guest-header">
                  <h4 className="sidebar-guest-name">Mr. Ravi Kohli</h4>
                  <p className="sidebar-guest-role">Centre Head, TCS-Varanasi</p>
                  <p className="sidebar-guest-company">
                    <Building2 size={14} />
                    <span>Tata Consultancy Services (TCS)</span>
                  </p>
                </div>

                <div className="sidebar-stats-row">
                  <div className="sidebar-stat-card">
                    <span className="stat-value">23+</span>
                    <span className="stat-desc">Years Total Experience</span>
                  </div>
                  <div className="sidebar-stat-card">
                    <span className="stat-value">21+</span>
                    <span className="stat-desc">Years at TCS</span>
                  </div>
                </div>

                <div className="sidebar-domain-section">
                  <span className="domain-section-title">Industry Domains</span>
                  <div className="domain-tags-wrap">
                    <span className="domain-badge">Finance & Banking</span>
                    <span className="domain-badge">Healthcare</span>
                    <span className="domain-badge">Retail</span>
                    <span className="domain-badge">Manufacturing</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Verbatim Bio Text */}
              <div className="bio-modal-main">
                <div className="bio-title-row">
                  <Quote size={24} className="bio-quote-icon" />
                  <h3 id="chief-guest-modal-heading" className="bio-main-title">
                    About Myself
                  </h3>
                </div>

                <div className="bio-paragraphs-container">
                  <p className="bio-paragraph">
                    With over 23 years of rich experience at Tata Consultancy Services (TCS), I have had the opportunity to work across a variety of domains and technologies, serving both domestic and international clients. My professional journey began in the manufacturing sector, where I gained foundational industry knowledge before transitioning to TCS as a Trainee. Since then, I have been an integral part of the organization for more than 21 years.
                  </p>

                  <p className="bio-paragraph">
                    Throughout my tenure at TCS, I have been involved in numerous projects, starting my career as a software developer. In this role, I honed my skills in various programming languages, adapting to the rapidly evolving landscape of technology. As my career progressed, I embraced multiple responsibilities, taking on roles such as team lead, project manager, and solution architect. This progression has allowed me to cultivate a holistic understanding of project lifecycles, from requirement gathering and analysis, through to delivery and post-implementation support.
                  </p>

                  <p className="bio-paragraph">
                    I have extensive experience working with clients from diverse industries, ranging from finance and banking to healthcare and retail. My exposure to both domestic and overseas markets has enabled me to develop a keen understanding of different business environments, client expectations, and regulatory requirements. Additionally, I have been actively involved in mentoring new talent, fostering a collaborative and innovative work culture within my teams.
                  </p>

                  <p className="bio-paragraph">
                    My technical expertise spans a wide array of platforms and languages. I am passionate about continuous learning, process improvement, and delivering high-quality solutions that drive tangible business value for my clients.
                  </p>

                  {/* Current Responsibility Callout */}
                  <div className="centre-head-callout">
                    <div className="callout-badge-icon">
                      <Sparkles size={18} />
                    </div>
                    <div className="callout-text-wrap">
                      <span className="callout-tag">LEADERSHIP ROLE</span>
                      <p className="callout-strong">
                        Currently handing the responsibility of Centre Head for TCS-Varanasi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Leadership Pillars */}
                <div className="bio-pillars-grid">
                  <div className="bio-pillar-card">
                    <Globe2 size={17} className="pillar-icn" />
                    <div>
                      <strong>Global & Domestic Reach</strong>
                      <span>Enterprise delivery across diverse overseas & domestic markets</span>
                    </div>
                  </div>

                  <div className="bio-pillar-card">
                    <Code2 size={17} className="pillar-icn" />
                    <div>
                      <strong>Solution Architecture</strong>
                      <span>Holistic end-to-end SDLC, continuous learning & process improvement</span>
                    </div>
                  </div>

                  <div className="bio-pillar-card">
                    <Award size={17} className="pillar-icn" />
                    <div>
                      <strong>Talent & Innovation</strong>
                      <span>Mentoring new engineering talent and fostering collaborative work culture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
