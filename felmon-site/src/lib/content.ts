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
    "Fast, fact-checked political news — delivered in real time, with the rigorous analysis the moment demands.",

  heroStatement: "Unbiased. Uncensored. Educational.",

  missionEyebrow: "01 / The Mission: Independent Journalism",
  missionHeadline: "Unbiased. Uncensored. Educational.",
  missionBody:
    "Fact-based political reporting, built from the grassroots up.",
  missionBlurb:
    "True insight isn't found in the headlines — it's built at the intersection of macroeconomic theory and on-the-ground reality.",

  aboutShort:
    "Political analyst and host of Felmon's Talk Show — a University of Chicago-trained mind bringing macroeconomic theory to the front lines of digital media.",

  aboutLong: [
    "I'm Felmon Nicholas — a political analyst and commentator based in Chicago, Illinois, and the host of Felmon's Talk Show. Transitioning from the theoretical halls of the University of Chicago to the front lines of digital media, I provide a bridge between complex global shifts and the people they affect. This is not just a report; it's an education in the forces shaping our world.",
    "The show publishes long-form commentary and rapid-response analysis on YouTube, covering everything from landmark Supreme Court hearings to the fractures inside MAGA, from the war-powers debate to the internal politics of the Trump administration. The goal is simple: follow the facts, cite the record, and treat viewers like adults who want the full picture — not a slogan.",
    "Based out of Illinois, we are building a new standard for independent reporting. We leverage high-output cinema production and digital-first strategies to challenge the status quo, ensuring that progressive voices aren't just heard, but are presented with the professional authority they deserve.",
  ],

  beats: [
    "U.S. Politics",
    "The Supreme Court",
    "Executive Power",
    "Foreign Policy",
  ],

  credentials: [
    "B.A. Economics, University of Chicago",
    "Host, Felmon's Talk Show · YouTube",
  ],

  social: {
    youtube: "https://www.youtube.com/channel/UC2gSAKLN5wIp1BeEqnExmIQ",
    x: "https://x.com/FelmonsTalkShow",
    instagram: "[PLACEHOLDER: https://instagram.com/yourhandle — delete this line in Footer/Contact if you don't use it]",
    linkedin: "[PLACEHOLDER: https://linkedin.com/in/yourhandle — delete if unused]",
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  summary?: string[]
}

const CTA = "Subscribe to Felmon's Talk Show on YouTube for more breakdowns like this — and hit the bell so you never miss a new episode."

// Real Felmon's Talk Show episodes — most recent first.
// Titles are editorially re-cased (original YouTube titles are ALL CAPS).
// Sorted newest first. Dates reflect actual YouTube upload date.
export const VIDEOS: Video[] = [
  {
    id: "w5y2X0gbz7o",
    title:
      "Supreme Court Shuts Down Trump's Lawyer as He Storms Out of His Own Historic Hearing",
    date: "Apr 14, 2026",
    summary: [
      "On April 1st, 2026, Donald Trump became the first sitting president in American history to walk into the United States Supreme Court — not to speak, but to sit in the public gallery while nine justices debated whether his signature birthright-citizenship executive order was even legal. He brought the Attorney General and the Commerce Secretary with him. He left roughly fifteen minutes into the opposing argument. Before his motorcade had cleared the block, he was on Truth Social calling the country \"stupid.\"",
      "What happened inside that chamber is the story. Chief Justice John Roberts called the administration's theory \"quirky and idiosyncratic.\" Trump's own appointee Amy Coney Barrett cut off his solicitor general mid-sentence — \"What about the Constitution?\" Neil Gorsuch went at the 14th Amendment's text. Brett Kavanaugh pressed on the 1940 and 1952 immigration statutes and rejected the European-precedent argument on sight. This episode walks through every moment the justices spent politely dismantling a legal theory no court has accepted in 158 years — and the precise moment Trump decided he'd heard enough.",
      "This is the documented record of a president who planted himself in the chamber to apply pressure, watched his own appointees refuse to play along, and fled before the hour was up. If you want the full walkthrough — the fringe legal theory behind the order, the exact quotes from the bench, and what this pattern of confrontations is costing you in real dollars — it's all in the video. " + CTA,
    ],
  },
  {
    id: "exdIvQGfYnA",
    title:
      "Trump Attacks His Own Party After Only One Republican Breaks on His Illegal War Vote",
    date: "Apr 13, 2026",
    summary: [
      "Fifty-two Republican senators just handed Donald Trump a blank check to keep fighting a war Congress never voted to authorize — a war that was announced to the American people in an eight-minute Truth Social video at 2:30 in the morning. Ninety-eight percent of the caucus looked the other way on the Constitution, on the $12 billion already spent, and on the $4 gas the American people are paying right now. And the moment the vote was settled, Trump went to war with the one senator who didn't fold: Rand Paul.",
      "Inside the episode: the exact voting pattern that proves a documented record of institutional intimidation — the five Republicans who broke on Venezuela earlier this year, three of whom reversed and voted to hand Trump unlimited war authority on Iran. The Fox News op-ed in which Rand Paul reminded his colleagues that Article I vests the war power in Congress alone — not the president — Congress. And the eight Truth Social posts Trump fired off in under an hour the moment the vote was settled, attacking NATO, his own senators, and demanding the filibuster be terminated — twice, in all caps, two minutes apart.",
      "This isn't interpretation. It's the receipts — every post, every vote, and every polling number, including the Fox News internals. If you want to understand what this war is actually costing the Republican Party, and where it's headed next, watch the full episode. " + CTA,
    ],
  },
  {
    id: "AMLudFGUKUE",
    title:
      "Trump Collapses as Doctors Expose His Dementia Signs While He Claims He Passed Every Test",
    date: "Apr 11, 2026",
    summary: [
      "Standing in the Oval Office on March 26th, Donald Trump bragged again about acing a \"hard\" test three times in a single year. He wants that to be the end of the conversation. It isn't. Because the man who invented the test has publicly corrected the record. The Montreal Cognitive Assessment is a dementia screening tool. It was designed in 1996 for patients with expressed concerns. It asks you to identify a picture of a camel, draw a clock, and subtract seven from one hundred. A normal score means you are not showing early warning signs of Alzheimer's. That is the entire point of the instrument Trump is using as a shield.",
      "This episode walks through what the documented record actually shows. Dr. Ziad Nasreddine — the test's Canadian creator — on the record with The New Republic saying Trump's framing is \"not accurate\" and that the test does not measure IQ. Dr. Jonathan Reiner, the cardiologist who kept Dick Cheney alive for decades, explaining that three cognitive screenings in twelve months is a pattern, not a flex. And a separate minute-by-minute walk-through of Trump's October 28th visit to the Akasaka State Guest House in Tokyo, where the documented protocol of a state welcome went sideways in real time.",
      "None of this is a cherry-picked clip. It's sourced to named medical professionals and a single calendar year of public record. If you want the receipts — all of them, in order — they're in the video. " + CTA,
    ],
  },
  {
    id: "yS4QkhegaAg",
    title:
      "Trump Panics and Threatens to Abandon NATO as Allies Refuse to Join His War",
    date: "Apr 11, 2026",
    summary: [
      "Donald Trump just threatened to blow up the most powerful military alliance in the history of the world. In an interview with the Daily Telegraph, he called withdrawing the United States from NATO \"beyond reconsideration\" — not under consideration, beyond it — and told reporters separately that he doesn't need Congress to do it. The only problem: the 2023 federal law that says he does was co-authored by his own Secretary of State.",
      "This episode lines up the documented timeline. December 2023: then-Senator Marco Rubio co-writes a bipartisan bill — passed 87 to 13, signed into the National Defense Authorization Act — specifically requiring either two-thirds Senate approval or an act of Congress for any president to withdraw from NATO. This week: Secretary of State Marco Rubio told Al Jazeera the United States will have to \"re-examine the value of NATO\" and that the decision belongs to the president. Same Rubio. Same alliance. Same law he wrote the words to prevent. The episode also walks through exactly why Spain, France, and the UK refused to join the Iran war — and what Trump threatened to do to Madrid in response.",
      "Gas is over $4 a gallon. Diesel is up 45%. Groceries are next because everything that moves by truck runs on diesel. The American Enterprise Institute is projecting the direct household cost will hit $300 in fuel alone by June. If you want to understand who created this crisis and who is winning every day that it continues, the full breakdown is in the video. " + CTA,
    ],
  },
  {
    id: "buywPboTiRg",
    title:
      "Trump Storms Out of Supreme Court After His Own Justices Humiliate Him to His Face",
    date: "Apr 10, 2026",
    summary: [
      "For over a year, the Trump administration has signed executive orders the way other presidents hold press conferences — fast, loud, daring anyone to stop them. On April 1st, 2026, the Supreme Court finally told them what it actually thinks. And Donald Trump was sitting in the front row of the public gallery to hear it in person — the first sitting president in American history to do it. Seven minutes into the opposing argument, he got up and walked out.",
      "This episode breaks down the February 20th ruling that set the entire standoff in motion. Learning Resources v. Trump: a 6–3 decision written by Chief Justice Roberts, joined by two Trump appointees, declaring his entire tariff structure unconstitutional. More than $160 billion already collected under authority the Court said never existed. A $1.4 trillion projected revenue stream — gone. And then what Trump did next: a White House press conference in which he called Gorsuch and Barrett \"an embarrassment to their families.\" CNN reported he \"completely blew up\" internally. Then he showed up at oral arguments to apply physical pressure. The justices did not blink.",
      "The episode covers every quote, every question from the bench, Chief Justice Roberts' on-the-record Rice University rebuke, and the exact moment Trump got up and walked out. If you want to see a president's intimidation campaign collide with a co-equal branch — and lose — the full video has every moment. " + CTA,
    ],
  },
  {
    id: "xqdKYsClgCw",
    title:
      "Trump Loses Control as Iran War Kills 13 Americans and Costs $11 Billion in One Week",
    date: "Apr 9, 2026",
    summary: [
      "Thirteen Americans have come home from this war in flag-draped caskets. The Pentagon told Congress the first six days cost $11.3 billion. Gas crossed $4 a gallon nationally for the first time in years. And on April 1st, Donald Trump stood at the White House podium and told the country the war is \"going extremely well.\" It is not. This episode is the documented record of what it is actually costing — in American lives, in American dollars, and in the erosion of the one branch of government with the constitutional authority to stop it.",
      "The names are public. Declan Cody, 20, West Des Moines. Nola Moore, 39, White Bear Lake. Robert Marsen, 54, two months from the end of a 30-year Army career. Six Army reservists killed in an Iranian drone strike on a makeshift operations center in Kuwait on March 1st. Six more in a KC-135 crash in western Iraq on March 12th. Sergeant Benjamin Pennington, 26, from wounds sustained on March 1st. The administration sent no one to testify before Congress. Sought no authorization. Held no formal vote. The episode walks through the numbers, the names, the classified Pentagon briefing Elizabeth Warren walked out of, and the $150 billion Moody's projects American consumers will spend over the next year just to buy the same goods.",
      "Then the episode turns to the question nobody in power wants to answer — who profits. The 6:49 a.m. trade on March 23rd. The $580 million oil position. The Trump family investments eleven days before the war began. It is all in the video. " + CTA,
    ],
  },
  {
    id: "TnGyvMx8pgU",
    title:
      "Trump Loses It as 9 Million Americans Show Up and He Hides on Golf Course",
    date: "Apr 8, 2026",
    summary: [
      "Every state. More than 3,300 events. Red counties. Blue cities. Retirement communities Donald Trump carried by 21 points. On March 28th, between 8 and 9 million Americans turned out in what organizers are calling the largest single-day demonstration in American history. The White House called it \"Trump Arrangement Therapy Sessions\" and said the only people who cared were reporters paid to cover them. The president himself was at Mar-a-Lago. That actually happened.",
      "This episode lines up the documented trajectory — 5 million in June 2025, 7 million in October, 8 to 9 million in March — and the detail that has the White House rattled: two-thirds of the people who signed up came from outside major urban centers. The Villages in Florida, where more than 6,700 showed up in a retirement community Trump carried by a significant margin. Lakeland. Wyoming. Montana. Idaho. The Minnesota State Patrol independently confirmed at least 100,000 people at the St. Paul Capitol alone. And while they marched, Trump was on Truth Social posting about striking Iran harder and demanding the Senate filibuster be terminated — twice, in under a minute, aimed at his own majority leader.",
      "The episode closes with the Republican fracture the Iran war has opened: the Rand Paul vote, the filibuster standoff, and the polling numbers the White House cannot explain away. If you want to understand why this protest round was different, watch the full video. " + CTA,
    ],
  },
  {
    id: "hvEDYrwyniA",
    title:
      "Tucker Carlson Turns on Trump as MAGA Civil War Ignites Over Iran",
    date: "Apr 7, 2026",
    summary: [
      "Tucker Carlson sat across from Donald Trump in the Oval Office three separate times in the weeks before the war began. He laid out the risks — American soldiers, energy prices, Arab partners. Trump launched the war anyway. So Tucker went to ABC News's Jonathan Karl and called it \"absolutely disgusting and evil,\" said the United States didn't make the decision here — Benjamin Netanyahu did — and called the nuclear-threat justification \"insulting\" and \"tiresome fear-mongering.\" Trump's response was to tell reporters that Tucker isn't smart enough to understand MAGA.",
      "This episode walks through the fracture inside Trump's own base. Marjorie Taylor Greene — a self-described loyalist — on record blasting the administration for polling how many American casualties voters would accept. The Hodge brothers, two of the most prominent MAGA social media influences in the country, calling it the \"biggest fall from grace\" they have ever seen. A Trump-appointed counterterrorism director who resigned and said on the record that Iran was not an imminent threat. And the three separate occasions on which Congress failed to do its constitutional job.",
      "This is not a critique from across the aisle. It is the receipts from inside the room. If you want the full breakdown of who's breaking with Trump, why, and what it means for 2026, watch the video. " + CTA,
    ],
  },
  {
    id: "hSYFxb8CG_Y",
    title:
      "Trump Panics as $580 Million in Secret Trades Expose His War Scheme",
    date: "Apr 6, 2026",
    summary: [
      "The most damning statement about what happened on the morning of March 23rd didn't come from a Democrat. It came from Steve Bannon. At 6:49 a.m., someone moved $580 million in oil futures and $1.5 billion in S&P 500 futures in under sixty seconds. Fourteen minutes later, Donald Trump posted on Truth Social about a \"complete and total resolution\" of the Iran war. Oil crashed. Stocks surged. $1.7 trillion was added to U.S. equity markets in a single morning. Iran's parliament speaker immediately denied any conversations had taken place and called Trump's post fake news, \"used to manipulate the financial and oil markets.\"",
      "This episode documents the trading pattern Bloomberg called \"sharp and isolated\" — nine times the normal volume in a single 60-second window, across Brent, WTI, and S&P futures simultaneously. It walks through the financial analysis firm that tracked 11 Trump announcements in this exact structure — the one traders now openly call the \"taco trade.\" It lays out the Polymarket positions placed in the hours before the February 28th strikes, the $1 million in five-figure wagers that hit 93%, and the role the president's son plays as a paid strategic adviser to that platform. The SEC official whose specific job was to investigate this kind of trade? Resigned seven days earlier.",
      "The episode closes with Nobel Prize-winning economist Paul Krugman's one-word summary: treason. His word, in writing. If you want to see the full trail — every trade, every filing, every timeline — the video has every receipt. " + CTA,
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
