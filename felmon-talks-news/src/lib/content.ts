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

// Latest uploads pulled from the Felmon Talks News YouTube channel feed on May 21, 2026.
export const VIDEOS: Video[] = [
  {
    id: "inGJtvAyMQg",
    title: "Mamdani's ANTI-ICE Stunt BACKFIRES INSTANTLY as Migrant's CRIMINAL Past EXPOSED",
    date: "May 21, 2026",
    summary: [
      "This lead story frames a chaotic immigration confrontation in New York as a test of mayoral judgment, public safety, and what happens when political messaging outruns the underlying facts.",
      "On the site, it plays as a fast-moving accountability piece focused on Zohran Mamdani, federal enforcement, and the consequences of reacting before the record is fully clear. " + CTA,
    ],
  },
  {
    id: "Uvi8kUVBmZ0",
    title: "Newsom CAUGHT Blowing $19 MILLION on PROPAGANDA… as California Economy COLLAPSES",
    date: "May 20, 2026",
    summary: [
      "This episode turns a state-funded PR contract into a broader argument about image management, public money, and a governor prioritizing narrative control during fiscal strain.",
      "For the archive, it works as a California governance story about deficits, media strategy, and the political optics of spending millions to reshape a collapsing message. " + CTA,
    ],
  },
  {
    id: "q-VsrFo-j5s",
    title: "Democrat BUSTED Stealing $500,000 in COVID FUNDS… QUITS Right Before HEARING",
    date: "May 19, 2026",
    summary: [
      "This segment is built as a political-corruption breakdown, tracing alleged misuse of pandemic relief money into a wider story about ethics, exposure, and institutional failure.",
      "On the site, it reads as an accountability file about public funds, congressional scandal, and the scramble that follows when resignation lands before public scrutiny. " + CTA,
    ],
  },
  {
    id: "XYprAu1ycBo",
    title: "Nancy Pelosi Dealt CRUSHING BLOW… Democrats ABANDON Her as California Crisis Explodes",
    date: "May 18, 2026",
    summary: [
      "This episode uses Pelosi's exit to open a wider argument about California decline, party succession, and the tension between elite power and public frustration.",
      "For the archive, it functions as a political-transition story where retirement, party fracture, and long-running state grievances all collide in one frame. " + CTA,
    ],
  },
  {
    id: "s1ncIqLSELs",
    title: "Mamdani FREAKS OUT After Being FORCED to Admit Free Buses ARE GONE… Voters Demand RESIGNATION",
    date: "May 17, 2026",
    summary: [
      "This segment frames a campaign promise unraveling in real time, using transit policy and budget pressure to show how idealistic pledges break against governing constraints.",
      "On the site, it works as a city-politics story about voter expectations, policy retreat, and the backlash that builds when signature promises start disappearing. " + CTA,
    ],
  },
  {
    id: "xiCQ80RW5jk",
    title: "Mamdani HUMILIATED as His OWN Voters SUE Him in COURT Over INSANE Order",
    date: "May 16, 2026",
    summary: [
      "This episode turns a neighborhood lawsuit into a larger story about executive overreach, procedural shortcuts, and a base that is no longer willing to stay quiet.",
      "For the archive, it reads as a governance-pressure story where legal resistance, housing policy, and coalition breakdown all sharpen the stakes around City Hall. " + CTA,
    ],
  },
  {
    id: "3DSoA5pD4cU",
    title: "Newsom CAUGHT Hiding $2 BILLION Budget DISASTER From California for MONTHS",
    date: "May 15, 2026",
    summary: [
      "This segment is built around concealment and fiscal fallout, arguing that a multi-billion-dollar budget error became more damaging because it stayed hidden during a critical stretch.",
      "On the site, it works as a California accountability piece about public disclosure, budget math, and the erosion of trust when leaders stay silent too long. " + CTA,
    ],
  },
  {
    id: "tHLVP7UzrSI",
    title: "Newsom CAUGHT Using $1.5 MILLION of PAC Money to Buy His OWN Book… 2/3 of ALL Sales",
    date: "May 14, 2026",
    summary: [
      "This episode turns book-sales optics into a campaign-finance story, using donor money and self-promotion to question how political legitimacy gets manufactured.",
      "For the archive, it reads as a media-and-money breakdown focused on PAC spending, branding, and the blurred line between promotion and public persuasion. " + CTA,
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
