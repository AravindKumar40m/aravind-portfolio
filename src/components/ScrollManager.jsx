import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to a #section when the link has one, otherwise to the top of the new page.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const lastPath = useRef(pathname)

  useEffect(() => {
    const pageChanged = lastPath.current !== pathname
    lastPath.current = pathname

    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior: pageChanged ? 'instant' : 'smooth' })
        return
      }
    }
    if (pageChanged || !hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
