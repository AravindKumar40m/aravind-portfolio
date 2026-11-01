import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

// A modal built on the native <dialog>: Esc closes it, focus stays inside while it is open.
export default function Lightbox({ open, onClose, title, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      aria-label={title}
      className="m-auto max-h-[92svh] w-[min(64rem,calc(100vw-1.5rem))] overflow-y-auto rounded-2xl border border-line-strong bg-bg p-4 text-text backdrop:bg-black/70 backdrop:backdrop-blur-sm sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-text"
        >
          <X className="size-5" />
        </button>
      </div>
      {open && children}
    </dialog>
  )
}
