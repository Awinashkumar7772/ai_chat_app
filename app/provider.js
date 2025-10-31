"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./_component/appSidebar";
import AppHeader from "./_component/AppHeader";
import { useUser } from "@clerk/nextjs";
import {AiSelectedModelContext} from '../context/AiSelectedModelContext'
import {DefaultModel} from 'Shared/AiModelShared'

function Provider({ children, ...props }) {
  const { user } = useUser();
  const [AiSelectedModels,setAiSelectedModels] = useState(DefaultModel);
//  const [aiSelectModels,setAiSelectedModels] = useState(defaultModel)
  useEffect(() => {
    if (user) {
      console.log("User logged in:", user.fullName);
      // You can add MongoDB user creation logic here later
    }
  }, [user]);

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange>
       <AiSelectedModelContext.Provider value={{AiSelectedModels,setAiSelectedModels}} >
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <AppHeader />
          {children}
        </div>
      </SidebarProvider>
      </AiSelectedModelContext.Provider>
      
    </NextThemesProvider>
  );
}

export default Provider;
