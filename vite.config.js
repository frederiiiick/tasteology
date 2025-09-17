import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src/scss']
      }
    }
  },
  server: {
    open: true
  }
})
