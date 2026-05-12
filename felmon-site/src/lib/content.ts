// Single source of truth for swappable content.
// Anything wrapped in [PLACEHOLDER: ...] still needs your input.

export const SITE = {
  name: "Felmon Nicholas",
  firstName: "Felmon",
  role: "Political Analyst & Commentator",
  show: "Felmon's Talk Show",
  channelHandle: "@FelmonsTalkShow",
  channelUrl: "https://www.youtube.com/channel/UC2gSAKLN5wIp1BeEqnExmIQ",
  email: "felmontalks@gmail.com",
  location: "Chicago, Illinois",

  tagline:
    "Fast, fact-checked political news - delivered in real time, with the rigorous analysis the moment demands.",

  heroStatement: "Unbiased. Uncensored. Educational.",

  missionEyebrow: "01 / The Mission: Independent Journalism",
  missionHeadline: "Unbiased. Uncensored. Educational.",
  missionBody:
    "Fact-based political reporting, built from the grassroots up.",
  missionBlurb:
    "True insight isn't found in the headlines - it's built at the intersection of macroeconomic theory and on-the-ground reality.",

  aboutShort:
    "Political analyst and host of Felmon's Talk Show - bringing macroeconomic context and independent reporting to a digital-first audience.",

  aboutLong: [
    "I'm Felmon Nicholas - a political analyst and commentator based in Chicago, Illinois, and the host of Felmon's Talk Show. My work connects macroeconomic theory, political reporting, and clear public-facing analysis so viewers can follow complex shifts without losing the facts that matter most.",
    "The show publishes long-form commentary and rapid-response analysis on YouTube, covering everything from landmark Supreme Court hearings to the fractures inside MAGA, from the war-powers debate to the internal politics of the Trump administration. The goal is simple: follow the facts, cite the record, and treat viewers like adults who want the full picture - not a slogan.",
    "Based out of Illinois, the show is building a sharp, digital-first standard for independent reporting - pairing fast turnaround with disciplined sourcing, clear structure, and a visual presentation that gives serious analysis the production value it deserves.",
  ],

  beats: [
    "U.S. Politics",
    "The Supreme Court",
    "Executive Power",
    "Foreign Policy",
  ],

  credentials: [
    "B.A. Economics, University of Chicago",
    "Host, Felmon's Talk Show - YouTube",
  ],

  social: {
    youtube: "https://www.youtube.com/channel/UC2gSAKLN5wIp1BeEqnExmIQ",
    x: "https://x.com/FelmonsTalkShow",
    instagram: "[PLACEHOLDER: https://instagram.com/yourhandle - delete this line in Footer/Contact if you don't use it]",
    linkedin: "[PLACEHOLDER: https://linkedin.com/in/yourhandle - delete if unused]",
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  summary?: string[]
}

// Latest uploads from Felmon's Talk Show, newest first.
// Dates reflect the channel's published upload date.
export const VIDEOS: Video[] = [
  {
    id: "ivKdV_VVCBQ",
    title: "Trump LOSES IT as 8 MILLION PROTEST Against Him Nationwide",
    date: "May 1, 2026",
  },
  {
    id: "qTSBkNyPCm0",
    title: "White House SCRUBS VIDEO of Trump's MOST OFFENSIVE MOMENT",
    date: "Apr 28, 2026",
  },
  {
    id: "PmCq_gOC_OU",
    title: "Trump FALLS ASLEEP During His OWN WAR Briefings",
    date: "Apr 27, 2026",
  },
  {
    id: "Bzk-EJED4Ik",
    title: "JD Vance ACCIDENTALLY ADMITS Trump is a TERRORIST on Fox",
    date: "Apr 27, 2026",
  },
  {
    id: "4oMj4V8FOgI",
    title:
      "Trump PANICS as His Ceasefire COLLAPSES INSTANTLY and Iran CATCHES Him Lying About the DEAL",
    date: "Apr 27, 2026",
  },
  {
    id: "adIWGW1UnVM",
    title:
      "Vance FREEZES UP After Accidentally EXPOSING That Trump's Ceasefire Is Already FALLING APART",
    date: "Apr 27, 2026",
  },
  {
    id: "p_MGIc14PFI",
    title:
      "Trump STORMS OUT of Supreme Court After His OWN Picks HUMILIATE Him and He LOSES IT On Truth Social",
    date: "Apr 20, 2026",
  },
  {
    id: "j3q_5m6ANfs",
    title:
      "Trump LOSES CONTROL as Senate REFUSES To Stop His ILLEGAL WAR and Only ONE Republican Has The Guts!",
    date: "Apr 20, 2026",
  },
  {
    id: "69ANmt1plOw",
    title:
      "FURIOUS World Leaders FREEZE OUT Trump as His NATO THREATS Leave America COMPLETELY ALONE",
    date: "Apr 20, 2026",
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
