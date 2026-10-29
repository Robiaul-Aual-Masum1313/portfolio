"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  User,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  FileText,
  Download,
  Layout,
  Server,
  Code2,
  Zap,
  Award,
  Calendar,
  Compass,
} from "lucide-react";

export default function About() {
  const { about, personalInfo } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-5 h-5 text-indigo-400" />,
    Server: <Server className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-purple-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="about" className="py-24 relative bg-[#0a0e18] overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Get to Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {about.headline}
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Narrative & Fresher Advantage */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800/80 shadow-xl bg-slate-900/40">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Passionate Fresher with Production-Ready Mindset
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono">
                    Zero legacy baggage • 100% hunger to build &amp; grow
                  </p>
                </div>
              </div>

              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="font-semibold text-slate-400">Experience:</span>
                  <span className="text-emerald-400 font-medium">Fresher (Project-Tested)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="font-semibold text-slate-400">Availability:</span>
                  <span className="text-cyan-400 font-medium">Immediate Joining</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="font-semibold text-slate-400">Location:</span>
                  <span className="text-slate-300">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="font-semibold text-slate-400">Email:</span>
                  <span className="text-indigo-400 truncate">{personalInfo.email}</span>
                </div>
              </div>

              {/* Action Button inside About */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Robiaul_Aual_Masum_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all hover:shadow-indigo-500/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume</span>
                </a>
                <a
                  href="#what-i-do"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
                >
                  <span>Explore Technical Skills</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Education Timeline Cards */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Education &amp; Specialized Training</span>
              </h4>

              <div className="space-y-3">
                {about.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 hover:border-slate-700 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-semibold text-slate-100 text-sm sm:text-base">
                        {edu.degree}
                      </h5>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strengths / Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>What Sets Me Apart as a Fresher</span>
            </h4>

            {about.strengths.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-slate-800/90 bg-slate-900/40 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-inner">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-base font-bold text-slate-100">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quote banner */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-cyan-950/30 border border-indigo-500/20 text-slate-300 text-xs sm:text-sm italic leading-relaxed">
              &quot;Being a fresher is my greatest advantage: I bring modern best practices, zero outdated habits, and an unstoppable drive to solve problems and deliver clean, high-impact results.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

