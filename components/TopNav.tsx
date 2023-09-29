
interface TopNavProps {
    toggleAuthModal: () => void;
    toggleSideMenu: () => void;
}

const TopNav = ({toggleAuthModal, toggleSideMenu}: TopNavProps) => {
  return (
    <div className='flex items-center justify-center w-full text-center bg-gray-400 py-3'>
        <div className='flex-1 ml-8'>
            <button onClick={() => toggleSideMenu()} className="focus:outline-none">
                <div className="block h-1 w-5 bg-white mb-1"></div>
                <div className="block h-1 w-5 bg-white mb-1"></div>
                <div className="block h-1 w-5 bg-white"></div>
            </button>
        </div>
        <div className='flex-auto'>
            <h1 className='text-xl'>Periodic Table</h1>
        </div>
        <div className='flex-1 justify-end'>
            <button className='rounded-full w-20 p-2' onClick={() => toggleAuthModal()}>Log in</button>
        </div>
    </div>
  )
}

export default TopNav