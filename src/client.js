import { createClient } from '@supabase/supabase-js';

const URL = 'https://kqauflvwekhjcnrmlzvt.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYXVmbHZ3ZWtoamNucm1senZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1Mzg3OTcsImV4cCI6MjAwNDExNDc5N30.CWEFT6YV08I8LJNQbtShV1DGQxeSxa3x-ZY7xSAoViI';

export const supabase = createClient(URL, API_KEY);