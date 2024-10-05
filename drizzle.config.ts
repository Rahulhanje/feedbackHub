import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  migrations: {
    prefix: "supabase",  // Migration files will be prefixed with "supabase"
  },
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgres://localhost:5432/drizzle",  // Use fallback for local dev if env is missing
  },
});
