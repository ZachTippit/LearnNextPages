import { useAuth, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { NextApiRequest } from "next";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useGetAuthenticatedUserId } from "~/hooks/useGetAuthenticatedUserId";

const updateChemLevel = async (userId, updatedLevel) => {
  
    const response = await fetch('/api/updateChemistryLevel', {
      method: 'POST',
      body: JSON.stringify({chemistry_level: updatedLevel})
    });
    const result = await response.json();
    return result;
}
    
const Chemistry = () => {
      
  const level = 1;
      
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [data, setData] = useState<null | number>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  
  const getChemLevel = async () => {
    fetch('/api/getChemistryLevel')
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].chemistry_level)
      setData(data[0].chemistry_level)
      setLoading(false)
    })
  }

  useEffect(() => {
    getChemLevel();
    
    return;
  }, [])
  
  const handleClick = (e: any) => {
    e.preventDefault();
    
    updateChemLevel(userId, data + 1);
    getChemLevel();
  }
  
  // const showToast = () => toast.success('Error! cannot find account');
  
  if (!isLoaded || !userId) {
    return null;
  }
  
  return (
    <>
      <SignedIn>
        <div className='w-full h-screen bg-yellow-100 flex flex-col items-center'>
          <div className='w-full'>
            <p className='text-left text-2xl'>Welcome {userId}</p>
              Hello, {userId} your current active session is {sessionId}
          </div>
          <button className='w-24 h-10 mx-0 bg-slate-100 drop-shadow rounded-lg' type="submit" onClick={(e) => handleClick(e)}>Add Experience: {data || 0}</button>
          {/* {showToast()} */}
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