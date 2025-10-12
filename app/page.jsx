"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import ChatInput from "./_component/ChatInput";

export default function Home() {
const {setTheme}= useTheme();
  return (
   <div>
    <ChatInput/>
    
   </div>
  );
}
