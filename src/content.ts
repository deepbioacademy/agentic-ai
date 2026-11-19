// All event copy lives here. Replace placeholders (marked TODO) before launch.
// The hackathon is about USING AI agents in computational biology, applied to
// antimicrobial resistance in Bangladesh. Teams do not build agents or software.
// Copy is written for this event. Do not paste text from other hackathon sites.

// Prefix for files in public/ when the site is served from a sub-path
// (GitHub Pages serves it at /agentic-ai). Set at build time.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;

export const event = {
  shortName: "AAI4CB",
  title: "AAI4CB Hackathon 2027",
  name: "Agentic AI for Computational Biology Hackathon 2027",
  fullTitle: "Agentic AI for Computational Biology",
  year: "2027",
  theme: "Agentic AI in computational biology",
  tagline:
    "Teams use an AI agent to investigate antimicrobial resistance in Bangladesh, across health, food, agriculture and livestock.",
  location: "Dhaka, Bangladesh",
  venue: "To be announced", // TODO: venue name
  finalEventDate: "To be announced", // TODO: date of the in-person final
  registrationDeadline: "To be announced", // TODO
  lumaUrl: "", // TODO: Luma event URL, e.g. "https://luma.com/your-event". Registration happens there.
  mentorUrl: "", // TODO: Luma link or form for mentor sign-up. Falls back to email while empty.
  communityUrl: "/#contact", // TODO: Discord / Slack / WhatsApp invite
  contactEmail: "team@example.org", // TODO: real contact address
  teamSize: "3 to 5",
  fee: "To be confirmed", // TODO
};

// Registration is handled on Luma, not on this site. Until the Luma URL is set,
// every Register button points at the registration page, which says it opens soon.
export const registerOpen = event.lumaUrl.startsWith("http");
export const mentorOpen = event.mentorUrl.startsWith("http");
export const mentorHref = mentorOpen
  ? event.mentorUrl
  : `mailto:${event.contactEmail}?subject=${encodeURIComponent("AAI4CB mentor sign-up")}`;

// Main navigation. Links start with "/" so they also work from sub-pages.
export const nav = [
  { href: "/#about", label: "The idea" },
  { href: "/#challenges", label: "Challenges" },
  { href: "/#participate", label: "Take part" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#judging", label: "Judging" },
  { href: "/resources/", label: "Resources" },
  { href: "/committees/", label: "People" },
  { href: "/#contact", label: "Contact" },
];

export const footerNav = [
  {
    title: "Hackathon",
    links: [
      { href: "/#about", label: "Why this hackathon" },
      { href: "/#challenges", label: "The four areas" },
      { href: "/#participate", label: "How to take part" },
      { href: "/#timeline", label: "Timeline" },
      { href: "/#judging", label: "Judging and prizes" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Joining",
    links: [
      { href: "/register/", label: "Registration" },
      { href: "/register/#mentors", label: "Mentor sign-up" },
      { href: "/terms/", label: "Rules of participation" },
      { href: "/privacy/", label: "Privacy notice" },
    ],
  },
  {
    title: "Preparing",
    links: [
      { href: "/resources/#guide", label: "Working with the agent" },
      { href: "/resources/#presentation", label: "Your ten minutes" },
      { href: "/resources/#toolbox", label: "Toolbox" },
      { href: "/resources/#faq", label: "FAQ" },
    ],
  },
  {
    title: "People",
    links: [
      { href: "/#organizers", label: "Organizers and partners" },
      { href: "/committees/", label: "Committees and mentors" },
    ],
  },
];

// Hero fact tiles.
export const stats = [
  { icon: "calendar", value: event.finalEventDate, label: "Final event" },
  { icon: "pin", value: "Dhaka", label: "In person, venue to be announced" },
  { icon: "tracks", value: "4 areas", label: "Health, food, agriculture, livestock" },
  { icon: "agents", value: "AI agent", label: "Google Antigravity with Science Skills" },
];

// What every team checks in an agent's work.
export const pillars = [
  {
    title: "Reasoning",
    question: "Did the agent get there by a sound route?",
    body: "Look at the analysis it chose, the tools and settings it used, and whether each step holds up.",
  },
  {
    title: "Explanation",
    question: "Does its account match what it actually ran?",
    body: "Check that the evidence it cites is really in its record, and that it admits what it is unsure of.",
  },
  {
    title: "Generalization",
    question: "Does the finding survive Bangladeshi data?",
    body: "Most public data come from elsewhere. Repeat the work on isolates from Bangladesh and South Asia wherever they exist.",
  },
];

// One agent for everyone. Keeping to a single agent keeps teams comparable and
// lets the bootcamp and mentors go deep on one tool.
export const agent = {
  name: "Google Antigravity",
  developer: "Google",
  logo: "/tools/antigravity.svg",
  url: "https://antigravity.google/",
  about:
    "A desktop app in which an AI agent plans a task, runs code and tools, browses, and reports back with a record of everything it did.",
};

// The plugin that gives the agent its scientific abilities.
export const skillsPlugin = {
  name: "Science Skills",
  developer: "Google DeepMind",
  logo: "/tools/deepmind.png",
  url: "https://github.com/google-deepmind/science-skills",
  count: 34,
  about:
    "An open-source set of skills that teach the agent how to query scientific databases and run standard analyses: protein structures, sequences, compounds, pathways and the literature.",
  setup: "In Antigravity: Customizations, then Build with Google, then Science, then Add.",
};

// Logos circling the agent in the hero: sources its skills can reach.
export const orbit = {
  inner: [
    { id: "uniprot", name: "UniProt", ext: "png" },
    { id: "pdb", name: "Protein Data Bank", ext: "png" },
    { id: "ebi", name: "AlphaFold Database", ext: "svg" },
    { id: "interpro", name: "InterPro", ext: "png" },
    { id: "foldseek", name: "Foldseek", ext: "png" },
    { id: "pymol", name: "PyMOL", ext: "png" },
  ],
  outer: [
    { id: "pubmed", name: "PubMed", ext: "png" },
    { id: "chembl", name: "ChEMBL", ext: "png" },
    { id: "pubchem", name: "PubChem", ext: "png" },
    { id: "ensembl", name: "Ensembl", ext: "png" },
    { id: "string", name: "STRING", ext: "png" },
    { id: "reactome", name: "Reactome", ext: "png" },
    { id: "europepmc", name: "Europe PMC", ext: "png" },
    { id: "openalex", name: "OpenAlex", ext: "png" },
    { id: "ncbi", name: "NCBI", ext: "png" },
  ],
};

// The shared problem and its four areas. The area names (Health, Food, Agriculture,
// Livestock) are fixed. Do not rename them.
export const challenge = {
  name: "Antimicrobial resistance",
  short: "AMR",
};

// Each area carries a sample question. It is a starting point, not a requirement.
// Area names and titles are fixed. `code` is an internal id and is never shown.
export const areas = [
  {
    code: "A",
    theme: "Health",
    short: "Health",
    icon: "health",
    hue: "#ff8a8a",
    title: "Antibiotic resistance",
    body: "On Bangladeshi wards, infections more and more often resist the antibiotics doctors reach for first. Put the agent to work on the genes and proteins that make hospital bacteria resistant, and on how they pass from one patient to the next.",
    question:
      "The NDM carbapenemase now has dozens of variants. Where do their amino-acid differences fall on the enzyme’s structure, and which sit near the active site?",
  },
  {
    code: "B",
    theme: "Food",
    short: "Food",
    icon: "food",
    hue: "#f2b866",
    title: "Resistance in pathogens",
    body: "Meat, fish, milk and vegetables pass through live-bird stalls and kitchen markets on their way to the table. Put the agent to work tracing resistant bacteria, and the genes they carry, along that route.",
    question:
      "Fluoroquinolone resistance in Salmonella is tied to changes in DNA gyrase. Where do the known resistance mutations sit in the protein, and what do they touch?",
  },
  {
    code: "C",
    theme: "Agriculture",
    short: "Agriculture",
    icon: "agriculture",
    hue: "#6fcf97",
    title: "Antifungal resistance",
    body: "Rice and wheat growers rely on fungicides to hold back diseases such as blast. Put the agent to work on how crop fungi become resistant, and on what that could mean for the antifungal medicines used in hospitals.",
    question:
      "How similar are the fungicide target proteins of the wheat blast fungus to their counterparts in fungi that infect people, and what does that imply for cross-resistance?",
  },
  {
    code: "D",
    theme: "Livestock",
    short: "Livestock",
    icon: "livestock",
    hue: "#b9a4ff",
    title: "Antimicrobial resistance",
    body: "Poultry, cattle and fish farming feed the country and have grown quickly, and antibiotics are often part of the routine. Put the agent to work on the resistance that builds up in farm animals, and on where it travels next.",
    question:
      "Colistin resistance in farm animals is linked to the MCR family of enzymes. How alike are the family members in sequence and structure, and what do they share at the active site?",
  },
];

// How resistance travels between the areas. `between` lists the area codes a link joins.
export const connections = [
  {
    id: "livestock-food",
    between: ["D", "B"],
    label: "Livestock to Food",
    body: "Chickens and fish reach a city market within hours of leaving the farm. Whatever bacteria they carry arrive with them.",
  },
  {
    id: "food-health",
    between: ["B", "A"],
    label: "Food to Health",
    body: "Bacteria picked up from food can hand their resistance genes to the ones that later cause infections in patients.",
  },
  {
    id: "agriculture-health",
    between: ["C", "A"],
    label: "Agriculture to Health",
    body: "Some crop fungicides belong to the same chemical family as antifungal medicines, so resistance to one can blunt the other.",
  },
  {
    id: "water",
    between: ["A", "B", "C", "D"],
    label: "Water links all four",
    body: "Hospital drains, farm run-off and household waste meet in the same rivers and canals. Each flood season mixes them again.",
  },
];

// Three steps from sign-up to the final presentation.
export const steps = [
  {
    title: "Sign up on Luma",
    body: "Fill in the short form with your background and interests. Registering with friends? Type the same team name.",
  },
  {
    title: "Join a team, pick an area",
    body: `Teams have ${event.teamSize} people. Yours is paired with two mentors: one for the science, one for the agent.`,
  },
  {
    title: "Investigate, check, present",
    body: "Direct the agent at your question, test what it reports, then bring your findings to the final in Dhaka.",
  },
];

// Milestones from registration to the final event.
// TODO: replace every "To be announced" with a real date.
export const milestones: { date: string; phase: string; title: string; final?: boolean }[] = [
  { date: "To be announced", phase: "Sign-up", title: "Registration opens on Luma" },
  { date: "To be announced", phase: "Sign-up", title: "Last day to register" },
  { date: "To be announced", phase: "Teams", title: "Organizers put the teams together" },
  { date: "To be announced", phase: "Teams", title: "You hear which team you are in" },
  { date: "To be announced", phase: "Bootcamp", title: "Online bootcamp on working with Antigravity" },
  { date: "To be announced", phase: "Mentoring", title: "First meetings between teams and mentors" },
  { date: "To be announced", phase: "Hand-in", title: "Last day to hand in your work" },
  { date: "To be announced", phase: "Judging", title: "Jury finishes reading the submissions" },
  { date: event.finalEventDate, phase: "Final", title: "Presentations and awards in Dhaka", final: true },
];

// TODO: set prize amounts once sponsors are confirmed.
export const prizes = [
  { place: 1, label: "Winner", amount: "To be announced" },
  { place: 2, label: "Second", amount: "To be announced" },
  { place: 3, label: "Third", amount: "To be announced" },
];

// Judging criteria. Each is scored 0 to 10; the final score is the weighted sum.
export const criteria = [
  { name: "Scientific soundness", weight: 30, note: "A clear question, a valid method, and conclusions the evidence can carry." },
  { name: "Relevance to Bangladesh", weight: 25, note: "Addresses a resistance problem that matters here, with a realistic route to being used." },
  { name: "Use of the AI agent", weight: 20, note: "The agent was used for what it is good at, and its output was checked and recorded." },
  { name: "Originality", weight: 15, note: "A fresh question, an unexpected data source, or a new way of combining them." },
  { name: "Clarity", weight: 10, note: "A presentation and write-up that someone outside the team can follow." },
];
export const tieBreak =
  "If two teams finish level, the one with the higher mark for scientific soundness is placed first. If they are still level, relevance to Bangladesh settles it.";

// Suggested structure for the 10-minute final presentation.
export const presentation = [
  { title: "Who you are, what you asked", minutes: 1, points: ["Your team", "Your area", "Your question in one sentence"] },
  { title: "Why it matters here", minutes: 3, points: ["The resistance problem you picked", "Who in Bangladesh it affects", "What was already known", "The data you could get"] },
  { title: "How you worked", minutes: 3, points: ["What you asked the agent to do", "Which skills it used", "What you did by hand", "How you tested its answers"] },
  { title: "What you found", minutes: 3, points: ["Your main result", "How sure you are", "Where the agent went wrong", "What should happen next"] },
];

// Every team reports these, in the submission and in the presentation.
export const disclosure = [
  "The Antigravity and model version, and which Science Skills ran",
  "Every database, dataset and paper relied on",
  "The main instructions given to the agent",
  "Which findings were tested independently, and how",
];

// The two kinds of mentor every team works with.
export const mentorTypes = [
  {
    id: "scientific",
    title: "Science mentor",
    body: "A microbiologist, clinician, veterinarian, agronomist, bioinformatician or similar.",
    helps: ["Sharpening your question", "Picking organisms and data", "Making biological sense of results", "Pointing you to the literature"],
  },
  {
    id: "agent",
    title: "Agent mentor",
    body: "Someone who uses Antigravity and similar agents day to day and knows how they succeed and fail.",
    helps: ["Installing Antigravity and its skills", "Wording your instructions", "Reading the agent's record", "Catching claims with nothing behind them"],
  },
];

// Mentors are listed here as they are confirmed.
export type Mentor = {
  name: string;
  title: string;
  affiliation: string;
  category: "scientific" | "agent" | "both";
  areas?: string[]; // area names, e.g. ["Health", "Livestock"]
  summary: string;
  keywords: string[];
  availability?: string;
  photo?: string;
};
export const mentors: Mentor[] = [];

// Bodies that run the event. Members are added as they are confirmed.
export type Member = { name: string; role: string; affiliation: string; photo?: string };

export const organizers: Member[] = [
  { name: "Md. Jubayer Hossain", role: "Lead Organizer", affiliation: "Founder, CHIRAL and DeepBio", photo: "/leadership/jubayer.jpg" },
  { name: "Md. Wahidul Islam", role: "Co-Organizer", affiliation: "Deputy Director, CHIRAL", photo: "/leadership/wahidul.jpg" },
  { name: "Muhibullah Shahjahan", role: "Co-Organizer", affiliation: "Deputy Director, CHIRAL", photo: "/leadership/muhibullah.jpg" },
];

export const committees: { id: string; title: string; short: string; body: string; members: Member[] }[] = [
  {
    id: "organizing",
    title: "Organizing Committee",
    short: "Keeps everything moving: sign-ups, teams, schedule and the day in Dhaka.",
    body: "Handles registration, builds the teams, pairs them with mentors and runs the final event.",
    members: organizers,
  },
  {
    id: "scientific",
    title: "Scientific Committee",
    short: "Makes sure the science asked of teams is sound and worth doing.",
    body: "Defines the four areas, chooses what goes in the toolbox and sets how work is judged.",
    members: [], // TODO
  },
  {
    id: "jury",
    title: "Jury",
    short: "Reads every submission and scores the final presentations.",
    body: "Marks each team against the published criteria and decides the winners.",
    members: [], // TODO
  },
];

// Host organizations: shown in the Organizers section.
export type Host = { name: string; logo: string; note: string; url?: string };
export const hosts: Host[] = [
  { name: "CHIRAL Bangladesh", logo: "/hosts/chiral_logo_web.jpg", note: "Host organization" }, // TODO: add url
  { name: "DeepBio", logo: "/hosts/DeepBioLogo.png", note: "Host organization" }, // TODO: add url
];

// Event partners. To add one: put the logo in public/partners/ and add an entry.
// Without a logo, the name is shown as a monogram.
export type Partner = { name: string; tier: string; logo?: string; url?: string };
export const partnerTiers = ["Partners", "Community partners"];
export const partners: Partner[] = [
  // { name: "Example Org", tier: "Partners", logo: "/partners/example.svg", url: "https://example.org" },
];

// Placeholder slots shown while `partners` is empty. Each opens a pre-filled email.
export const openPartnerSlots = [
  { role: "Compute partner", hint: "Cloud credits for teams" },
  { role: "AI partner", hint: "Agent usage for teams" },
  { role: "Academic partner", hint: "University, hospital or research institute" },
  { role: "Prize sponsor", hint: "Awards and travel grants" },
];

// What registered teams receive.
export const resources = [
  { title: "Setup help", body: "A walkthrough for installing Google Antigravity and switching on its Science plugin, with a mentor on call if it fails." },
  { title: "Starter targets", body: "For each area, a shortlist of resistance proteins and organisms that matter in Bangladesh, with their database identifiers." },
  { title: "Sample instructions", body: "Worked examples showing how to ask Antigravity for a resistance analysis and how to read its reply." },
  { title: "Bootcamp recordings", body: "Slides and video from the online sessions, for anyone who misses one." },
  { title: "Mentor hours", body: "Booked online time with your science mentor and your agent mentor." },
  { title: "Shared channel", body: "One group for every team and mentor: announcements, questions and quick help." },
];

// Short FAQ on the home page. The full list is in src/resources.ts.
export const faqs = [
  {
    q: "Who is this for?",
    a: "Students at any level, researchers, doctors, vets, agronomists, pharmacists and people working in industry. If you care about drug resistance in Bangladesh and are curious about AI, you fit. Teams deliberately mix people who know the biology with people who are comfortable at a computer.",
  },
  {
    q: "I don't have a team. Can I still join?",
    a: `Yes. Everyone signs up alone on Luma. Friends who want to stay together type the same team name. Everyone else is placed by the organizers in a team of ${event.teamSize}.`,
  },
  {
    q: "Will I have to code or build an AI agent?",
    a: "No. Every team uses the same ready-made agent, Google Antigravity, with its Science Skills plugin. Your job is to ask a good question about resistance, steer the agent through the analysis, and judge whether to believe the result. Knowing some Python is handy but not needed.",
  },
  {
    q: "Is it online or in Dhaka?",
    a: `Both. The bootcamp, mentor meetings and team work happen online, so you can take part from anywhere in the country. The final, with presentations and awards, is held in person in ${event.location}.`,
  },
];

// Illustrative agent run shown in the hero. Not real results.
export const traceLines: { kind: "goal" | "plan" | "tool" | "think" | "ok" | "done"; text: string }[] = [
  { kind: "goal", text: "Where do NDM variants differ, and does it matter?" },
  { kind: "plan", text: "Get sequences, align, map onto the structure" },
  { kind: "tool", text: "skill: uniprot-database  query: NDM beta-lactamase" },
  { kind: "ok", text: "Retrieved 24 variant sequences" },
  { kind: "tool", text: "skill: protein-sequence-msa  clustal omega" },
  { kind: "ok", text: "17 variable positions" },
  { kind: "tool", text: "skill: pdb-database + pymol  map positions" },
  { kind: "ok", text: "3 positions within 8 Å of the zinc site" },
  { kind: "think", text: "Team check: do papers report these three?" },
  { kind: "tool", text: "skill: pubmed-database  NDM variant activity" },
  { kind: "done", text: "Two are documented. One is a new lead to test." },
];
