import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CornerDownLeft, Download, FileText, Layers, Mail, Moon, Search, Sun, User } from 'lucide-react'
import { featured, nav, profile } from '../data'
import { GithubIcon, LinkedinIcon } from './Icons'

const sectionIcons = { about: User, experience: Layers, projects: Layers, skills: Layers, contact: Mail }

// Ctrl+K (or Cmd+K) opens a searchable list of everything on the site.
export default function CommandPalette({ open, onClose, theme, onToggleTheme }) {
  const dialogRef = useRef(null)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)

  const items = useMemo(() => {
    const go = (hash) => () => navigate({ pathname: '/', hash })
    const open = (url) => () => window.open(url, '_blank', 'noopener,noreferrer')
    return [
      ...nav.map((n) => ({
        group: 'Go to',
        label: n.label,
        hint: 'Section',
        icon: sectionIcons[n.id] ?? ArrowRight,
        run: go(`#${n.id}`),
      })),
      { group: 'Go to', label: 'Adaptive DSA Coach case study', hint: 'Page', icon: FileText, run: () => navigate(featured.caseStudy) },
      { group: 'Links', label: 'GitHub', hint: 'Opens in a new tab', icon: GithubIcon, run: open(profile.github) },
      { group: 'Links', label: 'LinkedIn', hint: 'Opens in a new tab', icon: LinkedinIcon, run: open(profile.linkedin) },
      { group: 'Actions', label: 'Send an email', hint: profile.email, icon: Mail, run: () => (window.location.href = `mailto:${profile.email}`) },
      {
        group: 'Actions',
        label: 'Copy email address',
        hint: profile.email,
        icon: Mail,
        run: () => navigator.clipboard?.writeText(profile.email).catch(() => {}),
      },
      { group: 'Actions', label: 'Download resume', hint: 'PDF', icon: Download, run: () => window.open(profile.resume, '_blank') },
      {
        group: 'Actions',
        label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
        hint: 'Theme',
        icon: theme === 'dark' ? Sun : Moon,
        run: onToggleTheme,
      },
    ]
  }, [navigate, theme, onToggleTheme])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? items.filter((i) => `${i.label} ${i.hint} ${i.group}`.toLowerCase().includes(q)) : items
  }, [items, query])

  // Open and close the native dialog, and reset the search each time.
  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open && !d.open) {
      setQuery('')
      setIndex(0)
      d.showModal()
      inputRef.current?.focus()
    }
    if (!open && d.open) d.close()
  }, [open])

  // Keep the highlighted row visible while moving with the arrow keys.
  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${index}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [index])

  const choose = (item) => {
    onClose()
    // Let the dialog close first so the page can scroll.
    setTimeout(() => item.run(), 0)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIndex((i) => (results.length ? (i + 1) % results.length : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIndex((i) => (results.length ? (i - 1 + results.length) % results.length : 0))
    } else if (e.key === 'Enter' && results[index]) {
      e.preventDefault()
      choose(results[index])
    }
  }

  let lastGroup = ''
  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
      aria-label="Command palette"
      className="m-auto mt-[12vh] w-[min(36rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-line-strong bg-bg p-0 text-text shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIndex(0)
          }}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[index] ? `palette-item-${index}` : undefined}
          aria-label="Search sections, links and actions"
          placeholder="Search sections, links and actions"
          className="h-14 w-full rounded-none bg-transparent text-[0.95rem] outline-none focus-visible:outline-none placeholder:text-muted"
        />
        <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">Esc</kbd>
      </div>

      <ul id="palette-list" ref={listRef} role="listbox" className="max-h-[50svh] overflow-y-auto p-2">
        {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">Nothing matches that.</li>}
        {results.map((item, i) => {
          const header = item.group !== lastGroup
          lastGroup = item.group
          const Icon = item.icon
          return (
            <li key={item.group + item.label} role="presentation">
              {header && (
                <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">{item.group}</p>
              )}
              <div
                id={`palette-item-${i}`}
                data-index={i}
                role="option"
                aria-selected={i === index}
                onMouseMove={() => setIndex(i)}
                onClick={() => choose(item)}
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                  i === index ? 'bg-surface-2' : ''
                }`}
              >
                <Icon className="size-4 shrink-0 text-muted" aria-hidden="true" />
                <span className="flex-1 truncate">{item.label}</span>
                <span className="hidden truncate text-xs text-muted sm:block">{item.hint}</span>
                {i === index && <CornerDownLeft className="size-3.5 text-muted" aria-hidden="true" />}
              </div>
            </li>
          )
        })}
      </ul>
    </dialog>
  )
}
