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
    "Latest uploads synced from the public YouTube feed on May 11, 2026",
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

// Latest uploads pulled from the public YouTube feed on May 11, 2026.
export const VIDEOS: Video[] = [
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
  {
    id: "UCMFt9i0znE",
    title: "Ilhan Omar BUSTED Putting 'SOMALIA FIRST' as DAMNING Report EXPOSES Clan Ties",
    date: "May 5, 2026",
    summary: [
      "This upload is framed as a report-driven challenge to Ilhan Omar's public positioning, with the title leaning on questions of loyalty, factional ties, and political image.",
      "On the site, it plays as a culture-and-power segment about identity politics, narrative framing, and how charged language is used to intensify a headline.",
    ],
  },
  {
    id: "i9z48B0s94I",
    title: "JD Vance Drops BOMBSHELL on Ilhan Omar... 'She COMMITTED Immigration FRAUD'",
    date: "May 4, 2026",
    summary: [
      "This episode focuses on a high-voltage allegation from JD Vance, with the title presenting it as a legal and political escalation aimed straight at Ilhan Omar.",
      "The site summary treats it as a campaign-conflict story about accusation as strategy, media amplification, and the pressure that comes with headline-level claims.",
    ],
  },
  {
    id: "dnRZvAi3aKY",
    title: "Newsom Sues Trump 50 Times While California BURNS... State Auditor Drops DEVASTATING Report",
    date: "May 3, 2026",
    summary: [
      "This segment pairs Gavin Newsom's legal fights with California's ongoing crises, using a state audit in the title to argue that the political messaging no longer matches the results.",
      "For the website, the summary frames it as a state-power briefing about governance, public trust, and what happens when administrative failures become impossible to spin away.",
    ],
  },
  {
    id: "40ytHZcgCTs",
    title: "Newsom's BOMBSHELL Lie EXPOSED... He Spent $37 BILLION on Homeless as Crisis Gets WORSE",
    date: "Apr 30, 2026",
    summary: [
      "This upload appears to focus on homelessness spending in California, with the title positioning it as a blunt critique of results, messaging, and scale.",
      "In the archive, it reads as a policy-failure story about public money, civic deterioration, and the widening gap between press conferences and lived reality.",
    ],
  },
  {
    id: "GpB2W_Io8Yw",
    title: "Trump LOSES CONTROL and THREATENS to JAIL JOURNALISTS",
    date: "Apr 28, 2026",
    summary: [
      "This episode is framed as a press-freedom and executive-power clash, with the title highlighting a moment where Trump's rhetoric toward journalists crossed into open threat.",
      "The site summary presents it as a media-power story about intimidation, public spectacle, and the democratic stakes of treating reporters like enemies.",
    ],
  },
  {
    id: "IQswD53LBK4",
    title: "Trump DETONATES at Reporter Over SIMPLE Iran Question",
    date: "Apr 25, 2026",
    summary: [
      "This segment turns on a tense exchange with a reporter, using the Iran question in the title to frame the moment as one where pressure broke through the performance.",
      "For the archive, it works as a tighter clip-driven analysis of temperament, media confrontation, and how off-script reactions often become the real story.",
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
