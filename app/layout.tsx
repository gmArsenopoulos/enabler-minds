import "./globals.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }:LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
