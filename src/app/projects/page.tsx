"use client";
import React, { useState } from 'react';

type Project = {
  title: string;
  description: string;
  image?: string;
  visitLink?: string;
  githubLink?: string;
  tags: string[];
  status?: string;
};

const projects: Project[] = [
  {
    title: "SmartBrief",
    description:
      "Personalized real-time financial news dashboard that aggregates live sources, summarizes key stories with LLMs, and surfaces market-relevant insights.",
    image: "/Smartbrief.png",
    // visitLink: "#",
    // githubLink: "#",
    tags: [
      "Python",
      "LLMs",
      "NLP",
      "API Integration",
      "Data Pipelines",
      "Vector Search",
      "React"
    ],
    status: "active",
  },
  {
    title: "TikTok Wrapped",
    description:
      "Interactive analytics experience inspired by Spotify Wrapped, transforming TikTok usage data into visual summaries and shareable insights.",
    image: "/tiktok_wrapped.png",
    // visitLink: "#",
    // githubLink: "#",
    tags: [
      "JavaScript",
      "React",
      "Data Visualization",
      "ETL",
      "Analytics",
      "Frontend Architecture"
    ],
    status: "active",
  },
  {
    title: "Wayfair AI Agents (Externship)",
    description:
      "Built AI agents in n8n to automate e-commerce product research, including scraping, structuring product data, and identifying trend signals for Wayfair's merchandising, product, and marketing teams. This project was completed as part of the Wayfair AI Externship program through Extern.com.",
    image: "/wayfair-project.png",
    // visitLink: "#",
    // githubLink: "#",
    tags: [
      "n8n",
      "Web Scraping",
      "LLMs",
      "Workflow Orchestration",
      "Automation",
      "JSON/REST"
    ],
    status: "active",
  },
  {
    title: "Incorporating Fine-grained Events in Stock Movement Prediction",
    description:
      "Applied natural language processing to model financial events and improve stock-movement prediction using market news and textual signals. This project was completed as part of the NLP for Finance Vertically Integrated Project at Georgia Tech.",
    image: "/sspm.png",
    // visitLink: "#",
    // githubLink: "#",
    tags: [
      "Python",
      "NLP",
      "Machine Learning",
      "Feature Engineering",
      "Time Series",
      "Model Evaluation"
    ],
    status: "archived",
  },
  {
    title: "Monetary Policy Sentiment Annotation & Model Evaluation",
    description:
      "Annotated 1,000+ central bank statements and evaluated GPT-3, FinBERT, RoBERTa, Claude, and LLaMA on Hawkish/Dovish/Neutral policy classification using precision, recall, and F1.",
    image: "/monetary-policy.png",
    // visitLink: "#",
    // githubLink: "#",
    tags: [
      "NLP",
      "LLM Benchmarking",
      "Model Evaluation",
      "Text Classification",
      "Prompt Engineering",
      "Data Annotation"
    ],
    status: "archived",
  },
  {
    title: "LLM Numerical Reasoning in Financial Domain Benchmarks",
    description:
      "Constructed domain-specific numerical reasoning benchmarks from credit card agreements to evaluate LLM performance on multi-step arithmetic and conditional financial reasoning.",
    image: "/numeric-reasoning.png",
    // visitLink: "#",
    // githubLink: "#",
    tags: [
      "LLMs",
      "Benchmark Design",
      "Numerical Reasoning",
      "Evaluation Metrics",
      "Prompting",
      "Python"
    ],
    status: "archived",
  },
  {
    title: "Green Plate",
    description:
      "Full-stack Android grocery and meal-planning app with Firebase-backed authentication, recipes, shopping lists, and nutrition tracking.",
    image: "/greenplate.png",
    // visitLink: "#",
    // githubLink: "#",
    tags: [
      "Java",
      "Android",
      "Firebase Auth",
      "Realtime Database",
      "REST APIs",
      "Full Stack"
    ],
    status: "archived",
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 relative md:p-8 rounded-2xl">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-3">
          Projects
        </h1>
        <p className="text-lg text-gray-600 mb-3">
          A few things I've built recently.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105 "
            onClick={() => openModal(project)}
          >
            <div className="w-full h-full relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition-colors shadow-md">
              {/* Project image */}
              {project.image && (
                <div className="mb-4 aspect-video rounded-lg bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Project title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags and status */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                {project.status && (
                  <span
                    className={`px-2 py-1 text-xs rounded whitespace-nowrap ${
                      project.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className="p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="float-right translate-x-4 -translate-y-6 text-gray-400 hover:text-gray-600 text-4xl leading-none"
              >
                ×
              </button>

              {/* Project image */}
              {selectedProject.image && (
                <div className="mb-6 aspect-video rounded-lg bg-gray-100 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Project title */}
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {selectedProject.title}
              </h2>

              {/* Status badge */}
              {selectedProject.status && (
                <span
                  className={`inline-block px-3 py-1 text-sm rounded mb-4 ${
                    selectedProject.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {selectedProject.status}
                </span>
              )}

              {/* Full description */}
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Action buttons */}
              {(selectedProject.visitLink || selectedProject.githubLink) && (
                <div className="flex gap-3 mb-6">
                  {selectedProject.visitLink && (
                    <a
                      href={selectedProject.visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Visit Project
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-200 text-gray-900 text-sm rounded-md hover:bg-gray-300 transition-colors"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              )}

              {/* All tags */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}