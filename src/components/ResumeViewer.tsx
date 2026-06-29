"use client";

import React, { useState } from "react";
import { Download, FileText, X, Mail, Phone, MapPin } from "lucide-react";

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

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
                <div className="text-center border-b-2 border-stone-900 pb-3">
                  <h1 className="text-3xl font-bold tracking-wide text-stone-900">MOHIT PANT</h1>
                  <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-xs font-sans text-stone-600 mt-1.5">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mohi13245@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline font-medium"
                    >
                      mohi13245@gmail.com
                    </a>
                    <span className="text-stone-400">·</span>
                    <a href="tel:8168341986" className="hover:underline font-medium">
                      +91-8168341986
                    </a>
                    <span className="text-stone-400">·</span>
                    <a href="https://www.linkedin.com/in/mohit-pant-46790624b/" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                      LinkedIn
                    </a>
                    <span className="text-stone-400">·</span>
                    <a href="https://github.com/MohitPant2803" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                      GitHub
                    </a>
                    <span className="text-stone-400">·</span>
                    <a href="https://mohitpant.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                      Portfolio
                    </a>
                  </div>
                  <p className="text-xs font-semibold font-sans text-stone-500 mt-2">
                    IIT Kharagpur · Dual Degree (B.Tech + M.Tech) Mining Engineering · Expected 2027 · CGPA: 7.63 / 10
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-sm font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-900 mb-2.5">
                    EXPERIENCE
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">Full Stack Developer</span>
                          <span className="text-stone-500 italic"> — CareQ (Remote, Startup)</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">May 2026 – July 2026</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-700 mt-1.5">
                        <li>Built and shipped production-ready full-stack features in a cross-functional team using React, Node.js, Express, and MongoDB.</li>
                        <li>Integrated REST APIs end-to-end — from schema design to frontend — reducing manual steps in the onboarding pipeline.</li>
                        <li>Delivered features in short sprint cycles, directly impacting a live healthcare product used by real customers.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-sm font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-900 mb-2.5">
                    PROJECTS
                  </h2>
                  <div className="space-y-4.5">
                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">ReeWise</span>
                          <span className="text-stone-400"> (</span>
                          <a href="https://ree-wise-download-website.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Live</a>
                          <span className="text-stone-400 font-semibold"> · </span>
                          <a href="https://github.com/MohitPant2803/DSA-REVISON-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">GitHub</a>
                          <span className="text-stone-400">)</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">May 2026 – Present</span>
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans font-semibold mt-0.5">React Native · Expo · Node.js · SQLite · MongoDB · Zustand</p>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-700 mt-1">
                        <li>Published offline-first flashcard app on Google Play with 50+ users, 1,200+ cards across 9 subjects; backend deployed on Vercel.</li>
                        <li>Engineered Mutex-based FIFO write queue serializing SQLite mutations, eliminating deadlock crashes on rapid swipes.</li>
                        <li>Cut startup latency by 75% (2s to &lt;500ms) by optimizing DB seeding to version-mismatch events and batching Zustand hydration.</li>
                        <li>Split schema into cards_metadata / cards_content, cutting React Native bridge payload by 80% during swipe renders.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">CompetitorScan</span>
                          <span className="text-stone-400"> (</span>
                          <a href="https://competitor-scan-agent-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Live</a>
                          <span className="text-stone-400 font-semibold"> · </span>
                          <a href="https://github.com/MohitPant2803/Competitor-Scan-Agent-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">GitHub</a>
                          <span className="text-stone-400">)</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">June 2026</span>
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans font-semibold mt-0.5">Next.js · TypeScript · Node.js · Groq · Llama 3.3 70B · Puppeteer · SSE</p>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-700 mt-1">
                        <li>AI SaaS for competitive intelligence — parallel Promise DAG across 5 agents cut execution from ~110s to ~40s (60% reduction).</li>
                        <li>Implemented pre-truncation footer regex, achieving 100% social handle accuracy and 50% token reduction on large pages.</li>
                        <li>Isolated LLM fallback state per request via AsyncLocalStorage, preventing degradedMode bleeding across concurrent users.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">AI Interview Platform</span>
                          <span className="text-stone-400"> (</span>
                          <a href="https://ai-interview-prep-frontend-smoky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Live</a>
                          <span className="text-stone-400 font-semibold"> · </span>
                          <a href="https://github.com/MohitPant2803/Ai-Interview-Prep-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">GitHub</a>
                          <span className="text-stone-400">)</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">May 2026</span>
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans font-semibold mt-0.5">React · Vite · Node.js · MongoDB · Gemini 2.5 Flash</p>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-700 mt-1">
                        <li>Built a voice-based, CV-aware interview simulator with AI scoring, behavioral feedback, and real-time speech recognition/synthesis.</li>
                        <li>Reduced React CPU overhead by 95% by isolating AudioWaveform state, eliminating unnecessary parent re-renders during playback.</li>
                        <li>Fixed stale closures in Web Speech API via useRef + useState sync; cut MongoDB cold-start from 1.5s to &lt;80ms.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">Local Lead Generation Agent</span>
                          <span className="text-stone-400"> (</span>
                          <a href="https://leadgenerator-backend-pzyw.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Live</a>
                          <span className="text-stone-400 font-semibold"> · </span>
                          <a href="https://github.com/MohitPant2803/LeadGenerator-Backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">GitHub</a>
                          <span className="text-stone-400">)</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">June 2026</span>
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans font-semibold mt-0.5">Python · Flask · SQLite · Gemini 2.5 · Groq · BeautifulSoup · Geoapify</p>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-700 mt-1">
                        <li>Automated end-to-end lead pipeline: Integrated discovery, SEO audits, and LLM-driven outreach with automated reporting.</li>
                        <li>Built daemon-thread TCP timeout guard (safe_requests_get) preventing anti-bot tarpits from blocking the pipeline thread indefinitely.</li>
                        <li>Built resilient LLM cascade: Tiered Gemini, Groq, and templates to guarantee 100% email generation uptime during API outages.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-sm font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-900 mb-2">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-sans text-stone-700">
                    <p><span className="font-bold text-stone-900">Languages:</span> C++, Python, JavaScript, TypeScript, SQL</p>
                    <p><span className="font-bold text-stone-900">Technologies:</span> React, React Native, Next.js, Node.js, Express.js, Flask, MongoDB, SQLite</p>
                    <p><span className="font-bold text-stone-900">AI / LLMs:</span> Gemini, Groq, Llama, Prompt Engineering, Multi-Agent Systems</p>
                    <p><span className="font-bold text-stone-900">Tools:</span> Git, GitHub, Firebase, Vercel, Postman, Puppeteer</p>
                    <p><span className="font-bold text-stone-900">CS core:</span> Data Structures & Algorithms, OOP, CN, REST API Design</p>
                  </div>
                </div>

                {/* Positions of Responsibility */}
                <div>
                  <h2 className="text-sm font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-900 mb-2.5">
                    POSITIONS OF RESPONSIBILITY
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">Events & Publicity Head</span>
                          <span className="text-stone-500 italic"> — Students' Branding & Relations Cell, IIT Kharagpur</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">Jan '23 – Mar '25</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-700 mt-1.5">
                        <li>Led a 15-member team for nationwide outreach, reaching 10,000+ schools and driving 200+ team registrations (33% YoY growth).</li>
                        <li>Secured 50+ media and alumni features nationwide; raised a record ₹5 lakh in sponsorships — a new organisational benchmark.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <span className="font-bold text-stone-900">UG Coordinator</span>
                          <span className="text-stone-500 italic"> — GYWS, IIT Kharagpur</span>
                        </div>
                        <span className="text-stone-500 font-semibold italic">Dec '22 – Mar '25</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-700 mt-1.5">
                        <li>Led 120+ members at GYWS; spearheaded 150+ volunteers across 20 hostels generating ₹5L via outreach to 8,000+ rooms.</li>
                        <li>Mentored 250+ students at Jagriti Vidya Mandir; guided peers from other colleges to establish NGOs and run community events.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Honours & Activities */}
                <div>
                  <h2 className="text-sm font-bold font-sans border-b border-stone-400 pb-0.5 tracking-wider uppercase text-stone-900 mb-2">
                    HONOURS & ACTIVITIES
                  </h2>
                  <ul className="list-disc list-outside pl-4 text-xs space-y-1.5 text-stone-700 mt-1.5">
                    <li>Qualified JEE Advanced (top 5% of 180K+ candidates); solved 500+ DSA problems on LeetCode.</li>
                    <li>Gold — Intra-Hall Volleyball Tournament; completed multiple marathons and an ultramarathon for social causes.</li>
                  </ul>
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
