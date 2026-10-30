"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Download,
  ArrowRight,
  Mail,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import Image from "next/image";

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const { personalInfo, heroStats } = portfolioData;

  const [imgSrc, setImgSrc] = useState(personalInfo.avatarUrl || "/profile.png");

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
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-200 font-bold">
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
                download="Robiaul_Aual_Masum_Resume.pdf"
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
                {/* <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a> */}
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

          {/* Right Column: Clean Profile Picture Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative ambient gradient glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/35 to-cyan-500/30 blur-2xl opacity-80 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Main Picture Frame */}
              <div className="relative rounded-3xl bg-[#0b0f19] p-3 sm:p-3.5 border border-slate-800/90 shadow-2xl backdrop-blur-xl group-hover:border-indigo-500/50 transition-all duration-300">
                <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 aspect-[4/4.7]">
                  {/* User's Uploaded Profile Picture */}
                  <Image
                    width={500}
                    height={590}
                    src={imgSrc}
                    alt={personalInfo.name}
                    priority
                    onError={() => setImgSrc("/avatar-fallback.svg")}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Vignette at the Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 via-[#090d16]/20 to-transparent pointer-events-none" />

                  {/* Clean Bottom Overlay Info Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{personalInfo.name}</span>
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">
                        Front-End &amp; MERN Stack Developer
                      </p>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available
                    </span>
                  </div>
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
