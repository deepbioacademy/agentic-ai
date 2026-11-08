// All event copy lives here. Replace placeholders (marked TODO) before launch.

// Prefix for files in public/ when the site is served from a sub-path
// (GitHub Pages serves it at /agentic-ai). Set at build time.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;

export const event = {
  shortName: "AAI4CB",
  title: "AAI4CB Hackathon 2027",
  name: "Agentic AI for Computational Biology Hackathon 2027",
  host: "Bangladesh's first agentic AI × CompBio hackathon",
  tagline:
    "Explore and evaluate what AI agents can really do in bioinformatics: how well they reason, explain their answers, and generalize to problems they have not seen.",
  dates: "To be announced", // TODO: e.g. "February 6–8, 2027"
  location: "Dhaka, Bangladesh",
  venue: "To be announced", // TODO: venue name
  registerUrl: "#register", // TODO: Google Form / Devfolio / Luma link
  communityUrl: "#contact", // TODO: Discord / Slack / WhatsApp invite
  contactEmail: "team@example.org", // TODO: real contact address
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#agents", label: "Agents" },
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#resources", label: "Resources" },
  { href: "#judging", label: "Judging" },
  { href: "#organizers", label: "Organizers" },
  { href: "#partners", label: "Partners" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "6", label: "Benchmark tracks" },
  { value: "3", label: "Evaluation axes" },
  { value: "3", label: "AI agents tested" },
  { value: "1st", label: "In Bangladesh" },
];

// The three capabilities every project evaluates.
export const pillars = [
  {
    title: "Reasoning",
    question: "Does the agent reach the right answer for the right reasons?",
    body: "Choice of analysis, tools and parameters; validity of each step; correctness of the final conclusion.",
    measures: ["Task accuracy", "Step validity", "Tool-use correctness"],
  },
  {
    title: "Explanation",
    question: "Can it justify its answer to a domain expert?",
    body: "Clear rationale for each step, evidence that is cited faithfully, and honest statements of uncertainty.",
    measures: ["Expert rubric", "Citation faithfulness", "Calibration"],
  },
  {
    title: "Generalization",
    question: "Does performance hold on problems it has not seen?",
    body: "New organisms, datasets, populations and task variants, including data from Bangladesh and South Asia.",
    measures: ["Held-out tasks", "Distribution shift", "Robustness"],
  },
];

// The AI agents every team evaluates.
export const agents = [
  {
    name: "Biomni",
    developer: "Stanford University",
    logo: "/agents/biomni_logo.png",
    about: "A general-purpose biomedical AI agent that plans and runs analyses with a large set of biology tools and databases.",
  },
  {
    name: "Claude for Life Sciences", // TODO: confirm product name
    developer: "Anthropic",
    logo: "/agents/cluade-science_logo.jpeg",
    logoClass: "h-24 w-24 overflow-hidden rounded-2xl", // square app icon
    about: "Anthropic's Claude configured for scientific research, with connectors to literature, data and lab tools.",
  },
  {
    name: "Google Antigravity",
    developer: "Google",
    logo: "/agents/antigravity_logo.jpeg",
    logoClass: "h-36 w-full", // image has wide built-in padding
    about: "An agent-first development platform where AI agents plan, write and run code across the editor, terminal and browser.",
  },
];

// Pipeline stages, in order. Each track sits at one stage.
export const pipelineStages = [
  "Early discovery",
  "Target validation",
  "Hit to lead",
  "Lead optimization",
  "Clinical",
];

export const tracks = [
  {
    stage: "Early discovery",
    title: "Discovery Biology",
    tasks: [
      "Build consensus disease signatures across public omics datasets",
      "Cluster and annotate cell types in single-cell atlases",
      "Map spatial transcriptomics onto tissue architecture",
    ],
  },
  {
    stage: "Target validation",
    title: "Human Genetics",
    tasks: [
      "Map GWAS loci to causal genes with fine-mapping and Mendelian randomization",
      "Review tractability, druggability, and tissue-specific safety",
      "Gate candidates on genetic constraint and direction of effect",
    ],
  },
  {
    stage: "Hit to lead",
    title: "Medicinal Chemistry",
    tasks: [
      "Run large-scale virtual screens and triage the hits",
      "Design molecules generatively with synthesizable routes",
      "Predict ADMET properties and dock against the structure",
    ],
  },
  {
    stage: "Hit to lead",
    title: "Protein Sciences and Biologics",
    tasks: [
      "Predict protein structure and binding mode",
      "Design de novo binder and antibody candidates in silico",
      "Assess developability, immunogenicity, and humanization",
    ],
  },
  {
    stage: "Lead optimization",
    title: "Preclinical Safety and DMPK",
    tasks: [
      "Model population PK and exposure-response to inform dose selection",
      "Predict off-target, hERG, and secondary-pharmacology liabilities",
      "Detect adverse-event signals in public pharmacovigilance data",
    ],
  },
  {
    stage: "Clinical",
    title: "Clinical Development",
    tasks: [
      "Analyze real-world outcomes on your EHR and claims data",
      "Run survival analysis and stratify patient risk",
      "Synthesize evidence systematically with meta-analysis",
    ],
  },
];

export const aboutPoints = [
  "Hands-on experience running state-of-the-art AI agents on real bioinformatics tasks.",
  "A practical method for designing benchmarks, ground truth and scoring rubrics.",
  "Feedback from mentors in biology, medicine and machine learning.",
  "A chance to contribute to an open benchmark and joint report.",
  "Collaborators to keep working with after the event.",
];

export type Session = { time: string; title: string; note?: string };
export const schedule: { day: string; label: string; where: string; sessions: Session[] }[] = [
  {
    day: "Bootcamp",
    label: "Week before the event",
    where: "Online",
    sessions: [
      { time: "Evening 1", title: "Agents 101", note: "How AI agents plan, call tools and use bioinformatics software, and how to run them" },
      { time: "Evening 2", title: "Evaluating agents", note: "Benchmark design, ground truth, rubrics for reasoning and explanation, testing generalization" },
    ],
  },
  {
    day: "Day 1",
    label: "Kickoff and benchmark design",
    where: "On site",
    sessions: [
      { time: "08:30", title: "Registration and breakfast" },
      { time: "09:30", title: "Opening and welcome" },
      { time: "10:00", title: "Keynote", note: "Speaker to be announced" },
      { time: "10:45", title: "Track briefings", note: "Tasks, datasets and agents available in each track" },
      { time: "11:30", title: "Team formation" },
      { time: "12:30", title: "Lunch" },
      { time: "13:30", title: "Benchmark design and first agent runs" },
      { time: "17:00", title: "Mentor check-in" },
      { time: "19:30", title: "Dinner" },
    ],
  },
  {
    day: "Day 2",
    label: "Evaluation",
    where: "On site",
    sessions: [
      { time: "08:30", title: "Breakfast" },
      { time: "10:00", title: "Mentor check-in" },
      { time: "13:00", title: "Lunch and lightning talks" },
      { time: "18:00", title: "Results freeze and submission" },
      { time: "19:00", title: "Dinner and presentation rehearsal" },
    ],
  },
  {
    day: "Day 3",
    label: "Results and awards",
    where: "On site",
    sessions: [
      { time: "09:30", title: "Team presentations", note: "Each team presents its benchmark, results and failure analysis" },
      { time: "12:30", title: "Judging deliberation and lunch" },
      { time: "14:00", title: "Awards and closing" },
    ],
  },
];

// Open skill libraries that extend the agents under evaluation.
export const skillLibraries = [
  {
    name: "Science Skills",
    publisher: "Google DeepMind",
    body: "Agent skills for genomics, structural biology, cheminformatics and literature search, grounded in AlphaGenome, AlphaFold DB, UniProt and 30+ other databases and tools.",
    facts: ["30+ databases and tools", "Apache-2.0"],
    worksWith: "Google Antigravity (Science plugin)",
    url: "https://github.com/google-deepmind/science-skills",
    cta: "View on GitHub",
  },
  {
    name: "Scientific Agent Skills",
    publisher: "K-Dense",
    body: "177 validated skills and 100+ scientific databases across bioinformatics, cheminformatics, proteomics, medicine and drug discovery, built on the open Agent Skills standard.",
    facts: ["177 skills", "MIT"],
    worksWith: "Claude Code, Cursor, Codex, Google Antigravity",
    url: "https://github.com/k-dense-ai/scientific-agent-skills",
    cta: "View on GitHub",
  },
  {
    name: "Biomni Skills and Capabilities",
    publisher: "Phylo",
    body: "Packaged workflows that guide Biomni through scientific work, from single steps to full analyses such as DESeq2 differential expression, cis-eQTL analysis and flow cytometry.",
    facts: ["Transcriptomics", "Genomics", "Molecular design"],
    worksWith: "Biomni",
    url: "https://docs.biomni.phylo.bio/features/skills-and-capabilities",
    cta: "Read the docs",
  },
];

export const resources = [
  { title: "Datasets with ground truth", body: "Curated public data for each track, with reference answers to score agents against." },
  { title: "Evaluation harness", body: "A starter harness that runs an agent on a task set, logs every step, and scores the output." },
  { title: "Agent and compute access", body: "Model API credits and cloud compute so every team can evaluate more than one agent." },
  { title: "Bootcamp materials", body: "Slides, notebooks and recordings from both online sessions." },
  { title: "Mentor office hours", body: "Scheduled time with mentors in genomics, structural biology, clinical research and ML." },
  { title: "Code of conduct", body: "A respectful, harassment-free event for everyone. Read it before you register." },
];

export const criteria = [
  { name: "Benchmark rigor", weight: 30, note: "Well-posed tasks, trustworthy ground truth and fair, transparent scoring." },
  { name: "Depth of insight", weight: 25, note: "Shows where and why agents succeed or fail in reasoning, explanation and generalization." },
  { name: "Scientific soundness", weight: 20, note: "Biological interpretations are correct and appropriately cautious." },
  { name: "Reproducibility", weight: 15, note: "Open tasks, code and logged runs that others can rerun." },
  { name: "Presentation", weight: 10, note: "Clear communication of results, including failure cases." },
];

export const organizers = [
  {
    name: "Md. Jubayer Hossain",
    role: "Lead Organizer",
    affiliation: "Founder, CHIRAL and DeepBio",
    photo: "/leadership/jubayer.jpg",
  },
  {
    name: "Md. Wahidul Islam",
    role: "Co-Organizer",
    affiliation: "Deputy Director, CHIRAL",
    photo: "/leadership/wahidul.jpg",
  },
  {
    name: "Muhibullah Shahjahan",
    role: "Co-Organizer",
    affiliation: "Deputy Director, CHIRAL",
    photo: "/leadership/muhibullah.jpg",
  },
];

// Event partners, grouped by tier in the order listed here.
// To add one: put the logo in public/partners/ (SVG or PNG, transparent background
// works best) and add an entry. Without a logo, the name is shown as a monogram.
export type Partner = {
  name: string;
  tier: string;
  logo?: string; // e.g. "/partners/chiral.svg"
  url?: string;
};

// Host organizations: shown in the hero "Hosted by" row.
export type Host = { name: string; logo: string; url?: string };

export const hosts: Host[] = [
  { name: "CHIRAL Bangladesh", logo: "/hosts/chiral_logo_web.jpg" }, // TODO: add url
  { name: "DeepBio", logo: "/hosts/DeepBioLogo.png" }, // TODO: add url
];

export const partnerTiers = ["Partners", "Community partners"];

export const partners: Partner[] = [
  // { name: "Example Org", tier: "Partners", logo: "/partners/example.svg", url: "https://example.org" },
];

// Placeholder slots shown while `partners` is empty, so potential partners
// can see the kinds of partnership available. Each opens a pre-filled email.
export const openPartnerSlots = [
  { role: "Compute partner", hint: "GPU time or cloud credits" },
  { role: "AI model partner", hint: "Model API access for teams" },
  { role: "Academic partner", hint: "University or research institute" },
  { role: "Prize sponsor", hint: "Awards and travel grants" },
];

export const partnerOffers = [
  { title: "Compute and model access", body: "GPU time, cloud credits or model API access so teams can evaluate several agents." },
  { title: "Mentors and judges", body: "Scientists and engineers who can guide teams for a few hours." },
  { title: "Prizes and travel", body: "Awards for winning teams, or travel support for students outside Dhaka." },
];

export const faqs = [
  {
    q: "Do I need to know both biology and programming?",
    a: "No. Teams are mixed on purpose. Strong teams usually pair people who know the biology with people who write Python.",
  },
  {
    q: "Are we building agents or evaluating them?",
    a: "Mainly evaluating. Teams design benchmark tasks in a track, run one or more AI agents on them, and analyse how well the agents reason, explain and generalize. You may build a simple agent as a baseline, but the main deliverable is the evaluation.",
  },
  {
    q: "What counts as an agentic AI system?",
    a: "A program built around a language model that plans steps, calls real tools such as BLAST, AMRFinder or a docking engine, reads the results, and decides what to do next. A chatbot that only answers questions does not count.",
  },
  {
    q: "Which agents will we evaluate?",
    a: "The core benchmark covers three agents: Biomni, Claude for Life Sciences and Google Antigravity. Every team evaluates all three on the same tasks so results can be compared. Teams may add other agents or a simple baseline of their own. Record versions and settings so others can reproduce your results.",
  },
  {
    q: "Can I register without a team?",
    a: "Yes. Solo registrants are matched into teams of 3 to 5 during team formation on Day 1.",
  },
  {
    q: "Is there a registration fee?",
    a: "To be confirmed. We will announce this when registration opens.", // TODO
  },
  {
    q: "Can I join remotely?",
    a: "The bootcamp is online. The evaluation days and presentations are in person in Dhaka.",
  },
  {
    q: "Who owns our benchmark and results?",
    a: "Your team does. We ask that tasks, code and results from judged projects be released openly so others can reuse them.",
  },
];

// Illustrative evaluation run shown in the hero. Not real results.
export const traceLines: { kind: "goal" | "plan" | "tool" | "think" | "ok" | "done"; text: string }[] = [
  { kind: "goal", text: "Task 07/40: find the causal gene at a type 2 diabetes GWAS locus" },
  { kind: "tool", text: "run-agent --agent A --task t2d-07" },
  { kind: "ok", text: "9 tool calls: fine-mapping, eQTL colocalization, MR" },
  { kind: "ok", text: "Answer: SLC30A8, posterior probability 0.82" },
  { kind: "tool", text: "score --truth truth/t2d-07.json" },
  { kind: "ok", text: "Reasoning: correct gene, valid colocalization" },
  { kind: "ok", text: "Explanation: cites credible set, no caveat on LD" },
  { kind: "think", text: "Does it hold for a South Asian cohort?" },
  { kind: "tool", text: "run-agent --agent A --task t2d-07-sas  # held out" },
  { kind: "ok", text: "Chose a different gene, confidence unchanged" },
  { kind: "done", text: "Generalization gap logged for analysis." },
];
