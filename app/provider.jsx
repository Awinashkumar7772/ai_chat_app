"use client";
import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./_component/appSidebar";
import AppHeader from "./_component/AppHeader";
import { useUser } from "@clerk/nextjs";

function Provider({ children, ...props }) {
  const { user } = useUser();

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
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <AppHeader />
          {children}
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  );
}

export default Provider;
