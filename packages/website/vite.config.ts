import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Plugin to copy optimized SVG files to public directory
function copyOptimizedIcons() {
  return {
    name: 'copy-optimized-icons',
    configureServer() {
      // Copy during dev server startup
      copyIcons()
    },
    buildStart() {
      // Copy during build
      copyIcons()
    }
  }
}

function copyIcons() {
  const sourceDir = join(__dirname, '../../optimized')
  const targetDir = join(__dirname, 'public/optimized')
  
  try {
    copyDirRecursive(sourceDir, targetDir)
    console.log('✓ Copied optimized icons to public directory')
  } catch (error) {
    console.error('Failed to copy optimized icons:', error)
  }
}

function copyDirRecursive(src: string, dest: string) {
  mkdirSync(dest, { recursive: true })
  
  const entries = readdirSync(src)
  
  for (const entry of entries) {
    const srcPath = join(src, entry)
    const destPath = join(dest, entry)
    
    if (statSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyOptimizedIcons()],
})
