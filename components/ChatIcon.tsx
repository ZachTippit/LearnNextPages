import React from 'react'

interface ChatIconProps {
    toggleChatbox: () => void;
    isToggled: boolean;
    isMessage: boolean;
}

const ChatIcon = ({toggleChatbox, isToggled, isMessage}: ChatIconProps) => {
  return (
    <div className='bg-white border-4 rounded-full border-green-400'>
        <button className='px py rounded-full' onClick={() => toggleChatbox()}>C</button>
        {isMessage && <div className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full'></div>}
    </div>
  )
}

export default ChatIcon