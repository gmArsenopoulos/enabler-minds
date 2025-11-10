'use client'
import "./globals.css";
import { ReactNode } from "react";
import DemandSlider from "./components/DemandSlider";
import { ThemeProvider as NextThemesProvider } from "next-themes"


interface LayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {


  return (
    <html lang="en" >
      <body >
        <NextThemesProvider
          attribute="class"
          // defaultTheme="dark"
          enableSystem
        >

        </NextThemesProvider>
        <main className="relative max-w-[1920px] m-auto" >
          <DemandSlider />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
