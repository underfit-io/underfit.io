import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

// Helper to find all HTML files in a directory recursively
function getHtmlEntries(dir, entries = {}) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory()) {
            if (file === 'node_modules' || file === 'dist' || file === 'public' || file === '.git') continue
            getHtmlEntries(fullPath, entries)
        } else if (file.endsWith('.html')) {
            const name = path.relative(process.cwd(), fullPath).replace(/\\/g, '/').replace(/\.html$/, '')
            entries[name] = fullPath
        }
    }
    return entries
}

export default defineConfig({
    base: './', // Use relative paths for flexibility
    build: {
        rollupOptions: {
            input: getHtmlEntries(process.cwd())
        }
    }
})
