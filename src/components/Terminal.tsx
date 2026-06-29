"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="text-stone-500 font-semibold space-y-1">
          <p>Welcome to Mohit's sketchbook terminal!</p>
          <p>Type <span className="text-pink-600 font-extrabold font-mono">help</span> to see a list of commands.</p>
        </div>
      )
    }
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-xs">
            <p className="font-extrabold text-stone-800">Available commands:</p>
            <p><span className="text-pink-600 font-bold font-mono w-20 inline-block">whoami</span> - About Mohit's focus</p>
            <p><span className="text-yellow-600 font-bold font-mono w-20 inline-block">skills</span> - Core tools currently working with</p>
            <p><span className="text-cyan-600 font-bold font-mono w-20 inline-block">projects</span> - Showcase of applications</p>
            <p><span className="text-emerald-600 font-bold font-mono w-20 inline-block">contact</span> - Direct communication coordinates</p>
            <p><span className="text-violet-600 font-bold font-mono w-20 inline-block">clear</span> - Flush terminal log</p>
          </div>
        );
        break;
      case "whoami":
        response = (
          <p className="text-stone-600 font-medium">
            Mohit Pant. Full-Stack Engineer focused on AI applications, offline-first architecture, and developer tooling. Dual Degree student at IIT Kharagpur.
          </p>
        );
        break;
      case "skills":
        response = (
          <div className="flex flex-wrap gap-2 pt-1">
            {["React Native", "TypeScript", "Node.js", "SQLite", "Gemini", "Next.js"].map((skill) => (
              <span key={skill} className="px-2 py-0.5 border border-black rounded bg-stone-100 font-mono text-[11px] font-bold">
                {skill}
              </span>
            ))}
          </div>
        );
        break;
      case "projects":
        response = (
          <div className="space-y-1 text-xs">
            <p><span className="font-bold text-stone-800">[App] ReeWise</span> - Spaced repetition SQLite flashcard app (Play Store)</p>
            <p><span className="font-bold text-stone-800">[Web] CompetitorScan</span> - Parallel browser scraper streamed via SSE</p>
            <p><span className="font-bold text-stone-800">[Agent] Lead Gen Agent</span> - Local business SEO auditor & auto outreach</p>
            <p><span className="font-bold text-stone-800">[Web] Cozy Study</span> - Speech to structured note PDF assistant</p>
            <p><span className="font-bold text-stone-800">[AI] Interview Platform</span> - Voice-driven mock interview screen engine</p>
          </div>
        );
        break;
      case "contact":
        response = (
          <div className="space-y-1 text-xs">
            <p>WhatsApp: <a href="https://wa.me/918168341986" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600 font-bold">8168341986</a></p>
            <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohi13245@gmail.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600 font-bold">mohi13245@gmail.com</a></p>
            <p>Phone: <a href="tel:8168341986" className="underline hover:text-pink-600 font-bold">8168341986</a></p>
            <p>GitHub: <a href="https://github.com/MohitPant2803" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600">MohitPant2803</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/mohit-pant-46790624b/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600">mohit-pant</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        response = null;
        break;
      default:
        response = (
          <p className="text-red-500 font-mono font-semibold">
            Command not found: '{trimmed}'. Type 'help' for options.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="w-full bg-white border-3 border-black rounded-2xl shadow-[5px_5px_0px_#000] overflow-hidden flex flex-col h-72">
      {/* Header bar */}
      <div className="bg-stone-100 border-b-2 border-black px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <TerminalIcon className="w-4 h-4 text-stone-600" />
          <span className="font-space-grotesk font-black text-xs text-stone-700 tracking-wide uppercase">
            sketch-terminal.sh
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-black bg-stone-300"></div>
          <div className="w-2.5 h-2.5 rounded-full border border-black bg-stone-300"></div>
          <div className="w-2.5 h-2.5 rounded-full border border-black bg-stone-300"></div>
        </div>
      </div>

      {/* Output log */}
      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-xs text-stone-800 leading-relaxed bg-[#fdfdfd] space-y-3"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-1 font-bold text-stone-500">
                <span>guest@mohitpant:~$</span>
                <span className="text-stone-900">{item.command}</span>
              </div>
            )}
            {item.output && <div className="pl-2 font-medium">{item.output}</div>}
          </div>
        ))}
      </div>

      {/* Input prompt */}
      <form
        onSubmit={handleSubmit}
        className="border-t-2 border-black p-3 flex items-center bg-stone-50 gap-2"
      >
        <span className="font-mono text-xs font-bold text-stone-500">guest@mohitpant:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type help..."
          className="flex-1 font-mono text-xs font-semibold focus:outline-none bg-transparent"
        />
        <button
          type="submit"
          className="p-1 hover:bg-stone-200 rounded border border-transparent active:border-black transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5 text-stone-600" />
        </button>
      </form>
    </div>
  );
}
