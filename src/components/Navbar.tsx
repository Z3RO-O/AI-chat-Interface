'use client'
import { useState } from 'react';
import UserDetails from './User';
import { User } from 'lucide-react';

const navigation = [
    { name: 'Chat' },
    { name: 'Library' },
];

export default function Navbar({ activeItem, setActiveItem }: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleItemClick = (name: any) => {
        setActiveItem(name);
    };

    return (
        <>
            <header className="w-full bg-white inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="font-semibold">Echo AI</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-2 items-center">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                className={`text-sm font-semibold leading-6 p-2 px-6 cursor-pointer ${activeItem === item.name ? 'bg-gray-100 rounded-full text-gray-900' : 'text-gray-500'}`}
                                onClick={() => handleItemClick(item.name)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <UserDetails />
                    </div>
                </nav>
            </header>
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50" onClick={() => setMobileMenuOpen(false)}></div>
            )}
            {mobileMenuOpen && (
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Echo AI</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="flex flex-col space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        className={`text-sm font-semibold p-2 cursor-pointer rounded-full ${activeItem === item.name ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}
                                        onClick={() => handleItemClick(item.name)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <UserDetails />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
