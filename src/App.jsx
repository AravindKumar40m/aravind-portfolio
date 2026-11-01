import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LazyMotion } from 'motion/react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ScrollManager from './components/ScrollManager'
import ScrollProgress from './components/ScrollProgress'
import { useTheme } from './lib/hooks'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// These are only needed after the first screen, so they load on demand.
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const CommandPalette = lazy(() => import('./components/CommandPalette'))
const loadMotionFeatures = () => import('./lib/motionFeatures').then((mod) => mod.default)

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [paletteUsed, setPaletteUsed] = useState(false)

  // Ctrl+K or Cmd+K toggles the command palette.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteUsed(true)
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openPalette = () => {
    setPaletteUsed(true)
    setPaletteOpen(true)
  }

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <BrowserRouter>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <ScrollManager />
        <ScrollProgress />
        <Nav theme={theme} onToggleTheme={toggleTheme} onOpenPalette={openPalette} />
        {paletteUsed && (
          <Suspense fallback={null}>
            <CommandPalette
              open={paletteOpen}
              onClose={() => setPaletteOpen(false)}
              theme={theme}
              onToggleTheme={toggleTheme}
            />
          </Suspense>
        )}
        <main id="main">
          <Suspense fallback={<div className="min-h-[70svh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-studies/adaptive-dsa-coach" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </LazyMotion>
  )
}
