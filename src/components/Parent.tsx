'use client'
import ChatUI from "./Chat/ChatUI"
import Library from "./Library"

const Parent = ({ activeItem }: any) => {
    return (
        <div className='flex h-full w-full'>
            {activeItem === 'Chat' ? <ChatUI /> : <Library />}
        </div>
    )
}

export default Parent
