import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabaseClient';

export async function POST(request) {
  const { apiKey } = await request.json();
  console.log('Received API Key:', apiKey);

  try {
    const { data, error } = await supabase
      .from('api_keys')
      .select('*')
      .eq('value', apiKey)
      .single();

    console.log('Supabase query result:', { data, error });

    if (error) {
      console.error('Error querying Supabase:', error.message);
      return NextResponse.json({ valid: false, error: error.message }, { status: 500 });
    }

    if (data) {
      console.log('Valid API key found');
      return NextResponse.json({ valid: true }, { status: 200 });
    } else {
      console.log('No matching API key found');
      return NextResponse.json({ valid: false }, { status: 401 });
    }
  } catch (error) {
    console.error('Unexpected error:', error.message);
    return NextResponse.json({ valid: false, error: error.message }, { status: 500 });
  }
}
