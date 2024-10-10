import { supabase } from './supabaseClient'

async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('api_keys_table').select('*').limit(1)
    
    if (error) {
      console.error('Error connecting to Supabase:', error.message)
      return false
    }
    
    console.log('Successfully connected to Supabase')
    console.log('Sample data:', data)
    return true
  } catch (error) {
    console.error('Unexpected error:', error.message)
    return false
  }
}

export { testSupabaseConnection }