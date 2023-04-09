import { createClient } from "@supabase/supabase-js";
import { envs } from "../../shared/environment.js";

const {
  supabase: { projectUrl, anonKey },
} = envs();

const supabase = createClient(projectUrl, anonKey);

export default supabase;
