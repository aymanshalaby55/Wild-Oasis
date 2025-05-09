import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gkqznxqcoktzmpxupnkb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrcXpueHFjb2t0em1weHVwbmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NzYyNTIsImV4cCI6MjA2MjE1MjI1Mn0.wCeATBTKdiRwfw6dGKf13K4q9kS6rsREZAqw44sRMDo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
