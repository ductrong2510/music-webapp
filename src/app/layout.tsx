import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import Sider from "./components/sider/Sider"
import Search from "./components/search/Search"
import Play from "./components/play/Play"
import { Suspense } from "react"

const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Music App",
  description: "Project 5: Nghe nhạc trực tuyến",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${quicksand.className} bg-[#292929]`}>
        <div className='container mx-auto flex items-start'>
          <div className='w-[280px]'>
            <Sider />
          </div>
          <div className='ml-[20px] flex-1'>
            <Suspense>
              <Search />
            </Suspense>
            <main className='mt-[30px] mb-[133px]'>{children}</main>
          </div>
        </div>
        <Play />
      </body>
    </html>
  )
}
