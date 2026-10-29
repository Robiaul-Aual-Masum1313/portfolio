"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
  Globe,
  FileText,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personalInfo, whatIDo, skillsData, projects, about } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white text-base">
              Resume Preview &amp; Download
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <a
              href="/resume.pdf"
              download="Alex_Rivera_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-slate-200 bg-[#0c101d] print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-indigo-400 font-semibold text-base">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" />
                github.com
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" />
                linkedin.com
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Passionate, self-motivated Front-End and MERN Stack Developer with comprehensive hands-on experience developing full-stack web applications using React.js, Next.js, TypeScript, Node.js, Express, and MongoDB. As a fresher, I bring strong foundations in modern web architecture, clean code principles, mobile-first responsive design, and an agile learning mindset ready to contribute effectively from day one.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1">
                  Frontend Technologies
                </span>
                <p className="text-slate-400">
                  JavaScript (ES6+), TypeScript, React 19, Next.js 15, Tailwind CSS, HTML5, CSS3, Redux Toolkit, Zustand.
                </p>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1">
                  Backend &amp; APIs
                </span>
                <p className="text-slate-400">
                  Node.js, Express.js, RESTful API Design, JWT Authentication, bcrypt, Middleware, Postman.
                </p>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1">
                  Database &amp; Tools
                </span>
                <p className="text-slate-400">
                  MongoDB, Mongoose ODM, Git, GitHub, Vercel, Netlify, VS Code, npm/pnpm.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Key Projects Built
            </h4>
            <div className="space-y-3">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100 text-xs sm:text-sm">
                      {p.title}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {p.techStack.slice(0, 4).join(" • ")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Education
            </h4>
            <div className="space-y-2">
              {about.education.map((edu, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-200 block">
                      {edu.degree}
                    </span>
                    <span className="text-slate-400">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-indigo-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Open to Junior &amp; Entry-Level roles immediately
          </span>
          <a
            href="/resume.pdf"
            download="Alex_Rivera_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-semibold shadow hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Offline Copy (.pdf)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
