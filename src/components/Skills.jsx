import { skills } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index="04" eyebrow="Skills" title="What I work with." />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 0.06}>
              <div className="card h-full p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{g.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
