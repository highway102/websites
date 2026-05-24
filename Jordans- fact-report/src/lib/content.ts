// Single source of truth for swappable content.
// Anything wrapped in [PLACEHOLDER: ...] still needs your input.

export const SITE = {
  name: "Jordans Fact Report",
  firstName: "Jordan",
  role: "Independent Political Commentary",
  show: "Jordans Fact Report",
  network: "Jordans Fact Report",
  brandMark: "JFR",
  channelHandle: "@JordansFactReport",
  channelUrl: "https://www.youtube.com/@JordansFactReport",
  email: "contact@jordansfactreport.com",
  location: "London, United Kingdom",
  bannerImage:
    "https://yt3.googleusercontent.com/BiGYBvgkBNWdI1WbaIrqGFaEqc1u7i-Mkfm_B1qu86mvFVQUpuVpkDpqA5sEKvCGU4Bxqq8O=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  profileImage:
    "https://yt3.googleusercontent.com/gv7hS9UU8kgJhqlXvco2DLqYhAKpFeLnRZ5YltRAosv_X21Xt4vwCrPspQ-Cw84jt6fzWqAU0Q=s900-c-k-c0x00ffffff-no-rj",
  portraitFrameImage: "/jordans-face-clean.png",
  speakerImage:
    "https://yt3.googleusercontent.com/BiGYBvgkBNWdI1WbaIrqGFaEqc1u7i-Mkfm_B1qu86mvFVQUpuVpkDpqA5sEKvCGU4Bxqq8O=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",

  tagline:
    "Independent commentary on the biggest political headlines, focused on what was said, what actually happened, and what those decisions mean in the real world.",

  heroStatement: "Facts first. Headlines without the spin.",

  missionEyebrow: "01 / Fact Desk",
  missionHeadline: "Facts first. Headlines without the spin.",
  missionBody:
    "Jordans Fact Report tracks the day's political flashpoints with direct commentary, fast context, and a fact-centered read on what public claims mean once they meet reality.",
  missionBlurb:
    "The promise is simple: follow the headline back to the source, cut through performance, and explain what actually matters in plain English.",

  aboutShort:
    "Jordans Fact Report is an independent commentary platform focused on political flashpoints, public accountability, media narratives, and the decisions shaping the wider conversation.",

  aboutLong: [
    "Jordans Fact Report is built around direct commentary on current events, political conflict, and the biggest stories moving through the news cycle. The channel voice is fast, pointed, and centered on separating rhetoric from record.",
    "Coverage leans into government pressure points, party infighting, institutional accountability, and the gap between headline claims and lived impact. Each episode is framed as a clear read on the story rather than a recycled talking point.",
    "This website is designed as a stronger front door for that work: a clean archive of recent uploads, a sharper channel identity, and a straightforward way for new viewers to understand the tone before they ever hit subscribe.",
  ],

  beats: [
    "Political Headlines",
    "Fact-Based Analysis",
    "Government Accountability",
    "Media Narratives",
  ],

  credentials: [
    "YouTube channel launched April 21, 2026",
    "Independent commentary channel focused on political decisions and their real-world impact",
    "Based in London, United Kingdom",
    "Linked to the active Jordans Fact Report YouTube channel",
  ],

  social: {
    youtube: "https://www.youtube.com/@JordansFactReport",
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

const CTA =
  "Subscribe to Jordans Fact Report on YouTube for more breakdowns like this and keep the fact desk in your feed."

// Latest uploads pulled from the Jordans Fact Report YouTube channel feed on May 24, 2026.
export const VIDEOS: Video[] = [
  {
    id: "yPntaBz7zB0",
    title: "Starmer Absolutely DECIMATED In The Commons By His OWN Labour MP Over Mandelson Scandal!",
    date: "May 24, 2026",
    summary: [
      "This lead story is framed as a political-accountability breakdown, using Labour infighting and the Mandelson controversy to show what happens when public defenses collapse under scrutiny.",
      "On the site, it plays as a fast-moving Westminster briefing about party fracture, leadership pressure, and the cost of trying to control a story after the facts have already moved. " + CTA,
    ],
  },
  {
    id: "-aEDoS6TlN4",
    title: "Starmer FINALLY Gets The HUMILIATION He Deserves Over Mandelson At PMQs!",
    date: "May 23, 2026",
    summary: [
      "This episode turns Prime Minister's Questions into a credibility test, focusing on how a scandal grows when the public case for it weakens in open session.",
      "For the archive, it works as a leadership-pressure story about parliamentary exposure, political optics, and the moment a defense line starts to give way. " + CTA,
    ],
  },
  {
    id: "G-8OKdllvwg",
    title: "Lee Anderson Absolutely DECIMATES Labour In The Commons Over British Nurses EVICTED By Serco!",
    date: "May 21, 2026",
    summary: [
      "This segment is built as a public-services accountability story, tying housing pressure, outsourcing, and frontline workers into a broader argument about governing priorities.",
      "On the site, it reads as a Westminster conflict file about institutional responsibility, public fallout, and the sharp politics of who gets protected when systems fail. " + CTA,
    ],
  },
  {
    id: "4Av4_-M95hc",
    title: "Two Labour MPs HUMILIATE THEMSELVES Trying To OVERRULE Speaker In Mandelson Vote!",
    date: "May 20, 2026",
    summary: [
      "This episode frames parliamentary procedure as a proxy fight over power, discipline, and how far allies will go to rescue a failing line.",
      "For the archive, it functions as an institutional-pressure story where internal party maneuvering and public embarrassment collide in one frame. " + CTA,
    ],
  },
  {
    id: "1nYlqy0MP18",
    title: "Robert Jenrick EXPOSES How The Muslim Vote Is RIGGING British Elections!",
    date: "May 19, 2026",
    summary: [
      "This segment is presented as an election-integrity argument, examining bloc politics, public messaging, and how cultural flashpoints are used to widen political conflict.",
      "On the site, it works as a campaign-pressure story about representation, voter trust, and the rhetoric that reshapes electoral debate. " + CTA,
    ],
  },
  {
    id: "LsVdlN82m9Y",
    title: "Furious MP OBLITERATES Starmer At PMQ's Over Cost Of Living Crisis BETRAYAL",
    date: "May 10, 2026",
    summary: [
      "This episode turns economic pain into a direct leadership challenge, centering on the widening gap between official messaging and day-to-day pressure on households.",
      "For the archive, it reads as a cost-of-living accountability piece where economic stress and political promises collide under public scrutiny. " + CTA,
    ],
  },
  {
    id: "HV1MbbAz0sk",
    title: "Starmer ABSOLUTELY DECIMATED In Commons Over PAEDOPHILE-ADJACENT Mandelson Disaster!",
    date: "May 9, 2026",
    summary: [
      "This segment is built around scandal escalation, arguing that reputational risk compounds quickly once the surrounding facts start looking impossible to contain.",
      "On the site, it works as a parliamentary accountability piece about judgment, association, and the fallout that comes when leadership insists on standing still. " + CTA,
    ],
  },
  {
    id: "vA50wpafg2U",
    title: "Labour MP Absolutely DECIMATED In The Commons Defending Starmer Over Mandelson Scandal!",
    date: "May 7, 2026",
    summary: [
      "This episode frames a Commons defense as a stress test for party discipline, asking how long surrogate arguments can hold once the central controversy keeps deepening.",
      "For the archive, it reads as a party-management story about public messaging, parliamentary resistance, and the limits of defending a damaged narrative. " + CTA,
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
