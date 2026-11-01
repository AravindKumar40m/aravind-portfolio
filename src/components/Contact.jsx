import { useState } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon } from './Icons'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked. The mailto link above still works.
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="glow-blob left-1/2 top-0 size-[34rem] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
            <p className="eyebrow relative mb-4">06 / Contact</p>
            <h2 className="relative font-display text-4xl font-semibold tracking-tight sm:text-6xl">Let's talk.</h2>
            <p className="relative mx-auto mt-5 max-w-md text-muted">
              Have something in mind? The fastest way to reach me is email.
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03]"
              >
                <Mail className="size-4" /> {profile.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
                {copied ? 'Copied' : 'Copy email'}
              </button>
              <span className="sr-only" role="status">
                {copied ? 'Email address copied' : ''}
              </span>
            </div>

            <div className="relative mt-8 flex items-center justify-center gap-6 text-sm text-muted">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-text">
                <GithubIcon className="size-4" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-text">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
              <a href={profile.resume} download className="inline-flex items-center gap-2 transition-colors hover:text-text">
                <Download className="size-4" /> Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
