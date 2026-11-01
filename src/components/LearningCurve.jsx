import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion } from 'motion/react'

// An illustration (not real data): a learner's skill rating climbing as they practise.
// It echoes Adaptive DSA Coach, where every solved problem moves a per-concept rating.
const PATH =
  'M 24 196 C 60 192 78 168 108 170 S 156 148 188 122 S 228 128 254 98 S 300 72 330 62 S 366 42 380 30'
const MILESTONES = [
  { at: 0.22, label: 'Arrays' },
  { at: 0.48, label: 'Hashing' },
  { at: 0.74, label: 'Trees' },
  { at: 1, label: 'Graphs' },
]
const DRAW = 2.4
const START = 0.9

export default function LearningCurve() {
  const reduce = useReducedMotion()
  const pathRef = useRef(null)
  const [points, setPoints] = useState([])

  // Read the exact position of each milestone from the path, so the dots sit on the line.
  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    setPoints(
      MILESTONES.map((m) => {
        const p = path.getPointAtLength(total * m.at)
        return { ...m, x: p.x, y: p.y }
      }),
    )
  }, [])

  return (
    <figure
      role="img"
      aria-label="Illustration of a skill rating rising as a learner practises more problems"
      className="card relative overflow-hidden p-5"
    >
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>Skill rating</span>
        <span>Illustration, not real data</span>
      </div>

      <svg viewBox="0 0 400 230" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="curve-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* grid */}
        {[50, 100, 150, 200].map((y) => (
          <line key={y} x1="24" x2="384" y1={y} y2={y} stroke="var(--line)" strokeWidth="1" />
        ))}
        {[24, 114, 204, 294, 384].map((x) => (
          <line key={x} x1={x} x2={x} y1="20" y2="200" stroke="var(--line)" strokeWidth="1" />
        ))}

        {/* area under the curve */}
        <m.path
          d={`${PATH} L 380 200 L 24 200 Z`}
          fill="url(#curve-fill)"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: START + DRAW * 0.6, duration: 1 }}
        />

        {/* the curve */}
        <m.path
          ref={pathRef}
          d={PATH}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: START, duration: DRAW, ease: [0.45, 0, 0.2, 1] }}
        />

        {/* milestones */}
        {points.map((p, i) => (
          <m.g
            key={p.label}
            initial={reduce ? false : { opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: START + DRAW * p.at, duration: 0.45, ease: 'backOut' }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <circle cx={p.x} cy={p.y} r="4.5" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
            {i === points.length - 1 && (
              <circle cx={p.x} cy={p.y} r="9" fill="none" stroke="var(--accent)" strokeOpacity="0.4">
                {!reduce && <animate attributeName="r" values="6;14;6" dur="2.6s" repeatCount="indefinite" />}
                {!reduce && (
                  <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite" />
                )}
              </circle>
            )}
            <text
              x={p.x}
              y={p.y - (i === points.length - 1 ? 16 : 12)}
              textAnchor={i === points.length - 1 ? 'end' : 'middle'}
              dx={i === points.length - 1 ? 6 : 0}
              fill="var(--muted)"
              fontSize="10"
              fontFamily="var(--font-mono)"
            >
              {p.label}
            </text>
          </m.g>
        ))}
      </svg>

      <div className="mt-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>Start</span>
        <span>Problems solved →</span>
      </div>
    </figure>
  )
}
