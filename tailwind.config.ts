import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Config } from 'tailwindcss'

const clientDir = dirname(fileURLToPath(import.meta.url))

export default {
  content: [join(clientDir, './src/**/*.tsx')],
  theme: {
    extend: {}
  },
  darkMode: ['selector', '[theme="dark"]'],
  plugins: []
} satisfies Config
