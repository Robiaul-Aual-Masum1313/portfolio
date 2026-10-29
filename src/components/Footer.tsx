"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Terminal,
  Heart,
  ArrowUp,
  FileText,
  Mail,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#070a12] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0d121f] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Passionate Front-End and MERN Stack Developer ready to build high-performance web applications, scalable backends, and responsive user experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {/* <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all hover:scale-105"
              >
                <TwitterIcon className="w-4 h-4" />
              </a> */}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Me"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Fast Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#what-i-do" className="hover:text-indigo-400 transition-colors">
                  What I Do &amp; Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Get In Touch
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download="Robiaul_Aual_Masum_Resume.pdf"
                  className="text-indigo-400 hover:text-cyan-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Fresher & Hiring Status */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Employment Status
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                <span className="text-emerald-400 font-semibold">Ready to Join</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Fresher with solid MERN stack and Front-End skills. Open to Junior Frontend / Full-Stack developer positions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with Next.js &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Crafted with clean code &amp; passion
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500 text-slate-400 hover:text-white transition-all hover:-translate-y-1"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
