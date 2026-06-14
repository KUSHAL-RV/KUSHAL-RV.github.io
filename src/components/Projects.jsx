import React from 'react';
import { Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Distributed System Design & Simulation Platform",
      badge: "Next.js • Node.js • Redis • Kafka • Docker",
      desc: "An interactive platform for designing and simulating distributed system architectures, event-driven routing, and real-time failure recovery modeling CAP theorem trade-offs.",
      bullets: [
        "Built an interactive platform for designing and simulating distributed system architectures using Next.js, Node.js, and WebSocket-based real-time communication.",
        "Implemented 15+ distributed components including load balancers, message queues, cache layers, and databases with configurable routing and fault-tolerance behaviors.",
        "Developed an event-driven simulation engine modeling CAP theorem trade-offs, network partitions, latency, and failure injection across distributed topologies.",
        "Designed real-time telemetry dashboards and analytics, enabling performance monitoring and reducing architecture design iteration time by ~40%."
      ],
      github: "https://github.com/KUSHAL-RV/Distributed-System-Design-Simulation-Platform"
    },
    {
      title: "Farm Management System (E-Commerce Platform)",
      badge: "MySQL • Node.js • Express.js • React",
      desc: "A comprehensive farmers e-marketplace backed by optimized MySQL queries and custom relational schemas with real-time inventory aggregation pipelines.",
      bullets: [
        "Designed normalized relational schema (Farmers, Crops, Inventory, Sales) in MySQL with ACID transactions and referential integrity constraints.",
        "Built ETL pipeline for sales data aggregation; indexed queries and stored procedures reduced query execution time by ~40% for high-volume operations.",
        "Engineered real-time analytics dashboard for inventory turnover, sales trends, and farmer performance; boosted operational efficiency by ~30%."
      ],
      github: "https://github.com/KUSHAL-RV/Farm-Management-System"
    },
    {
      title: "ShadowAI Sentinel (Shadow-Work Auditor)",
      badge: "Python • FastAPI • Docker • Microsoft Presidio • TypeScript",
      desc: "An enterprise-grade AI compliance and governance middleware designed to align internal developer AI usage with the EU AI Act and corporate privacy standards.",
      bullets: [
        "Engineered a secure compliance gateway using FastAPI to intercept, analyze, and audit employee-AI interactions to prevent data leakage.",
        "Implemented multi-layer PII sanitization combining regex match rules and Microsoft Presidio to automatically redact sensitive information before it leaves the network.",
        "Designed a tamper-proof audit vault using hash-chained logs and Ed25519 signatures to ensure complete regulatory transparency and prevent log tampering.",
        "Built a client-side VS Code plugin (TypeScript) to intercept IDE AI calls, routing queries through the gateway with seamless streaming (SSE) support."
      ],
      github: "https://github.com/KUSHAL-RV/ShadowAI_Sentinel"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-center-header">
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <div key={idx} className="project-card glass-panel">
            <div className="project-meta">
              <div className="project-badge">{project.badge}</div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            
            <ul className="project-bullets">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
