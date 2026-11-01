import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, children, compact = false }) {
  return (
    <Reveal className={`${compact ? '' : 'mb-12'} max-w-2xl`}>
      <p className="eyebrow mb-3">
        {index} / {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-muted">{children}</p>}
    </Reveal>
  )
}
