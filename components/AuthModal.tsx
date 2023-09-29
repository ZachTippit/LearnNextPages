
interface AuthProps {
  toggleModal: () => void;
  loggedIn: boolean;
}

const Auth = ({toggleModal, loggedIn}: AuthProps) => {
  return (
    <div className='absolute inset-0'>
      <div className='relative w-full h-full flex items-center justify-center'>
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-transparent via-gray-100 opacity-50 z-10' onClick={() => toggleModal()}></div>
        <div className='relative w-80 p-4 bg-white opacity-100 border-2 border-black z-50'>
          <button className='absolute top-0 right-0' onClick={() => toggleModal()}>x</button>
          {loggedIn ? 
            <>
              <p>You are logged in.</p>
              <button onClick={() => console.log('log out')}>Log out</button>
            </>
          :
            <>
              <div>
                <h2>Welcome</h2>
                <p>Log in with your details below</p>
              </div>
              <div className='my-2'>
                <form>
                  <div className='flex justify-end py-2'>
                    <label htmlFor="email">Email</label>
                    <input className='border border-grey-200 ml-4' type="email" name="email" id="email" />
                  </div>
                  <div className='flex justify-end pb-2'>
                    <label htmlFor="password">Password</label>
                    <input className='border border-gray-200 ml-4' type="password" name="password" id="password" />
                  </div>
                    <button className='border border-gray-400 bg-blue-200 hover:bg-blue-400 my-2 w-40' type="submit">Log in</button>
                </form>
                    <button className='border border-gray-400 bg-green-200 hover:bg-green-400  my-2 w-40' type="submit">Sign up</button>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Auth;