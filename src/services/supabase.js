import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hzncwfzrhymqspdabyln.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bmN3ZnpyaHltcXNwZGFieWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MjA2ODUsImV4cCI6MjAwNjQ5NjY4NX0.GybZjROelg4_9sOJ34tvhksdRADLMr6aBm8jBkoZlO4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
