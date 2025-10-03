import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { gold: '#c7a35b' } } }, plugins: [] }
export default config
