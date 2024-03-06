import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Input } from "@/components/ui/input";
import Sidebar from './Sidebar';
import { Circle } from 'lucide-react';

type Message = {
    text: string;
    isUser: boolean;
    label: string;
};

const ChatUI: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { text: 'Hello, how can I assist you today?', isUser: false, label: 'Echo AI' }
    ]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return; // Do not send empty messages

        // Add the user message to the messages state with a label
        setMessages([...messages, { text: inputValue, isUser: true, label: 'You' }]);

        try {
            // Fetch the response from the markdown file
            const response = await fetch('../response.md'); // Assuming response.md is in the public directory

            if (!response.ok) {
                throw new Error('Failed to fetch AI response');
            }

            const markdown = await response.text();

            // Add the response to the messages state with a label
            setMessages([...messages, { text: markdown, isUser: false, label: 'Echo AI' }]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
        }

        // Clear the input field
        setInputValue('');
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className=" w-full grow items-center justify-center bg-gray-100 my-6 mx-10">
            <div className='flex h-full gap-4'>
                {/* <div className='bg-white grow'>Hello</div> */}
                <Sidebar />
                <div className="flex flex-col grow px-24 py-8 bg-white rounded-lg">
                    <div className="flex grow overflow-auto scrollbar-hide ">
                        <div className="p-4 ">
                            {messages.map((message, index) => (
                                <div key={index} className="mb-4">
                                    {message.isUser ? (
                                        <>
                                            <div className='flex gap-4 items-center'>
                                                <Circle className='size-5 fill-gray-200 text-gray-200' />
                                                <h2 className="text-gray-400">You</h2>
                                            </div>
                                            <div className="rounded-lg pl-10">
                                                <ReactMarkdown>{message.text}</ReactMarkdown>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='flex gap-4 items-center'>
                                                <Circle className='size-5 fill-gray-200 text-gray-200' />
                                                <h2 className="text-gray-400">Echo AI</h2>
                                            </div>
                                            <div className="rounded-lg pl-10">
                                                <ReactMarkdown>{message.text}</ReactMarkdown>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress} // Call handleKeyPress on key press
                        placeholder="Message Echo"
                        className="rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatUI;
