// Single source of truth for swappable content.

export function isPlaceholder(s: string) {
  return !s || !s.trim() || s.trim().startsWith('[PLACEHOLDER')
}

export const SITE = {
  name: "Omar Ibrahim",
  firstName: "Omar",
  role: "Independent Journalist · New York",
  show: "Omar's Talk Show",
  networkInitials: "OTS",
  networkName: "Omar's Talk Show",
  channelHandle: "@omarstalkshow",
  channelUrl: "https://www.youtube.com/@omarstalkshow",
  email: "omarstalkshow@gmail.com",
  location: "New York City, New York",

  tagline:
    "An independent New York journalist reporting on the corporate moves, tax decisions, and political shifts reshaping the city and the wider economy around it.",

  heroStatement: "Independent. New York. Journalism.",

  missionEyebrow: "The Mission",
  missionHeadline: "Independent. New York. Journalism.",
  missionBody:
    "A passionate New Yorker. An independent journalist. One city's story, told honestly.",
  missionBlurb:
    "Every city tells its story in its filings - who is listed where, who pays which tax, and who quietly walks away. New York is still mine to report.",

  aboutShort:
    "Independent journalist and lifelong New Yorker. Host of Omar's Talk Show - long-form reporting on the corporate decisions, tax shifts, and political fights reshaping the city he loves.",

  aboutLong: [
    "I'm Omar Ibrahim - a passionate New Yorker, independent reporter, and the host of Omar's Talk Show. I cover the corporate migration, tax decisions, and political fights reshaping New York City. The stories the press releases miss. The numbers the headlines underplay. The filings the editors skim past.",
    "Everything on the show is independently produced and published through Omar's Talk Show on YouTube - Goldman Sachs to Dallas, JPMorgan's office shifts, retail closures, tax flight, and the policy decisions behind them. No network. No donor class. No script. Just the receipts, the filings, and what they actually mean for the city.",
    "What drives the work is simple: I'm not leaving. New York's story isn't ending - it's being rewritten in board rooms and tax committees that don't answer to the people who built this place. The job is to keep showing up, keep reading the filings, and keep telling the story honestly. If you have a tip, a source, or a story you think should be told, the contact page is open.",
  ],

  beats: [
    "New York City",
    "Wall Street",
    "Corporate Migration",
    "City Politics",
  ],

  credentials: [
    "Host & Founder, Omar's Talk Show · YouTube",
    "Independent reporting published directly through Omar's Talk Show",
    "Coverage rooted in public records, earnings calls, filings, and policy",
  ],

  social: {
    youtube: "https://www.youtube.com/@omarstalkshow",
    spotify: "https://open.spotify.com/show/0Xlip1NOkE4OuM3KgYBVOc?si=l9gj6LLGQReqCrqCUr58iw",
    x: "https://x.com/OmarsTalkShow",
    instagram: "",
    linkedin: "",
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  views?: string
  duration?: string
  summary?: string[]
}

// Sorted newest first. Refreshed from the live YouTube channel on May 21, 2026.
export const VIDEOS: Video[] = [
  {
    id: "2S-bQfNZ0Gw",
    title: "California IN SHOCK As $5B Blue Diamond CEO Calls California 'Too Costly' To Stay",
    date: "May 20, 2026",
    views: "37,678 views",
  },
  {
    id: "EFUr-Di95L0",
    title: "Governor Of Illinois EXPLODES After John Deere ABANDONS Illinois For Mexico For Good!",
    date: "May 19, 2026",
    views: "29,990 views",
  },
  {
    id: "0la11sVyZD4",
    title: "Governor Of California ERUPTS After $1.1 Billion Paul Mitchell ABANDONS California For Dallas",
    date: "May 18, 2026",
    views: "90,976 views",
  },
  {
    id: "Czf-qiWV6AE",
    title: "Jeff Bezos FINALLY Speaks On Seattle - What He Said Changes EVERYTHING",
    date: "May 17, 2026",
    views: "200,309 views",
  },
  {
    id: "zl1HMDI115M",
    title: "Mayor Johnson ERUPTS After Chicago Bears OFFICIALLY Move To Indiana For $1B Deal",
    date: "May 16, 2026",
    views: "77,295 views",
  },
  {
    id: "fSb61We9OkM",
    title: "Maryland Governor SHOCKED After $80B Constellation Energy Threatens To LEAVE Baltimore",
    date: "May 15, 2026",
    views: "84,931 views",
  },
  {
    id: "PeTJNcygYqA",
    title: "Wells Fargo CEO FINALLY Explains Why He Left California After 174 Years",
    date: "May 14, 2026",
    views: "17,378 views",
  },
  {
    id: "6qBzRCXUOuc",
    title: "Mamdani LEGALIZES Theft Under $1,000... DESTROYING 20% Of Manhattan Businesses",
    date: "May 14, 2026",
    views: "20,099 views",
  },
  {
    id: "TnwEqn0t2JI",
    title: "Mayor Mamdani ERUPTS After Blackstone DUMPS 1,000 NYC Apartments For Texas And Florida!",
    date: "May 13, 2026",
    views: "213,546 views",
  },
  {
    id: "_LT_IcuzqNg",
    title: "Governor Of California EXPLODES After Budweiser OFFICIALLY Exits California After 50 Years!",
    date: "May 12, 2026",
    views: "43,524 views",
  },
  {
    id: "O7TrkmxYkts",
    title: "Seattle's Socialist Mayor TOLD Millionaires \"Bye\" - Now She's BEGGING Them To Stay To Save The City",
    date: "May 12, 2026",
    views: "267,390 views",
  },
  {
    id: "AGVq1v_3RoY",
    title: "Mamdani UNVEILS INSANE Plan to REPLACE NYPD… as NYC Crime EXPLODES",
    date: "May 12, 2026",
    views: "56,999 views",
  },
]
