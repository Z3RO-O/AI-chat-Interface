import Library from "@/components/Library"
import Sidebar from "@/components/Chat/Sidebar"
// import { Combobox } from "@/components/WorkspaceSelector"
import { Input } from "@/components/ui/input"


const chat = () => {
    return (
        <div>
            {/* <Combobox />*/}
            <Library />
            {/* <Input type="text" placeholder="Message Echo" /> */}
        </div>
    )
}

export default chat
