import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://snnexnacloejzgzdgxtl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmV4bmFjbG9lanpnemRneHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNDM2OTIsImV4cCI6MjA0NDYxOTY5Mn0.DILdd9jDRx4dLRGgyLINR1rtPsu3Re5yilyJmb9ENaY';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// Sign up function
export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
   }
   // Login function
   export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
   }
   // Logout function
   export async function logout() {
    const { error } = await supabase.auth.signOut();
    return { error };
   }