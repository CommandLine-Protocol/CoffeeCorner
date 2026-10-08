import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fallback warning if environment variables are not yet populated by the student
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anonymous Key missing in .env! Update your .env file to enable dynamic database fetching.');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);