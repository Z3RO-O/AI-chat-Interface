import React from 'react';
import { Input } from "@/components/ui/input";

interface Conversation {
    time: string;
    initials: string;
    value: string;
}

interface Props {
    conversations: Conversation[];
}

const Converstion: React.FC<Props> = ({ conversations }) => {
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
                <Input type="text" placeholder="Search conversations" className="pl-12 pr-4 bg-sky-50" />
            </div>
            <div className="overflow-y-auto h-64 scrollbar-hide">
                {conversations.map((conversation, index) => (
                    <div key={index} className="mb-4 mt-4">
                        {index === 0 || conversation.time !== conversations[index - 1].time ? (
                            <h3 className="text-gray-500 text-sm mb-6">{conversation.time}</h3>
                        ) : null}
                        <div className="flex items-center cursor-pointer">
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
