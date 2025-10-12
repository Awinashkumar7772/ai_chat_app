"use client"
import { Button } from "../../components/ui/button.jsx"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../../components/ui/sidebar"
import { SignInButton, useUser } from "@clerk/nextjs";
import { Ghost, Sun, Moon, TypeOutline, User2, Bolt, Zap} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image"
import { useEffect, useState } from "react";
import UsageCreditProgress from "./UsageCreditProgress.jsx"



export function AppSidebar() {
  const{user} = useUser();
  const {theme,setTheme} = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
        <div className=" flex justify between items-center" >
<div className="flex items-center space-x-2">
  
  <img src='/logo.svg' alt="logo" width="60" height="60" />
  <h2 className="font-bold text-xl ">Ai Chat</h2>
  </div>
  <div>

 { theme ==='light' ? 
  <Button variant='ghost' onClick = {()=>setTheme('dark')}><Sun/></Button>
  : <Button  onClick = {()=>setTheme('light')}><Moon /></Button>
}
  </div>
  </div>
  {user ?(
  <Button className='mt-7 w-full'>+ New Chat</Button>):(
  <SignInButton>
    <Button className='mt-7 w-full'>+ New Chat</Button>
  </SignInButton>
  )}
  </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <div className={"p-3"}>
  <h2 className="font-bold text-lg">Chat</h2>
  {!user && <p className="text-sm text-gray-400">Sign in to start chatting with muliple ai model</p>}
        </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 mb-10">
         {!user ?<SignInButton mode = "modal">
          <Button className={'w-full'} size={'lg'}>Sign In/Sign Up</Button>
          </SignInButton>
          :
          <div>
            <UsageCreditProgress/>
            <Button className={'w-full mb-3'} ><Zap/>Upgrade Plan</Button>
          <Button className="flex w-full"variant={'ghost'}>
             <User2 /><h2>Settings</h2>
          </Button>
          </div>
   }
          </div>
      </SidebarFooter>
    </Sidebar>
  )
}