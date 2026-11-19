// Content for the Preparation resources page: agent guide, toolbox and FAQ.
// Everything here is about USING AI agents on antimicrobial resistance in Bangladesh.
// Nothing asks teams to build software. Copy is written for this event.
import { criteria, event, faqs, tieBreak } from "@/content";

export type ResLink = { label: string; href: string };

/* ------------------------------------------------------------------ */
/* Agent guide                                                         */
/* ------------------------------------------------------------------ */

export type GuideStep = {
  id: string;
  title: string;
  body: string;
  checks: string[];
  // Step 1: what an AI agent is, and is not, suited to.
  fit?: { good: string[]; other: string[] };
  caution?: string;
  // Shown as a monospace block with a caption.
  snippet?: { heading: string; caption: string; code: string };
  // Step 5: how much weight a claim can bear.
  scale?: { label: string; note: string }[];
  links: ResLink[];
};

export const guideSteps: GuideStep[] = [
  {
    id: "question",
    title: "Start with a question",
    body: "Begin with something you actually want to know about resistance in Bangladesh, and only then think about the agent. A sharp question names a protein or gene, the organism it belongs to, and a comparison: this enzyme against that variant.",
    checks: [
      "Name the protein or gene, the organism, and why it matters here: a ward, a market, a field, a farm.",
      "Decide now what result would convince you, and what would make you drop the idea.",
      "Go narrow. One question answered properly beats five answered loosely.",
    ],
    fit: {
      good: [
        "Fetching sequences and structures and comparing variants.",
        "Mapping a mutation onto a protein and seeing what it touches.",
        "Pulling together what databases and papers already say.",
      ],
      other: [
        "Whether a bacterium truly resists a drug: that needs a lab test.",
        "Any decision about how to treat a patient or an animal.",
        "How common resistance is in the country: that needs surveillance.",
      ],
    },
    links: [
      { label: "The four areas", href: "/#challenges" },
      { label: "Three questions for every answer", href: "/#about" },
    ],
  },
  {
    id: "inputs",
    title: "Collect your inputs",
    body: "The agent works with what you hand it. Before you open Antigravity, gather the accessions of the proteins or sequences you want analysed, the names of the drugs involved, and a note of which organism each comes from.",
    checks: [
      "Prefer accession numbers to names. Names change and get misspelled; accessions do not.",
      "For each sequence record the organism and, where you know it, the host and country.",
      "Keep one running list of everything you used. The jury will ask for it.",
    ],
    caution:
      "Genes and mutations go by different names and numbering in different databases. Confirm that the identifier you paste in points at the thing you mean. And never give an agent patient records or anything else that could identify a person.",
    links: [
      { label: "Where to find data", href: "#toolbox" },
      { label: "Rules on data", href: "/terms/#data" },
    ],
  },
  {
    id: "existing",
    title: "Find out what is known",
    body: "Spend an hour reading before you spend a day prompting. Papers from Bangladeshi and regional groups, and the curated resistance databases, tell you what to expect. That is the yardstick you will hold the agent's answer against.",
    checks: [
      "Search for your organism together with Bangladesh or South Asia.",
      "Look up your gene in a curated resistance database.",
      "Note two or three facts you are sure of. Use them later to test the agent.",
    ],
    caution:
      "If the answer is in every textbook, the agent may just be reciting it. That tells you nothing about whether it can analyse. Local data and less-studied organisms make a better test.",
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov" },
      { label: "Europe PMC", href: "https://europepmc.org" },
      { label: "CARD", href: "https://card.mcmaster.ca" },
    ],
  },
  {
    id: "run",
    title: "Brief the agent",
    body: "Write to Antigravity the way you would brief a capable new colleague: what you are after, what it has to work with, what to do, and what to hand back. Then let it get on with it, and watch which Science Skills it reaches for.",
    checks: [
      "Ask it to show its method and evidence alongside its answer.",
      "Check the Science plugin is on, and note which skills the agent used.",
      "Write down the Antigravity version, the date and the exact brief.",
      "Save the whole session. You will need it.",
    ],
    snippet: {
      heading: "A brief you could adapt",
      caption: "Ordinary language works. What matters is being exact about the inputs and about what you want returned.",
      code: `Goal: find out where the variants of the NDM
carbapenemase differ from NDM-1, and whether any
difference lies close to the active site.

Inputs: UniProt entries for NDM variants; an
experimental structure of NDM-1 from the PDB.

Do: fetch the sequences, align them, list the
positions that vary, then measure how far each
is from the zinc ions in the structure.

Return: a table of variants and changed positions,
the distances, every skill and database you used,
and how sure you are about each claim.`,
    },
    caution:
      "Antigravity has usage limits, and a skill can fail when a database is slow or down. Try a small request first, and keep within the terms of each source.",
    links: [
      { label: "Google Antigravity", href: "https://antigravity.google/" },
      { label: "Science Skills", href: "https://github.com/google-deepmind/science-skills" },
    ],
  },
  {
    id: "trace",
    title: "Read the record, then the answer",
    body: "Antigravity keeps a record of what it planned, which skills it ran, what came back and what broke. Go through that record before you look at its conclusion. It is the only way to tell which parts of the answer rest on something.",
    checks: [
      "Which skills and which database entries did it really use?",
      "Did any step fail or come back empty, and did it press on anyway?",
      "Can you point to a line in the record for each claim in the summary?",
      "Is it more confident than the evidence allows?",
    ],
    scale: [
      { label: "Unsupported", note: "Said, with nothing in the record behind it" },
      { label: "Plausible", note: "Fits the record, but never shown" },
      { label: "Supported", note: "A tool result in the record shows it" },
      { label: "Verified", note: "You confirmed it yourself, another way" },
    ],
    links: [{ label: "How to test an answer", href: "#faq" }],
  },
  {
    id: "compare",
    title: "Test the answer",
    body: "Now try to break it. Hold the result against the published picture, run the brief again in a fresh session, and repeat the one step everything hinges on yourself, by opening the database in a browser.",
    checks: [
      "Does it agree with what Bangladeshi and regional studies report?",
      "Does a second run say the same? Agreement helps, but it is not proof.",
      "Redo the deciding step by hand on the database’s own website.",
      "Does it still hold for a related protein, or the same one from another organism?",
    ],
    caution:
      "Public databases hold far fewer sequences from Bangladesh than from Europe or North America. A pattern seen in three local entries is a lead, not a finding. Always say how many Bangladeshi samples a result rests on.",
    links: [
      { label: "UniProt", href: "https://www.uniprot.org" },
      { label: "RCSB PDB", href: "https://www.rcsb.org" },
      { label: "Tools for checking", href: "#toolbox" },
    ],
  },
  {
    id: "interpret",
    title: "Write down what you learned",
    body: "What you have at the end is a well-argued lead, not a proven fact. Say so. And when the agent got something wrong, report that too: knowing where it fails on problems that matter in Bangladesh is useful to everyone who comes after you.",
    checks: [
      "Keep what you observed apart from what you suspect.",
      "List what the agent got wrong or could not manage.",
      "Say what a laboratory or a field study would need to confirm.",
      "Bring your mentors in while there is still time to change course.",
    ],
    links: [
      { label: "Your ten minutes", href: "#presentation" },
      { label: "Mentors", href: "/committees/#mentors" },
      { label: "Which mentor to ask", href: "#faq" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Toolbox                                                             */
/* ------------------------------------------------------------------ */
// Stages 3 to 7 list the sources that Science Skills (v1.4) can reach, taken from
// the plugin's own skill list. Logos live in public/tools/<logo>.

export const toolStages = [
  { n: 1, title: "The agent", body: "The agent every team uses." },
  { n: 2, title: "Its skills", body: "The plugin that lets the agent do science." },
  { n: 3, title: "Proteins and structures", body: "Where most resistance questions start: the enzyme or target, its sequence and its shape." },
  { n: 4, title: "Genes and sequences", body: "Fetch sequences, look up genes, and read the genome around them." },
  { n: 5, title: "Drugs and compounds", body: "Antibiotics, antifungals and what is known about how they act." },
  { n: 6, title: "Pathways and function", body: "What a protein does and what it works with." },
  { n: 7, title: "Literature", body: "What has already been published, including work from Bangladesh." },
  { n: 8, title: "Resistance references", body: "Not part of Science Skills, but worth opening in a browser to check the agent." },
];

export type Tool = {
  name: string;
  body: string;
  url: string;
  stage: number;
  kind: "AI agent" | "Skill plugin" | "Database" | "Tool" | "AI model";
  logo?: string; // file in public/tools
  skill?: string; // name of the Science Skill that reaches it
  essential?: boolean;
  amr?: boolean; // especially useful for resistance work
};

export const toolHost = (url: string) => new URL(url).host.replace(/^www\./, "");

export const tools: Tool[] = [
  // 1. The agent
  { name: "Google Antigravity", body: "Desktop app in which an AI agent plans a task, runs tools and code, and keeps a record of each step.", url: "https://antigravity.google/", stage: 1, kind: "AI agent", logo: "antigravity.svg", essential: true },

  // 2. Its skills
  { name: "Science Skills", body: "Google DeepMind's open-source plugin: 34 skills for databases, structure tools and literature search.", url: "https://github.com/google-deepmind/science-skills", stage: 2, kind: "Skill plugin", logo: "deepmind.png", essential: true },

  // 3. Proteins and structures
  { name: "UniProt", body: "Protein sequences and curated annotation. The first stop for any resistance enzyme.", url: "https://www.uniprot.org", stage: 3, kind: "Database", logo: "uniprot.png", skill: "uniprot-database", essential: true, amr: true },
  { name: "RCSB Protein Data Bank", body: "Experimentally solved 3D structures, some with an antibiotic bound.", url: "https://www.rcsb.org", stage: 3, kind: "Database", logo: "pdb.png", skill: "pdb-database", essential: true, amr: true },
  { name: "AlphaFold Database", body: "Predicted structures with a confidence score for every residue.", url: "https://alphafold.ebi.ac.uk", stage: 3, kind: "Database", logo: "ebi.svg", skill: "alphafold-database-fetch-and-analyze", amr: true },
  { name: "InterPro", body: "Protein families, domains and functional sites.", url: "https://www.ebi.ac.uk/interpro/", stage: 3, kind: "Database", logo: "interpro.png", skill: "interpro-database", amr: true },
  { name: "Foldseek", body: "Finds proteins with a similar 3D shape, even when the sequences differ.", url: "https://search.foldseek.com", stage: 3, kind: "Tool", logo: "foldseek.png", skill: "foldseek-structural-search", amr: true },
  { name: "PyMOL", body: "Draws and measures structures: distances, contacts, where a mutation sits.", url: "https://www.pymol.org", stage: 3, kind: "Tool", logo: "pymol.png", skill: "pymol", amr: true },
  { name: "Clustal Omega", body: "Aligns many sequences so you can see which positions vary.", url: "https://www.ebi.ac.uk/jdispatcher/msa/clustalo", stage: 3, kind: "Tool", logo: "ebi.svg", skill: "protein-sequence-msa", amr: true },
  { name: "BLAST and ColabFold search", body: "Finds related protein sequences across databases.", url: "https://www.ebi.ac.uk/jdispatcher/sss/ncbiblast", stage: 3, kind: "Tool", logo: "ebi.svg", skill: "protein-sequence-similarity-search", amr: true },

  // 4. Genes and sequences
  { name: "NCBI sequences", body: "Fetches nucleotide and protein records by accession.", url: "https://www.ncbi.nlm.nih.gov", stage: 4, kind: "Database", logo: "ncbi.png", skill: "ncbi-sequence-fetch", amr: true },
  { name: "Ensembl", body: "Genes, transcripts and genome annotation.", url: "https://www.ensembl.org", stage: 4, kind: "Database", logo: "ensembl.png", skill: "ensembl-database" },
  { name: "UCSC Genome Browser", body: "Conservation scores and transcription factor binding sites.", url: "https://genome.ucsc.edu", stage: 4, kind: "Database", logo: "ucsc.png", skill: "ucsc-conservation-and-tfbs" },
  { name: "ClinVar", body: "Human variants and their clinical interpretation.", url: "https://www.ncbi.nlm.nih.gov/clinvar/", stage: 4, kind: "Database", logo: "ncbi.png", skill: "clinvar-database" },
  { name: "dbSNP", body: "Catalogue of short human genetic variants.", url: "https://www.ncbi.nlm.nih.gov/snp/", stage: 4, kind: "Database", logo: "ncbi.png", skill: "dbsnp-database" },
  { name: "gnomAD", body: "How common a human variant is across populations.", url: "https://gnomad.broadinstitute.org", stage: 4, kind: "Database", logo: "gnomad.png", skill: "gnomad-database" },
  { name: "GTEx", body: "Which human tissues express a gene.", url: "https://gtexportal.org", stage: 4, kind: "Database", logo: "gtex.png", skill: "gtex-database" },
  { name: "ENCODE", body: "Candidate regulatory elements in the human genome.", url: "https://www.encodeproject.org", stage: 4, kind: "Database", logo: "encode.png", skill: "encode-ccres-database" },
  { name: "JASPAR", body: "Binding profiles of transcription factors.", url: "https://jaspar.elixir.no", stage: 4, kind: "Database", skill: "jaspar-database" },
  { name: "UniBind", body: "Experimentally supported transcription factor binding sites.", url: "https://unibind.uio.no", stage: 4, kind: "Database", skill: "unibind-database" },
  { name: "Human Protein Atlas", body: "Where human proteins are found in tissues and cells.", url: "https://www.proteinatlas.org", stage: 4, kind: "Database", logo: "hpa.svg", skill: "human-protein-atlas-database" },
  { name: "AlphaGenome", body: "Predicts the effect of a DNA variant on gene regulation.", url: "https://deepmind.google.com/science/alphagenome/", stage: 4, kind: "AI model", logo: "deepmind.png", skill: "alphagenome-single-variant-analysis" },

  // 5. Drugs and compounds
  { name: "ChEMBL", body: "Measured activity of antibiotics, antifungals and other compounds against their targets.", url: "https://www.ebi.ac.uk/chembl/", stage: 5, kind: "Database", logo: "chembl.png", skill: "chembl-database", amr: true },
  { name: "PubChem", body: "Chemical structures and properties of drugs and fungicides.", url: "https://pubchem.ncbi.nlm.nih.gov", stage: 5, kind: "Database", logo: "pubchem.png", skill: "pubchem-database", amr: true },
  { name: "Open Targets", body: "Evidence linking targets to diseases and drugs.", url: "https://platform.opentargets.org", stage: 5, kind: "Database", logo: "opentargets.png", skill: "opentargets-database" },
  { name: "openFDA", body: "Drug labels and adverse-event reports.", url: "https://open.fda.gov", stage: 5, kind: "Database", logo: "openfda.png", skill: "openfda-database" },
  { name: "ClinicalTrials.gov", body: "Registered trials, including those of new antimicrobials.", url: "https://clinicaltrials.gov", stage: 5, kind: "Database", logo: "clinicaltrials.svg", skill: "clinical-trials-database" },

  // 6. Pathways and function
  { name: "STRING", body: "Which proteins interact, physically or functionally.", url: "https://string-db.org", stage: 6, kind: "Database", logo: "string.png", skill: "string-database", amr: true },
  { name: "Reactome", body: "Curated biological pathways.", url: "https://reactome.org", stage: 6, kind: "Database", logo: "reactome.png", skill: "reactome-database" },
  { name: "QuickGO", body: "Gene Ontology terms: what a protein is annotated as doing.", url: "https://www.ebi.ac.uk/QuickGO/", stage: 6, kind: "Database", logo: "ebi.svg", skill: "quickgo-database" },
  { name: "Ontology Lookup Service", body: "Looks up standard terms for diseases, organisms and more.", url: "https://www.ebi.ac.uk/ols4/", stage: 6, kind: "Tool", logo: "ebi.svg", skill: "embl-ebi-ols" },

  // 7. Literature
  { name: "PubMed", body: "The biomedical literature. Search your organism together with Bangladesh.", url: "https://pubmed.ncbi.nlm.nih.gov", stage: 7, kind: "Database", logo: "pubmed.png", skill: "pubmed-database", essential: true, amr: true },
  { name: "Europe PMC", body: "Literature search with open full text.", url: "https://europepmc.org", stage: 7, kind: "Database", logo: "europepmc.png", skill: "literature-search-europepmc", amr: true },
  { name: "bioRxiv", body: "Biology preprints, ahead of journal publication.", url: "https://www.biorxiv.org", stage: 7, kind: "Database", skill: "literature-search-biorxiv" },
  { name: "arXiv", body: "Preprints in computing, physics and quantitative biology.", url: "https://arxiv.org", stage: 7, kind: "Database", logo: "arxiv.svg", skill: "literature-search-arxiv" },
  { name: "OpenAlex", body: "Open index of papers, authors and institutions.", url: "https://openalex.org", stage: 7, kind: "Database", logo: "openalex.png", skill: "literature-search-openalex" },

  // 8. Resistance references (not skills)
  { name: "CARD", body: "Curated catalogue of resistance genes, how they work and which drugs they defeat.", url: "https://card.mcmaster.ca", stage: 8, kind: "Database", logo: "card.png", amr: true },
  { name: "NCBI Pathogen Detection", body: "Bacterial isolates from patients, food and the environment, searchable by country.", url: "https://www.ncbi.nlm.nih.gov/pathogens/", stage: 8, kind: "Database", logo: "ncbi.png", amr: true },
  { name: "WHO GLASS", body: "Country-level surveillance of resistance and antimicrobial use.", url: "https://www.who.int/initiatives/glass", stage: 8, kind: "Database", logo: "who.png", amr: true },
];

export const toolNotes = [
  "Each source has its own licence and conditions. The Science Skills repository keeps a list; read it before you rely on a source.",
  "A few skills need a free API key, which the agent will ask for the first time.",
  "Logos belong to their owners and are shown only to identify each source. No endorsement is implied.",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export type FaqItem = {
  q: string;
  a: string;
  points?: string[];
  links?: ResLink[];
  category: "participation" | "science";
};

export const faqCategories = [
  { id: "participation", title: "Joining and taking part" },
  { id: "science", title: "Agents and the science" },
] as const;

const links = {
  areas: { label: "The four areas", href: "/#challenges" },
  register: { label: "Registration", href: "/register/" },
  timeline: { label: "Timeline", href: "/#timeline" },
  judging: { label: "Judging and prizes", href: "/#judging" },
  mentors: { label: "Mentors", href: "/committees/#mentors" },
  guide: { label: "Working with the agent", href: "#guide" },
  toolbox: { label: "Toolbox", href: "#toolbox" },
  talk: { label: "Your ten minutes", href: "#presentation" },
};
const rule = (id: string, label: string): ResLink => ({ label: `Rules: ${label}`, href: `/terms/#${id}` });

const participation: Omit<FaqItem, "category">[] = [
  {
    q: `What is ${event.shortName}, in one paragraph?`,
    a: `A team hackathon run from Dhaka. Over several weeks, mixed teams direct an AI agent, Google Antigravity, to investigate antimicrobial resistance in Bangladesh in one of four areas: health, food, agriculture or livestock. The full name is ${event.name}.`,
    links: [links.areas, links.timeline],
  },
  {
    q: "What do I get out of it?",
    a: "Practical experience of using an AI agent on a real resistance problem, in a team, with people who know more than you about half of it.",
    points: [
      "An online bootcamp that brings everyone up to the same starting line.",
      "Two mentors for your team.",
      "Teammates from other disciplines and other institutions.",
      "A chance to present to a jury and win a prize.",
    ],
    links: [links.timeline, links.mentors],
  },
  { ...faqs[0], links: [links.register, rule("eligibility", "who can take part")] },
  { ...faqs[1], links: [links.register, rule("teams", "teams")] },
  { ...faqs[2], links: [links.guide] },
  { ...faqs[3], links: [links.timeline] },
  {
    q: "Does it cost anything?",
    a: `${event.fee}. We will say when sign-up opens.`,
    links: [links.register],
  },
  {
    q: "I have never used an AI agent. Is that a problem?",
    a: "No. The bootcamp starts from zero, your agent mentor is there for exactly this, and the guide on this page walks through the whole process. If you want a head start, install Antigravity, switch on the Science plugin and ask it something small.",
    links: [links.guide, links.toolbox],
  },
  {
    q: "Can I work alone?",
    a: "No. You sign up alone, but all work is done and presented by teams. If you come without one, the organizers find you one.",
    links: [rule("teams", "teams")],
  },
  {
    q: "How long does it run, and what happens when?",
    a: "Several weeks, not one weekend. After sign-up closes you are placed in a team, attend the online bootcamp and meet your mentors. Your team then works online on its question, hands in by the deadline, and presents at the final in Dhaka.",
    links: [links.timeline],
  },
  {
    q: "What exactly do we hand in?",
    a: "A write-up of your work by the hand-in date, and a ten-minute presentation at the final. Both must list the skills and data the agent used and the main instructions you gave.",
    links: [links.talk, rule("submission", "what teams submit")],
  },
  {
    q: "How big is a team?",
    a: `${event.teamSize[0].toUpperCase()}${event.teamSize.slice(1)} people, ideally from different backgrounds. One member acts as the contact for the organizers.`,
    links: [rule("teams", "teams")],
  },
  {
    q: "Can our team cover more than one area?",
    a: "Pick one of the four as your home: Health, Food, Agriculture or Livestock. Your project may well touch a second, since resistance moves between them. You are free to replace the sample question with your own.",
    links: [links.areas, rule("challenges", "the four areas")],
  },
  {
    q: "Who are the mentors and how do we get one?",
    a: "Every team gets a science mentor and an agent mentor. The organizers pair you according to your area and the mentors' expertise and free time. Meetings are online. Mentors give advice; the decisions and the work are yours.",
    links: [links.mentors, rule("mentoring", "mentors")],
  },
  {
    q: "How is the work scored?",
    a: `On ${criteria.length} criteria, each marked out of 10 and then weighted. ${tieBreak}`,
    points: criteria.map((c) => `${c.name}, ${c.weight}%: ${c.note}`),
    links: [links.judging, rule("judging", "how judging works")],
  },
  {
    q: "Who decides the winners?",
    a: "A jury of scientists and practitioners. Names go on the People page as they are confirmed.",
    links: [{ label: "Committees", href: "/committees/" }],
  },
  {
    q: "What are the prizes?",
    a: "The top three teams receive prizes. We will publish the amounts when our sponsors are confirmed.",
    links: [links.judging, rule("prizes", "prizes")],
  },
  {
    q: "Can we use data from our own hospital, lab or farm?",
    a: "Only if you have the right to, and never if a person could be identified from it. Patient records must not be used or shown to an agent. Fully anonymized data, and anything from public scientific databases, is fine. Other people's data and code can be used where their licence allows; say where it came from.",
    links: [rule("data", "data and software"), links.toolbox],
  },
  {
    q: "What behaviour is expected?",
    a: "Honest science and decent treatment of each other. Help other teams if you like, but do not pass their work off as yours. Copying, invented or altered results, and lobbying the jury will get a team removed.",
    links: [rule("conduct", "conduct")],
  },
  {
    q: "Who owns what we produce?",
    a: "Your team does. Nothing passes to the organizers, the mentors or anyone else. We only ask permission to show your title, summary and slides when reporting on the event.",
    links: [rule("ip", "who owns the work")],
  },
  {
    q: "How do I sign up?",
    a: "On our Luma event page, one person at a time. Teammates enter the same team name. If you have no team, leave it blank. Mentors use a separate sign-up.",
    links: [links.register],
  },
  {
    q: "I would like to mentor. How?",
    a: "Use the mentor sign-up and tell us whether you can help with the science, with the agent, or both. It is online and takes a few hours spread over the working weeks.",
    links: [{ label: "Mentor sign-up", href: "/register/#mentors" }, links.mentors],
  },
  {
    q: "What do you do with my details?",
    a: "You give them to Luma when you register, and we use them only to run this event. This website itself sets no tracking cookies and runs no analytics.",
    links: [{ label: "Privacy notice", href: "/privacy/" }],
  },
];

const science: Omit<FaqItem, "category">[] = [
  {
    q: "Why does everyone use the same agent?",
    a: "So that teams can be compared fairly, the bootcamp can go deep on one tool, and mentors can actually help. Every team works in Google Antigravity with the Science Skills plugin from Google DeepMind. You may open any database or tool by hand to check what the agent tells you.",
    links: [links.toolbox],
  },
  {
    q: "What is an AI agent, and where does it fall short?",
    a: "It is a language model that can act: it plans an analysis, runs real bioinformatics tools and databases, reads what comes back and chooses its next move, without you holding its hand at each step.",
    points: [
      "It can state something wrong with complete confidence.",
      "Its summary can drift from what it actually ran.",
      "Ask twice and you may get two different answers.",
      "It may repeat what it has read instead of analysing your data.",
    ],
    links: [links.guide],
  },
  {
    q: "What equipment do I need?",
    a: "A laptop that can run the Antigravity desktop app, and a connection that can hold a video call. No GPU, no server, no programming. We walk every team through the installation.",
    links: [links.toolbox],
  },
  {
    q: "How should I word a request to an agent?",
    a: "Say what you want to find out, what it should work from, what it should do, and what you want back. Ask it to show its evidence. Give accession numbers, not just names. There is a worked example in the guide above.",
    links: [links.guide],
  },
  {
    q: "What are reasoning, explanation and generalization?",
    a: "Three questions to ask of any answer an agent gives you.",
    points: [
      "Reasoning: did it get there by a sound route, with sensible tools and settings?",
      "Explanation: does its account match its own record, and does it admit what it is unsure of?",
      "Generalization: does the finding survive when you repeat it on Bangladeshi data?",
    ],
    links: [{ label: "Three questions for every answer", href: "/#about" }],
  },
  {
    q: "How can I tell whether to believe an agent?",
    a: "Not by how sure it sounds. Test it against something it did not produce.",
    points: [
      "Read its record and confirm it ran what it claims.",
      "Compare with published studies and curated databases.",
      "Run it again in a fresh session.",
      "Repeat the deciding step yourself on the database’s website.",
    ],
    links: [links.guide, links.toolbox],
  },
  {
    q: "Is there enough data from Bangladesh to work with?",
    a: "Less than you would hope. Public databases are dominated by samples from wealthier countries, and Bangladeshi genomes are a small share. That is part of the point: finding out what can and cannot be concluded from what exists is a useful result. Always report how many local samples a finding rests on.",
    links: [links.toolbox],
  },
  {
    q: "What is a skill?",
    a: "A ready-made set of instructions that shows the agent how to carry out one kind of scientific task or query one database. Science Skills, from Google DeepMind, bundles 34 of them. You switch the plugin on inside Antigravity; you do not write anything.",
    links: [links.toolbox],
  },
  {
    q: "Which mentor do I ask about what?",
    a: "Science mentor: your question, your choice of organisms and data, and what a result means biologically. Agent mentor: getting Antigravity to work, wording instructions, and reading its record. If you cannot tell which it is, ask either and explain what you were trying to do.",
    links: [links.mentors],
  },
  {
    q: "Can an agent's result be used to guide treatment?",
    a: "No. Nothing produced in this hackathon is a diagnosis or a treatment recommendation. An agent's result is a lead that still has to be confirmed in a laboratory and reviewed by people qualified to judge it.",
    links: [links.talk],
  },
];

export const faqAll: FaqItem[] = [
  ...participation.map((f) => ({ ...f, category: "participation" as const })),
  ...science.map((f) => ({ ...f, category: "science" as const })),
];

export const faqSuggestions = ["team", "prizes", "mentor", "data", "Bangladesh"];
