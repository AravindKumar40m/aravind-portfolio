import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Images } from 'lucide-react'
import { featured, projects } from '../data'
import { spotlight } from '../lib/hooks'
import Gallery from './Gallery'
import { GithubIcon } from './Icons'
import Lightbox from './Lightbox'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
          {s}
        </li>
      ))}
    </ul>
  )
}

function LinkPill({ href, children, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
    >
      {icon}
      {children}
      <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
  )
}

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  const cover = p.shots?.[0]

  return (
    <article onMouseMove={spotlight} className="card spot flex h-full flex-col p-6">
      {cover && (
        <>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`View ${p.shots.length === 1 ? 'a screenshot' : `${p.shots.length} screenshots`} of ${p.name}`}
            className="group/cover relative -mx-1 mb-5 block overflow-hidden rounded-xl border border-line"
          >
            <img
              src={cover.src}
              alt=""
              width="1568"
              height="761"
              loading="lazy"
              className="aspect-[1568/761] w-full object-cover object-top transition-transform duration-500 group-hover/cover:scale-[1.04]"
            />
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-bg/85 px-2.5 py-1 font-mono text-[11px] text-text backdrop-blur">
              <Images className="size-3.5" /> {p.shots.length} {p.shots.length === 1 ? 'screenshot' : 'screenshots'}
            </span>
          </button>
          <Lightbox open={open} onClose={() => setOpen(false)} title={p.name}>
            <Gallery shots={p.shots} label={`${p.name} · running locally`} />
          </Lightbox>
        </>
      )}
      <h3 className="font-display text-xl font-semibold tracking-tight">{p.name}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{p.description}</p>
      <div className="mt-6">
        <Chips items={p.stack} />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4">
        <LinkPill href={p.github} icon={<GithubIcon className="size-4" />}>
          Code
        </LinkPill>
        {p.live && <LinkPill href={p.live}>Live site</LinkPill>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index="03" eyebrow="Projects" title="Things I have built.">
          One flagship project, then the smaller full-stack apps that got me here.
        </SectionHeading>

        <Reveal>
          <article onMouseMove={spotlight} className="card spot grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-5">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-3">{featured.tag}</p>
              <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{featured.name}</h3>
              <div className="mt-8">
                <Gallery shots={featured.shots} label="adaptive-dsa-coach · running locally" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-lg leading-relaxed text-muted">{featured.description}</p>
              <ul className="mt-6 space-y-3 text-[0.95rem] leading-relaxed text-muted">
                {featured.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  to={featured.caseStudy}
                  className="group/case inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03]"
                >
                  Read the case study
                  <ArrowRight className="size-4 transition-transform group-hover/case:translate-x-0.5" />
                </Link>
                <LinkPill href={featured.github} icon={<GithubIcon className="size-4" />}>
                  View on GitHub
                </LinkPill>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:col-span-2">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {featured.metrics.map((m) => (
                  <div key={m.label} className="bg-surface px-5 py-5">
                    <dd className="font-display text-3xl font-semibold tracking-tight">{m.value}</dd>
                    <dt className="mt-1 text-sm text-muted">{m.label}</dt>
                  </div>
                ))}
              </dl>
              <Chips items={featured.stack} />
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.07}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
