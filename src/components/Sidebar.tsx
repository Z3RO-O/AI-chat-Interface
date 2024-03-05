"use client"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import WorkspaceSelector from './WorkspaceSelector'
import Converstion from './Converstion'
import { converstions } from "@/data"
import Sections from "./Sections"

const Sidebar = () => {
    return (
        <div className="flex flex-col min-w-[200px] border-r min-h-screen">
            <div className='font-semibold p-4'>Echo AI</div>
            <div className="p-4"><WorkspaceSelector /></div>
            <Separator />
            <div className="p-4">
                <Sections />
            </div>
            <Separator />
            <div className="flex-grow p-4">
                <Converstion conversations={converstions} />
            </div>
            <Separator />
            <div className='pt-14 pl-4 pb-4  text-neutral-500'><button>Help Center</button></div>
            <div className='pl-4 pb-4 text-neutral-500'><button>Updates</button></div>
        </div>
    )
}

export default Sidebar