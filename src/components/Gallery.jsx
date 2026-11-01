import { useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'

// A browser-style frame around the image, so screenshots look like part of the page.
function Frame({ children, label }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-2 shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted">{label}</span>
      </div>
      {children}
    </div>
  )
}

// Tabs that switch between screenshots, with a caption under the active one.
export default function Gallery({ shots, label = 'localhost' }) {
  const [active, setActive] = useState(shots[0].id)
  const reduce = useReducedMotion()
  const shot = shots.find((s) => s.id === active)

  return (
    <figure>
      <div
        role="tablist"
        aria-label="Screenshots"
        className={`mb-4 flex flex-wrap gap-2 ${shots.length === 1 ? 'hidden' : ''}`}
      >
        {shots.map((s) => (
          <button
            key={s.id}
            role="tab"
            type="button"
            aria-selected={active === s.id}
            onClick={() => setActive(s.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === s.id
                ? 'border-accent bg-accent text-accent-ink'
                : 'border-line text-muted hover:border-line-strong hover:text-text'
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <Frame label={label}>
        <div className="relative aspect-[1568/761] w-full bg-surface-2">
          <AnimatePresence mode="wait" initial={false}>
            <m.img
              key={shot.id}
              src={shot.src}
              alt={shot.alt}
              width="1568"
              height="761"
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-top"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>
        </div>
      </Frame>

      <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{shot.caption}</figcaption>
    </figure>
  )
}
