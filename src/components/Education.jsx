import { education, leadership } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index="05" eyebrow="Education" title="Education and leadership." />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Education</h3>
            {education.map((e) => (
              <Reveal key={e.title}>
                <div className="card p-6">
                  <p className="font-mono text-xs text-muted">{e.date}</p>
                  <h4 className="mt-2 font-display text-xl font-semibold tracking-tight">{e.title}</h4>
                  <p className="mt-1 text-muted">{e.place}</p>
                  {e.detail && <p className="mt-3 font-mono text-sm text-accent">{e.detail}</p>}
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Leadership</h3>
            <div className="space-y-4">
              {leadership.map((l, i) => (
                <Reveal key={l.title} delay={i * 0.07}>
                  <div className="card p-6">
                    <p className="font-mono text-xs text-muted">{l.date}</p>
                    <h4 className="mt-2 font-display text-lg font-semibold tracking-tight">{l.title}</h4>
                    <p className="mt-1 text-sm text-muted">{l.place}</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{l.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
