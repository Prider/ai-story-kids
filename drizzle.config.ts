import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: '<Your Connection String>'
  },
  verbose: true,
  strict: true,
})