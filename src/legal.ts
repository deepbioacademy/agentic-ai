// Rules of participation and privacy notice, written in plain language for this event.
// DRAFT: have the organizers (and, if prizes involve money, someone with legal
// knowledge in Bangladesh) review both before sign-up opens.
import { criteria, event, hosts, tieBreak } from "@/content";

export const legalStatus = "Draft, not yet in force";

const hostNames = hosts.map((h) => h.name).join(" and ");

export const termsIntro = [
  `${event.title} is run by ${hostNames}, both based in Bangladesh. On this page "we" means those organizers and "you" means anyone who signs up.`,
  "The hackathon exists to get doctors, vets, agronomists, biologists and computing people working side by side on antimicrobial resistance in Bangladesh, using an AI agent that already exists, Google Antigravity. You will not be asked to build an agent or write software.",
  "The rules below cover joining, teamwork, what you hand in, how it is scored, and what each side can expect of the other. We have tried to keep them short enough to read.",
];

export type Article = { id: string; title: string; items: string[] };

export const terms: Article[] = [
  {
    id: "eligibility",
    title: "Who can take part",
    items: [
      "Students, researchers, health and veterinary professionals, agricultural scientists, people in industry, and anyone else with a serious interest in the subject.",
      "You join by filling in the Luma form yourself. Nobody can be signed up by someone else.",
      "Sending the form means you have read these rules and agree to follow them.",
      "Tell us the truth about who you are and where you study or work. We may ask you to confirm it.",
      "You can be in one team only, and that team hands in one piece of work.",
      "Joining does not make you our employee, contractor or representative.",
    ],
  },
  {
    id: "teams",
    title: "Teams",
    items: [
      "All work is done and presented by a team. We do not accept solo entries.",
      `A team is ${event.teamSize} people. We want a mix of backgrounds in each one, because resistance is not a problem any single discipline can solve.`,
      "If you already have teammates, each of you enters the same team name when signing up. If you do not, leave it empty.",
      "We build teams for everyone who comes alone, using what you told us about your field, skills and preferred area. We cannot promise every wish.",
      "Each team picks one member as our point of contact. That person speaks for the team on logistics and has no greater claim on the work than anyone else.",
      "Once we confirm a team, its membership changes only if we agree.",
    ],
  },
  {
    id: "registration",
    title: "Signing up",
    items: [
      "Sign-up is on Luma and closes on the date shown on this site. Luma has its own terms and privacy policy, which apply to your use of it.",
      "The form asks for your name and contact details, what you do and where, your field, how much you have used AI or bioinformatics tools, your team name if any, and which of the four areas you prefer.",
      "We read the forms before confirming places and may come back to you if something is missing.",
      "If more people apply than we can support, we will say in advance how places are decided.",
    ],
  },
  {
    id: "challenges",
    title: "The subject and its four areas",
    items: [
      "The subject is antimicrobial resistance in Bangladesh, approached with an AI agent and computational biology.",
      "There are four areas: Health, Food, Agriculture and Livestock. Your team chooses one as its home.",
      "The sample question shown for each area is only an illustration. Bring your own if you have one, for instance from your hospital, farm or laboratory, as long as it belongs in the area you chose.",
      "The Scientific Committee describes each area in more detail and answers questions about scope.",
      "You are not expected to deliver a product. A careful answer to a research question, with its method, its limits and what should follow, is exactly what we are asking for.",
    ],
  },
  {
    id: "agents",
    title: "Using the AI agent",
    items: [
      "Every team works with Google Antigravity and its Science Skills plugin. You may open other databases and tools by hand to check or extend what the agent finds.",
      "Stay within the usage terms and limits of Antigravity and of every data source its skills reach.",
      "Be open about your method. Your hand-in must name the Antigravity and model version and the skills that ran; the data and sources; the main instructions you gave; what you tested for yourself; and where you are unsure.",
      "Do not take an agent at its word. Test what it tells you against published work and, when you can, against a second method.",
      "An agent's answer is a starting point for thinking. It does not replace your own reasoning, and it does not replace a laboratory.",
      "Never describe a result from this hackathon as a diagnosis, as advice on treating or prescribing for people or animals, or as established fact.",
      "Using an agent or dataset unlawfully, against someone's rights, or in a way that puts people, animals or the environment at risk will get your team removed.",
    ],
  },
  {
    id: "stages",
    title: "Schedule and deadlines",
    items: [
      "Dates, deadlines, the length of presentations and the venue are published on this site.",
      "Hand-ins after the deadline are not judged. The only exceptions are a failure of the hand-in system on our side, or circumstances plainly outside your control that we accept.",
      "We may adjust practical arrangements when we need to. If we do, every team is treated alike.",
    ],
  },
  {
    id: "mentoring",
    title: "Mentors",
    items: [
      "Each team is offered a science mentor and an agent mentor. A few mentors can cover both roles.",
      "We do the pairing, looking at your area, what your team lacks, and when mentors are free.",
      "A mentor gives advice. Choices about method, and responsibility for results, stay with your team.",
      "Helping a team does not make a mentor an author or owner of its work.",
    ],
  },
  {
    id: "submission",
    title: "What teams submit",
    items: [
      "A written account of your work, in the format and by the date we announce, followed by a presentation at the final.",
      "Between them these must cover: your team and area; the resistance problem and your question; how you went about it; the skills, data and sources involved; what you found and how you tested it; what is new in it; its weaknesses; and what should happen next.",
      "Make it obvious which parts are your own thinking, which came from an agent, and which came from other people's work.",
      "If the jury needs more to assess your work, such as the saved record of an agent session, we may ask for it.",
      "Your team must be at the final to present and to take the jury's questions.",
    ],
  },
  {
    id: "committees",
    title: "Committees and jury",
    items: [
      "The Organizing Committee runs sign-up, forms teams, keeps you informed and applies these rules.",
      "The Scientific Committee looks after the science: the definition of the areas, the toolbox and the scoring scheme.",
      "The Jury scores the work and names the winners.",
      "A juror who has a link to a team, for example as supervisor, colleague or relative, says so and sits out the scoring of that team. That team's mark is then the average from the remaining jurors.",
    ],
  },
  {
    id: "judging",
    title: "How judging works",
    items: [
      "Every team is scored on the same published criteria.",
      ...criteria.map((c) => `${c.name} (${c.weight}%): ${c.note}`),
      "Jurors mark each criterion out of 10. The marks are weighted and added, and a team's result is the mean across jurors.",
      tieBreak,
      "The criteria and weights are fixed before any scoring starts and are not changed afterwards. On questions of scientific merit the jury has the last word.",
    ],
  },
  {
    id: "prizes",
    title: "Prizes",
    items: [
      "The three best-scoring teams receive prizes.",
      "We will publish what the prizes are, and any extra awards or certificates, when sponsorship is settled.",
      "At the same time we will explain how a prize is divided within a team and what paperwork winners need to provide.",
      "If no entry reaches a quality bar that we publish beforehand, the jury may leave a prize unawarded.",
    ],
  },
  {
    id: "ip",
    title: "Who owns the work",
    items: [
      "You do. Whatever your team writes, analyses or designs during the hackathon stays yours.",
      "Nothing passes to us, to sponsors, to mentors or to other teams because you took part.",
      "You give us permission, free of charge, to show and reprint your project title, summary and slides when we report on or publicize the event, and in teaching.",
      "Do not copy other people's work or present it as your own.",
      "If you think your result might be patentable, get advice before the final. Showing it in public can limit your options.",
    ],
  },
  {
    id: "data",
    title: "Other people’s data and software",
    items: [
      "You may use published papers, public databases, open-source software and models, within the terms their owners set.",
      "Say where things came from.",
      "Do not use material that is confidential or that you have no right to hold.",
      "Do not use patient records, or any other data that could reveal who a person is, and do not paste such data into an AI agent. This holds even if the data come from your own hospital, clinic or laboratory. Properly anonymized data, synthetic data and public scientific datasets are all acceptable.",
    ],
  },
  {
    id: "responsibility",
    title: "What teams confirm",
    items: [
      "When you hand in, your team is telling us that, as far as you know: the work is substantially your own; you have credited your sources; you were allowed to use the data, software and agents involved; and you have not dressed up an agent's output as proven.",
      "We make no promise that any submitted work is correct, safe or ready to be acted on.",
      "We cannot be held responsible if an outside service, including an AI agent, goes down, changes or loses your session.",
    ],
  },
  {
    id: "conduct",
    title: "Conduct",
    items: [
      "Be honest in your science and considerate towards everyone involved.",
      "We do not tolerate harassment, discrimination or bullying, in person or online.",
      "A team can be removed for seriously breaking these rules, for plagiarism, for giving us false information, for inventing or altering results, for using data or tools it had no right to, or for trying to sway the jury outside the judging process.",
      "We respond in proportion: a warning, a request to put something right, or removal.",
      "Nobody is removed without first being told the reason and given 24 hours to answer in writing.",
    ],
  },
  {
    id: "publicity",
    title: "Publicity",
    items: [
      "We will write about the hackathon and the teams on this site, on social media and in the press.",
      "We may use your project title, a short description and agreed parts of your slides. We will not publish anything you have told us is confidential.",
      "We name the team and its members whenever we can.",
      "The sign-up form asks whether you agree to be photographed and filmed at the final. You can say no.",
    ],
  },
  {
    id: "personal-data",
    title: "Personal data",
    items: [
      "We collect only what we need to run the hackathon.",
      "That means forming teams, pairing mentors, keeping in touch, judging, giving out prizes and, if you agree, publicity.",
      "The privacy notice on this site gives the full picture.",
    ],
  },
  {
    id: "final",
    title: "Changes",
    items: [
      "We may revise these rules if the organization, the technology or the science requires it. Significant changes will be posted on this site.",
      "Once judging has started we will not alter how work is scored.",
      "If something serious and unforeseen makes it impossible to run the event as planned, we may move, reshape or cancel it, and we will explain why.",
    ],
  },
];

export type PrivacySection = { id: string; title: string; intro?: string; cards?: { title: string; body: string }[]; items?: string[] };

export const privacy: PrivacySection[] = [
  {
    id: "controller",
    title: "Who is responsible",
    intro: `${hostNames} run the hackathon and decide how your details are used. To ask about your data, write to ${event.contactEmail}.`,
  },
  {
    id: "data",
    title: "What we hold about you",
    intro: "Only what you type into the Luma sign-up form. Each person fills in the form for themselves.",
    cards: [
      { title: "Who you are", body: "Your name and how to reach you." },
      { title: "Your background", body: "Field, institution, experience, preferred area and, if you have one, your team name." },
      { title: "If you mentor", body: "Your expertise, when you are free and a photo, so we can pair you with a team and list you on the site." },
      { title: "Your choices", body: "That you accepted the rules, and what you said about photos and updates." },
    ],
    items: [
      "You can see every question on the form before you answer any of them.",
      "If your team wins, we may need a little more from you in order to hand over the prize.",
    ],
  },
  {
    id: "purposes",
    title: "What we use it for",
    items: [
      "Checking sign-ups and spotting duplicates.",
      "Putting people with the same team name together, and building teams for those who came alone.",
      "Pairing each team with a science mentor and an agent mentor.",
      "Writing to you with dates, instructions and news about the event.",
      "Letting the jury know whose work they are scoring, and announcing results.",
      "Getting prizes to the winners.",
      "Photos and video from the final, if you said yes to that.",
      "Showing mentor and committee profiles on this site, if the person agreed.",
    ],
  },
  {
    id: "basis",
    title: "Why we are allowed to",
    intro: "You asked to take part in an event, and we cannot run it without knowing who you are. For anything beyond that, such as photographs or future announcements, we ask you first and you can change your mind later.",
  },
  {
    id: "recipients",
    title: "Who sees it",
    items: [
      "The organizers, and committee members who need it for their role.",
      "Your team's mentors, who see enough to work with you.",
      "Luma, because the form is theirs. Their privacy policy covers what they do with it.",
      "Nobody else. We do not sell details or give them to advertisers.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    intro: "Until the hackathon is over and we have finished reporting on it. After that we delete it.",
  },
  {
    id: "rights",
    title: "What you can ask for",
    intro: "A copy of what we hold on you, a correction if it is wrong, or its removal. You can also take back any permission you gave. Email the address at the top of this page.",
  },
  {
    id: "website",
    title: "This website",
    cards: [
      { title: "Nothing follows you", body: "No tracking cookies, no analytics, no advertising scripts." },
      { title: "One setting, kept by you", body: "Your light or dark theme choice is saved in your own browser and nowhere else." },
      { title: "Sign-up is on Luma", body: "The form you fill in belongs to Luma. This website never receives it." },
      { title: "Links leave this site", body: "Tools and databases we link to have privacy policies of their own." },
    ],
  },
  {
    id: "changes",
    title: "If this notice changes",
    intro: "The newest version will always be the one on this page.",
  },
];
