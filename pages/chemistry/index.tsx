import { useAuth, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useGetXP } from "~/hooks/useGetXP";

const updateChemLevel = async (userId, updatedLevel) => {
  
    const response = await fetch('/api/updateChemistryLevel', {
      method: 'POST',
      body: JSON.stringify({chemistry_level: updatedLevel})
    });
    const result = await response.json();
    return result;
}

const updateProgression = async (progression) => {

    const response = await fetch('/api/updateProgression', {
      method: 'POST',
      body: JSON.stringify(progression)
    });
    const result = await response.json();
    return result;
}
    
const Chemistry = () => {
      
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const { xp: levelData, isLoading: isLoadingXP, isError, mutate: getXP } = useGetXP();

  const handleClick = (progressionMetric, amount) => {
    console.log(progressionMetric, levelData[0][progressionMetric], amount)
    updateProgression({[progressionMetric]: levelData[0][progressionMetric] + amount});
    getXP();
  }
  
  if (!isLoaded || !userId) {
    return null;
  }
  
  console.log('levelData', levelData)

  return (
    <>
      <SignedIn>
        <div className='w-full h-screen chemistry flex flex-col items-center'>
          <div className='w-full'>
            <p className='text-left text-2xl'>Welcome {userId}</p>
              Hello, {userId} your current active session is {sessionId}
          </div>
          <button 
            className='w-40 h-20 mx-0 bg-slate-100 drop-shadow rounded-lg'
            onClick={() => handleClick('chemistry_experience', 10)}
          >
            Add Experience: {Boolean(levelData) ? levelData[0]['chemistry_experience'] : '0'}
          </button>
          <button 
            className='w-40 h-20 mx-0 bg-slate-100 drop-shadow rounded-lg'
            onClick={() => handleClick('chemistry_level', 1)}
          >
            Add Level: {Boolean(levelData) ? levelData[0]['chemistry_level'] : '0'}
          </button>
          {/* {showToast()} */}
          <Link href='/chemistry/periodic-table'>
            <div className='w-40 h-20 drop-shadow bg-white flex items-center justify-center rounded-lg'>
              <p>Periodic Table</p>
            </div>
          </Link>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn afterSignInUrl={location.pathname}/>
      </SignedOut>
      <Toaster />
    </>
  )
}

export default Chemistry;