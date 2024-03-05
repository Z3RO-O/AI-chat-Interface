import { useState } from 'react';
// import { ChatIcon } from '@heroicons/react/outline';

const ChatUI = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello, how can I assist you today?', isUser: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (!inputValue) return;
        setMessages([...messages, { text: inputValue, isUser: true }]);
        setInputValue('');
        // Send the message to Echo AI
    };

    return (
        <div className="flex flex-col items-center justify-between h-full p-4 bg-gray-100">
            <div className="flex flex-col items-center w-full space-y-2">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-2 ${message.isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
                            }`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between w-full mt-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <button
                    onClick={handleSendMessage}
                    className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full"
                >
                    {/* <ChatIcon className="w-6 h-6" /> */}
                </button>
            </div>
        </div>
    );
};

export default ChatUI;
