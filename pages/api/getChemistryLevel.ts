import { getAuth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { xpType } = req.query;
  const { userId, getToken } = getAuth(req);
  const token = await getToken({ template: "supabase" });
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

  const client = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })

    const { data, error } = await client
        .from('user-level-progression')
        .select(xpType as string)
        .eq('user_id', userId)

    console.log('CHEM DATA: ', data)

  return res.status(200).json(data);
}