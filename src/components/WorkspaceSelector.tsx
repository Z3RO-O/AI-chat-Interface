"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { frameworks } from "@/data"

export default function WorkspaceSelector() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("Revenue Growth Management") // Setting default value 

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <div className="initials flex flex-row rounded outline outline-offset-4 outline-1 outline-slate-200 items-center p-2">
                <p className="bg-gray-100 p-2 font-semibold text-neutral-500 rounded">RG</p>
                <div className="justify-center items-center">
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between text-md text-ellipsis font-bold "
                        >
                            <div className="flex flex-col">
                                {value
                                    ? frameworks.find((framework) => framework.value === value)?.label
                                    : "Select framework..."}
                                <p className="text-xs text-neutral-500 text-left font-light">{value ? frameworks.find((framework) => framework.value === value)?.lastUpdate : ''}</p>
                            </div>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-100" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === framework.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {framework.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </div>
            </div >
        </Popover>
    )
}
