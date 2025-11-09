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
      <body className=" white text-gray-950 dark:bg-gray-950 dark:text-white">
        <main className="relative" >
          <DemandSlider/>
          {children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout
