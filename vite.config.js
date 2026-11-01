import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

// Things search engines and link previews need must be real, absolute URLs, so they
// are built from VITE_SITE_URL (set it in .env.production before deploying).
function seo(site) {
  const pages = ['/', '/case-studies/adaptive-dsa-coach']
  return {
    name: 'seo',
    // __SITE__ in index.html becomes the site URL. With no URL set, those tags are removed
    // rather than shipped with a wrong address.
    transformIndexHtml(html) {
      if (site) return html.replaceAll('__SITE__', site)
      const dependsOnSite = (line) =>
        line.includes('__SITE__') || line.includes('og:image:') || line.includes('summary_large_image')
      return html
        .split('\n')
        .filter((line) => !dependsOnSite(line))
        .join('\n')
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${site ? `Sitemap: ${site}/sitemap.xml\n` : ''}`,
      })
      if (!site) return
      const urls = pages.map((p) => `  <url><loc>${site}${p}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const site = (env.VITE_SITE_URL || '').replace(/\/$/, '')
  return { plugins: [react(), tailwindcss(), seo(site)] }
})
