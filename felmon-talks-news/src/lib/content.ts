// Single source of truth for swappable content.
// Anything wrapped in [PLACEHOLDER: ...] still needs your input.

export const SITE = {
  name: "Felmon Talks News",
  firstName: "Felmon",
  role: "Independent News Commentary",
  show: "Felmon Talks News",
  network: "Felmon Talks News",
  brandMark: "FTN",
  channelHandle: "@FelmonTalksNews",
  channelUrl: "https://www.youtube.com/@FelmonTalksNews",
  email: "felmontalks@gmail.com",
  location: "Chicago, Illinois",

  tagline:
    "Independent commentary on the headlines shaping the country, delivered with a direct voice, a political analyst's eye, and a cleaner read on what the story actually means.",

  heroStatement: "Breaking stories. Hard analysis. No fluff.",

  missionEyebrow: "01 / Red Desk",
  missionHeadline: "Breaking stories. Hard analysis. No fluff.",
  missionBody:
    "Felmon Talks News breaks down political flashpoints with direct commentary, fast pacing, and an editorial look built for the modern news cycle.",
  missionBlurb:
    "The promise is simple: follow the headline to its source, cut through the performance, and explain what actually matters in plain English.",

  aboutShort:
    "Felmon Talks News is an independent commentary platform focused on political flashpoints, media narratives, party fractures, and the stories driving the national conversation.",

  aboutLong: [
    "Felmon Talks News is built around direct commentary on current events, politics, and major headlines. The channel is hosted by Felmon, an independent commentator and researcher focused on political analysis, and the site is designed to match that straight-ahead editorial voice.",
    "The coverage leans into governors, media spin, party fractures, legal battles, and economic pressure points. The format stays fast, pointed, and readable, with each episode framed as a clear argument rather than a recycled cable segment.",
    "This website works as a sharper front door for that work: a stronger red-and-black identity, a cleaner archive, and a place where new viewers can understand the channel before they ever hit subscribe.",
  ],

  beats: [
    "Political Headlines",
    "Media Spin",
    "Party Fractures",
    "Economic Pressure",
  ],

  credentials: [
    "YouTube channel joined March 31, 2026",
    "Independent commentary channel focused on politics, media narratives, and headline analysis",
    "Based in Chicago, Illinois",
    "Linked to the active Felmon Talks News YouTube channel",
  ],

  social: {
    youtube: "https://www.youtube.com/@FelmonTalksNews",
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

const CTA = "Subscribe to Felmon Talks News on YouTube for more breakdowns like this and keep the red desk in your feed."

// Latest uploads pulled from the Felmon Talks News YouTube channel feed on May 11, 2026.
export const VIDEOS: Video[] = [
  {
    id: "mWPrvnCHocY",
    title: "Ilhan Omar PANICS as DOJ Drops BRUTAL NEWS on Her Citizenship Fraud Investigation",
    date: "May 10, 2026",
    summary: [
      "This episode is framed as a legal-scrutiny story, connecting financial disclosure questions, a Minnesota fraud case, and a new federal spotlight around Ilhan Omar.",
      "For the site, it works as a high-pressure accountability piece focused on records, public confrontation, and what happens when multiple investigations converge at once. " + CTA,
    ],
  },
  {
    id: "zogtWxBj3oE",
    title: "Newsom CAUGHT Over $180 BILLION Fraud As His Presidential Run COLLAPSES",
    date: "May 9, 2026",
    summary: [
      "This segment turns state audits, federal indictments, and public spending failures into a broader argument about leadership breakdown in California.",
      "On the site, it reads as a sharp governance story about vanished funds, institutional oversight, and the political cost of large-scale fraud claims landing during a national rise. " + CTA,
    ],
  },
  {
    id: "ldXNThDh7zU",
    title: "Chicago Mayor Brandon Johnson COLLAPSES to 6% Approval... Officially the WORST Mayor in US History",
    date: "May 8, 2026",
    summary: [
      "This episode is built around a dramatic collapse in approval, using polling, city budget pressure, and open revolt from local leadership to frame the story.",
      "For the archive, it functions as a Chicago-centered breakdown of governing failure, voter backlash, and how fast a mayor can lose political ground. " + CTA,
    ],
  },
  {
    id: "ZLxoud_pucI",
    title: "CNN Host TURNS on Democrats and Admits Democrats are in FULL COLLAPSE on LIVE TV",
    date: "May 7, 2026",
    summary: [
      "This segment uses live-TV polling analysis and party infighting to argue that Democratic leadership is facing a deeper credibility collapse with independents and its own base.",
      "On the site, it plays as a media-and-politics crossover story where on-air data becomes the launch point for a larger argument about party weakness. " + CTA,
    ],
  },
  {
    id: "0w-BSq7DhKc",
    title: "$600 MILLION in California Fraud Just Got EXPOSED as 447 Fake Companies Get SHUT DOWN",
    date: "May 6, 2026",
    summary: [
      "This episode is framed around enforcement and fallout, using the shutdown of hundreds of fake companies to show the scale of alleged fraud in California.",
      "For the archive, it works as a clean accountability story about public money, enforcement action, and the wider trust problem that follows fraud headlines. " + CTA,
    ],
  },
  {
    id: "QJXEzMA1Lqo",
    title: "Mamdani PANICS After Own Party TURNS on Him Over $5.4 BILLION Disaster",
    date: "May 5, 2026",
    summary: [
      "This segment is positioned as a party-fracture story, with budget pressure and Democratic infighting driving the central conflict around Mamdani.",
      "On the site, it reads as a fast-turn local crisis story that scales into a wider argument about fiscal pressure, coalition strain, and political exposure. " + CTA,
    ],
  },
  {
    id: "lLdjm39HrmE",
    title: "Mamdani's OWN PARTY TURNS on Him as Bronx Councilman DECLARES WAR",
    date: "May 4, 2026",
    summary: [
      "This episode leans into open political conflict, using an internal Democratic clash in New York to frame the story as a public power struggle.",
      "For the archive, it reads as commentary on coalition breakdown, local escalation, and the way intraparty fights become headline events in real time. " + CTA,
    ],
  },
  {
    id: "V99tNqD3kx4",
    title: "Billionaire KICKS Democrat OUT of His Mansion and Says He's DONE With the Party Forever",
    date: "May 3, 2026",
    summary: [
      "This segment is framed as a donor-break story, using a high-profile rupture to explore frustration with party direction and political identity.",
      "On the site, it works as a commentary piece about elite disillusionment, public symbolism, and the spectacle that follows when political alliances break in public. " + CTA,
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
