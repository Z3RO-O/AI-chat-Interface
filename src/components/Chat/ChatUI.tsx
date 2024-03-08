import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Input } from "@/components/ui/input";
import Sidebar from './Sidebar';
import { Circle, Dot, LucideRefreshCw, LucideSparkles, Pencil } from 'lucide-react';
import { response, workspace } from '@/data';
import { Card } from '../ui/card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { addMessage } from '@/redux/features/chatSlice';

type Message = {
    text: string;
    isUser: boolean;
    label: string;
};

const ChatUI: React.FC = () => {
    const selectedWorkspaceId = useSelector((state: RootState) => state.sidebar.selectedWorkspaceId);
    const dispatch = useDispatch();
    const messages = useSelector((state: RootState) => state.chat.messages);
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([
        "Check account balance",
        "Make a payment",
        "Change password",
        "Update personal information"
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [workspaceItem, setWorkspaceItem] = useState(workspace[0]);

    useEffect(() => {
        if (selectedWorkspaceId) {
            const foundWorkspaceItem = workspace.find(item => item.id === selectedWorkspaceId);
            if (foundWorkspaceItem) {
                setWorkspaceItem(foundWorkspaceItem);
            }
        }
    }, [selectedWorkspaceId]);

    const handleSendMessage = async (message: string) => {
        const newUserMessage: Message = { text: message, isUser: true, label: 'You' };
        dispatch(addMessage(newUserMessage));
        setInputValue('');
        setSuggestions([]);

        try {
            const newAiMessage: Message = { text: response, isUser: false, label: 'Echo AI' };
            dispatch(addMessage(newAiMessage));
        } catch (error) {
            console.error('Error fetching AI response:', error);
        }
    };

    const handleSuggestionClick = (message: string) => {
        handleSendMessage(message);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage(inputValue);
        }
    };

    // Scroll to bottom of messages when new message is added
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="w-full grow items-center justify-center bg-gray-100 my-6 mx-10">
            <div className='flex gap-4 h-[80vh]'>
                <Sidebar />
                <div className="flex flex-col grow lg:px-24 md:px-6 py-8 bg-white rounded-lg">
                    <div className="flex-grow h-[40vh] overflow-y-auto relative scrollbar-hide text-sm pb-4">
                        {messages.length === 0 && (
                            <div className="flex items-center justify-center h-full">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="text-gray-500 p-8 text-lg font-semibold bg-slate-100 rounded-lg">{workspaceItem.initials}</div>
                                    <div className='font-semibold pt-5'>{workspaceItem.value}</div>
                                    <div className='flex items-center text-xs text-gray-400'>{workspaceItem.numberOfDocuments} {workspaceItem.numberOfDocuments == 1 ? ' document' : 'documents'}<Dot />{workspaceItem.lastUpdate}</div>
                                </div>
                            </div>
                        )}
                        {messages.map((message, index) => (
                            <div key={index} className="mb-4">
                                <div className='flex gap-4 items-center'>
                                    <Circle className='size-5 fill-gray-200 text-gray-200' />
                                    <h2 className="text-gray-400">{message.label}</h2>
                                </div>
                                <div className="rounded-lg pl-10">
                                    {message.isUser ? (
                                        <p>{message.text}</p>
                                    ) : (
                                        // <ReactMarkdown># Heading 1</ReactMarkdown>
                                        <ReactMarkdown>{message.text}</ReactMarkdown>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    {suggestions.length > 0 && (
                        <Card className="grid grid-cols-2 gap-2 p-4 mb-4 justify-between">
                            <div className='flex text-xs font-semibold text-gray-500'>
                                <p className='flex items-center justify-center'><LucideSparkles className='fill-gray-400 text-gray-400 pr-2' /> Learn more</p>
                            </div>
                            <div className='flex justify-end'>
                                <LucideRefreshCw className='size-6 p-1 bg-gray-200 rounded-lg cursor-pointer' />
                            </div>
                            {suggestions.map((message, index) => (
                                <Card key={index} className="p-2 flex items-center bg-gray-100 text-sm rounded-lg cursor-pointer" onClick={() => handleSuggestionClick(message)}>
                                    <Pencil className="size-8 text-gray-500 p-2 bg-gray-200 rounded-md mr-1" />
                                    <p>{message}</p>
                                </Card>
                            ))}
                        </Card>
                    )}
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Start typing here..."
                        className="rounded-md h-12 shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatUI;
