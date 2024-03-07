import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { workspace } from "@/data"

export default function WorkspaceSelector() {
    const [value, setValue] = React.useState("Revenue Growth Management") // Set default value

    return (
        <div className="initials flex flex-row rounded items-center p-2">
            <p className="bg-gray-100 p-2 font-semibold text-neutral-500 rounded">RG</p>
            <div className="justify-center items-center">
                <div className="flex  w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Select>
                            <SelectTrigger id="workspace" className="cursor-pointer outline-hidden">
                                <SelectValue>{value}</SelectValue>
                            </SelectTrigger>
                            <SelectContent position="popper">
                                {workspace.map((item) => (
                                    <SelectItem key={item.id} value={item.value} onClick={() => setValue(item.value)}>
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <svg data-c8r="true" data-qa="compose" aria-hidden="true" viewBox="0 0 20 20" className="size-6 text-neutral-400 cursor-pointer">
                        <path fill="currentColor" fill-rule="evenodd" d="M16.707 3.268a1 1 0 0 0-1.414 0l-.482.482 1.439 1.44.482-.483a1 1 0 0 0 0-1.414zM15.19 6.25l-1.44-1.44-5.068 5.069-.431 1.872 1.87-.432zm-.957-4.043a2.5 2.5 0 0 1 3.536 0l.025.025a2.5 2.5 0 0 1 0 3.536l-6.763 6.763a.75.75 0 0 1-.361.2l-3.25.75a.75.75 0 0 1-.9-.9l.75-3.25a.75.75 0 0 1 .2-.361zM5.25 4A2.25 2.25 0 0 0 3 6.25v8.5A2.25 2.25 0 0 0 5.25 17h8.5A2.25 2.25 0 0 0 16 14.75v-4.5a.75.75 0 0 1 1.5 0v4.5a3.75 3.75 0 0 1-3.75 3.75h-8.5a3.75 3.75 0 0 1-3.75-3.75v-8.5A3.75 3.75 0 0 1 5.25 2.5h4.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
