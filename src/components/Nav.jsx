import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, Menu, Moon, Search, Sun, X } from 'lucide-react'
import { nav, profile } from '../data'
import { useActiveSection } from '../lib/hooks'

// 'education' has no nav item; watching it just clears the highlight while it is in view.
const ids = [...nav.map((n) => n.id), 'education']

export default function Nav({ theme, onToggleTheme, onOpenPalette }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-line bg-bg/70 px-3 py-2 backdrop-blur-xl"
      >
        <Link
          to={{ pathname: '/', hash: '#top' }}
          aria-label="Home"
          className="grid size-9 place-items-center rounded-full border border-line-strong font-display text-sm font-semibold tracking-tight transition-colors hover:border-accent hover:text-accent"
        >
          AK
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <Link
                to={{ pathname: '/', hash: `#${item.id}` }}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === item.id ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {active === item.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-surface-2" />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Open search and shortcuts (Ctrl K)"
            className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-text lg:inline-flex"
          >
            <Search className="size-3.5" />
            <span>Search</span>
            <kbd className="rounded border border-line px-1.5 font-mono text-[10px]">Ctrl K</kbd>
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-text"
          >
            {theme === 'dark' ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </button>
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-1.5 rounded-full bg-text px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85 sm:inline-flex"
          >
            <Download className="size-4" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-text md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-bg/95 p-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  to={{ pathname: '/', hash: `#${item.id}` }}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base text-muted transition-colors hover:bg-surface-2 hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                className="mt-1 flex items-center gap-2 rounded-2xl px-4 py-3 text-base font-medium"
              >
                <Download className="size-4" /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
