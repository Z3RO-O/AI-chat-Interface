'use client'
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Parent from "@/components/Parent";

export default function Home() {
  const [activeItem, setActiveItem] = useState('Chat');

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* <ChatUI /> */}
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <Parent activeItem={activeItem} />
    </div>
  );
}
