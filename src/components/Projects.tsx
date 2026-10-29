"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Check,
  Layers,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { label: "All Projects", value: "all" },
    { label: "MERN Full-Stack", value: "mern" },
    { label: "Frontend & Next.js", value: "frontend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (p) => p.category === filter || (filter === "frontend" && p.category === "fullstack")
        );

  return (
    <section id="projects" className="py-24 relative bg-[#0a0e1a] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A showcase of full-stack MERN applications and modern responsive frontend projects built with React, Next.js, TypeScript, Node.js, and MongoDB.
          </p>

          {/* Category Filter Pills */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-inner mt-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  filter === opt.value
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/90 bg-slate-900/50 hover:border-indigo-500/40 flex flex-col justify-between overflow-hidden group transition-all duration-300"
            >
              <div>
                {/* Project Visual Mock Header */}
                <div
                  className={`h-48 relative bg-gradient-to-tr ${project.gradient} p-5 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

                  {/* Window Bar Controls */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/50 text-white border border-white/20 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Mock Center Display */}
                  <div className="relative z-10 text-center space-y-1">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold text-base tracking-wide drop-shadow-sm">
                      {project.title.split("—")[0]}
                    </h4>
                  </div>

                  {/* Bottom bar inside header */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-white/80 font-mono">
                    <span>v1.0.0</span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                      Production Ready
                    </span>
                  </div>
                </div>

                {/* Project Body Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      Key Highlights:
                    </span>
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar: Live Demo & GitHub */}
              <div className="p-6 pt-0 mt-2">
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-all hover:shadow-md hover:shadow-indigo-600/20"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-14 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-slate-900/40 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-indigo-400 font-semibold text-sm">
            <GithubIcon className="w-5 h-5" />
            <span>More Projects &amp; Open Source Experiments</span>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            I actively build and experiment with new libraries, UI interactions, and API patterns on GitHub. Check out my repositories for code samples, algorithms, and experiments.
          </p>
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs border border-slate-700 transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit My GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
