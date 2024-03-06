"use client"
import { Separator } from "@/components/ui/separator"
import {
    Card
} from "@/components/ui/card"
import WorkspaceSelector from './WorkspaceSelector'
import Converstion from './Converstion'
import { converstions } from "@/data"

const Sidebar = () => {
    return (
        <Card className="min-w-[350px] max-w-[350px] border-r bg-white shadow-md">
            <div className="p-4"><WorkspaceSelector /></div>
            <Separator />
            <div className="flex-grow p-4">
                <Converstion conversations={converstions} />
            </div>
        </Card>
    );
}

export default Sidebar