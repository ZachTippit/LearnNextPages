import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

const updateXP = async (xp) => {
  return fetch('/api/updateChemistryLevel', {
    method: 'POST',
    body: JSON.stringify({chemistry_level: xp})
  }).then((res) => res.json());
}

const useUpdateXP = (xp) => {
  return useQuery({
    queryKey: ['updateXP', xp],
    queryFn: () => updateXP(xp),
  })
}

export { useUpdateXP }