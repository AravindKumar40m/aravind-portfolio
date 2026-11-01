import { profile } from '../data'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {year} {profile.name}</p>
        <p className="font-mono text-xs">Built with React, Vite and Tailwind CSS</p>
      </div>
    </footer>
  )
}
