// Single source of truth for swappable content.
// Anything wrapped in [PLACEHOLDER: ...] still needs your input.

export const SITE = {
  name: "Evans Talk Show",
  firstName: "Evan",
  role: "Independent News Commentary with Evan Mercer",
  show: "Evans Talk Show",
  network: "Evans Talk Show",
  brandMark: "ETS",
  channelHandle: "@EvansTalkShow",
  channelUrl: "https://www.youtube.com/@EvansTalkShow",
  email: "evanmercer@gmail.com",
  location: "Nashville, TN",

  tagline:
    "Independent commentary on the stories shaping America today, hosted by Evan Mercer from Nashville with a sharper point of view and a cleaner read on the story.",

  heroStatement: "Breaking stories. Clean analysis. No filler.",

  missionEyebrow: "01 / Nashville Desk",
  missionHeadline: "Breaking stories. Clean analysis. No filler.",
  missionBody:
    "Evans Talk Show breaks down major political stories with a direct voice, fast pacing, and an editorial look built for the modern news cycle, presented by Evan Mercer from Nashville.",
  missionBlurb:
    "Based in Nashville, Tennessee, the site now points to the active Evans Talk Show YouTube channel and keeps one promise: follow the headline to its source, cut through the performance, and explain what actually matters in plain English.",

  aboutShort:
    "Evans Talk Show is an independent commentary platform hosted by Evan Mercer in Nashville, Tennessee, focused on political flashpoints, global conflict, institutional power, and the stories driving the national conversation.",

  aboutLong: [
    "Evans Talk Show is built around direct commentary on current events, politics, and major headlines. Hosted by Evan Mercer in Nashville, Tennessee, the website reflects the active Evans Talk Show YouTube channel and its current editorial focus.",
    "That focus leans into court fights, fractures inside both parties, America's role abroad, and the economic pressure hitting ordinary people. The format stays fast, pointed, and readable, with each episode framed as a clear argument rather than a recycled cable segment.",
    "This website works as a sharper front door for that work: a distinctive visual identity, a cleaner archive, and a place where new viewers can get oriented before they ever hit subscribe.",
  ],

  beats: [
    "U.S. Politics",
    "Global Conflict",
    "Party Fractures",
    "Economic Pressure",
  ],

  credentials: [
    "YouTube channel joined November 10, 2016",
    "Latest uploads synced from the public YouTube channel page on May 21, 2026",
    "Hosted by Evan Mercer in Nashville, TN",
    "Independent commentary channel published on YouTube",
  ],

  social: {
    youtube: "https://www.youtube.com/@EvansTalkShow",
    x: "[PLACEHOLDER: add X profile URL]",
    instagram: "[PLACEHOLDER: add Instagram profile URL]",
    linkedin: "[PLACEHOLDER: add LinkedIn profile URL]",
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  summary?: string[]
}

// Latest uploads pulled from the public YouTube channel page on May 21, 2026.
export const VIDEOS: Video[] = [
  {
    id: "uXsQv_9vSfA",
    title: "Mamdani's OWN DONORS TURN on Him as They LAUNCH A $50M Anti Mamdani Campaign",
    date: "May 21, 2026",
    summary: [
      "This latest upload frames a donor revolt as the real pressure point in Zohran Mamdani's political coalition, with the title leaning on money, backlash, and the optics of elite abandonment.",
      "On the site, it reads as a campaign-power story about how funding networks can become a public signal that a message is failing, especially when opposition spending arrives fast and loud.",
    ],
  },
  {
    id: "XxpzepJjcOY",
    title: "Newsom FREAKS OUT After His SICKENING $250 BILLION Fraud Gets EXPOSED",
    date: "May 20, 2026",
    summary: [
      "This episode is positioned as a high-dollar accountability story, with the title presenting alleged fraud exposure as both a political threat and a test of Gavin Newsom's public composure.",
      "For the archive, the summary frames it as a breakdown of scandal language, fiscal distrust, and the way giant numbers are used to turn budget criticism into a full-blown legitimacy fight.",
    ],
  },
  {
    id: "xz-K53cHZo4",
    title: "Mamdani's INSANE $500 MILLION Tax PLAN BLOWS UP as Billionaires FLEE NYC",
    date: "May 15, 2026",
    summary: [
      "This upload centers on a tax proposal pitched as politically explosive, with the title arguing that the plan triggered elite panic and accelerated a flight narrative around New York wealth.",
      "On the website, it plays as a city-power segment about taxation, business confidence, and the way campaign economics quickly spill into broader arguments about who can afford to stay.",
    ],
  },
  {
    id: "l5RTbp502WM",
    title: "Brandon Johnson THREATENS Chicago SHUTDOWN as $1.2 BILLION Crisis EXPLODES",
    date: "May 14, 2026",
    summary: [
      "This segment is framed as a municipal crisis story, tying Brandon Johnson to shutdown pressure and using the billion-dollar figure to intensify the sense of civic breakdown.",
      "For the archive, it reads as a city-governance briefing about fiscal strain, executive leverage, and what happens when budget conflict becomes an open threat hanging over daily life.",
    ],
  },
  {
    id: "V8ztxAcQTgo",
    title: "Trump's HEALTH COLLAPSES as HE SECRETLY SKIPS 2026 PHYSICAL!",
    date: "May 13, 2026",
    summary: [
      "This episode turns a skipped physical into a larger political vulnerability, with the title framing health secrecy as the story rather than just another campaign rumor cycle.",
      "The site summary treats it as a leadership-transparency story about optics, concealment, and how personal fitness questions can quickly become part of the national power narrative.",
    ],
  },
  {
    id: "1Rgj6EPQr6I",
    title: "Trump has DISASTER SPEECH before TINY CROWD…in PHOENIX!",
    date: "May 11, 2026",
    summary: [
      "This upload is positioned as a momentum check, using the speech and the crowd size in Phoenix to argue that the performance itself exposed weakness rather than strength.",
      "For the website, it works as a rally-politics story about stagecraft, enthusiasm, and how turnout optics can undercut the message a candidate is trying to project.",
    ],
  },
  {
    id: "qi_s46xgByU",
    title: "Mamdani's INSANE Iran Statement BACKFIRES as Jewish New Yorkers REVOLT",
    date: "May 9, 2026",
    summary: [
      "This recent upload centers on backlash to a public Iran-related statement, with the title framing it as a political misfire that triggered a sharp response from Jewish voters in New York.",
      "On the site, it reads as a fast-turn commentary piece about foreign-policy rhetoric, coalition politics, and how quickly a message can turn into a liability.",
    ],
  },
  {
    id: "dn8w8YEzlBs",
    title: "Ilhan Omar EXPOSED Linked to $300 MILLION Food Fraud SCAM in DAMNING Audit",
    date: "May 7, 2026",
    summary: [
      "This episode is positioned as an accountability story built around a damaging audit and the scale of an alleged food-fraud scheme linked in the title to Ilhan Omar.",
      "For the archive, the summary frames it as a direct breakdown of oversight failure, political exposure, and how audit language can become campaign-season ammunition.",
    ],
  },
]

// Press / outlets that have featured, cited, or published your work.
// These are legitimacy signals - replace with real outlets only.
// If you don't have press yet, either delete the Press page link from Nav.tsx,
// or leave these placeholders and update as coverage happens.
export const PRESS: Array<{ name: string; url?: string }> = [
  { name: "[PLACEHOLDER: Outlet A]" },
  { name: "[PLACEHOLDER: Outlet B]" },
  { name: "[PLACEHOLDER: Outlet C]" },
  { name: "[PLACEHOLDER: Outlet D]" },
  { name: "[PLACEHOLDER: Outlet E]" },
  { name: "[PLACEHOLDER: Outlet F]" },
  { name: "[PLACEHOLDER: Outlet G]" },
  { name: "[PLACEHOLDER: Outlet H]" },
]

export type PullQuote = { quote: string; attribution: string }

export const QUOTES: PullQuote[] = [
  {
    quote:
      "[PLACEHOLDER: A short pull quote about your work from a viewer, journalist, or collaborator - 15 to 30 words.]",
    attribution: "[PLACEHOLDER: Name, Title, Outlet]",
  },
  {
    quote:
      "[PLACEHOLDER: A second pull quote - keep the tone editorial, not marketing-copy.]",
    attribution: "[PLACEHOLDER: Name, Title, Outlet]",
  },
]
