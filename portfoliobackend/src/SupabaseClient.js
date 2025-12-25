import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cqnlwibhugoapxagcpxz.supabase.co';
const supabaseAnonKey = 'sb_publishable_tDrfDbfbW-z_O_hoXz68Kg_JCcLNnUI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);