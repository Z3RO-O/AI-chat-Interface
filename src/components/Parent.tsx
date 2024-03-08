import { useSelector } from 'react-redux';
import { selectActiveItem } from '@/redux/features/navbarSlice';
import ChatUI from "./Chat/ChatUI"
import Library from "./Library"

const Parent = () => {
    const activeItem = useSelector(selectActiveItem);

    return (
        <div className='flex h-full w-full'>
            {activeItem === 'Chat' ? <ChatUI /> : <Library />}
        </div>
    )
}

export default Parent
