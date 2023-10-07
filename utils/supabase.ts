import { getAuth } from '@clerk/nextjs/server'
import { type SupabaseClient, createClient } from "@supabase/supabase-js";

export const getSupabase = async (
    request: any,
  ) => {
    try {
      const { userId, getToken } = await getAuth(request)
      if (!userId) return null
      
      const token = await getToken({ template: 'supabase' })
      if (!token) return null
  
      const supabaseUrl = process.env.SUPABASE_URL || ''
      const supabaseKey = process.env.SUPABASE_ANON_KEY || ''
  
      const client = createClient(supabaseUrl, supabaseKey, {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })

      console.log('CLIENT: ', client)
      console.log('USERID: ', userId)
      return {client, userId};
    } catch (error) {
      return null
    }
  }