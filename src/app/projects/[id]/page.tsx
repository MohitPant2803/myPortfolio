"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronRight,
  HelpCircle,
  Cpu,
  Layers,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Award,
  Star
} from "lucide-react";
import {
  HandDrawnStar,
  HandDrawnSparkle,
  UnderlineDoodle,
  LoopDoodle,
  CheckDoodle
} from "@/components/Doodles";
import { projectsData, Project } from "@/data/projects";
import { Github } from "@/components/BrandIcons";

export default function ProjectDeepDive() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const projectId = params.id as string;
    const foundProject = projectsData.find((p) => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [params.id]);

  if (!mounted) return null;

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-16 h-16 bg-red-100 border-2 border-black rounded-xl flex items-center justify-center text-red-500 text-3xl rotate-6 shadow-[3px_3px_0px_#000] mb-4">
          ⚠️
        </div>
        <h1 className="font-space-grotesk font-extrabold text-2xl mb-2 text-stone-900">Project Not Found</h1>
        <p className="text-stone-500 font-semibold text-sm max-w-sm mb-6">
          The project deep-dive you are looking for does not exist or has been relocated.
        </p>
        <Link href="/" className="doodle-btn px-6 py-2.5 bg-yellow-100 text-stone-900 font-space-grotesk font-extrabold text-sm border-black">
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Floating background elements */}
      <div className="absolute top-24 right-[10%] opacity-20 pointer-events-none animate-float-1">
        <HandDrawnStar className="w-10 h-10 text-yellow-400" />
      </div>
      <div className="absolute bottom-[40%] left-[5%] opacity-20 pointer-events-none animate-float-2">
        <LoopDoodle className="w-14 h-10 text-pink-400" />
      </div>

      {/* Back Header */}
      <div className="flex justify-start items-center mb-8">
        <Link
          href="/"
          className="doodle-btn px-4 py-2 bg-stone-50 text-stone-700 font-space-grotesk font-bold text-xs border-black flex items-center gap-1.5 hover:bg-stone-100"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Showcase
        </Link>
      </div>

      {/* Project Title Card */}
      <section className="border-3 border-black bg-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000] mb-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl bg-stone-100 border-2 border-black p-2.5 rounded-xl rotate-3 shadow-[2.5px_2.5px_0px_#000] flex items-center justify-center">
              {project.emoji.startsWith("/") ? (
                <img src={project.emoji} alt={project.name} className="w-10 h-10 object-contain" />
              ) : (
                project.emoji
              )}
            </span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-space-grotesk font-black text-stone-900 leading-tight flex flex-wrap items-center gap-2">
                <span>{project.name}</span>
                {project.id === "reewise" && (
                  <span className="inline-flex items-center justify-center bg-amber-50 border-2 border-black p-1 rounded-md shadow-[1.5px_1.5px_0px_#000] rotate-3 shrink-0" title="Best Work">
                    <Award className="w-5 h-5 text-amber-500 fill-amber-400 stroke-[2.5px]" />
                  </span>
                )}
              </h1>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider font-space-grotesk mt-0.5">
                Engineering Deep Dive
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="doodle-btn flex-1 md:flex-initial text-center px-4 py-2 bg-pink-100 text-stone-900 font-space-grotesk font-extrabold text-xs border-black flex items-center justify-center gap-1.5 hover:bg-pink-200"
              >
                <ExternalLink className="w-4 h-4" /> Visit Live Website
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="doodle-btn flex-1 md:flex-initial text-center px-4 py-2 bg-stone-50 text-stone-700 font-space-grotesk font-bold text-xs border-black flex items-center justify-center gap-1.5 hover:bg-stone-100"
            >
              <Github className="w-4 h-4" /> View Source on GitHub
            </a>
          </div>
        </div>

        <p className="text-lg text-stone-700 font-medium leading-relaxed mb-6 max-w-3xl">
          {project.fullDescription}
        </p>

        {/* Tech Stack List */}
        <div className="mb-6 pt-4 border-t border-stone-200">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 font-space-grotesk">
            Project Technology Stack
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-bold bg-stone-50 border-2 border-black rounded-lg px-3 py-1 shadow-[1.5px_1.5px_0px_#000]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS PANEL */}
      <section className="mb-8">
        <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3 font-space-grotesk text-left">
          Core Metrics & Highlights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000] text-center flex flex-col justify-center items-center rotate-[0.5deg]"
            >
              <div className="font-space-grotesk font-black text-xl text-stone-900">
                {metric.value}
              </div>
              <div className="text-[9px] font-bold text-stone-500 leading-tight mt-1 uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-3 border-black bg-white rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] mb-8">
        <h2 className="text-xl font-space-grotesk font-black text-stone-900 mb-3 flex items-center gap-2">
          The Problem
          <AlertTriangle className="w-5 h-5 text-amber-500" />
        </h2>
        <p className="text-stone-700 font-medium text-sm sm:text-base leading-relaxed">
          {project.problem}
        </p>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="border-3 border-black bg-white rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] mb-8 relative">
        <h2 className="text-xl font-space-grotesk font-black text-stone-900 mb-2 flex items-center gap-2">
          System Architecture Loop
          <Layers className="w-5 h-5 text-indigo-500" />
        </h2>
        <p className="text-stone-500 font-semibold text-xs mb-6">
          Data routing pathways and pipeline flow layout.
        </p>

        {/* Visual node blocks */}
        <div className="flex flex-col items-center gap-3 max-w-xl mx-auto py-4 bg-stone-50 border-2 border-black rounded-xl relative paper-grid">
          {project.architecture.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="w-64 bg-white border-2 border-black rounded-xl p-3 shadow-[2.5px_2.5px_0px_#000] text-center rotate-[-0.5deg]">
                <div className="text-[10px] font-extrabold text-stone-400 uppercase">Node {idx + 1}</div>
                <div className="font-space-grotesk font-extrabold text-xs text-stone-900">{step.from}</div>
              </div>

              {idx < project.architecture.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-6 bg-black border-dashed border-l-2 border-black"></div>
                  <div className="text-indigo-500 rotate-90 -mt-2">
                    <ChevronRight className="w-4 h-4 stroke-[3px]" />
                  </div>
                </div>
              )}

              {idx === project.architecture.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-6 bg-black border-dashed border-l-2 border-black"></div>
                  <div className="w-64 bg-emerald-100 border-2 border-black rounded-xl p-3 shadow-[2.5px_2.5px_0px_#000] text-center rotate-[0.5deg]">
                    <div className="text-[10px] font-extrabold text-emerald-600 uppercase">Database / Output Node</div>
                    <div className="font-space-grotesk font-extrabold text-xs text-emerald-950">{step.to}</div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ARCHITECTURAL DECISIONS & TRADE-OFFS */}
      <section className="mb-8">
        <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3 font-space-grotesk text-left">
          Architectural Decisions & Trade-Offs
        </h2>
        <div className="space-y-4">
          {project.decisions.map((decision, idx) => (
            <div
              key={idx}
              className="border-2 border-black bg-white rounded-xl p-5 shadow-[3px_3px_0px_#000]"
            >
              <h3 className="font-space-grotesk font-extrabold text-stone-900 text-sm flex items-start gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-pink-500 shrink-0" />
                <span>{decision.question}</span>
              </h3>
              <p className="text-stone-600 font-medium text-xs sm:text-sm leading-relaxed pl-7">
                {decision.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE ENGINEERING CHALLENGES & RESOLUTIONS */}
      <section className="border-3 border-black bg-white rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] mb-8">
        <h2 className="text-xl font-space-grotesk font-black text-stone-900 mb-2 flex items-center gap-2">
          Critical Engineering Challenges
          <Cpu className="w-5 h-5 text-red-500" />
        </h2>
        <p className="text-stone-500 font-semibold text-xs mb-6">
          Real technical friction points faced, solutions designed, and the resulting engineering tradeoffs.
        </p>

        <div className="space-y-6">
          {project.engineeringChallenges.map((challenge, idx) => (
            <div key={idx} className="border-2 border-black rounded-xl p-4 bg-stone-50 relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-space-grotesk font-black text-xs bg-red-100 border-2 border-red-400 text-red-800 px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.1)]">
                  CHALLENGE {idx + 1}
                </span>
                <h4 className="font-space-grotesk font-extrabold text-stone-900 text-sm">
                  {challenge.title}
                </h4>
              </div>

              <div className="space-y-3 font-semibold text-xs sm:text-sm">
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wide font-bold">The Obstacle</div>
                  <p className="text-stone-600 leading-relaxed font-medium mt-0.5">
                    {challenge.challenge}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200">
                  <div className="text-[10px] text-emerald-600 uppercase tracking-wide font-bold">How I Solved It</div>
                  <p className="text-stone-700 leading-relaxed font-medium mt-0.5">
                    {challenge.solution}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200">
                  <div className="text-[10px] text-indigo-600 uppercase tracking-wide font-bold">Trade-offs & Rationale</div>
                  <p className="text-stone-600 leading-relaxed font-medium mt-0.5">
                    {challenge.tradeoffs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FUTURE IMPROVEMENTS ("WHAT I'D IMPROVE") */}
      <section className="border-3 border-black bg-white rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] mb-8">
        <h2 className="text-xl font-space-grotesk font-black text-stone-900 mb-4 flex items-center gap-2">
          Future Improvements (What I'd Improve)
          <Lightbulb className="w-5 h-5 text-yellow-500" />
        </h2>
        <p className="text-stone-500 font-semibold text-xs mb-4">
          Foresight roadmap for scaling past version 1.
        </p>
        <ul className="space-y-3">
          {project.futureImprovements.map((improvement, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-stone-600 font-medium text-xs sm:text-sm">
              <span className="mt-1"><CheckDoodle className="w-4 h-4 text-emerald-600" /></span>
              <span>{improvement}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t-2 border-black mt-12 text-stone-500 font-bold text-xs">
        <Link href="/" className="hover:underline text-pink-600 mb-2 inline-block font-space-grotesk font-extrabold">
          ← Back to Showcase
        </Link>
        <p className="leading-relaxed mt-2">
          Deep dive compiled by Mohit Pant. Next.js 15, React, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
