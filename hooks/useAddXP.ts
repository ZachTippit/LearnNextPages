import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit = 10) => {
  const parsed = await axios('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.data
  )
  return parsed.filter((x) => x.id <= limit)
}

const usePosts = (limit) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
  })
}

export { usePosts, fetchPosts }