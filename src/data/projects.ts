export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  problem: string;
  techStack: string[];
  metrics: { value: string; label: string }[];
  architecture: { from: string; to: string }[];
  features: string[];
  engineeringChallenges: { title: string; challenge: string; solution: string; tradeoffs: string }[];
  decisions: { question: string; answer: string }[];
  futureImprovements: string[];
  github: string;
  demo: string;
  apk?: string;
  color: string;
  accentColor: string;
  emoji: string;
}

export const projectsData: Project[] = [
  {
    id: "reewise",
    name: "ReeWise",
    tagline: "Offline-first spaced repetition flashcard mobile app built for scale.",
    description: "Built an offline-first mobile app that enables students to study and revise anywhere, maintaining instant, reliable data synchronization across multiple devices without connection lag.",
    fullDescription: "ReeWise is a high-performance offline-first spaced repetition platform that empowers students to study seamlessly without internet connectivity. Built on top of Expo (React Native) and SQLite, it uses a custom synchronization engine that merges local state changes with a remote MongoDB cluster via a Node/Express API when connectivity is restored.",
    problem: "Studying on the go often suffers from unreliable internet connections, causing data loss or slow app loads. Spaced repetition apps need instant offline usability, absolute data persistence, and robust eventual consistency.",
    techStack: ["React Native", "Zustand", "SQLite", "Expo", "Node.js", "Express", "MongoDB", "Google OAuth"],
    metrics: [
      { value: "Offline First", label: "Architecture" },
      { value: "SQLite Sync", label: "Local Database" },
      { value: "Zustand", label: "State Sync" },
      { value: "Expo Background", label: "Sync Engine" }
    ],
    architecture: [
      { from: "React Native UI", to: "Zustand State Store" },
      { from: "Zustand State Store", to: "SQLite Local DB" },
      { from: "SQLite Local DB", to: "Background Sync Engine" },
      { from: "Background Sync Engine", to: "Express API" },
      { from: "Express API", to: "MongoDB Atlas" }
    ],
    features: [
      "Offline-first spaced repetition study mode utilizing active recall algorithms",
      "Robust SQLite schema versioning and local auto-increment migrations",
      "Two-way conflict resolution using vector clock timestamps and last-write-wins rules",
      "Optimized list rendering using Shopify's FlashList for 60FPS scrolling with lazy asset hydration",
      "Silent background sync using Expo Background Tasks when network availability shifts"
    ],
    engineeringChallenges: [
      {
        title: "Offline Synchronization & Conflict Resolution",
        challenge: "Synchronizing offline changes made on multiple mobile clients with a single MongoDB database without overriding user updates or creating duplicates.",
        solution: "Designed a lightweight sync ledger inside SQLite that flags creations, updates, and deletions locally. The Sync Engine pushes these actions sequentially using incrementing transaction IDs. Merging relies on a 'last-write-wins' strategy verified by high-precision device timestamps.",
        tradeoffs: "LWW (Last-Write-Wins) is simple to implement but can discard updates if device clocks are out of sync. We chose LWW over full CRDTs (Conflict-free Replicated Data Types) for version 1 to launch the beta faster since flashcard edits rarely overlap between separate users."
      },
      {
        title: "FlashList Optimization with Lazy Hydration",
        challenge: "Rendering large lists of flashcards (1000+) resulted in initial load stuttering and dropped frames during scroll operations on lower-end devices.",
        solution: "Replaced React Native's default FlatList with Shopify's FlashList to recycle cell views. Implemented card content lazy hydration, loading detailed descriptions and images into memory only when the card is within 1.5 screen lengths of the viewport.",
        tradeoffs: "Lazy hydration saves memory and keeps scrolls at 60FPS, but users scrolling extremely fast might see a brief skeleton placeholder as card assets load."
      }
    ],
    decisions: [
      {
        question: "Why SQLite for local storage instead of WatermelonDB or AsyncStorage?",
        answer: "AsyncStorage lacks querying capabilities and becomes extremely slow for databases exceeding 5MB. WatermelonDB is powerful but introduces heavy boilerplate and schema constraints. SQLite offers pure raw SQL execution, easy transaction management, and fits perfectly with expo-sqlite, giving us complete control over indices and custom sync scripts."
      },
      {
        question: "Why Zustand instead of Redux Toolkit?",
        answer: "Redux Toolkit introduces massive boilerplate that slows down initial development cycles. Zustand is extremely lightweight (1.5kB), provides a simple hooks-based API, and bridges natively with our SQLite persistent database layer using custom middlewares without blocking the React render thread."
      }
    ],
    futureImprovements: [
      "Delta synchronization (syncing only updated card fields instead of full documents)",
      "WebSocket real-time push updates for immediate desktop-mobile coordination",
      "CRDT-based conflict resolution (Yjs or Automerge) to handle multi-device edits",
      "Background worker polling optimizations to reduce battery usage"
    ],
    github: "https://github.com/MohitPant2803/DSA-REVISON-frontend",
    demo: "https://ree-wise-download-website.vercel.app",
    apk: "https://github.com/MohitPant2803/DSA-REVISON-frontend/releases",
    color: "bg-[#bbf7d0]",
    accentColor: "#22c55e",
    emoji: "/reewise.webp"
  },
  {
    id: "competitorscan",
    name: "CompetitorScan",
    tagline: "Real-time AI-powered competitor intelligence scraping & analysis pipeline.",
    description: "Developed an automated competitive intelligence engine that scans competitor websites in real-time, extracting structured product adjustments and generating dynamic comparative reports.",
    fullDescription: "CompetitorScan is an enterprise-grade competitive analysis platform. It allows product teams to monitor competitor landing pages, feature launches, pricing alterations, and SEO strategies. By orchestrating Puppeteer instances in parallel, it bypasses anti-bot measures, converts HTML into clean markdown via Jina Reader, and uses LLMs to extract structured JSON data.",
    problem: "Monitoring competitor sites manually is tedious. Automated scrapers are easily blocked by Cloudflare, and compiling dynamic comparison tables takes minutes of parsing and data matching.",
    techStack: ["Next.js 15", "TypeScript", "Puppeteer", "Groq", "Llama-3", "Jina Reader", "Server-Sent Events (SSE)"],
    metrics: [
      { value: "Parallel Agents", label: "Concurrency" },
      { value: "Jina Reader", label: "HTML Parser" },
      { value: "Groq Llama-3", label: "LLM Inference" },
      { value: "Streaming SSE", label: "Client Updates" }
    ],
    architecture: [
      { from: "URL Input", to: "Jina Reader API" },
      { from: "Jina Reader API", to: "Website Parser Worker" },
      { from: "Website Parser Worker", to: "Groq LLM Layer" },
      { from: "Groq LLM Layer", to: "SWOT Report Generation" },
      { from: "SWOT Report Generation", to: "PDF compilation" }
    ],
    features: [
      "Parallel browser agent execution running headless Puppeteer nodes",
      "Server-Sent Events (SSE) integration for streaming real-time scraping progress and LLM evaluations",
      "Anti-fingerprinting scripts and Jina Reader API to bypass Cloudflare protection layers",
      "Automated diff alerts notifying users of pricing table or headline modifications"
    ],
    engineeringChallenges: [
      {
        title: "Bypassing Heavy Cloudflare & Captcha Protections",
        challenge: "Target competitor websites often block default Puppeteer scripts instantly, yielding 403 Forbidden screens.",
        solution: "Integrated Jina Reader API as a proxy failover and configured Puppeteer with custom stealth plugins, random user-agents, and throttled mouse-movement simulators to mimic human interaction patterns.",
        tradeoffs: "Using Jina Reader proxy layers adds external network hops, slightly increasing initial scrape times but ensuring a 95% bypass success rate on protected sites."
      },
      {
        title: "Handling Concurrent Scraping Latency",
        challenge: "Scraping 5 competitors simultaneously took over 30 seconds, leading to browser connection timeouts.",
        solution: "Redesigned the scraper to run concurrently using a worker pool. Introduced Server-Sent Events (SSE) to stream live progress updates (e.g. 'Scraping target 1...', 'Parsing pricing...') so the UI never appears hung and provides immediate visual feedback.",
        tradeoffs: "Parallel workers require higher memory/CPU footprint on the server, but they resolve timeout failures and dramatically improve the user experience."
      }
    ],
    decisions: [
      {
        question: "Why use Server-Sent Events (SSE) instead of WebSockets?",
        answer: "WebSockets are bi-directional and require socket servers with state management, which increases server load and complicates hosting on serverless platforms. SSE runs over standard HTTP, supports automatic reconnection out-of-the-box, and is lightweight for streaming text and status logs from server to client."
      },
      {
        question: "Why Jina Reader + Puppeteer rather than cheerio?",
        answer: "Cheerio only scrapes static HTML and fails completely on client-side rendered Single Page Apps (built on React, Vue, etc.). Puppeteer compiles JS, while Jina Reader provides pre-formatted markdown output of full pages, saving token costs when feeding documents to LLMs."
      }
    ],
    futureImprovements: [
      "Automated scheduled cron monitors for 24/7 scanning",
      "Visual pixel diff comparisons highlighting exact screen edits",
      "Embedding index vector databases to query history pages via semantic search",
      "Webhook alerts forwarding change digests to Slack or Discord"
    ],
    github: "https://github.com/MohitPant2803/Competitor-Scan-Agent-frontend",
    demo: "https://competitor-scan-agent-frontend.vercel.app/",
    color: "bg-[#a5f3fc]",
    accentColor: "#06b6d4",
    emoji: "Search"
  },
  {
    id: "lead-gen-agent",
    name: "Lead Generation Agent",
    tagline: "Autonomous local SEO scraper, scorer, and automated outreach pipeline.",
    description: "Built an autonomous lead prospecting pipeline that locates local businesses, runs automated performance audits, and outputs tailored outreach sequences to increase client response rates.",
    fullDescription: "The Lead Generation Agent is an autonomous pipeline built to solve lead sourcing for agencies. It scrapes business directories across specific geo-coordinates, runs automated web audits to check for performance and mobile friendliness, scores businesses based on missing SEO metrics, and compiles custom outreach cold emails.",
    problem: "Agencies struggle to source high-quality local leads. Manual review of local sites for speed, SEO, and contact data is slow, and cold emails are often ignored because they aren't personalized.",
    techStack: ["Python", "Gemini Pro", "Geoapify API", "Google PageSpeed API", "SQLite", "BeautifulSoup", "Groq"],
    metrics: [
      { value: "Geoapify API", label: "Business Locator" },
      { value: "PageSpeed Insights", label: "Tech Web Auditer" },
      { value: "Gemini Pro", label: "Personalized Writer" },
      { value: "SQLite Cache", label: "Lead Database" }
    ],
    architecture: [
      { from: "Search Coordinates", to: "Geoapify Business Scraper" },
      { from: "Geoapify Business Scraper", to: "Google PageSpeed API" },
      { from: "Google PageSpeed API", to: "Technical Web Audit Metrics" },
      { from: "Technical Web Audit Metrics", to: "Priority Outreach Scorer" },
      { from: "Priority Outreach Scorer", to: "Gemini Cold Email Generator" }
    ],
    features: [
      "Coordinates-based local search via Geoapify looking for target businesses (dentists, plumbers, etc.)",
      "Automated technical audit running Core Web Vitals checks using PageSpeed Insights API",
      "Custom business outreach prioritizer score algorithm based on responsiveness and performance",
      "Generates hyper-personalized outreach copy explaining the exact SEO flaws found on their site"
    ],
    engineeringChallenges: [
      {
        title: "Dynamic Scraping & Data Structuring",
        challenge: "Scraping raw websites to identify valid contact details, social links, and business types yielded messy unstructured text.",
        solution: "Built a Python BeautifulSoup parser backed by regex filters. Fed the remaining unstructured content into Groq running Llama-3-8B-Instruct with a strict JSON Schema instruction, ensuring output data matches target columns.",
        tradeoffs: "Llama-3-8B is exceptionally fast and cost-effective but occasionally hallucinates contact handles if input pages are excessively messy. Added standard script validation layers as a fallback."
      }
    ],
    decisions: [
      {
        question: "Why use Gemini Pro + Groq instead of just OpenAI GPT-4?",
        answer: "GPT-4 is powerful but highly expensive for large-scale batch scraping runs. Gemini Pro offers a massive free/low-cost tier with excellent reasoning for structured extraction, and Groq provides Llama-3 inferences at sub-second latencies, allowing us to process hundreds of business sites cost-effectively."
      }
    ],
    futureImprovements: [
      "Automated lead email verification validating domain MX records",
      "SMTP server outreach queue built with Celery & Redis to throttle emails",
      "Follow-up scheduling trigger logs integrated with a lightweight dashboard"
    ],
    github: "https://github.com/MohitPant2803/LeadGenerator-Backend",
    demo: "https://leadgenerator-backend-pzyw.onrender.com",
    color: "bg-[#fed7aa]",
    accentColor: "#f97316",
    emoji: "Briefcase"
  },
  {
    id: "cozy-study",
    name: "Cozy Study Assistant",
    tagline: "Voice-to-structured-notes AI companion for students and lecture halls.",
    description: "Created a voice-to-document intelligence system that parses lecture recordings into formatted summary notes and study sheets, helping users review core concepts efficiently.",
    fullDescription: "Cozy Study Assistant is an interactive AI study companion. It listens to lecture audio files or live recordings, processes them through OpenAI's Whisper model to generate text, uses Gemini to extract key definitions, formulas, and Q&As, and compiles them into beautifully formatted PDF documents.",
    problem: "Converting long lecture recordings into readable study sheets takes hours. Standard transcribers don't identify math equations, formulas, or split summaries logically.",
    techStack: ["React", "Node.js", "OpenAI Whisper", "Gemini API", "PDFKit", "Tailwind CSS"],
    metrics: [
      { value: "OpenAI Whisper", label: "Speech-to-Text" },
      { value: "FFmpeg WASM", label: "Audio Compressor" },
      { value: "Gemini Extract", label: "Concept Parser" },
      { value: "PDFKit Engine", label: "Document Compiler" }
    ],
    architecture: [
      { from: "Audio Upload / Mic", to: "FFmpeg WebAssembly" },
      { from: "FFmpeg WebAssembly", to: "OpenAI Whisper API" },
      { from: "OpenAI Whisper API", to: "Gemini Structured Extractor" },
      { from: "Gemini Structured Extractor", to: "PDFKit Document Engine" },
      { from: "PDFKit Document Engine", to: "Downloadable Study PDF" }
    ],
    features: [
      "Speech-to-text pipeline transcribing multi-hour lectures with high accuracy",
      "Dynamic prompt engineering parsing key definitions, formulas, summary points, and key questions",
      "Clean web dashboard with integrated audio player synced to the transcription text",
      "PDFKit compilation engine styling study sheets with header hierarchies and bullet lists"
    ],
    engineeringChallenges: [
      {
        title: "Processing Massive Audio Files",
        challenge: "Large lecture recordings exceeded the 25MB file size limit of public speech-to-text APIs.",
        solution: "Implemented client-side audio compression and chunking using FFmpeg WebAssembly. The audio is split into 10-minute segments, processed in parallel, and reassembled using text overlaps to ensure no sentence is cut off.",
        tradeoffs: "FFmpeg WASM is heavy (~30MB) to download on client load. We loaded it asynchronously after page mount to maintain sub-second First Contentful Paint times."
      }
    ],
    decisions: [
      {
        question: "Why use Whisper over Google Speech-to-Text?",
        answer: "Whisper handles technical jargon, accents, and classroom background noise significantly better than Google Speech-to-Text. Whisper is also highly accessible via API and open-source models, allowing offline deployments."
      }
    ],
    futureImprovements: [
      "In-browser WebGPU Whisper execution to remove server processing costs",
      "Interactive audio playback sync linking PDF summary sentences back to exact timeline markers",
      "LaTeX math formatting support in generated study document sheets"
    ],
    github: "https://github.com/MohitPant2803/NotesAssistant-Frontend",
    demo: "https://notes-assistant-frontend.vercel.app/",
    color: "bg-[#fef08a]",
    accentColor: "#eab308",
    emoji: "Headphones"
  },
  {
    id: "interview-platform",
    name: "AI Interview Platform",
    tagline: "Voice-driven real-time technical interview simulator and feedback report engine.",
    description: "Developed a voice-driven technical interview simulator that generates resume-customized role questions, transcribes answers, and scores candidate capability rubrics.",
    fullDescription: "The AI Interview Platform simulates a real technical screen. Candidates upload their resumes, and the platform generates customized coding and architectural questions. The interview is conducted verbally with speech synthesis and transcription, evaluating communication and technical skill.",
    problem: "Software engineering applicants lack realistic verbal technical interview practice. Automated systems are typically text-only, failing to capture spoken explanation structure and timing.",
    techStack: ["Next.js", "Gemini Pro", "Web Speech API", "FastAPI", "SQLite", "Tailwind CSS"],
    metrics: [
      { value: "Resume Parser", label: "Candidate Profiler" },
      { value: "Web Speech API", label: "In-Browser Voice" },
      { value: "FastAPI Backend", label: "State Controller" },
      { value: "Gemini Evaluator", label: "Score Rubric" }
    ],
    architecture: [
      { from: "Resume Upload", to: "Gemini Competencies Parser" },
      { from: "Gemini Competencies Parser", to: "Custom Interview Script Compiler" },
      { from: "Web Audio Voice Response", to: "FastAPI Backend State Controller" },
      { from: "FastAPI State Controller", to: "Gemini Evaluation Matrix" },
      { from: "Gemini Evaluation Matrix", to: "Interactive Performance Report" }
    ],
    features: [
      "Custom resume analysis extracting core competencies and matching them with mock job openings",
      "Interactive voice UI utilizing Web Speech API for low-latency text-to-speech and speech-to-text",
      "Detailed report card scoring technical knowledge, communication clarity, and problem-solving skills",
      "Follow-up recommendations and sample optimal answers for every generated interview question"
    ],
    engineeringChallenges: [
      {
        title: "Maintaining Conversational State Flow",
        challenge: "Keeping track of multi-turn spoken dialogue in a serverless environment without losing context of previous answers.",
        solution: "Built a session manager using FastAPI backed by a lightweight SQLite cache database, saving conversation transcripts, resume keywords, and current question indices to feed into subsequent LLM prompts.",
        tradeoffs: "SQLite works well for single-user sessions but is not suitable for horizontally scaled multi-region backends. We planned to transition to Redis Session stores for scale."
      }
    ],
    decisions: [
      {
        question: "Why Web Speech API instead of custom Cloud TTS APIs?",
        answer: "Cloud Text-to-Speech (like ElevenLabs or Google TTS) introduces significant API costs and latency. The native Web Speech API runs entirely on the browser, loads instantly, and operates with zero costs, making it a perfect fit for real-time web speech interactions."
      }
    ],
    futureImprovements: [
      "Configurable voice speed pacing adjustment",
      "Interactive coding console syncing with the audio thread",
      "Webcam facial expression tracking to audit non-verbal communication habits"
    ],
    github: "https://github.com/MohitPant2803/Ai-Interview-Prep-frontend",
    demo: "https://ai-interview-prep-frontend-smoky.vercel.app/",
    color: "bg-[#ddd6fe]",
    accentColor: "#8b5cf6",
    emoji: "Lightbulb"
  }
];
