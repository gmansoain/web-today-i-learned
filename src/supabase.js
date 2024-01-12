import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://egueqhewarfgxlytsqqy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVndWVxaGV3YXJmZ3hseXRzcXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4NzY3MTcsImV4cCI6MjAyMDQ1MjcxN30.nrHFP96IU2xfIclSp9HNurzsBz0sjgEYRLmHtKZZk0g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
