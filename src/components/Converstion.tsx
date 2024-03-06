import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';

interface Conversation {
    time: string;
    initials: string;
    value: string;
}

interface Props {
    conversations: Conversation[];
}

const Converstion: React.FC<Props> = ({ conversations }) => {
    const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedConversation(index === selectedConversation ? null : index);
    };

    return (
        <div className="flex flex-col">
            <div className="relative w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <Input type="text" placeholder="Search conversations" className="pl-12 pr-4 bg-neutral-100" />
            </div>
            <div className="overflow-hidden scrollbar-hide">
                {conversations.map((conversation, index) => (
                    <div
                        key={index}
                        className={`mb-4 mt-4`}
                        onClick={() => handleClick(index)}
                    >
                        {index === 0 || conversation.time !== conversations[index - 1].time ? (
                            <div className="flex ">
                                <h3 className="text-gray-500 text-sm mb-6">{conversation.time}</h3>
                                <Separator className='mt-3 ml-2' />
                            </div>
                        ) : null}
                        <div className={`flex items-center p-2 rounded cursor-pointer ${selectedConversation === index ? 'bg-neutral-50' : ''}`}>
                            <div className="bg-gray-100 p-1 font-semibold text-gray-400 rounded mr-2">
                                {conversation.initials}
                            </div>
                            <div className="text-sm text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis">{conversation.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Converstion;
