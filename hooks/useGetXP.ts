import toast from "react-hot-toast";
import useSWR from "swr";

const getExperience = async (url) => {
    return fetch(`/api/getXP`, {
        method: 'GET',
        })
    .then((res) => res.json())
}

const useGetXP = (xpType: string) => {
    const { data, error, isLoading, mutate } = useSWR('/api/getXP', getExperience, 
        {
            onSuccess: (data, key, config) => {
                toast.success('🦄 Experience retrieved!', {
                    duration: 2000,
                    position: 'top-right',
                  });
            }
        }
    );

    return {
        xp: data,
        isLoading,
        isError: error, 
        mutate
    }
}

export { useGetXP };