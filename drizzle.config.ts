import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://kidsstory_owner:bVtX63pPwMxN@ep-lingering-recipe-a151971w.ap-southeast-1.aws.neon.tech/kidsstory?sslmode=require'
  },
  verbose: true,
  strict: true,
})