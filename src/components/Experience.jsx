import { experience } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        {/* The heading stays in view while the longer timeline scrolls past it. */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index="02" eyebrow="Experience" title="Where I have worked." compact>
            A remote internship, an on-site internship, and now a full-time engineer role.
          </SectionHeading>
        </div>

        <ol className="relative ml-2 space-y-12 border-l border-line pl-8 sm:ml-3 sm:pl-10 lg:col-span-2">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.date} as="li" delay={i * 0.05} className="relative">
              <span
                className={`absolute -left-[2.45rem] top-1.5 size-3 rounded-full border-2 border-bg sm:-left-[3.07rem] ${
                  i === 0 ? 'bg-accent' : 'bg-line-strong'
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted">{job.date}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{job.place}</p>
              <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
