"use client";

import React, { useState } from "react";
import { Download, FileText, X, Printer, Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="doodle-btn px-6 py-2.5 bg-violet-100 text-stone-900 font-space-grotesk font-extrabold text-sm border-black flex items-center gap-1.5 hover:bg-violet-200"
      >
        <FileText className="w-4 h-4" /> View Resume Preview
      </button>
      
      <a
        href="/Mohit_Pant_Resume.pdf"
        download
        className="doodle-btn px-6 py-2.5 bg-yellow-100 text-stone-900 font-space-grotesk font-extrabold text-sm border-black flex items-center gap-1.5 hover:bg-yellow-200"
      >
        <Download className="w-4 h-4" /> Download PDF Resume
      </a>

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000] w-full max-w-3xl flex flex-col max-h-[90vh] overflow-hidden rotate-[-0.5deg]">
            {/* Modal Header */}
            <div className="bg-stone-50 border-b-2 border-black p-4 flex justify-between items-center">
              <span className="font-space-grotesk font-black text-sm text-stone-800 flex items-center gap-1.5">
                Mohit_Pant_Resume_Preview.pdf
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 hover:bg-stone-200 border border-transparent hover:border-black rounded transition-colors"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4 text-stone-600" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-red-50 border border-transparent hover:border-red-400 text-red-500 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document body (Preview of Mohit's Resume) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 font-serif text-stone-900 text-left bg-stone-50/50 leading-normal selection:bg-yellow-100">
              <div className="bg-white p-6 sm:p-10 border-2 border-stone-200 shadow-sm max-w-2xl mx-auto space-y-6">
                {/* Header */}
                <div className="text-center border-b-2 border-stone-900 pb-4">
                  <h1 className="text-3xl font-bold tracking-wide">MOHIT PANT</h1>
                  <p className="text-sm font-semibold tracking-wide font-sans text-stone-600 mt-1">
                    Full-Stack Engineer | AI Agent Developer | Dual Degree @ IIT Kharagpur
                  </p>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-sans text-stone-500 mt-2">
                    <a href="mailto:m3hi13245@gmail.com" className="flex items-center gap-1 hover:underline">
                      <Mail className="w-3 h-3" /> m3hi13245@gmail.com
                    </a>
                    <a href="tel:8168341986" className="flex items-center gap-1 hover:underline">
                      <Phone className="w-3 h-3" /> 8168341986
                    </a>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Kharagpur, WB
                    </span>
                  </div>
                  <div className="flex justify-center gap-4 text-xs font-sans text-stone-600 mt-2">
                    <a href="https://github.com/MohitPant2803" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                      <Github className="w-3.5 h-3.5" /> MohitPant2803
                    </a>
                    <a href="https://www.linkedin.com/in/mohit-pant-46790624b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                      <Linkedin className="w-3.5 h-3.5" /> mohit-pant-46790624b
                    </a>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-base font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-800 mb-2">
                    Education
                  </h2>
                  <div className="flex justify-between items-start text-xs font-sans">
                    <div>
                      <span className="font-bold text-stone-900">Indian Institute of Technology (IIT), Kharagpur</span>
                      <p className="text-stone-500 italic mt-0.5">Dual Degree (Integrated Bachelor + Master of Technology)</p>
                    </div>
                    <span className="text-stone-500 font-bold shrink-0">Graduation 2027</span>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-base font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-800 mb-3">
                    Professional Experience
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">CareQ</span>
                          <span className="text-stone-500 italic"> — Remote Full Stack Developer</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">2024</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1.5 text-stone-700 mt-1.5">
                        <li>Collaborated with engineering teams to plan, develop, and deliver full-stack features.</li>
                        <li>Designed flexible database schemas in MongoDB to optimize queries and handle data models.</li>
                        <li>Built and modified RESTful API endpoints using Node.js and Express backend frameworks.</li>
                        <li>Integrated UI views and state components on the React client side.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-base font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-800 mb-3">
                    Featured Engineering Projects
                  </h2>
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <span className="font-bold text-stone-900">ReeWise — Offline-First Spaced Repetition App</span>
                        <span className="text-stone-500 font-semibold italic">SQLite, React Native, Zustand</span>
                      </div>
                      <p className="text-xs text-stone-700 mt-1">
                        Built a spacing active-recall system using Expo. Designed a local SQLite synchronization ledger that merges offline changes with remote MongoDB stores using vector clocks and high-precision timestamps.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <span className="font-bold text-stone-900">CompetitorScan — Real-time AI Scraper & SSE Streamer</span>
                        <span className="text-stone-500 font-semibold italic">TypeScript, Puppeteer, Groq, SSE</span>
                      </div>
                      <p className="text-xs text-stone-700 mt-1">
                        Orchestrates concurrent headless Puppeteer nodes to monitor landing pages. Parses HTML nodes into clean markdown via Jina Reader, feeding inferences to Llama-3, streamed directly to Next.js clients via Server-Sent Events.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <span className="font-bold text-stone-900">Lead Generation Agent — Autonomous Outreach Pipeline</span>
                        <span className="text-stone-500 font-semibold italic">Python, Gemini, PageSpeed, Geoapify</span>
                      </div>
                      <p className="text-xs text-stone-700 mt-1">
                        Runs geo-targeted local business discovery, executes site performance audits via Google PageSpeed Insights, and ranks targets. Writes hyper-personalized outreach copies based on the specific core web vital failures detected.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-base font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-800 mb-2">
                    Technical Skills Summary
                  </h2>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-sans text-stone-700">
                    <p><span className="font-bold text-stone-900">Languages:</span> C++, Python, TypeScript, SQL</p>
                    <p><span className="font-bold text-stone-900">Frontend:</span> React Native, React, Next.js, Expo</p>
                    <p><span className="font-bold text-stone-900">Backend:</span> Node.js, Express, FastAPI</p>
                    <p><span className="font-bold text-stone-900">Databases:</span> MongoDB, SQLite</p>
                    <p><span className="font-bold text-stone-900">AI Stack:</span> Gemini Pro, Groq, Whisper API</p>
                    <p><span className="font-bold text-stone-900">Tools:</span> Git, GitHub, Vercel, Render</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-50 border-t-2 border-black p-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="doodle-btn px-4 py-1.5 bg-stone-100 text-stone-800 font-space-grotesk font-extrabold text-xs border-black hover:bg-stone-200"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
