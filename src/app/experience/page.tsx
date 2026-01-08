"use client";
import React, { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    period: "Jun 2025 - Aug 2025",
    role: "Corporate & Investment Banking Summer Analyst",
    company: "J.P. Morgan",
    description:
      "Developed AI-driven analytics and decision-support tools to support credit and liquidity strategy within J.P. Morgan's Payments business.",
    highlights: [
      "Developed an LLM-based analysis pipeline to evaluate overdraft behavior and generate actionable risk insights, reducing investigation time by ~80%.",
      "Built an AI-powered profitability analytics platform integrating Databricks, Tableau, and LLM-based querying, cutting analysis time from ~25 hours to under 5 minutes.",
      "Conducted quantitative facility and notional pooling analysis in collaboration with product and credit teams to inform system design and roadmap decisions."
    ],
    technologies: [
      "Python",
      "SQL",
      "Tableau",
      "Databricks",
      "Snowflake",
      "LLMs"
    ]
  },
  {
    period: "Jun 2024 - Jun 2025",
    role: "E-Commerce Intern",
    company: "Estée Lauder Companies",
    description:
      "Worked on data-informed product experimentation and customer-facing web experiences.",
    highlights: [
      "Owned briefing and execution for high-traffic e-commerce campaigns, collaborating cross-functionally to deliver CMS-driven launches.",
      "Implemented CMS-based content updates and UX audits to optimize page layout and user flow, contributing to higher CTR, conversion, and AOV.",
      "Partnered with marketing and creative teams to translate requirements into scalable CMS configurations and frontend updates."
    ],
    technologies: [
      "HTML/CSS",
      "CMS",
      "Product Analytics",
      "A/B Testing"
    ]
  },
  {
    period: "Feb 2024 - Jun 2024",
    role: "Systems Engineer Intern",
    company: "Bristol Myers Squibb",
    description:
      "Supported enterprise system migration and applied ML to improve data quality and operational workflows.",
    highlights: [
      "Integrated ML models into an Oracle to SAP S/4HANA migration pipeline to automate error detection and correction.",
      "Built diagnostic dashboards to monitor workflow health across purchase order and vendor pipelines.",
      "Authored technical guidelines to standardize processes and reduce friction during system transitions."
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Oracle",
      "SAP S/4HANA",
      "Data Pipelines"
    ]
  }
];

export default function ExperiencePage() {
  const [gradientPosition, setGradientPosition] = useState({ top: 0, height: 0 });
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 2;
      let currentSection = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          
          // Find which section is closest to the middle of viewport
          const distance = Math.abs((sectionTop + sectionBottom) / 2 - viewportMiddle);
          if (distance < closestDistance) {
            closestDistance = distance;
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);

      // Calculate gradient position based on active section
      const activeRef = sectionRefs.current[currentSection];
      if (activeRef && timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const sectionRect = activeRef.getBoundingClientRect();
        
        // Calculate position relative to timeline
        const top = sectionRect.top - timelineRect.top;
        const height = sectionRect.height;
        
        setGradientPosition({ top, height });
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 relative md:p-8 rounded-2xl">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
          Experience
        </h1>
        <p className="text-lg text-gray-600 mb-3">Some Stuff I've Done!</p>
        <a
          href="/Lana_Duke_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-1 font-normal"
        >
          <span className="underline">View Full Resume</span>
          <span style={{ fontSize: '14px' }}>↗</span>
        </a>
      </div>

      {/* Timeline */}
      <div className="relative" ref={timelineRef}>
        {/* Base timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Animated gradient window */}
        <div
          className="absolute left-0 w-0.5 pointer-events-none transition-all duration-500 ease-out"
          style={{
            top: `${gradientPosition.top}px`,
            height: `${gradientPosition.height}px`,
            background: "linear-gradient(to bottom, rgb(59, 130, 246), rgb(147, 51, 234))"
          }}
        />

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 -translate-x-[3px] w-2 h-2 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: index === activeSection
                    ? "rgb(147, 51, 234)"
                    : "rgb(156, 163, 175)",
                }}
              />

              {/* Period */}
              <div className="text-sm text-gray-500 mb-2">{exp.period}</div>

              {/* Role and company */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {exp.role} · {exp.company}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-4">{exp.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-sm leading-relaxed"
                  >
                    • {highlight}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-900"
                    // style={{
                    //   background: "linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))"
                    // }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}