"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Download,
  ArrowRight,
  Mail,
  Sparkles,
  CheckCircle2,
  Code2,
  Layers,
  Terminal,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const { personalInfo, heroStats } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = [
    { name: "React 19", color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30" },
    { name: "Next.js 15", color: "text-white border-slate-700 bg-slate-900/60" },
    { name: "TypeScript", color: "text-blue-400 border-blue-500/30 bg-blue-950/30" },
    { name: "JavaScript", color: "text-yellow-400 border-yellow-500/30 bg-yellow-950/30" },
    { name: "Node.js", color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30" },
    { name: "Express.js", color: "text-gray-300 border-gray-600 bg-gray-900/40" },
    { name: "MongoDB", color: "text-green-400 border-green-500/30 bg-green-950/30" },
    { name: "Tailwind CSS", color: "text-sky-400 border-sky-500/30 bg-sky-950/30" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Greeting, Headline, Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personalInfo.badge}
              </span>
            </div>

            {/* Main Greeting & Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="gradient-text-primary">
                  {personalInfo.name}
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-200 font-bold">
                  Front-End &amp; MERN Stack Developer
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                {personalInfo.shortBio}
              </p>
            </div>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`text-xs font-medium px-2.5 py-1 rounded-md border ${badge.color} backdrop-blur-sm transition-transform hover:scale-105 select-none`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons (INCLUDES THE EXPLICIT RESUME DOWNLOAD BUTTON) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* PRIMARY RESUME DOWNLOAD BUTTON */}
              <a
                href={personalInfo.resumeUrl}
                download="Alex_Rivera_Resume.pdf"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:animate-bounce" />
                <span>Download Resume</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/20 text-white font-bold ml-1">
                  PDF
                </span>
              </a>

              {/* View Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-indigo-400 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Quick Contact Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-indigo-300 text-sm font-medium transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <span className="text-indigo-400">→</span>
              </a>
            </div>

            {/* Social Links & Quick Email Copy */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-slate-400 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Connect with me:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-indigo-300 hover:border-indigo-500/40 text-xs transition-all"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="font-mono text-xs">{personalInfo.email}</span>
                      <Copy className="w-3 h-3 text-slate-500 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card (Shubham Vandara style aesthetic) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Code Editor Window */}
              <div className="relative rounded-2xl bg-[#0b0f19] border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Editor Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0f1422] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      developer.config.ts
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded">
                    TSX Active
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">01</span>
                    <span>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-cyan-300">developer</span>:{" "}
                      <span className="text-yellow-300">DeveloperProfile</span> = &#123;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">02</span>
                    <span className="pl-4">
                      name: <span className="text-emerald-400">&quot;{personalInfo.name}&quot;</span>,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">03</span>
                    <span className="pl-4">
                      role: <span className="text-emerald-400">&quot;Front-End &amp; MERN Stack Developer&quot;</span>,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">04</span>
                    <span className="pl-4">
                      level: <span className="text-emerald-400">&quot;Fresher / High-Potential Trainee&quot;</span>,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">05</span>
                    <span className="pl-4">
                      skills: [
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">06</span>
                    <span className="pl-8 text-cyan-300">
                      &quot;JavaScript&quot;, &quot;TypeScript&quot;, &quot;React.js&quot;,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">07</span>
                    <span className="pl-8 text-cyan-300">
                      &quot;Next.js&quot;, &quot;Node.js&quot;, &quot;Express&quot;, &quot;MongoDB&quot;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">08</span>
                    <span className="pl-4">
                      ],
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">09</span>
                    <span className="pl-4">
                      strengths: [
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">10</span>
                    <span className="pl-8 text-indigo-300">
                      &quot;Clean Code&quot;, &quot;Responsive UI&quot;, &quot;Fast Learning&quot;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">11</span>
                    <span className="pl-4">
                      ],
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">12</span>
                    <span className="pl-4">
                      openForWork: <span className="text-amber-400">true</span>,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">13</span>
                    <span className="pl-4">
                      hireImmediately: () =&gt; &#123;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">14</span>
                    <span className="pl-8 text-slate-400">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-emerald-400">&quot;Ready to bring 100% passion &amp; results!&quot;</span>;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">15</span>
                    <span className="pl-4">
                      &#125;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 select-none mr-4">16</span>
                    <span>&#125;;</span>
                  </div>
                </div>

                {/* Editor Bottom Status Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#0c101d] border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> UTF-8
                    </span>
                    <span className="text-slate-500">LF</span>
                  </div>
                  <a
                    href="/resume.pdf"
                    download="Alex_Rivera_Resume.pdf"
                    className="text-indigo-400 hover:text-cyan-300 flex items-center gap-1 font-semibold transition-colors"
                  >
                    <span>Download CV</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Under Hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-800/80 bg-slate-900/40 text-center transition-all hover:border-indigo-500/40 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
