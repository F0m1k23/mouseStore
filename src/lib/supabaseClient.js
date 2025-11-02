import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rwrhczpjyxyiompluyhd.supabase.co'
const supabasePublishableKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3cmhjenBqeXh5aW9tcGx1eWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwODQ4NTQsImV4cCI6MjA3NzY2MDg1NH0.T8_xu6kJnZvbx2l9eowo15ploPCtd7SoexVCbmIpMM4'

export const supabase = createClient(supabaseUrl, supabasePublishableKey)
