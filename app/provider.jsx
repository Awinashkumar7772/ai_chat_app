import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarHeader, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_component/appSidebar'
import AppHeader from './_component/AppHeader'
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
              
             
       <div className='w-full'>
         <AppHeader/>{children}</div>
    </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider
