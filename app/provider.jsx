import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_component/appSidebar'
function Provider({children,
  ...props}) {
  return (
    
    <NextThemesProvider   {...props}
           attribute="class"
            defaultTheme="light"
            enableSystem 
            disableTransitionOnChange>
            
          
            <SidebarProvider>
               <AppSidebar/>
                <SidebarTrigger/>
    <div>{children}</div>
    </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider
