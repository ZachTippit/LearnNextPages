import { getAuth } from "@clerk/nextjs/server";
import { useQuery } from "@tanstack/react-query";

const fetchAuthenticatedUserId = async (req) => {
    const { getToken } = getAuth(req);
    const token = await getToken({ template: "supabase" });
    return token;
    }

const useGetAuthenticatedUserId = () => {
    return useQuery({
        queryKey: ["authenticatedUserId"],
        queryFn: (req) => fetchAuthenticatedUserId(req),
    });
}

export { useGetAuthenticatedUserId, fetchAuthenticatedUserId };
