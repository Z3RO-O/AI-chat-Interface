'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import ChatUI from "@/components/ChatUI";

export default function Home() {
  return (
    <div>
      {/* <Input type="text" placeholder="Message Echo" className="fixed items-end justify-end" /> */}
      <ChatUI />
    </div>
  );
}
