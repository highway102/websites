export const SITE = {
  name: "ZBN News",
  firstName: "ZBN",
  role: "Independent News Network",
  show: "ZBN News",
  network: "Zero Boundary Network",
  brandMark: "ZBN",
  channelHandle: "@omarstalkshow",
  channelUrl: "https://www.youtube.com/@omarstalkshow",
  email: "omarstalkshow@gmail.com",
  location: "NYC, New York",

  tagline:
    "Daily news, real insight, and fact-based commentary on politics, business, media narratives, and the stories reshaping New York and the country.",

  heroStatement: "Independent reporting. Fact-based analysis. Serious presentation.",

  missionEyebrow: "Network Mission",
  missionHeadline: "Build an independent network viewers can treat like a real daily briefing.",
  missionBody:
    "ZBN News is designed as a more serious network wrapper around the urgency, reporting instinct, and directness already working inside the current coverage.",
  missionBlurb:
    "The goal is to keep the independent voice while upgrading the presentation: stronger structure, fact-based framing, and a website that feels like a real newsroom instead of a one-off channel landing page.",

  aboutShort:
    "ZBN News is the Zero Boundary Network website: a sharper independent newsroom for breaking analysis, city politics, economic stress, media narratives, and current-issue briefings.",

  aboutLong: [
    "ZBN News is a network-style evolution of the independent commentary work already happening around Omar's Talk Show. The aim is not to sand down the edge. It is to present that edge with more institutional weight: cleaner sections, stronger editorial hierarchy, and a visual system that feels closer to a modern digital bureau than a creator homepage.",
    "The network is based in New York City and is built around independent, fact-based analysis. Omar brings the New York lens, particularly around corporate movement, fiscal pressure, and city-level political fallout. Felmon broadens the desk with fast-turn political analysis and a national commentary cadence suited to headline-driven coverage.",
    "The result is a site built to scale. ZBN News introduces a network identity that can support more shows, more recurring beats, and a stronger sense of editorial continuity over time without overstating the background behind the hosts.",
  ],

  beats: [
    "City Politics",
    "Economic Shifts",
    "Media Narratives",
    "Breaking Analysis",
  ],

  credentials: [
    "Independent, fact-based editorial positioning with a network-style presentation",
    "Active commentary, analysis, and on-camera delivery presented with a clearer editorial frame",
    "Launch structure built around embedded video briefings and reporting-led coverage",
    "Current featured reporting sourced from Omar's active YouTube output",
    "Designed as a more formal web front door for long-term network growth",
  ],

  social: {
    youtube: "https://www.youtube.com/@omarstalkshow",
    x: "https://x.com/OmarsTalkShow",
    instagram: "",
    linkedin: "",
  },
}

export type Host = {
  name: string
  role: string
  base: string
  focus: string
  blurb: string
  image: string
}

export const HOSTS: Host[] = [
  {
    name: "Omar I.",
    role: "Founding Host",
    base: "",
    focus: "Corporate exits, tax policy, city politics, and New York's economic realignment.",
    blurb:
      "Omar anchors the network's city-and-economy lane with reporting-heavy commentary built around filings, relocations, budget math, and the quiet institutional changes rewriting New York.",
    image: "/omar-host.jpg",
  },
  {
    name: "Felmon N.",
    role: "Founding Host",
    base: "",
    focus: "Political flashpoints, party fractures, media narratives, and fast-turn analysis.",
    blurb:
      "Felmon expands the desk into a broader headline machine: sharper reaction, argument-first episode framing, and a national political read built for fast-moving stories.",
    image: "/felmon-host.jpg",
  },
]

export const NETWORK_PILLARS = [
  {
    label: "Independent",
    title: "Editorially independent",
    body: "ZBN News is positioned around independent judgment, not party talking points, cable habits, or institutional spin.",
  },
  {
    label: "Fact-Based",
    title: "Receipts first",
    body: "Every segment is framed to feel grounded in reporting, documents, public statements, and verifiable context before opinion enters the frame.",
  },
  {
    label: "Experienced",
    title: "Built around active coverage",
    body: "The network presents itself as a serious desk shaped by ongoing analysis, on-camera delivery, and repeated coverage of high-stakes stories without leaning on inflated industry claims.",
  },
  {
    label: "Daily Briefing",
    title: "Made for the live news cycle",
    body: "The format is designed to move quickly without looking sloppy: direct briefings, embedded video, and a site built to update like a newsroom.",
  },
]

export const DESK_NOTES = [
  {
    label: "Headquarters",
    value: "New York City",
    body: "The station identity is anchored in New York City, New York, with the brand framed like a serious local-to-national digital news desk.",
  },
  {
    label: "Current Feed",
    value: "Latest Channel Sync",
    body: "The embedded lineup is synced to Omar's current YouTube uploads while the broader ZBN network identity continues to take shape.",
  },
  {
    label: "Editorial Standard",
    value: "Fact-Based",
    body: "The presentation emphasizes independent reporting, credible tone, and a cleaner editorial structure over creator-style branding.",
  },
]

export type Video = {
  id: string
  title: string
  host: string
  date?: string
  summary?: string[]
}

const CTA =
  "This is the kind of story ZBN can package more credibly: a direct host voice, a formal briefing layout, and a cleaner network front door for the work."

export const VIDEOS: Video[] = [
  {
    id: "2S-bQfNZ0Gw",
    host: "Omar",
    title: "California IN SHOCK As $5B Blue Diamond CEO Calls California 'Too Costly' To Stay",
    date: "May 20, 2026",
    summary: [
      "A cost-of-doing-business story that turns a major California brand into a larger argument about executive confidence, operating pressure, and why flagship companies start questioning whether the state still works for them.",
      "As a ZBN lead briefing, it keeps the network centered on business flight, political accountability, and the moment private-sector frustration becomes public. " + CTA,
    ],
  },
  {
    id: "EFUr-Di95L0",
    host: "Omar",
    title: "Governor Of Illinois EXPLODES After John Deere ABANDONS Illinois For Mexico For Good!",
    date: "May 19, 2026",
    summary: [
      "A manufacturing and relocation story built around John Deere's departure, the political embarrassment of a legacy employer leaving, and the broader warning it sends about competitiveness.",
      "This fits the ZBN lane because it treats a headline exit as a power story about jobs, leverage, and what happens when state leaders lose the confidence of anchor companies.",
    ],
  },
  {
    id: "0la11sVyZD4",
    host: "Omar",
    title: "Governor Of California ERUPTS After $1.1 Billion Paul Mitchell ABANDONS California For Dallas",
    date: "May 18, 2026",
    summary: [
      "A brand-relocation briefing that uses Paul Mitchell's move to spotlight the tug-of-war between California and lower-cost growth markets like Dallas.",
      "For ZBN, it works as a clean supporting story because it connects a recognizable company move to the larger map of tax pressure, executive strategy, and state-level fallout.",
    ],
  },
  {
    id: "Czf-qiWV6AE",
    host: "Omar",
    title: "Jeff Bezos FINALLY Speaks On Seattle - What He Said Changes EVERYTHING",
    date: "May 17, 2026",
    summary: [
      "A city-and-elite-power story that reframes Seattle through Bezos, asking what it means when one of the city's most important figures changes the tone around its future.",
      "In the archive, it broadens the desk beyond New York without losing the core ZBN thesis around civic decline, executive sentiment, and who still wants to build where.",
    ],
  },
  {
    id: "zl1HMDI115M",
    host: "Omar",
    title: "Mayor Johnson ERUPTS After Chicago Bears OFFICIALLY Move To Indiana For $1B Deal",
    date: "May 16, 2026",
    summary: [
      "A franchise-relocation story with political teeth: civic prestige, regional economics, and the optics of losing a marquee institution across the state line.",
      "In the ZBN archive, it plays as a strong public-confidence story where sports, money, and city leadership all collide in a very visible way.",
    ],
  },
  {
    id: "fSb61We9OkM",
    host: "Omar",
    title: "Maryland Governor SHOCKED After $80B Constellation Energy Threatens To LEAVE Baltimore",
    date: "May 15, 2026",
    summary: [
      "An energy-sector warning shot focused on what happens when a massive public company starts floating an exit and city leadership has to answer for the risk.",
      "This stays valuable in the recent catalog because it blends corporate leverage, local politics, and fiscal anxiety into a single high-stakes urban story.",
    ],
  },
  {
    id: "PeTJNcygYqA",
    host: "Omar",
    title: "Wells Fargo CEO FINALLY Explains Why He Left California After 174 Years",
    date: "May 14, 2026",
    summary: [
      "A banking and legacy-institution story that turns Wells Fargo's California break into a longer conversation about strategy, regulation, and the cost of staying put.",
      "For ZBN, it reinforces the broader wealth-and-business migration thesis with a household financial brand and a strong historical hook.",
    ],
  },
  {
    id: "6qBzRCXUOuc",
    host: "Omar",
    title: "Mamdani LEGALIZES Theft Under $1,000... DESTROYING 20% Of Manhattan Businesses",
    date: "May 14, 2026",
    summary: [
      "A law-and-order retail story framed around small-business survival, public frustration, and the claim that permissive policy is accelerating commercial decline in Manhattan.",
      "It remains useful catalog material because it returns the site to one of its strongest recurring beats: New York stress, neighborhood fallout, and policy consequences people can see on the street.",
    ],
  },
  {
    id: "TnwEqn0t2JI",
    host: "Omar",
    title: "Mayor Mamdani ERUPTS After Blackstone DUMPS 1,000 NYC Apartments For Texas And Florida!",
    date: "May 13, 2026",
    summary: [
      "A real-estate and capital-flight story centered on Blackstone, New York housing stock, and what large-scale asset exits imply about investor confidence in the city.",
      "In the ZBN archive, it works as a direct New York power story with obvious consequences for housing, tax revenue, and the city's broader business mood.",
    ],
  },
]

export const PRESS: Array<{ name: string; url?: string }> = [
  { name: "Launch-ready newsroom shell" },
  { name: "Multi-host identity system" },
  { name: "Embedded lead-story playback" },
  { name: "Expandable network archive" },
]

export type PullQuote = { quote: string; attribution: string }

export const QUOTES: PullQuote[] = [
  {
    quote:
      "ZBN is the version of the brand that treats the work like a desk instead of a lone channel.",
    attribution: "Network Positioning",
  },
  {
    quote:
      "The independent voice stays intact, but the presentation earns more trust the moment the page loads.",
    attribution: "Design Direction",
  },
]
