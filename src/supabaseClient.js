import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vrwakmdyuwotpcymbpuh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyd2FrbWR5dXdvdHBjeW1icHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzA2NzgsImV4cCI6MjA5NzAwNjY3OH0.BOzTyKJsbzJu2DJ8NMc7_DsesGHb2o6jvUW0u9UVC8U';
export const supabase = createClient(supabaseUrl, supabaseKey)