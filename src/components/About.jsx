import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, GraduationCap, Layers, MapPin } from 'lucide-react'
import { about, featured } from '../data'
import { spotlight } from '../lib/hooks'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// One small bento tile: an icon, a label and a value.
function Tile({ icon: Icon, label, children, delay = 0, className = '' }) {
  return (
    <Reveal delay={delay} className={className}>
      <div onMouseMove={spotlight} className="card spot flex h-full flex-col justify-between gap-6 p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
          <Icon className="size-5 text-accent" aria-hidden="true" />
        </div>
        <div>{children}</div>
      </div>
    </Reveal>
  )
}

export default function About() {
  const [intro, path, own] = about.paragraphs

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index="01" eyebrow="About" title="Building features end to end." />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <div onMouseMove={spotlight} className="card spot h-full space-y-5 p-7 text-lg leading-relaxed text-muted sm:p-9">
              <p className="text-text">{intro}</p>
              <p>{path}</p>
            </div>
          </Reveal>

          <Tile icon={MapPin} label="Based in" delay={0.05} className="md:col-span-2">
            <p className="font-display text-3xl font-semibold tracking-tight">Chennai</p>
            <p className="mt-1 text-sm text-muted">India</p>
          </Tile>

          <Tile icon={Briefcase} label="Role" delay={0.05} className="md:col-span-2">
            <p className="font-display text-2xl font-semibold tracking-tight">Software Engineer</p>
            <p className="mt-1 text-sm text-muted">Log2Base2 · Leyaa.ai</p>
          </Tile>

          <Tile icon={GraduationCap} label="Education" delay={0.1} className="md:col-span-2">
            <p className="font-display text-2xl font-semibold tracking-tight">M.Sc. IT (Integrated)</p>
            <p className="mt-1 text-sm text-muted">CEG, Anna University</p>
          </Tile>

          <Tile icon={Layers} label="Works with" delay={0.15} className="md:col-span-2">
            <ul className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'AWS Lambda'].map((s) => (
                <li key={s} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </Tile>

          <Reveal delay={0.1} className="md:col-span-6">
            <div onMouseMove={spotlight} className="card spot flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <p className="max-w-2xl text-lg leading-relaxed text-muted">{own}</p>
              <Link
                to={featured.caseStudy}
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
              >
                Read the case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
