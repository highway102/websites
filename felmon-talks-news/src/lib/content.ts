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
    "Felmon Talks News is built around direct commentary on current events, politics, and major headlines. The channel is hosted by Felmon, an independent researcher with a deep background in progressive media and political analysis, and the site is designed to match that straight-ahead editorial voice.",
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
    "1K subscribers and 244,225 views as checked on April 27, 2026",
    "Independent researcher with a progressive media background",
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

// Latest uploads pulled from the provided YouTube channel on April 27, 2026.
export const VIDEOS: Video[] = [
  {
    id: "AUYYo2Sd60Q",
    title: "Mamdani LOSES IT on LIVE TV After His OWN Democrats REBUKE Him",
    date: "Apr 27, 2026",
    summary: [
      "This episode is framed around a live television moment where party unity visibly cracks in public. The title suggests a fast-turn breakdown of political pressure, internal rebuke, and what happens when a headline narrative stops holding together on camera.",
      "For the site, it reads as a signature Felmon Talks News piece: direct, reactive, and built around the exact moment a public figure loses control of the story. " + CTA,
    ],
  },
  {
    id: "TQo_aNkiGLI",
    title: "New York's Governor Just ADMITTED What Everyone Already Knew — The State Is LOSING Businesses!",
    date: "Apr 26, 2026",
    summary: [
      "This segment is positioned as a credibility and governance story, using the governor's own admission as the hinge point for a broader argument about business flight, public perception, and state-level decline.",
      "The on-site framing treats it as a commentary piece about the gap between official messaging and what voters or employers are already seeing in real time. " + CTA,
    ],
  },
  {
    id: "icTQW67jzk0",
    title: "Democrat Governor Explains Energy Bills With DONUTS… 37,000 Fans BOOED Her at a Baseball Game",
    date: "Apr 25, 2026",
    summary: [
      "This episode reads like a backlash story driven by tone-deaf messaging and instant public response. The contrast between a simplified explanation and a hostile crowd reaction gives the segment its energy.",
      "For the archive, it works as an example of how Felmon turns a strange political clip into a broader story about anger, messaging failure, and the cost of underestimating the audience. " + CTA,
    ],
  },
  {
    id: "39r5Eu2B-Ew",
    title: "MSNBC Gets BUSTED Using a FAKE AI Photo on Live TV — Joe Rogan DESTROYS Them",
    date: "Apr 24, 2026",
    summary: [
      "This segment is framed around media credibility, live production failure, and the risk of using synthetic visuals in a trust-starved news environment. The Joe Rogan angle adds a second layer of commentary on how fast those mistakes travel.",
      "On the site, the summary positions it as a clean media-accountability story about narrative control, broadcast sloppiness, and why audiences are increasingly suspicious of what they are shown. " + CTA,
    ],
  },
  {
    id: "CD2MByRatIM",
    title: "Mayor Mamdani Just Launched a Plan to Tax People Based on RACE — The DOJ Just Responded",
    date: "Apr 23, 2026",
    summary: [
      "This episode appears to center on race, public policy, and federal response, using a high-voltage local controversy to open a wider argument about legality, optics, and political risk.",
      "For the archive, the writeup presents it as a story about how quickly city-level politics can become national material once the Department of Justice enters the frame. " + CTA,
    ],
  },
  {
    id: "r94j-m7Zh48",
    title: "Bill Maher Just EXPOSED the One Thing That Will DESTROY Democrats in 2028",
    date: "Apr 21, 2026",
    summary: [
      "This segment is positioned as a forward-looking party fracture story, built around the idea that an uncomfortable truth can surface from an unlikely messenger and hit harder because of where it came from.",
      "On the site, it reads as commentary about coalition weakness, strategic denial, and the issues that quietly become election-year liabilities before campaigns are ready to name them. " + CTA,
    ],
  },
  {
    id: "CzArQVtb12E",
    title: "California's Governor HUMILIATES Himself in Clip Viewed 40 MILLION Times",
    date: "Apr 20, 2026",
    summary: [
      "This episode is built around a viral clip and the political damage that follows when a governor becomes the story for the wrong reason. The title suggests embarrassment, scale, and the speed of public mockery in the attention economy.",
      "For the archive, it functions as a concise story about image collapse, digital amplification, and how one clip can reset a politician's standing with viewers almost overnight. " + CTA,
    ],
  },
  {
    id: "Q7b4zB06DJQ",
    title: "NYC Is COLLAPSING as the City's Own Democrats TURN on Mayor Mamdani Over $5.4 BILLION Tax Crisis",
    date: "Apr 18, 2026",
    summary: [
      "This segment reads as a local-collapse story where budget pressure, internal rebellion, and city politics all stack on top of each other at once. The scale of the tax number gives the episode its urgency.",
      "On the site, it is framed as a clean example of the channel's core lane: party infighting, public consequences, and a headline that says more about institutional stress than any press release will. " + CTA,
    ],
  },
]

// Press / outlets that have featured, cited, or published your work.
// These are legitimacy signals — replace with real outlets only.
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
      "[PLACEHOLDER: A short pull quote about your work from a viewer, journalist, or collaborator — 15 to 30 words.]",
    attribution: "[PLACEHOLDER: Name, Title, Outlet]",
  },
  {
    quote:
      "[PLACEHOLDER: A second pull quote — keep the tone editorial, not marketing-copy.]",
    attribution: "[PLACEHOLDER: Name, Title, Outlet]",
  },
]
