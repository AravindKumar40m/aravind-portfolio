import { useEffect, useRef, useState } from 'react'
import { animate, m, useInView, useReducedMotion, useSpring } from 'motion/react'
import { ArrowDown, Mail } from 'lucide-react'
import { profile, stats } from '../data'
import { GithubIcon, LinkedinIcon } from './Icons'
import LearningCurve from './LearningCurve'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// Counts up to a number the first time it scrolls into view.
function CountUp({ to, suffix }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

// Nudges its child slightly toward the cursor.
function Magnetic({ children }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 220, damping: 16 })
  const y = useSpring(0, { stiffness: 220, damping: 16 })

  const move = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.22)
  }
  const leave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <m.div ref={ref} style={{ x, y }} onMouseMove={move} onMouseLeave={leave} className="inline-block">
      {children}
    </m.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const initial = reduce ? false : 'hidden'

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-10 pt-32">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow-blob -left-32 top-16 size-[36rem]" aria-hidden="true" />
      <div className="glow-blob -right-28 top-[26rem] size-[32rem]" style={{ animationDelay: '-8s' }} aria-hidden="true" />

      <div className="container-page relative">
        <m.div variants={container} initial={initial} animate="show">
          <m.p
            variants={fade}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur"
          >
            <span className="live-dot" aria-hidden="true" />
            {profile.role} at {profile.company} · {profile.location}
          </m.p>

          <h1 className="font-display text-[clamp(2.9rem,10vw,7rem)] font-semibold leading-[0.95] tracking-tight">
            {profile.name.split(' ').map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <m.span variants={word} className="inline-block">
                  {w}
                </m.span>
              </span>
            ))}
          </h1>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
          <m.p variants={fade} className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </m.p>

          <m.div variants={fade} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03]"
              >
                View projects <ArrowDown className="size-4" />
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              <Mail className="size-4" /> Get in touch
            </a>
            <span className="mx-1 hidden h-6 w-px bg-line-strong sm:block" aria-hidden="true" />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-text"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-text"
            >
              <LinkedinIcon />
            </a>
          </m.div>
          </div>

          <m.div variants={fade} className="hidden md:block lg:col-span-2">
            <LearningCurve />
          </m.div>
          </div>
        </m.div>

        <m.dl
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 max-w-[17rem] text-sm leading-snug text-muted">{s.label}</p>
              </dd>
            </div>
          ))}
        </m.dl>
      </div>

    </section>
  )
}
