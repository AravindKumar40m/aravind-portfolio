import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | Aravind Kumar M'
  }, [])

  return (
    <section className="container-page flex min-h-[80svh] flex-col items-start justify-center pt-24">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">Page not found.</h1>
      <p className="mt-5 max-w-md text-muted">That link does not lead anywhere. The home page has everything.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03]"
      >
        <ArrowLeft className="size-4" /> Back to home
      </Link>
    </section>
  )
}
