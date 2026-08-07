import { supabase } from "./supabaseClient.js";

export async function handleSignUp(email, password, errorElement) {
  if (errorElement) errorElement.textContent = "";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    if (errorElement) errorElement.textContent = error.message;
    return { data: null, error };
  } else {
    window.location.href = "/";
    return { data, error: null };
  }
}
