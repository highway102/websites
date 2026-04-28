import { useState } from 'react'
import { SITE } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Interview request')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    const subj = encodeURIComponent(`[Website] ${subject}`)
    window.location.href = `mailto:${SITE.email}?subject=${subj}&body=${body}`
  }

  const field =
    'w-full bg-transparent border-0 border-b border-ink/20 focus:border-ink outline-none py-4 text-ink placeholder:text-ink/30 text-lg md:text-xl font-medium tracking-tight font-sans'

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <label htmlFor="name" className="eyebrow block mb-1">01 · Name</label>
        <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Your full name" />
      </div>

      <div>
        <label htmlFor="email" className="eyebrow block mb-1">02 · Email</label>
        <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder="you@outlet.com" />
      </div>

      <div>
        <label htmlFor="subject" className="eyebrow block mb-1">03 · Subject</label>
        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={field + ' appearance-none pr-8'}>
          <option>Interview request</option>
          <option>Speaking / panel</option>
          <option>Source / story tip</option>
          <option>Press inquiry</option>
          <option>Commissioned analysis</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-1">04 · Message</label>
        <textarea id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={field + ' resize-none text-base md:text-lg'} placeholder="Outlet, timeline, and what you have in mind." />
      </div>

      <button type="submit" className="group inline-flex items-center gap-4 bg-ink text-paper px-8 py-5 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-signal transition-colors">
        Send message
        <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
      </button>

      <p className="text-xs text-ink/50 pt-2 font-mono uppercase tracking-[0.15em]">
        Opens in your mail client ·{' '}
        <a href={`mailto:${SITE.email}`} className="text-ink underline underline-offset-4">
          {SITE.email}
        </a>
      </p>
    </form>
  )
}
