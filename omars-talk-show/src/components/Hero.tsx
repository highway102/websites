import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-ink text-paper overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="relative container-edge flex flex-col min-h-[100svh] pt-[100px] pb-14">
        {/* Top meta bar with LIVE badge */}
        <div className="flex items-center justify-between pb-8 border-b border-paper/10">
          <span className="inline-flex items-center gap-2 bg-signal text-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold">
            <span className="w-1.5 h-1.5 bg-paper rounded-full animate-pulse" />
            On Air · {new Date().getFullYear()}
          </span>
          <span className="hidden sm:flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
            <span>{SITE.location}</span>
            <span className="hidden md:inline text-paper/30">|</span>
            <span className="text-signal tracking-[0.22em] font-semibold">OTS</span>
          </span>
        </div>

        {/* Main split */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-12 md:pt-16">
          {/* Left — type + CTAs */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="mb-6 md:mb-8 font-sans text-sm md:text-[15px] uppercase tracking-[0.18em] text-signal font-semibold">
              Independent Journalism · New York
            </p>

            <h1 className="display font-bold text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] leading-[0.95] tracking-[-0.025em] text-paper font-display">
              Independent.<br />
              <span className="italic font-normal text-signal">New York.</span><br />
              Journalism.
            </h1>

            <p className="mt-8 md:mt-10 text-base md:text-lg text-paper/85 leading-relaxed max-w-xl font-sans">
              {SITE.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={SITE.social.spotify}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-paper text-ink px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-signal hover:text-paper transition-colors"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1DB954] text-white shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor" aria-hidden>
                    <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm5.503 17.315a.748.748 0 0 1-1.03.247c-2.82-1.722-6.368-2.112-10.546-1.159a.75.75 0 0 1-.333-1.463c4.573-1.043 8.49-.6 11.661 1.336a.75.75 0 0 1 .248 1.039Zm1.471-3.272a.935.935 0 0 1-1.286.308c-3.227-1.984-8.147-2.559-11.964-1.399a.936.936 0 1 1-.544-1.791c4.36-1.324 9.781-.685 13.488 1.594a.936.936 0 0 1 .306 1.288Zm.126-3.409c-3.87-2.298-10.256-2.51-13.95-1.386a1.123 1.123 0 1 1-.654-2.149c4.24-1.289 11.297-1.04 15.749 1.602a1.123 1.123 0 1 1-1.145 1.933Z" />
                  </svg>
                </span>
                Listen on Spotify
              </a>
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-signal text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Watch the work
                <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-paper/40 text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-8 max-w-2xl border border-signal/35 bg-paper/8 backdrop-blur-sm">
              <div className="px-5 py-4 md:px-6 md:py-5">
                <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-signal font-semibold">
                  Business Inquiries
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 inline-flex items-center gap-3 font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-paper break-all hover:text-signal transition-colors"
                >
                  <span className="link-underline">{SITE.email}</span>
                  <ArrowRight size={18} strokeWidth={2} className="-rotate-45 shrink-0" />
                </a>
                <p className="mt-2 text-sm md:text-base text-paper/70 font-sans">
                  Contact this address for sponsorships, partnerships, interviews, and other business requests.
                </p>
              </div>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <span aria-hidden className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-signal z-10" />
              <span aria-hidden className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-signal z-10" />

              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden bg-steel">
                <img
                  src="/headshot.jpg"
                  alt={`${SITE.name} — ${SITE.role}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent p-5 pt-12">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-1">
                        Host · Analyst
                      </p>
                      <p className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-paper leading-tight">
                        {SITE.name}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
                      {SITE.location.split(',')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
