// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqwanrsjhaunjiafebys.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxd2FucnNqaGF1bmppYWZlYnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5NzA5NDAsImV4cCI6MjAzMjU0Njk0MH0.HwuiAjQIlSdm35zxwRqQUYJs11VJx4lcA-AOkyevI1I';

export const supabase = createClient(supabaseUrl, supabaseKey);
