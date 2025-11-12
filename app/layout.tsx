'use client'
import "./globals.css";
import { ReactNode } from "react";
import DemandSlider from "./components/DemandSlider";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



interface LayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {

  const queryClient = new QueryClient();


  return (
    <html lang="en" >
      <body >
        <NextThemesProvider
          attribute="class"
          enableSystem
        >
        <main className="relative max-w-[1920px] m-auto" >
          <QueryClientProvider client={queryClient}>
            <DemandSlider />
            {children}
          </QueryClientProvider>
        </main>
        </NextThemesProvider>
      </body>
    </html>
  )
}

export default RootLayout
