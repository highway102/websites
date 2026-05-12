import { Link } from 'react-router-dom'
import { ArrowRight, Radio, ScrollText } from 'lucide-react'
import { SITE } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-abyss text-paper overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(74,214,255,0.18),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(49,115,255,0.16),transparent_24%),linear-gradient(180deg,rgba(1,9,20,0.08),rgba(1,9,20,0.8))]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="relative container-edge flex flex-col min-h-[100svh] pt-[96px] pb-14">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="mt-8 mb-5 font-sans text-sm md:text-[15px] uppercase tracking-[0.18em] text-signal font-semibold reveal-up">
              Daily News. Real Insight.
            </p>

            <h1 className="display font-semibold text-[42px] sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[88px] leading-[0.94] tracking-[-0.045em] text-paper max-w-5xl reveal-up">
              ZBN News delivers
              <br />
              <span className="text-signal">daily briefings</span>
              <br />
              with real insight.
            </h1>

            <p className="mt-7 md:mt-8 text-base md:text-lg text-paper/82 leading-relaxed max-w-xl reveal-up">
              {SITE.tagline}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 reveal-up max-w-2xl">
              <div className="glass-panel px-4 py-4 rounded-[18px]">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <Radio size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Coverage</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">Daily updates on politics, business, media narratives, and the biggest stories moving through New York and the country.</p>
              </div>
              <div className="glass-panel px-4 py-4 rounded-[18px]">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <ScrollText size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Perspective</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">Fact-based reporting shaped by an independent commentator's reporting instinct, close reading, and focus on what actually matters.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 reveal-up">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-signal text-ink px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Open lead coverage
                <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-paper/30 bg-paper/5 text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Build the network
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative max-w-[640px] mx-auto lg:mx-0 lg:ml-auto reveal-up">
              <span aria-hidden className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-signal z-10" />
              <span aria-hidden className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-signal z-10" />

              <div className="border border-paper/10 bg-black/35 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden rounded-[28px]">
                <div className="section-grid relative p-8 md:p-10 bg-[linear-gradient(180deg,rgba(6,15,28,0.95)_0%,rgba(11,22,39,0.95)_100%)]">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src="/zbn-logo.png"
                      alt={SITE.name}
                      className="w-12 h-12 rounded-[16px] border border-paper/10 object-cover shadow-[0_20px_50px_rgba(32,184,255,0.18)]"
                    />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-signal mb-1">
                        Founding Host
                      </p>
                      <h2 className="text-paper text-2xl md:text-3xl font-semibold tracking-[-0.03em] leading-none">
                        Omar I.
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-8 items-start">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle,rgba(32,184,255,0.22),transparent_72%)] blur-xl scale-105" />
                      <img
                        src="/omar-host.jpg"
                        alt="Omar I."
                        className="relative w-full h-[320px] md:h-[360px] rounded-[32px] border border-paper/10 object-cover object-top shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
                      />
                    </div>

                    <div className="min-w-0 max-w-none">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-signal mb-3">
                        Independent Analysis. Daily Briefings. On-Camera Commentary.
                      </p>
                      <div className="mt-5 text-paper/72 text-sm md:text-[16px] leading-relaxed max-w-[34ch]">
                        <p>
                          He delivers daily updates on politics, business, and the biggest stories moving through New York and the wider world, with a direct point of view rooted in facts rather than resume-building mythology.
                        </p>
                      </div>
                    </div>
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
