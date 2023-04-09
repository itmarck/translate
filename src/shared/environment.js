import dotenv from "dotenv";

export function envs() {
  dotenv.config();

  return {
    supabase: {
      projectUrl: process.env.SUPABASE_PROJECT_URL,
      anonKey: process.env.SUPABASE_ANON_KEY,
    },
    openai: {
      organization: process.env.OPENAI_ORGANIZATION_ID,
      apiKey: process.env.OPENAI_API_KEY,
    },
    port: process.env.TRANSLATE_PORT,
  };
}
