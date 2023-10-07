import toast from "react-hot-toast";
import useSWR from "swr";

const getChemLevel = async ([url, xpType]) => {
    console.log('XP TYPE: ', xpType)
    return fetch(`/api/getChemistryLevel?xpType=${xpType}`, {
        method: 'GET',
        })
    .then((res) => res.json())
}

const useGetXP = (xpType: string) => {
    const { data, error, isLoading, mutate } = useSWR(['/api/getChemistryLevel', xpType], getChemLevel, 
        {
            onSuccess: (data, key, config) => {
                toast.success('🦄 Chemistry XP Added!', {
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