"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Ghost, Sun, Moon, TypeOutline} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image"



export function AppSidebar() {
  const {theme,setTheme} = useTheme();
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

 {theme ==='light'?(<Button variant='ghost' onClick = {()=>setTheme('dark')}><Sun/></Button>): (<Button  onClick = {()=>setTheme('light')}><Moon /></Button>
)}
  </div>
  </div>
  <Button className='mt-7 w-full'>+ New Chat</Button>
  </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className={'p-3'}>
  <h2 className="font-bold text-lg">Chat</h2>
  <p className="text-sm text-gray-400">Sign in to start chatting with muliple ai model</p>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 mb-10"><Button className={'w-full'} size={'lg'}>Sign In/Sign Up</Button></div>
      </SidebarFooter>
    </Sidebar>
  )
}