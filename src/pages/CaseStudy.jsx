import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { caseStudy, featured } from '../data'
import Gallery from '../components/Gallery'
import { GithubIcon } from '../components/Icons'
import Reveal from '../components/Reveal'

function Block({ index, title, children }) {
  return (
    <Reveal as="section" className="mt-20">
      <p className="eyebrow mb-3">{index}</p>
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </Reveal>
  )
}

function Bullets({ items }) {
  return (
    <ul className="space-y-3 text-[0.95rem] leading-relaxed text-muted">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CaseStudy() {
  useEffect(() => {
    document.title = `${caseStudy.title} case study | Aravind Kumar M`
  }, [])

  return (
    <article className="container-page pb-10 pt-32 sm:pt-40">
      <Link
        to={{ pathname: '/', hash: '#projects' }}
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
      >
        <ArrowLeft className="size-4" /> All projects
      </Link>

      <header className="max-w-3xl">
        <p className="eyebrow mb-4">Case study</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
          {caseStudy.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted">{caseStudy.subtitle}</p>

        <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
          {caseStudy.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">{f.label}</dt>
              <dd className="mt-1 text-sm">{f.value}</dd>
            </div>
          ))}
        </dl>

        <a
          href={featured.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
        >
          <GithubIcon className="size-4" /> View the code on GitHub
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </header>

      <Reveal className="mt-14">
        <Gallery shots={featured.shots} label="adaptive-dsa-coach · running locally" />
      </Reveal>

      <div className="max-w-3xl">
        <Block index="01" title="The problem">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {caseStudy.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Block>

        <Block index="02" title="How it works">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {caseStudy.steps.map((s, i) => (
              <li key={s.title} className="card p-5">
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block index="03" title="Architecture">
          <div className="card p-6">
            <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {[caseStudy.architecture[0], caseStudy.architecture[1], caseStudy.architecture[2]].map((n, i) => (
                <div key={n.name} className="contents">
                  {i > 0 && (
                    <span className="hidden place-items-center text-muted sm:grid" aria-hidden="true">
                      ⇄
                    </span>
                  )}
                  <div className="rounded-xl border border-line-strong bg-surface-2 p-4">
                    <p className="font-display font-semibold">{n.name}</p>
                    <p className="mt-1 text-sm text-muted">{n.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="my-3 text-center text-muted" aria-hidden="true">
              ↓
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[caseStudy.architecture[3], caseStudy.architecture[4]].map((n) => (
                <div key={n.name} className="rounded-xl border border-dashed border-line-strong p-4">
                  <p className="font-display font-semibold">{n.name}</p>
                  <p className="mt-1 text-sm text-muted">{n.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              The API is the only part that talks to the database, the sandbox and the language model. The browser never
              does.
            </p>
          </div>
        </Block>

        <Block index="04" title="Decisions I made, and why">
          <div className="space-y-4">
            {caseStudy.decisions.map((d) => (
              <div key={d.title} className="card p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{d.text}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block index="05" title="By the numbers">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {caseStudy.numbers.map((n) => (
              <div key={n.label} className="bg-surface px-5 py-6">
                <dd className="font-display text-3xl font-semibold tracking-tight">{n.value}</dd>
                <dt className="mt-1 text-sm text-muted">{n.label}</dt>
              </div>
            ))}
          </dl>
        </Block>

        <Block index="06" title="Limits, and what is next">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Honest limits</h3>
              <Bullets items={caseStudy.limits} />
            </div>
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Planned next</h3>
              <Bullets items={caseStudy.next} />
            </div>
          </div>
        </Block>
      </div>
    </article>
  )
}
