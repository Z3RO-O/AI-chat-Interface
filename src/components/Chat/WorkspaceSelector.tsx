import * as React from "react";
import { workspace } from "@/data";
import { setSelectedWorkspaceId } from "@/redux/features/sidebarSlice";
import { clearMessages } from "@/redux/features/chatSlice";
import { useDispatch } from 'react-redux';
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

export default function WorkspaceSelector() {
    const [value, setValue] = React.useState(workspace[0].value);
    const [lastUpdated, setLastUpdated] = React.useState(workspace[0].lastUpdate);
    const dispatch = useDispatch();

    const handleItemClick = (selectedValue: string) => {
        setValue(selectedValue);
        const selectedItem = workspace.find(item => item.value === selectedValue);
        if (selectedItem) {
            setLastUpdated(selectedItem.lastUpdate);
            dispatch(clearMessages()); // Dispatch action to update Redux state
            dispatch(setSelectedWorkspaceId(selectedItem.id)); // Dispatch action to update Redux state
        }
    };

    return (
        <div className="initials flex flex-row items-center justify-center p-3 border rounded-lg">
            <p className="bg-gray-100 p-2 mr-3 font-semibold text-neutral-500 rounded">RG</p>
            <div className="w-[70%] items-center justify-center">
                <Select value={value} onValueChange={handleItemClick}>
                    <SelectTrigger className=" text-ellipsis overflow-hidden whitespace-nowrap p-2">
                        {value}
                    </SelectTrigger>
                    {lastUpdated && (
                        <div className="text-xs pl-2 text-gray-400">{lastUpdated}</div>
                    )}
                    <SelectContent>
                        {workspace.map((item) => (
                            <SelectItem key={item.id} value={item.value}>
                                {item.value}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <svg
                data-c8r="true"
                data-qa="compose"
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-6 ml-2 text-neutral-400 cursor-pointer"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16.707 3.268a1 1 0 0 0-1.414 0l-.482.482 1.439 1.44.482-.483a1 1 0 0 0 0-1.414zM15.19 6.25l-1.44-1.44-5.068 5.069-.431 1.872 1.87-.432zm-.957-4.043a2.5 2.5 0 0 1 3.536 0l.025.025a2.5 2.5 0 0 1 0 3.536l-6.763 6.763a.75.75 0 0 1-.361.2l-3.25.75a.75.75 0 0 1-.9-.9l.75-3.25a.75.75 0 0 1 .2-.361zM5.25 4A2.25 2.25 0 0 0 3 6.25v8.5A2.25 2.25 0 0 0 5.25 17h8.5A2.25 2.25 0 0 0 16 14.75v-4.5a.75.75 0 0 1 1.5 0v4.5a3.75 3.75 0 0 1-3.75 3.75h-8.5a3.75 3.75 0 0 1-3.75-3.75v-8.5A3.75 3.75 0 0 1 5.25 2.5h4.5a.75.75 0 0 1 0 1.5z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    );
}
