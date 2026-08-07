import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fhjqmxobbexbpjwuabgm.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_uiTbttYAnOVY5p92Cotoww_5Fmo1wFB";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);

// ==========================================
// 1. CAKES / PRODUCTS CRUD
// ==========================================
export async function getCakes() {
  const { data, error } = await supabase.from('cakes').select('*').order('created_at', { ascending: true });
  if (error) console.error('Error fetching cakes:', error);
  return { data, error };
}

export async function createCake(cakeData) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from('cakes').insert([{ ...cakeData, user_id: user?.id }]).select();
  return { data, error };
}

export async function updateCake(id, cakeData) {
  const { data, error } = await supabase.from('cakes').update(cakeData).eq('id', id).select();
  return { data, error };
}

export async function deleteCake(id) {
  const { error } = await supabase.from('cakes').delete().eq('id', id);
  return { error };
}

// ==========================================
// 2. CATEGORIES CRUD
// ==========================================
export async function getCategories() {
  const { data, error } = await supabase.from('categories').select('*').order('created_at', { ascending: true });
  return { data, error };
}

export async function createCategory(categoryData) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from('categories').insert([{ ...categoryData, user_id: user?.id }]).select();
  return { data, error };
}

export async function updateCategory(id, categoryData) {
  const { data, error } = await supabase.from('categories').update(categoryData).eq('id', id).select();
  return { data, error };
}

export async function deleteCategory(id) {
  const { error } = await supabase.from('categories').delete().eq('id', id);
  return { error };
}

// ==========================================
// 3. REELS CRUD
// ==========================================
export async function getReels() {
  const { data, error } = await supabase.from('reels').select('*').order('created_at', { ascending: true });
  return { data, error };
}

export async function createReel(reelData) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from('reels').insert([{ ...reelData, user_id: user?.id }]).select();
  return { data, error };
}

export async function updateReel(id, reelData) {
  const { data, error } = await supabase.from('reels').update(reelData).eq('id', id).select();
  return { data, error };
}

export async function deleteReel(id) {
  const { error } = await supabase.from('reels').delete().eq('id', id);
  return { error };
}

// ==========================================
// 4. HERO SLIDES CRUD
// ==========================================
export async function getHeroSlides() {
  const { data, error } = await supabase.from('hero_slides').select('*').order('created_at', { ascending: true });
  return { data, error };
}

export async function createHeroSlide(slideData) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from('hero_slides').insert([{ ...slideData, user_id: user?.id }]).select();
  return { data, error };
}

export async function deleteHeroSlide(id) {
  const { error } = await supabase.from('hero_slides').delete().eq('id', id);
  return { error };
}

// ==========================================
// 5. MARQUEE ITEMS CRUD
// ==========================================
export async function getMarqueeItems() {
  const { data, error } = await supabase.from('marquee_items').select('*').order('created_at', { ascending: true });
  return { data, error };
}

export async function createMarqueeItem(itemData) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from('marquee_items').insert([{ ...itemData, user_id: user?.id }]).select();
  return { data, error };
}

export async function deleteMarqueeItem(id) {
  const { error } = await supabase.from('marquee_items').delete().eq('id', id);
  return { error };
}

// ==========================================
// 6. BRAND STORY CRUD
// ==========================================
export async function getBrandStory() {
  const { data, error } = await supabase.from('brand_story').select('*').limit(1).single();
  return { data, error };
}

export async function updateBrandStory(storyData) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from('brand_story').upsert([{ id: 1, ...storyData, user_id: user?.id, updated_at: new Date().toISOString() }]).select();
  return { data, error };
}


