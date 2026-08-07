/* ==========================================================================
   CAKE LOVER — SUPABASE CONFIGURATION
   Project: https://fhjqmxobbexbpjwuabgm.supabase.co
   ========================================================================== */

const SUPABASE_URL = 'https://fhjqmxobbexbpjwuabgm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_uiTbttYAnOVY5p92Cotoww_5Fmo1wFB';

/* ------------------------------------------------------------------
   SUPABASE REST API HELPER
   A lightweight wrapper using the REST API (no npm required).
   This works directly in the browser without any build step.
   ------------------------------------------------------------------ */

window.SupabaseClient = {
  url: SUPABASE_URL,
  key: SUPABASE_ANON_KEY,

  // Default headers for all requests
  headers() {
    return {
      'Content-Type': 'application/json',
      'apikey': this.key,
      'Authorization': 'Bearer ' + this.key,
      'Prefer': 'return=representation'
    };
  },

  // Build a query builder for a table
  from(table) {
    const self = this;
    const state = { table, _filters: '', _order: '', _limit: '' };

    const builder = {
      eq(col, val) {
        state._filters += '&' + col + '=eq.' + encodeURIComponent(val);
        return builder;
      },

      order(col, { ascending = true } = {}) {
        state._order = '&order=' + col + '.' + (ascending ? 'asc' : 'desc');
        return builder;
      },

      limit(n) {
        state._limit = '&limit=' + n;
        return builder;
      },

      async select(cols) {
        cols = cols || '*';
        const url = self.url + '/rest/v1/' + state.table + '?select=' + cols + state._filters + state._order + state._limit;
        const res = await fetch(url, { headers: self.headers() });
        const data = await res.json();
        if (!res.ok) return { data: null, error: data };
        return { data: data, error: null };
      },

      async upsert(payload) {
        const url = self.url + '/rest/v1/' + state.table;
        const headers = Object.assign({}, self.headers(), { 'Prefer': 'resolution=merge-duplicates,return=representation' });
        const res = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) return { data: null, error: data };
        return { data: Array.isArray(data) ? data[0] : data, error: null };
      },

      async insert(payload) {
        const url = self.url + '/rest/v1/' + state.table;
        const res = await fetch(url, {
          method: 'POST',
          headers: self.headers(),
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) return { data: null, error: data };
        return { data: Array.isArray(data) ? data[0] : data, error: null };
      },

      async delete() {
        const filterQ = state._filters.replace(/^&/, '');
        const url = self.url + '/rest/v1/' + state.table + '?' + filterQ;
        const res = await fetch(url, { method: 'DELETE', headers: self.headers() });
        if (!res.ok) { const e = await res.json(); return { error: e }; }
        return { error: null };
      }
    };

    return builder;
  }
};

/* ------------------------------------------------------------------
   HIGH-LEVEL HELPERS: Save / Load the entire site config
   Table: cakelover_config
     id          TEXT PRIMARY KEY  (always 'main')
     data        JSONB             (the full CAKELOVER_DATA object)
     updated_at  TIMESTAMPTZ
   ------------------------------------------------------------------ */

window.SupabaseDB = {

  CONFIG_ROW_ID: 'main',
  TABLE: 'cakelover_config',

  // Load full config from Supabase
  async loadConfig() {
    try {
      const { data, error } = await SupabaseClient
        .from(this.TABLE)
        .eq('id', this.CONFIG_ROW_ID)
        .select('data');

      if (error || !data || data.length === 0) {
        console.warn('[Supabase] Config row not found in DB. Will use local defaults.', error);
        return null;
      }

      return data[0].data; // Full CAKELOVER_DATA JSON
    } catch (err) {
      console.error('[Supabase] loadConfig failed:', err);
      return null;
    }
  },

  // Save full config to Supabase (upsert)
  async saveConfig(payload) {
    try {
      const { data, error } = await SupabaseClient
        .from(this.TABLE)
        .upsert({
          id: this.CONFIG_ROW_ID,
          data: payload,
          updated_at: new Date().toISOString()
        });

      if (error) {
        console.error('[Supabase] saveConfig error:', error);
        return { success: false, error };
      }

      console.log('[Supabase] Config saved to Supabase.');
      return { success: true };
    } catch (err) {
      console.error('[Supabase] saveConfig exception:', err);
      return { success: false, error: err };
    }
  },

  // Test connectivity
  async testConnection() {
    try {
      const res = await fetch(SUPABASE_URL + '/rest/v1/cakelover_config?select=id&limit=1', {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
        }
      });
      return res.ok;
    } catch {
      return false;
    }
  }
};

console.log('[Supabase] Client loaded. Project: fhjqmxobbexbpjwuabgm');
