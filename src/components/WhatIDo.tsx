"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code,
  Layers,
  Server,
  Database,
  Smartphone,
  Terminal,
  CheckCircle,
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function WhatIDo() {
  const { whatIDo, skillsData } = portfolioData;
  const [activeTab, setActiveTab] = useState<"services" | "skills">("services");

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6 text-indigo-400" />,
    Layers: <Layers className="w-6 h-6 text-cyan-400" />,
    Server: <Server className="w-6 h-6 text-emerald-400" />,
    Database: <Database className="w-6 h-6 text-purple-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-pink-400" />,
    Terminal: <Terminal className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="what-i-do" className="py-24 relative bg-[#090d16] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Capabilities &amp; Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What <span className="gradient-text-cyan">I Do</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From crafting responsive pixel-perfect frontends to architecting robust MERN stack backends, here is what I bring to your team.
          </p>

          {/* View Mode Switcher Pills */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === "services"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Services &amp; Solutions
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === "skills"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Technical Skill Matrix
            </button>
          </div>
        </div>

        {/* Tab 1: Services & Solutions Grid */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIDo.map((service) => (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 bg-slate-900/40 hover:border-indigo-500/40 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-300">
                      {iconMap[service.icon] || <Sparkles className="w-6 h-6 text-indigo-400" />}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-indigo-300 border border-slate-700/80">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom link to Projects */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href="#projects"
                    className="text-xs font-semibold text-indigo-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>See projects built with this</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Technical Skill Matrix */}
        {activeTab === "skills" && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillsData.map((categoryGroup, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-slate-800/90 bg-slate-900/50 space-y-5"
                >
                  <div className="border-b border-slate-800/80 pb-3 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/40">
                      {categoryGroup.skills.length} Skills
                    </span>
                  </div>

                  <div className="space-y-4">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-slate-200">{skill.name}</span>
                          <span className="text-slate-400 font-mono">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 block">
                          Tag: {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Skills Cloud */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800/80 bg-slate-900/30 text-center space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Full Technical Vocabulary
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "React.js 19",
                  "Next.js 15 (App Router)",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Mongoose",
                  "Tailwind CSS",
                  "RESTful APIs",
                  "JWT Authentication",
                  "Redux Toolkit",
                  "Zustand",
                  "HTML5 / Semantic Web",
                  "CSS3 / Flexbox / Grid",
                  "Git & GitHub",
                  "Postman",
                  "Vercel",
                  "Netlify",
                  "VS Code",
                  "Turbopack",
                  "Vite",
                  "Responsive Design",
                  "Cross-Browser Compatibility",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/80 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

