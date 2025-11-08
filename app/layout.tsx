'use client'
import "./globals.css";
import { ReactNode } from "react";
import DemandSlider from "./components/DemandSlider";

interface LayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }:LayoutProps) => {
  return (
    <html lang="en" >
      <body className="relative white text-gray-950 dark:bg-gray-950 dark:text-white p-9">
          <DemandSlider/>
        <main >
          {children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout
