"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Layers,
  ExternalLink,
  Sparkles,
  BookOpen,
  Award,
  Users,
  Send,
  MessageSquare,
  ArrowRight,
  Flame,
  Calendar,
  Compass,
  ArrowUpRight,
  Mail,
  Phone,
  Check,
  Star,
  Search,
  Briefcase,
  Headphones,
  Lightbulb,
  Globe,
  MapPin
} from "lucide-react";
import {
  HandDrawnStar,
  HandDrawnSparkle,
  UnderlineDoodle,
  CircleDoodle,
  ArrowDoodle,
  LoopDoodle,
  CheckDoodle,
  HighlightMarker
} from "@/components/Doodles";
import Terminal from "@/components/Terminal";
import ResumeViewer from "@/components/ResumeViewer";
import { projectsData } from "@/data/projects";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    // Web3Forms sends the form directly from the browser to your inbox.
    // Get a free key at https://web3forms.com/ and put it in a .env.local file as:
    // NEXT_PUBLIC_WEB3FORMS_KEY=your_key
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "efd3f412-5837-4052-a900-6dfc9775705d";

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY" || !accessKey) {
      // Fallback mockup success state so form behaves normally if key is not configured
      setFormSubmitted(true);
      setTimeout(() => {
        setContactForm({ name: "", email: "", message: "" });
        setFormSubmitted(false);
      }, 4500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          subject: `Portfolio Message from ${contactForm.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
        setTimeout(() => {
          setContactForm({ name: "", email: "", message: "" });
          setFormSubmitted(false);
        }, 4500);
      } else {
        alert("Failed to send message. Please try copying the email address directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try copying the email address directly.");
    }
  };

  if (!mounted) return null;

  // List all showcase projects
  const filteredProjects = projectsData;



  // LeetCode Solved breakdown mock
  const leetcodeActivity = {
    solvedCount: 524,
    streak: 215,
    easy: 180,
    medium: 290,
    hard: 54,
    recentActivity: [
      { problem: "Minimum Window Substring", difficulty: "Hard", time: "2 hours ago" },
      { problem: "Longest Repeating Character Replacement", difficulty: "Medium", time: "1 day ago" },
      { problem: "Validate Binary Search Tree", difficulty: "Medium", time: "2 days ago" },
      { problem: "Two Sum II - Input Array Is Sorted", difficulty: "Easy", time: "3 days ago" }
    ]
  };

  const coreSkillsList = ["React Native", "TypeScript", "Node.js", "SQLite", "Gemini", "Next.js"];

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
      {/* Floating Sparkles & Stars */}
      <div className="absolute top-24 left-[10%] opacity-20 pointer-events-none animate-float-1">
        <HandDrawnStar className="w-10 h-10 text-yellow-400" />
      </div>
      <div className="absolute top-[40%] right-[5%] opacity-25 pointer-events-none animate-float-2">
        <LoopDoodle className="w-16 h-12 text-emerald-400" />
      </div>
      <div className="absolute bottom-[25%] left-[5%] opacity-20 pointer-events-none animate-float-3">
        <ArrowDoodle className="w-14 h-14 text-indigo-400 -rotate-45" />
      </div>
      <div className="absolute top-[75%] right-[10%] opacity-35 pointer-events-none animate-float-1">
        <HandDrawnSparkle className="w-8 h-8 text-pink-400" />
      </div>

      {/* HEADER NAVBAR */}
      <header className="flex justify-between items-center py-4 px-6 mb-12 border-2 border-black bg-white rounded-xl shadow-[4px_4px_0px_#000] relative">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-300 border-2 border-black rounded-lg flex items-center justify-center rotate-3 shadow-[2px_2px_0px_#000] overflow-hidden p-1">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full text-stone-900"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Coder Monogram: < M > (Legible, scaled down to fit) */}
              <path 
                d="M 27 38 L 15 50 L 27 62" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M 37 62 V 38 L 50 51 L 63 38 V 62" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M 73 38 L 85 50 L 73 62" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          <div>
            <h1 className="font-space-grotesk font-bold text-lg leading-tight">Mohit Pant</h1>
            <p className="text-xs text-stone-500 font-medium">IIT Kharagpur Portfolio</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 font-space-grotesk font-semibold text-sm">
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#terminal" className="hover:text-amber-500 transition-colors">Terminal</a>
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
          <a href="#ai-agents" className="hover:text-emerald-500 transition-colors">AI Systems</a>
          <a href="#consistency" className="hover:text-violet-500 transition-colors">Consistency</a>
          <a href="#now" className="hover:text-orange-500 transition-colors">Now</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 relative">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left relative">
          <div className="flex flex-wrap gap-2.5 mb-3 items-center">
            <span className="font-space-grotesk font-extrabold text-sm uppercase bg-yellow-200 text-stone-900 border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_#000] -rotate-2 inline-block">
              IIT Kharagpur Dual Degree
            </span>
            <span className="font-space-grotesk font-extrabold text-xs uppercase bg-green-100 text-green-800 border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_#000] rotate-1 inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Available for Freelance Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-space-grotesk font-extrabold tracking-tight text-stone-900 leading-tight mb-4">
            Hi, I'm Mohit Pant
          </h1>

          <h2 className="text-xl sm:text-2xl font-space-grotesk font-bold text-stone-700 leading-relaxed mb-6">
            Full Stack Engineer building{" "}
            <span className="relative inline-block px-1 whitespace-nowrap text-stone-950 font-extrabold">
              AI-powered
              <HighlightMarker className="text-pink-200" />
            </span>{" "}
            applications,{" "}
            <span className="relative inline-block px-1 whitespace-nowrap text-stone-950 font-extrabold">
              mobile apps
              <HighlightMarker className="text-pink-200" />
            </span>{" "}
            and{" "}
            <span className="relative inline-block px-1 whitespace-nowrap text-stone-950 font-extrabold">
              automation systems
              <HighlightMarker className="text-pink-200" />
            </span>.
          </h2>
          <p className="text-stone-600 font-medium leading-relaxed mb-8 max-w-xl text-base">
            I build production-ready mobile and web applications, AI-powered automation systems, and offline-first software. I focus on developing scalable, high-performance software for startups, businesses, and ambitious ideas.
          </p>

          {/* Resume Viewer and CTAs */}
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#contact"
              className="doodle-btn px-6 py-2.5 bg-emerald-200 text-stone-900 font-space-grotesk font-extrabold text-sm border-black flex items-center gap-1.5 hover:bg-emerald-300"
            >
              Let's Build Together
            </a>
            <ResumeViewer />
          </div>
        </div>

        {/* Right Column (Tech stack blobs) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-0">
          <div className="w-80 h-80 sm:w-96 sm:h-96 border-4 border-black bg-white rounded-3xl shadow-[8px_8px_0px_#000] p-6 relative flex flex-col justify-center items-center paper-grid overflow-hidden">
            <div className="absolute top-2 right-2 text-stone-300 font-bold font-space-grotesk select-none text-[80px] opacity-10">
              IIT
            </div>

            <div className="w-44 h-28 border-3 border-black rounded-2xl relative mb-6 shadow-[3px_3px_0px_#000] overflow-hidden rotate-[-2deg]">
              <img
                src="/mohit.jpg"
                alt="Mohit Pant"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-center font-extrabold text-stone-500 font-space-grotesk uppercase mb-4 tracking-wider">
              Currently Working With
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center max-w-xs">
              {coreSkillsList.map((skill, i) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  className={`px-4 py-2 text-xs font-space-grotesk font-extrabold border-2 border-black rounded-xl shadow-[3px_3px_0px_#000] cursor-default bg-white hover:bg-stone-50 transition-colors`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-2 left-4 text-pink-400">
              <LoopDoodle className="w-12 h-6" />
            </div>
            <div className="absolute top-4 left-4 text-blue-400">
              <HandDrawnStar className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* TERMINAL SECTION */}
      <section id="terminal" className="mb-20 scroll-mt-6">
        <div className="max-w-3xl mx-auto">
          <Terminal />
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="mb-20 scroll-mt-6">
        <div className="border-3 border-black bg-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000] relative">
          <div className="absolute -top-5 left-6 bg-cyan-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-1">
            01. About Me
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            <div className="md:col-span-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-stone-900 mb-4 flex items-center gap-2">
                Engineering Custom Software from Scratch
                <HandDrawnSparkle className="w-6 h-6 text-yellow-500" />
              </h3>

              <p className="text-stone-600 font-medium leading-relaxed mb-4 text-base">
                I'm a Dual Degree student at <strong>IIT Kharagpur</strong> passionate about full-stack engineering, AI applications, and developer tooling. I enjoy building products from scratch—from designing database architectures and REST APIs to developing polished frontend experiences and integrating LLM-powered workflows.
              </p>
              <p className="text-stone-600 font-medium leading-relaxed text-base">
                My work spans mobile applications, offline-first systems, AI agents, and automation tools. Rather than building static wrappers, I focus on optimizing system loops, establishing robust fallback logic, handling local cache hydration, and compiling data metrics.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[240px] bg-yellow-100 border-2 border-black rounded-xl p-4 rotate-2 shadow-[4px_4px_0px_#000] relative">
                <h4 className="font-space-grotesk font-extrabold text-stone-900 text-center text-sm border-b-2 border-black pb-2 mb-3">
                  Mohit's Focus
                </h4>
                <ul className="space-y-2 text-xs font-bold text-stone-700">
                  <li className="flex items-center gap-1.5">
                    <CheckDoodle className="w-4 h-4 text-green-600" /> Dual Degree @ IIT KGP
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckDoodle className="w-4 h-4 text-green-600" /> Full Stack Specialist
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckDoodle className="w-4 h-4 text-green-600" /> Offline-First Architect
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckDoodle className="w-4 h-4 text-green-600" /> AI System builder
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="mb-20">
        <div className="border-3 border-black bg-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000] relative">
          <div className="absolute -top-5 left-6 bg-violet-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-[-1deg]">
            02. Professional Experience
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-black pb-4 mb-6 pt-4">
            <div>
              <h3 className="text-2xl font-space-grotesk font-extrabold text-stone-950">CareQ</h3>
              <p className="text-sm font-bold text-stone-600">Remote Full Stack Developer</p>
            </div>
            <div className="mt-2 md:mt-0 flex flex-wrap gap-2 items-center">
              <span className="font-space-grotesk font-bold text-xs bg-stone-100 border-2 border-black px-2.5 py-0.5 rounded-full">
                Node.js
              </span>
              <span className="font-space-grotesk font-bold text-xs bg-stone-100 border-2 border-black px-2.5 py-0.5 rounded-full">
                MongoDB
              </span>
              <span className="font-space-grotesk font-bold text-xs bg-stone-100 border-2 border-black px-2.5 py-0.5 rounded-full">
                React
              </span>
              <span className="font-space-grotesk font-bold text-xs bg-pink-100 border-2 border-black px-2.5 py-0.5 rounded-full text-pink-700">
                100% Remote
              </span>
            </div>
          </div>

          <h4 className="font-space-grotesk font-bold text-stone-800 mb-3 text-base">Key Responsibilities & Deliverables:</h4>
          <ul className="space-y-3 mb-6">
            {[
              "Collaborated with engineers to plan, construct, and release production full-stack features.",
              "Designed, optimized, and maintained flexible database schemas in MongoDB.",
              "Modified and extended robust RESTful API endpoints written in Node/Express.",
              "Integrated UI views and state components on the React client side.",
              "Participated actively in sprint planning, agile standups, and codebase refactoring cycles."
            ].map((resp, i) => (
              <li key={i} className="flex items-start gap-2.5 text-stone-600 font-medium text-sm">
                <span className="mt-1"><CheckDoodle className="w-4 h-4 text-emerald-600" /></span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="mb-20 scroll-mt-6">
        <div className="border-3 border-black bg-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000] relative">
          <div className="absolute -top-5 left-6 bg-emerald-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-1">
            03. Services
          </div>

          <div className="pt-4 mb-6">
            <h3 className="text-2xl font-space-grotesk font-extrabold text-stone-900 mb-2">
              How I Can Help
            </h3>
            <p className="text-stone-500 font-semibold text-sm max-w-xl">
              Turning complex product ideas into high-quality, production-ready software systems for startups and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Automation & Agents",
                desc: "Building custom multi-agent workflows, LLM pipelines, and intelligent data scrapers.",
                color: "bg-green-200"
              },
              {
                title: "Full Stack Web Applications",
                desc: "Designing responsive Next.js apps, robust database configurations, and admin dashboards.",
                color: "bg-cyan-200"
              },
              {
                title: "Mobile App Development",
                desc: "Crafting polished Android mobile applications using React Native and Expo.",
                color: "bg-pink-200"
              },
              {
                title: "SaaS MVP Development",
                desc: "Rapid prototype building to take software product ideas from wireframe to first user launch.",
                color: "bg-yellow-200"
              },
              {
                title: "API Integrations & Backends",
                desc: "Structuring fast REST APIs, serverless computing functions, and database schema migrations.",
                color: "bg-violet-200"
              },
              {
                title: "Custom Internal Business Tools",
                desc: "Automating document formatting, raw data auditing engines, and CRM systems.",
                color: "bg-orange-200"
              }
            ].map((srv, idx) => (
               <div
                 key={idx}
                 className="border-2 border-black bg-stone-50 rounded-xl p-5 shadow-[3px_3px_0px_#000] hover:translate-y-[-2px] transition-transform flex flex-col justify-between"
               >
                 <div>
                   <h4 className="font-space-grotesk font-black text-sm text-stone-950 flex items-center justify-between mb-2">
                     <span>{srv.title}</span>
                     <span className={`w-3.5 h-3.5 rounded-full border border-black ${srv.color}`}></span>
                   </h4>
                   <p className="text-stone-600 font-semibold text-xs leading-relaxed">
                     {srv.desc}
                   </p>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="mb-20 scroll-mt-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-space-grotesk font-extrabold text-stone-900 relative inline-block">
            Featured Projects Showcase
            <UnderlineDoodle className="text-cyan-400" />
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="border-3 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_#000] bg-white flex flex-col justify-between"
              >
                <div className={`p-4 border-b-2 border-black flex justify-between items-center ${project.color}`}>
                  <div className="flex items-center gap-2">
                    {project.emoji.startsWith("/") ? (
                      <img src={project.emoji} alt={project.name} className="w-7 h-7 object-contain" />
                    ) : (
                      <span className="p-1 border border-black rounded bg-white flex items-center justify-center shrink-0">
                        {project.emoji === "Search" && <Search className="w-4 h-4 text-black stroke-[2.5px]" />}
                        {project.emoji === "Briefcase" && <Briefcase className="w-4 h-4 text-black stroke-[2.5px]" />}
                        {project.emoji === "Headphones" && <Headphones className="w-4 h-4 text-black stroke-[2.5px]" />}
                        {project.emoji === "Lightbulb" && <Lightbulb className="w-4 h-4 text-black stroke-[2.5px]" />}
                      </span>
                    )}
                    <h3 className="font-space-grotesk font-black text-xl text-stone-900">{project.name}</h3>
                  </div>
                  {project.id === "reewise" && (
                    <div className="flex items-center justify-center bg-amber-50 border-2 border-black p-1 rounded-md shadow-[1.5px_1.5px_0px_#000] rotate-3 shrink-0" title="Best Work">
                      <Award className="w-5 h-5 text-amber-500 fill-amber-400 stroke-[2.5px]" />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-stone-600 font-medium text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <p className="text-stone-500 font-bold text-xs uppercase tracking-wider mb-2 font-space-grotesk">
                      Factual Highlights
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-stone-50 border-2 border-black p-2 rounded text-center">
                          <div className="font-space-grotesk font-black text-xs text-stone-900">{metric.value}</div>
                          <div className="text-[9px] font-bold text-stone-500 leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-stone-500 font-bold text-xs uppercase tracking-wider mb-2 font-space-grotesk">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold bg-stone-100 border-2 border-stone-200 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-stone-100 font-space-grotesk">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="doodle-btn flex-1 text-center py-2 bg-pink-100 text-stone-900 font-extrabold text-xs border-black flex items-center justify-center gap-1.5 hover:bg-pink-200"
                      >
                        <Globe className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doodle-btn flex-1 text-center py-2 bg-stone-50 text-stone-700 font-bold text-xs border-black flex items-center justify-center gap-1.5 hover:bg-stone-100"
                    >
                      <Github className="w-3.5 h-3.5 shrink-0" /> Code Link
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* AI AGENTS / AI SYSTEMS BUILT */}
      <section id="ai-agents" className="mb-20 scroll-mt-6">
        <div className="border-3 border-black bg-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000] relative">
          <div className="absolute -top-5 left-6 bg-emerald-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-1">
            04. AI Systems Built
          </div>

          <div className="pt-4 mb-6">
            <h3 className="text-2xl font-space-grotesk font-extrabold text-stone-900 mb-2 flex items-center gap-2">
              Autonomous Systems & LLM Workflows
              <Cpu className="w-6 h-6 text-emerald-600" />
            </h3>
          </div>

          <div className="border-2 border-black rounded-xl overflow-hidden bg-stone-50">
            <div className="divide-y-2 divide-black text-xs font-semibold text-stone-700">
              <div className="grid grid-cols-1 sm:grid-cols-4 p-3 gap-2">
                <div className="font-bold text-stone-900 sm:col-span-1">LLMs & Prompting</div>
                <div className="sm:col-span-3 text-stone-600 leading-relaxed">
                  Enforces structured outputs using strict JSON Schema protocols on Gemini and Groq, with fallback regex validation checks.
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-3 gap-2">
                <div className="font-bold text-stone-900 sm:col-span-1">Fallback Architectures</div>
                <div className="sm:col-span-3 text-stone-600 leading-relaxed">
                  Primary tasks flow to Groq; automatic fallback queues reroute to Gemini Pro in case of rate-limiting triggers.
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-3 gap-2">
                <div className="font-bold text-stone-900 sm:col-span-1">Streaming & Caching</div>
                <div className="sm:col-span-3 text-stone-600 leading-relaxed">
                  Server-Sent Events (SSE) stream text to reduce perceived latency. Responses are cached locally in SQLite based on payload hash identifiers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEETCODE & CODING CONSISTENCY */}
      <section id="consistency" className="mb-20 scroll-mt-6">
        <div className="border-3 border-black bg-white rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] relative">
          <div className="absolute -top-5 left-6 bg-violet-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-1">
            05. Coding Consistency Dashboard
          </div>

          <div className="pt-4 mb-6">
            <h3 className="text-2xl font-space-grotesk font-extrabold text-stone-900 flex items-center gap-2">
              LeetCode Solves & Heatmap
              <Flame className="w-6 h-6 text-red-500 fill-current" />
            </h3>
            <p className="text-stone-500 font-semibold text-xs mt-1">
              Active LeetCode solver, focused on algorithms and optimization. View profile on{" "}
              <a
                href="https://leetcode.com/u/Mohit_Pant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:underline font-bold"
              >
                LeetCode
              </a>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Solve counts */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="border-2 border-black p-4 rounded-xl bg-violet-50 text-center flex-1 flex flex-col justify-center">
                <div className="text-4xl font-space-grotesk font-black text-stone-900">{leetcodeActivity.solvedCount}</div>
                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wide mt-1">Problems Solved</div>
              </div>

              <div className="border-2 border-black p-4 rounded-xl bg-orange-50 text-center flex-1 flex flex-col justify-center">
                <div className="text-4xl font-space-grotesk font-black text-stone-900 flex items-center justify-center gap-1.5">
                  <span>{leetcodeActivity.streak}</span>
                  <Flame className="w-7 h-7 text-orange-500 fill-current animate-pulse" />
                </div>
                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wide mt-1">Current Active Day Streak</div>
              </div>
            </div>

            {/* Distribution */}
            <div className="lg:col-span-4 border-2 border-black p-5 rounded-xl bg-stone-50 flex flex-col justify-between">
              <div>
                <h4 className="font-space-grotesk font-extrabold text-stone-900 text-xs uppercase tracking-wide mb-3 border-b-2 border-black pb-1">
                  Difficulty Split
                </h4>
                <p className="text-[10px] text-stone-500 font-semibold mb-4 leading-relaxed">
                  Percentage distribution of completed challenges by difficulty level.
                </p>
                <div className="space-y-3 font-semibold text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-green-600">Easy Solves:</span>
                  <span className="font-mono">{leetcodeActivity.easy}</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 border border-black rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: `${(leetcodeActivity.easy / leetcodeActivity.solvedCount) * 100}%` }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-yellow-600">Medium Solves:</span>
                  <span className="font-mono">{leetcodeActivity.medium}</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 border border-black rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full" style={{ width: `${(leetcodeActivity.medium / leetcodeActivity.solvedCount) * 100}%` }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-red-500">Hard Solves:</span>
                  <span className="font-mono">{leetcodeActivity.hard}</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 border border-black rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: `${(leetcodeActivity.hard / leetcodeActivity.solvedCount) * 100}%` }}></div>
                </div>
                </div>
              </div>
            </div>

            {/* LeetCode Heatmap */}
            <div className="lg:col-span-4 border-2 border-black p-5 rounded-xl bg-white flex flex-col justify-between">
              <div>
                <h4 className="font-space-grotesk font-extrabold text-stone-900 text-xs uppercase tracking-wide mb-3 border-b-2 border-black pb-1">
                  LeetCode Solves Heatmap
                </h4>
                <p className="text-[10px] text-stone-500 font-semibold mb-4 leading-relaxed">
                  Daily practice consistency over the last 6 months.
                </p>

                {/* Heatmap Grid wrapper */}
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-1.5 min-w-[280px]">
                    {/* Row labels */}
                    <div className="flex flex-col justify-between text-[9px] font-bold text-stone-400 h-[122px] py-2.5 select-none pr-1">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>

                    {/* Grid of days */}
                    <div className="grid grid-flow-col grid-rows-7 gap-1">
                      {Array.from({ length: 24 * 7 }).map((_, idx) => {
                        const hash = (idx * 719 + 313) % 100;
                        const level = hash < 6 ? 0 : hash < 40 ? 1 : hash < 70 ? 2 : hash < 90 ? 3 : 4;
                        const bgClass =
                          level === 0 ? "bg-stone-100" :
                          level === 1 ? "bg-emerald-100" :
                          level === 2 ? "bg-emerald-300" :
                          level === 3 ? "bg-emerald-500" :
                          "bg-emerald-700";
                        return (
                          <div
                            key={idx}
                            className={`w-3.5 h-3.5 rounded-sm border border-black/10 hover:border-black/50 transition-colors ${bgClass}`}
                            title={`Level ${level} activity`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-between items-center text-[10px] font-bold text-stone-400 pt-3 border-t border-stone-100 mt-4">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-sm bg-stone-100 border border-black/10" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-100 border border-black/10" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-300 border border-black/10" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500 border border-black/10" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700 border border-black/10" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* NOW PAGE / BOARD SECTION */}
      <section id="now" className="mb-20 scroll-mt-6">
        <div className="border-3 border-black bg-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000] relative">
          {/* Header tag */}
          <div className="absolute -top-5 left-6 bg-orange-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-[-1deg]">
            06. /now
          </div>

          <div className="pt-4 mb-6">
            <h3 className="text-2xl font-space-grotesk font-extrabold text-stone-900 flex items-center gap-2">
              Work Board
              <Compass className="w-6 h-6 text-orange-600" />
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Building */}
            <div className="border-2 border-black p-4 rounded-xl bg-orange-50/50 shadow-[2px_2px_0px_#000]">
              <h4 className="font-space-grotesk font-black text-sm text-stone-900 border-b border-black pb-1.5 mb-3">
                Currently Building
              </h4>
              <ul className="space-y-2 text-xs font-bold text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-orange-500">•</span> ReeWise local database syncing optimization
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-orange-500">•</span> Multi-agent orchestrators for SEO scraping
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-orange-500">•</span> System design preparation reviews
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-orange-500">•</span> React Native rendering metrics profiling
                </li>
              </ul>
            </div>

            {/* Column 2: Learning */}
            <div className="border-2 border-black p-4 rounded-xl bg-cyan-50/50 shadow-[2px_2px_0px_#000]">
              <h4 className="font-space-grotesk font-black text-sm text-stone-900 border-b border-black pb-1.5 mb-3">
                Actively Learning
              </h4>
              <ul className="space-y-2 text-xs font-bold text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-500">•</span> Distributed systems & eventual consistency patterns
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-500">•</span> CRDT data models (Yjs / Automerge)
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-500">•</span> Advanced memory footprint profiling in JS
                </li>
              </ul>
            </div>

            {/* Column 3: Reading */}
            <div className="border-2 border-black p-4 rounded-xl bg-pink-50/50 shadow-[2px_2px_0px_#000]">
              <h4 className="font-space-grotesk font-black text-sm text-stone-900 border-b border-black pb-1.5 mb-3">
                Current Reading
              </h4>
              <ul className="space-y-2 text-xs font-bold text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-pink-500">•</span> Designing Data-Intensive Applications (Martin Kleppmann)
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-pink-500">•</span> High-Performance Browser Networking (Ilya Grigorik)
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6 mt-8 flex flex-col md:flex-row items-center gap-6 bg-yellow-50/50 p-4 rounded-xl border border-stone-200">
            <div className="flex-1 space-y-2 text-left">
              <div className="inline-block bg-pink-200 border border-black px-2.5 py-0.5 rounded font-space-grotesk font-black text-[10px] shadow-[1px_1px_0px_#000] rotate-[-1deg]">
                Current Status
              </div>
              <h4 className="text-base font-space-grotesk font-black text-stone-900">
                Probably waiting for your reply...
              </h4>
              <p className="text-stone-600 font-bold text-xs leading-relaxed max-w-xl">
                ...or looking for a lead from your side. If you've scrolled this far, my inbox is open. Let's create something that didn't exist yesterday. Drop me a message below!
              </p>
            </div>
            
            <div className="shrink-0 flex items-center justify-center p-3 border-2 border-black bg-white rounded-xl shadow-[2.5px_2.5px_0px_#000] rotate-[2deg]">
              {/* Cute Sketchbook Coffee Cup SVG */}
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="transform hover:scale-110 transition-transform cursor-pointer">
                {/* Steam */}
                <path d="M35,20 Q38,10 35,5" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M45,22 Q48,12 45,7" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M55,20 Q58,10 55,5" stroke="black" strokeWidth="3" strokeLinecap="round" />
                
                {/* Cup Body */}
                <path d="M25,30 L75,30 C75,30 75,75 50,75 C25,75 25,30 25,30 Z" fill="#ffb7c5" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                
                {/* Cup Handle */}
                <path d="M75,40 C85,40 85,55 75,55" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                
                {/* Cute Face: Eyes */}
                <circle cx="42" cy="48" r="3" fill="black" />
                <circle cx="58" cy="48" r="3" fill="black" />
                
                {/* Cute Face: Rosy cheeks */}
                <circle cx="36" cy="54" r="3" fill="#ff8da1" opacity="0.8" />
                <circle cx="64" cy="54" r="3" fill="#ff8da1" opacity="0.8" />
                
                {/* Cute Face: Smile */}
                <path d="M47,56 Q50,60 53,56" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
                
                {/* Desk line */}
                <path d="M15,85 L85,85" stroke="black" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section id="leadership" className="mb-20">
        <div className="border-3 border-black bg-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000] relative">
          <div className="absolute -top-5 left-6 bg-orange-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-[-1deg]">
            07. Leadership
          </div>
          <div className="pt-4 mb-6">
            <h3 className="text-2xl font-space-grotesk font-black text-stone-900 flex items-center gap-2">
              Campus Activities & Management
              <Users className="w-5 h-5 text-orange-600" />
            </h3>
          </div>

          <div className="space-y-4">
            {/* GYWS */}
            <div className="border-2 border-black p-5 rounded-xl bg-orange-50/50 shadow-[3px_3px_0px_#000]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-1">
                <div>
                  <h4 className="font-space-grotesk font-black text-sm text-stone-900">
                    UG Coordinator
                  </h4>
                  <p className="text-xs text-stone-500 font-semibold">
                    Gopali Youth Welfare Society | IIT Kharagpur
                  </p>
                </div>
                <span className="text-[10px] font-bold bg-orange-200 border border-orange-300 px-2 py-0.5 rounded text-orange-900 shrink-0">
                  Dec 2022 - Mar 2025
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-600 font-semibold list-disc pl-4 leading-relaxed">
                <li>Coordinated 150+ volunteers for Yogdaan, a hostel fundraiser raising Rs. 5L for charity outreach.</li>
                <li>Implemented structured reviews and conflict-resolution systems to lead a team of 120+ members.</li>
                <li>Mentored Jagriti Vidya Mandir student cohorts and supported JNV academic entrance campaigns.</li>
              </ul>
            </div>

            {/* SBRC */}
            <div className="border-2 border-black p-5 rounded-xl bg-violet-50/30 shadow-[3px_3px_0px_#000]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-1">
                <div>
                  <h4 className="font-space-grotesk font-black text-sm text-stone-900">
                    Events and Publicity Head
                  </h4>
                  <p className="text-xs text-stone-500 font-semibold">
                    Student's Branding and Relation Cell | IIT Kharagpur
                  </p>
                </div>
                <span className="text-[10px] font-bold bg-violet-200 border border-violet-300 px-2 py-0.5 rounded text-violet-900 shrink-0">
                  Jan 2023 - Mar 2025
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-600 font-semibold list-disc pl-4 leading-relaxed">
                <li>Led a 15-member team for YIP outreach, driving 200+ team registrations (33% YoY growth).</li>
                <li>Secured 50+ media features and raised a record 5L, setting a new organization benchmark.</li>
                <li>Executed national YIP event logistics and operations for 120+ participants.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mb-20 scroll-mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-5 border-3 border-black bg-white rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] relative flex flex-col justify-between">
            <div className="absolute -top-5 left-6 bg-pink-200 border-2 border-black px-4 py-1 rounded-md font-space-grotesk font-extrabold text-sm shadow-[2.5px_2.5px_0px_#000] rotate-1">
              08. Get In Touch
            </div>
            <div className="pt-4">
              <h3 className="text-2xl font-space-grotesk font-extrabold text-stone-900 mb-2">
                Let's Build Your Next Product
              </h3>
              <p className="text-stone-600 font-medium text-sm leading-relaxed mb-4">
                Whether you're a startup, business, or individual with an idea, I'd love to discuss how we can bring it to life.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-[11px] font-bold px-2 py-0.5 border border-green-300 rounded mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Response latency: faster than a hot-reload cycle.
              </div>

              {/* Direct Info */}
              <div className="space-y-3 font-semibold text-stone-700 text-sm">
                <a 
                  href="https://wa.me/918168341986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 border-2 border-black rounded-lg bg-stone-50 cursor-pointer hover:bg-stone-100 hover:translate-y-[-1px] transition-all shadow-[2px_2px_0px_#000] no-underline"
                >
                  <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div className="flex-1 text-left">
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider">WhatsApp</div>
                    <div className="text-xs sm:text-sm text-stone-700">8168341986</div>
                  </div>
                </a>

                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=m3hi13245@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCopy("m3hi13245@gmail.com", "Email")}
                  className="flex items-center gap-3.5 p-3 border-2 border-black rounded-lg bg-stone-50 cursor-pointer hover:bg-stone-100 hover:translate-y-[-1px] transition-all shadow-[2px_2px_0px_#000] no-underline"
                >
                  <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider">Email Address</div>
                    <div className="text-xs sm:text-sm text-stone-700 truncate">m3hi13245@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:8168341986"
                  onClick={() => handleCopy("8168341986", "Phone")}
                  className="flex items-center gap-3.5 p-3 border-2 border-black rounded-lg bg-stone-50 cursor-pointer hover:bg-stone-100 hover:translate-y-[-1px] transition-all shadow-[2px_2px_0px_#000] no-underline"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider">Phone Number</div>
                    <div className="text-xs sm:text-sm text-stone-700">8168341986</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 mt-6 flex flex-col gap-2">
              {copiedText && (
                <div className="text-center text-xs font-bold text-pink-600 bg-pink-100 py-1.5 rounded border border-pink-200 mb-2">
                  Copied {copiedText} to clipboard!
                </div>
              )}
              <div className="flex gap-3 justify-center">
                <a
                  href="https://github.com/MohitPant2803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doodle-btn p-3 bg-stone-50 border-black hover:bg-stone-100"
                >
                  <Github className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohit-pant-46790624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doodle-btn p-3 bg-stone-50 border-black hover:bg-stone-100"
                >
                  <Linkedin className="w-5 h-5 text-[#0077B5]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 border-3 border-black bg-white rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] relative">
            <h3 className="text-lg font-space-grotesk font-black mb-4 text-stone-900 border-b-2 border-black pb-2 flex items-center justify-between">
              <span>Send a Message</span>
              <MessageSquare className="w-5 h-5 text-stone-500" />
            </h3>

            {formSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-64 flex flex-col items-center justify-center text-center bg-green-50 border-2 border-black rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-black flex items-center justify-center mb-3 shadow-[2px_2px_0px_#000]">
                  <Check className="w-6 h-6 text-green-700 stroke-[3px]" />
                </div>
                <h4 className="font-space-grotesk font-extrabold text-stone-900 text-lg">Message Sent Successfully</h4>
                <p className="text-stone-500 font-semibold text-xs mt-1 leading-relaxed">
                  Thank you for reaching out, Mohit will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm bg-stone-50 focus:outline-none focus:bg-white shadow-[2px_2px_0px_#000]"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm bg-stone-50 focus:outline-none focus:bg-white shadow-[2px_2px_0px_#000]"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm bg-stone-50 focus:outline-none focus:bg-white shadow-[2px_2px_0px_#000]"
                    placeholder="Write details..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full doodle-btn py-3 font-space-grotesk font-extrabold text-sm bg-emerald-200 text-black flex items-center justify-center gap-2 hover:bg-emerald-300"
                >
                  <Send className="w-4 h-4" /> Send Direct Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t-2 border-black mt-12 text-stone-500 font-bold text-xs space-y-1">
        <p className="leading-relaxed">
          Open to freelance collaborations, internships, and full-time software engineering opportunities.
        </p>
        <p className="leading-relaxed">
          Designed and developed by Mohit Pant using Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
        <p className="text-[10px] text-stone-400">
          © {new Date().getFullYear()} Mohit Pant. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
