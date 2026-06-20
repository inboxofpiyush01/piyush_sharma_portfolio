// Centralized portfolio data — sourced from BOTH Piyush's old and new CVs (Class X/XII through AI consulting).
// All copy can be updated here without touching components.

export const profile = {
  firstName: "PIYUSH",
  lastName: "SHARMA",
  name: "Piyush Sharma",
  headline:
    "Enterprise Automation Lead · Driving the transition from enterprise automation to AI-enabled systems.",
  tagline: [
    "Enterprise Automation Lead",
    "Building AI-Enabled Systems",
    "9+ yrs · 250+ tools · $5M+ delivered",
    "VBA · Python · SQL · GenAI",
  ],
  location: "Delhi · India",
  dob: "01 Sep 1990",
  nationality: "Indian",
  email: "inboxofpiyush01@gmail.com",
  phone: "+91 8904767033",
  linkedin: "https://www.linkedin.com/in/piyush-sharma-4b6137216",
  github: "https://github.com/inboxofpiyush01",
  photo:
    "https://customer-assets.emergentagent.com/job_0d6a3b5e-95a3-4aaa-8f65-d2b3c330d3b8/artifacts/ycube3i5_Piyush_LinkedIN.png",
  resumeUrl: "/Piyush_Sharma_Resume.pdf",
  summary:
    "Enterprise Automation Architect with 9+ years architecting solutions across Banking, Insurance, Healthcare & Mortgage. Led 250+ automation tools generating $5M+ in client benefits for JPMC, Charles Schwab, Zurich, Virgin Media-UPC and Star India. 16+ performance awards across KPMG and Mphasis. Currently transitioning into AI / GenAI Engineering — actively learning, building open-source projects, and consulting independently on AI use-cases across domains.",
  bigStatement:
    "I build systems that move real numbers. A decade in enterprise automation, now extending the same outcome-mindset into AI engineering.",
};

export const stats = [
  { value: "$5M+", label: "Client Benefits Delivered", sub: "across JPMC, Schwab, Zurich" },
  { value: "250+", label: "Automation Tools Shipped", sub: "production-grade enterprise solutions" },
  { value: "19+", label: "Performance Awards", sub: "KPMG · Mphasis · academic" },
  { value: "9+", label: "Years of Experience", sub: "Banking · Insurance · GenAI" },
];

export const clients = [
  "JPMC",
  "CHARLES SCHWAB",
  "ZURICH",
  "VIRGIN MEDIA",
  "STAR INDIA",
  "SWBC",
  "KPMG",
  "MPHASIS",
];

export const relocation = [
  "Delhi · NCR",
  "Remote · Anywhere",
  "UAE",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Ireland",
  "Singapore",
  "Australia",
];

export const experience = [
  {
    company: "Independent — AI / Automation Consulting & Upskilling",
    role: "Automation Consultant · AI Engineer (in transition)",
    dates: "Jan 2025 — Present",
    location: "Remote · Delhi, India",
    accent: "Active",
    points: [
      "Consulting independently on AI use-cases across domains — helping teams scope, prototype and evaluate Generative AI / Agentic AI / RAG opportunities.",
      "Investing structured time in upskilling: Generative AI Master Program, Agentic AI / MLOps certifications and a Deep Learning / NLP bootcamp.",
      "Building an open-source AI portfolio on GitHub (multi-agent assistants, RAG knowledge bases and data-intelligence pipelines) to translate enterprise-automation skills into AI engineering.",
      "Continuing select automation consulting engagements alongside — bringing 9+ years of VBA, Python and SQL automation expertise.",
      "Active stack: Python, LangGraph, LangChain, CrewAI, Hugging Face, FAISS, Streamlit, Scikit-learn, MLflow, Docker and AWS (EC2 / S3 / IAM).",
    ],
    tech: ["Python", "LangChain", "CrewAI", "RAG", "MLflow", "Docker", "AWS", "Streamlit"],
  },
  {
    company: "KPMG India",
    role: "Assistant Manager — Technical",
    dates: "Jun 2023 — Dec 2024",
    location: "Bangalore, India",
    accent: "Big Four",
    points: [
      "Built and deployed Python automation bots for Tech Assurance — reduced manual effort by 30–40% with improved accuracy.",
      "Created VBA tools integrating third-party APIs — streamlined audit & assurance workflows, saved significant project time.",
      "Designed and maintained SQL Server databases across assurance projects — ensured data consistency and query performance.",
      "Translated business requirements into automation solutions; raised reporting accuracy across audit/assurance teams.",
      "Mentored cross-functional teams on automation best practices and authored process documentation.",
    ],
    tech: ["VBA", "Python", "LLM", "SQL Server", "APIs", "MS Excel"],
  },
  {
    company: "Mphasis India Pvt. Ltd",
    role: "Senior Software Engineer · Module Lead",
    dates: "Nov 2015 — Jun 2023",
    location: "Pune & Bangalore, India",
    accent: "Fortune 500 clients",
    points: [
      "Primary technology: VBA — architected 200+ enterprise automation tools across Banking, Insurance, Healthcare and Mortgage for Fortune-500 clients.",
      "Led a team of 21 developers across multiple projects — improved delivery reliability and reduced wastage.",
      "Acted as Lead Architect: end-to-end VBA solution design integrating Web Apps, Mainframes, MS Office, Outlook and SQL Server backends.",
      "Drove process improvement sessions (Day-in-Life) across business accounts to surface VBA automation opportunities.",
      "Mentored teams on VBA, Python and data handling best practices; ran governance & QA reviews across the practice.",
    ],
    tech: ["VBA", "Python", "SQL Server", "Mainframe", "MS Office Automation", "Outlook Automation"],
  },
];

// ALL projects — featured (shown by default) + extended (toggleable)
export const projects = [
  // ---- Featured public/recent AI builds ----
  {
    slug: "multi-agent-enterprise-ai",
    name: "Multi-Agent Enterprise AI Assistant",
    year: "2025",
    client: "Public · GitHub",
    visibility: "Public",
    confidential: false,
    category: "AI / GenAI",
    github: "https://github.com/inboxofpiyush01/Universal_AI_Chat_Bot",
    summary:
      "A SaaS-style multi-agent chatbot that plugs into any website and learns from its content automatically.",
    problem:
      "Most chatbots need extensive training data. Businesses want a drop-in agent that learns from their existing web content.",
    approach:
      "Multi-agent architecture using CrewAI with web scraping (Beautiful Soup), structured prompt engineering for contextual responses, and a SaaS-style plug-and-play interface.",
    outcome:
      "A reusable agent platform that ingests any site and answers domain questions with grounded context.",
    tech: ["Python", "LLM", "RAG", "CrewAI", "Beautiful Soup"],
    featured: true,
  },
  {
    slug: "enterprise-rag-knowledge",
    name: "Enterprise RAG Knowledge Assistant",
    year: "2025",
    client: "Public · GitHub",
    visibility: "Public",
    confidential: false,
    category: "AI / GenAI",
    github: "https://github.com/inboxofpiyush01/doc-qa-assistant",
    summary:
      "Upload any PDF or text document and ask questions in natural language — RAG using open-source models.",
    problem:
      "Knowledge workers spend hours searching documents. Closed-source RAG is expensive; teams need a private alternative.",
    approach:
      "LangChain + FAISS retrieval over MiniLM semantic embeddings, FLAN-T5 LLM for context-aware answers with source attribution. Streamlit UI.",
    outcome:
      "Document Q&A with grounded citations — significantly reduced manual document review effort.",
    tech: ["Python", "LangChain", "FAISS", "Streamlit", "Hugging Face"],
    featured: true,
  },
  {
    slug: "geo-intelligence-sales",
    name: "Geo-Intelligence Sales Analytics",
    year: "2025",
    client: "Public · GitHub",
    visibility: "Public",
    confidential: false,
    category: "Data / Analytics",
    github: "https://github.com/inboxofpiyush01/ClientAnalysis",
    summary:
      "Analysed hotels & restaurants dataset to surface the best potential B2B buyers for a floor-cleaner product.",
    problem:
      "Sales teams waste hours chasing low-fit leads — they needed a data-driven, geo-aware shortlist.",
    approach:
      "Cleaned messy real-world data, filtered closed/unverified businesses, computed GPS-distance from HQ, scored by ratings & review density, produced charts and an export-ready Excel.",
    outcome:
      "Top-10 nearby, high-rated targets handed to sales — turn-key prospecting list.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    featured: true,
  },
  // ---- Featured KPMG/Mphasis flagship tools ----
  {
    slug: "qa-dummy-data-generator",
    name: "QA Dummy Data Generator",
    year: "2024",
    client: "KPMG · Confidential",
    visibility: "Confidential",
    confidential: true,
    category: "Automation",
    summary:
      "Internal productivity tool that auto-generates realistic test datasets — solving the compliance issue of QA not being allowed to use real client data.",
    problem:
      "QA teams couldn't use real client data for testing — manual dummy-data creation cost hours per cycle.",
    approach:
      "Auto-detects input file structure, accepts QA requirements (records, columns, randomisation rules), generates a structured prompt fed to KPMG's audit AI. Built first in VBA, then rebuilt in Python.",
    outcome:
      "Hours saved per test cycle. Adopted across QA teams. Eliminated manual dummy-data drafting.",
    tech: ["VBA", "Python", "Prompt Engineering", "MS Office"],
    featured: true,
  },
  {
    slug: "brd-generator",
    name: "BRD Generator / Translator",
    year: "2024",
    client: "KPMG · Confidential",
    visibility: "Confidential",
    confidential: true,
    category: "Automation",
    summary:
      "Reads code or an existing BRD and converts it into simple non-technical language — empowers Business Analysts without technical background.",
    problem:
      "BAs without coding background struggled to interpret existing BRDs or reverse-engineer requirements from code.",
    approach:
      "Tool auto-generates a structured prompt from code/BRD and feeds it into KPMG's internal audit AI to produce readable business documentation. Built in VBA first; rebuilt in Python.",
    outcome:
      "Eliminated manual BRD writing effort. BA teams now self-serve requirement comprehension.",
    tech: ["VBA", "Python", "Prompt Engineering", "MS Office"],
    featured: true,
  },
  {
    slug: "kcat-tool",
    name: "KCAT — Audit Confirmation Engine",
    year: "2023",
    client: "KPMG · Confidential",
    visibility: "Confidential",
    confidential: true,
    category: "Automation",
    summary:
      "Automated end-to-end audit confirmation lifecycle including API authentication and account management.",
    problem:
      "Audit confirmations were manual, slow and error-prone with no centralised tracking.",
    approach:
      "VBA orchestrates a web application + APIs + SQL backend + MS Outlook, automating the full confirmation lifecycle with audit-grade tracking.",
    outcome:
      "Reduced processing time and ensured accurate tracking of all confirmations.",
    tech: ["VBA", "Web", "APIs", "SQL", "MS Outlook"],
    featured: true,
  },
  {
    slug: "powerbi-extractor",
    name: "PowerBI Elements Extractor",
    year: "2023",
    client: "KPMG · Confidential",
    visibility: "Confidential",
    confidential: true,
    category: "Automation",
    summary:
      "Automated extraction & validation of tables, queries and formulas from PowerBI dashboards.",
    problem: "QA of PowerBI dashboards required manually parsing JSON-heavy backends.",
    approach:
      "Converts backend JSON into tabular format for fast QC validation across all dashboard elements.",
    outcome: "Significantly reduced QA effort and improved accuracy of dashboard QC checks.",
    tech: ["VBA", "PowerBI", "MS Excel"],
    featured: true,
  },
  {
    slug: "pre-ops-automation",
    name: "PRE-OPS Mortgage Automation",
    year: "2020",
    client: "Mphasis · Mortgage · Confidential",
    visibility: "Confidential",
    confidential: true,
    category: "Automation",
    summary: "End-to-end Mortgage QC automation that fetches & validates data across multiple applications.",
    problem: "Mortgage QC required navigating multiple disparate apps and mainframes — slow and error-prone.",
    approach:
      "VBA orchestrator pulls data from Web Apps, Mainframes, Excel & Outlook, validates against rules, and produces an audit trail.",
    outcome: "Significantly reduced mortgage QC processing time for the client.",
    tech: ["VBA", "Web Apps", "Mainframes", "MS Outlook"],
    featured: true,
  },
  {
    slug: "gifting-tool",
    name: "Share Transfer / Gifting Tool",
    year: "2017",
    client: "Charles Schwab",
    visibility: "Confidential",
    confidential: true,
    category: "Automation",
    summary: "VBA solution that automated share transfers for high-volume client operations.",
    problem: "Manual share-transfer processing produced errors and consumed hours every week.",
    approach: "VBA workflow integrating Web Apps, Mainframes, Excel and Outlook — automated the full transfer lifecycle.",
    outcome: "Eliminated manual share-transfer processing, reduced errors and reclaimed team hours weekly.",
    tech: ["VBA", "Mainframe", "MS Access", "Third-party Apps"],
    featured: true,
  },
];

// Extended project archive — every tool ever shipped (sourced from older CV).
export const projectArchive = [
  { name: "BQM Tracker Tool", year: "2016", client: "SWBC, USA", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Processor performance tracking." },
  { name: "MBMS — Mailbox Management System", year: "2016", client: "Star India", category: "Automation", tech: ["VBA", "MS Excel", "MS Outlook"], desc: "Email filtration & color-coded segregation to meet SLAs." },
  { name: "Auto Faxing Tool", year: "2016", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel", "MS Word"], desc: "Auto fax template generation and auto inventory allocation." },
  { name: "Sell VSP Tool", year: "2016", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Auto template creation and recon." },
  { name: "JNL Split Tool", year: "2016", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Auto template creation and recon." },
  { name: "CBO Reporting Solutions", year: "2016", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel", "MS Access"], desc: "Inventory monitoring and reporting." },
  { name: "ESTV Tool", year: "2016", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Estate valuation tool." },
  { name: "UGL Recon Tool", year: "2016", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Auto raw inventory comparison per business rules." },
  { name: "Notes Standardization Tool", year: "2017", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Access"], desc: "Auto standardized notes generation." },
  { name: "Mistake Proofing Tool", year: "2017", client: "Virgin Media — UPC", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Automation processor guidance tool." },
  { name: "KDAT Tool", year: "2017", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Processor knowledge assessment for training needs." },
  { name: "QC & Reporting Sol Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Access"], desc: "Quality check tool." },
  { name: "MIS & Notes Standardization Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Access", "Mainframe"], desc: "Productivity tracker w/ in-built data fetch from client WebApp & Mainframe." },
  { name: "EOS Report — Pune", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Auto generates End-of-Shift report shared with clients per-diem." },
  { name: "ASNA MyQ DB & QA-QC Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Access", "Web"], desc: "Productivity tracker integrating MyQ & Client Central applications." },
  { name: "ASNA Self QC Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Access"], desc: "Self-QC feature; auto-opens QC tabs per job type." },
  { name: "Sub Account Finder Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Searches client details by name via client macro." },
  { name: "Auto Fetch Account/Job ID", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "Web"], desc: "Auto fetches account/job ID from MyQ to client macro." },
  { name: "Journal Effective Date Auto Fetch", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA"], desc: "Auto fetches journal effective date into client macro." },
  { name: "Doc Control Production Tracker", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "MS Access", "Web"], desc: "Productivity tracker that updates Manifest tool automatically." },
  { name: "Account Closure Automation", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "Mainframe"], desc: "Opens 4 legacy mainframe screens & verifies account closure." },
  { name: "TraQer Updation Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "Web"], desc: "Formats prior-day production and updates TraQer." },
  { name: "ACATS Mistake Proofing Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "Web", "Mainframe", "MS Access"], desc: "Green-belt mistake-proofing across MyQ, BlueZone, Client Central." },
  { name: "Signature Verification Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "Mainframe"], desc: "Auto-alerts when signature verification is required for GIFT/TOA jobs." },
  { name: "Wire Transaction Mistake-Proofing", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "Web"], desc: "Auto-updates MyQ fields per scenarios to improve quality." },
  { name: "FundChanges Recon Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA", "MS Excel"], desc: "Reconciles IP Plans vs FundChanges with color-coded output." },
  { name: "Timesheet Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Highlights agent idle time & type of work performed." },
  { name: "Directive Recon Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Generates Directive File and Aged Dist Cash reports." },
  { name: "TV Address Recon Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Reconciles DB, DC and Lexis-Nexis files into a final template." },
  { name: "InKind Report Formatting", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Formats raw text-file data per fixed rules." },
  { name: "ANF Dividend Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Calculates dividend by grant year (Standard vs Value Grant Div)." },
  { name: "Daily Aged Cash Report", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Incorporates Weekly Aged Cash macro into Directive Recon." },
  { name: "Pending Batch Recon Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Reconciles Pending Batch with Final Pay Cal on multiple criteria." },
  { name: "ETF Distributions Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA", "Outlook"], desc: "Outlook automation — formats mail content per business rules." },
  { name: "Auto Letter Creation Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA", "MS Word"], desc: "Auto-fills Word bookmarks with structured values." },
  { name: "Loan Out-of-Balance Tool", year: "2018", client: "Charles Schwab — Onshore", category: "Automation", tech: ["VBA"], desc: "Compares weekly Loan OOB files to flag imbalanced funds." },
  { name: "Auto Time Zone — ASAM DB", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA"], desc: "Auto-corrects time zone to match Arizona shift; prevents date entry errors." },
  { name: "SSN Validation Tool", year: "2018", client: "Charles Schwab", category: "Automation", tech: ["VBA", "Web"], desc: "Validates SSN numbers in client's Dime Application." },
  { name: "Android App — Google Play", year: "2014", client: "Personal", category: "Mobile", tech: ["Android", "Java"], desc: "Independent Android application published on Google Play Store." },
];

export const skillGroups = [
  {
    title: "Automation · VBA · MS Office",
    icon: "Workflow",
    skills: [
      { name: "VBA Macro Development", level: 98 },
      { name: "MS Office Automation (Excel · Word · Outlook)", level: 96 },
      { name: "Mainframe Integration", level: 88 },
      { name: "API Integration", level: 88 },
      { name: "Process Re-engineering · Six Sigma", level: 85 },
      { name: "Blue Prism · UiPath · Automation Anywhere", level: 75 },
    ],
  },
  {
    title: "Programming · Data",
    icon: "Code2",
    skills: [
      { name: "VBA", level: 98 },
      { name: "Python", level: 92 },
      { name: "SQL · SQL Server", level: 90 },
      { name: ".NET / ASP.NET", level: 70 },
      { name: "Core Java · Android", level: 65 },
      { name: "JavaScript · HTML", level: 70 },
    ],
  },
  {
    title: "AI · GenAI · Agentic  (learning)",
    icon: "Brain",
    skills: [
      { name: "Generative AI · LLMs", level: 78 },
      { name: "LangChain · LangGraph", level: 75 },
      { name: "CrewAI · Agentic AI", level: 72 },
      { name: "RAG · Vector Search", level: 76 },
      { name: "Prompt Engineering", level: 85 },
      { name: "NLP", level: 70 },
    ],
  },
  {
    title: "ML · MLOps · Cloud",
    icon: "Cpu",
    skills: [
      { name: "Scikit-learn · Pandas · NumPy", level: 80 },
      { name: "TensorFlow", level: 65 },
      { name: "MLflow · Docker · Git", level: 75 },
      { name: "AWS · EC2 · S3 · IAM", level: 70 },
      { name: "Streamlit · Hugging Face", level: 80 },
      { name: "FAISS · ChromaDB", level: 78 },
    ],
  },
];

export const learning = [
  { name: "Generative AI Master Program", status: "In Progress", progress: 70 },
  { name: "Agentic AI & MLOps (Edureka)", status: "Active", progress: 80 },
  { name: "Deep Learning & NLP Bootcamp (Udemy)", status: "Active", progress: 60 },
  { name: "AWS Solution Architect Path", status: "Planned", progress: 25 },
];

// Full journey — schooling → college → certifications → professional life
export const journey = [
  {
    type: "school",
    period: "2006",
    title: "Class X — CBSE",
    place: "Delhi, India",
    note: "Solid foundation in mathematics and sciences.",
  },
  {
    type: "school",
    period: "2008",
    title: "Class XII — CBSE",
    place: "Delhi, India",
    note: "Science stream — electronics & physics focus.",
  },
  {
    type: "college",
    period: "2008 — 2012",
    title: "B.Tech · Electronics & Communication",
    place: "Delhi Institute of Technology and Management, Sonepat",
    note: "Academic Topper · 3rd in Year 1 · 2nd in Year 3 · 2nd in Year 4.",
  },
  {
    type: "cert",
    period: "2011",
    title: "Embedded Systems & Robotics — APPIN Knowledge Sol",
    place: "Delhi, India",
    note: "Industry internship in embedded systems.",
  },
  {
    type: "cert",
    period: "2012",
    title: "Industrial PLC & SCADA — SOFCON India",
    place: "Delhi, India",
    note: "Hands-on industrial automation programming.",
  },
  {
    type: "cert",
    period: "2013",
    title: "Core Java & Android — APS Mind Technologies",
    place: "Delhi, India",
    note: "Built and published an Android app on Google Play Store.",
  },
  {
    type: "college",
    period: "2012 — 2015",
    title: "PGDM · Business Management",
    place: "Amity School of Distance Learning, Delhi",
    note: "Strengthened business + technical positioning.",
  },
  {
    type: "career",
    period: "Nov 2015 — Jun 2023",
    title: "Mphasis India — Sr. Software Engineer · Module Lead",
    place: "Pune & Bangalore, India",
    note: "Led 21-developer team. Architected 200+ VBA-led automation tools across Banking, Insurance, Healthcare, Mortgage.",
  },
  {
    type: "cert",
    period: "2020",
    title: "Six Sigma Black Belt — Benchmark Six Sigma",
    place: "India",
    note: "Benchmark Seal of Excellence — highest exam score in cohort.",
  },
  {
    type: "career",
    period: "Jun 2023 — Dec 2024",
    title: "KPMG India — Assistant Manager (Technical)",
    place: "Bangalore, India",
    note: "Python & VBA automation + LLM integration for Tech Assurance.",
  },
  {
    type: "cert",
    period: "2024 — 2025",
    title: "Agentic AI, AI/ML & MLOps — Edureka · Simplilearn × IBM · Udemy",
    place: "Online",
    note: "Generative AI Master Program · Agentic AI · NLP & Deep Learning bootcamp.",
  },
  {
    type: "career",
    period: "Jan 2025 — Present",
    title: "Independent — AI / Automation Consultant & AI Engineer (in transition)",
    place: "Remote · Delhi",
    note: "Consulting on AI use-cases across domains, building open-source AI projects and continuing select automation engagements.",
    active: true,
  },
];

export const certifications = [
  { name: "Agentic AI · AI/ML · MLOps", issuer: "Edureka", year: "2025" },
  { name: "Python 3.X · Data Science · AI/ML", issuer: "Simplilearn × IBM", year: "2024" },
  { name: "GenAI · Deep Learning · NLP Bootcamp", issuer: "Udemy", year: "2024" },
  { name: "Machine Learning", issuer: "Coding Bytes, Delhi", year: "2023" },
  {
    name: "Six Sigma Black Belt",
    issuer: "Benchmark Six Sigma",
    year: "2020",
    note: "Benchmark Seal of Excellence — highest exam score.",
  },
  { name: "Excellence in Continuous Improvement Leadership", issuer: "Benchmark Six Sigma", year: "2020" },
  { name: "Core Java & Android", issuer: "APS Mind Technologies", year: "2013" },
  { name: "Industrial PLC & SCADA", issuer: "SOFCON India", year: "2012" },
  { name: "Embedded Systems & Robotics", issuer: "APPIN Knowledge Sol · IADL", year: "2011" },
];

export const awards = [
  {
    issuer: "KPMG",
    period: "2023 — 2024",
    count: 6,
    titles: ["Encore Award", "Kudos Spot Award", "Senior of the Quarter", "Rising Star Award"],
    description: "For outstanding technical contributions and leadership across Tech Assurance.",
  },
  {
    issuer: "Mphasis — Next Ops RNR",
    period: "2022",
    count: 1,
    titles: ["Exceptional Client Support"],
    description: "Recognised for contribution to client business outcomes.",
  },
  {
    issuer: "Mphasis — Demanding Excellence",
    period: "2020 — 2021",
    count: 2,
    titles: ["High-quality delivery", "Team-work"],
    description: "For consistently demonstrating Mphasis values.",
  },
  {
    issuer: "Mphasis — Agility Is My Mantra · Outcome Focus",
    period: "2017 — 2020",
    count: 4,
    titles: ["Owning decisions", "Resolving problems effectively"],
    description: "For agility, execution and decision ownership.",
  },
  {
    issuer: "Mphasis — The Buck Stops With Me",
    period: "2016 — 2019",
    count: 4,
    titles: ["Customer Centricity", "Experimentation", "Accountability"],
    description: "For customer-centric solutions, ownership and innovation.",
  },
  {
    issuer: "Mphasis — Monthly Summit Awards",
    period: "Jul 2016 · Nov 2017",
    count: 2,
    titles: ["Overall Excellence"],
    description: "Top performer recognition across the quarter.",
  },
  {
    issuer: "B.Tech · Academic Excellence",
    period: "2008 — 2012",
    count: 3,
    titles: ["3rd in Year 1", "2nd in Year 3", "2nd in Year 4"],
    description: "Top of cohort across multiple academic years.",
  },
];

export const languages = ["English", "Hindi"];
export const personalFacts = [
  { label: "Date of Birth", value: "01 Sep 1990" },
  { label: "Nationality", value: "Indian" },
  { label: "Based in", value: "Delhi, India" },
  { label: "Open to", value: "Full-time · Contract · Relocation" },
];
