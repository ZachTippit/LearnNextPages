import { getAuth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

type NextApiRequestWithFormData = NextApiRequest &
  Request & {
    files: any[];
  };
 
export default async function handler(
  req: NextApiRequestWithFormData,
  res: NextApiResponse
) {
  const { chemistry_level } = JSON.parse(req.body);
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
      .update({chemistry_level: chemistry_level})
      .eq('user_id', userId)

  return res.status(200).json({});
}

import toast from "react-hot-toast";
import useSWR from "swr";

const getChemLevel = async ([url, xpType]) => {
    console.log('XP TYPE: ', xpType)
    return fetch(`/api/getChemistryLevel?xpType=${xpType}`, {
        method: 'GET',
        })
    .then((res) => res.json())
}