/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import SiderMenu from "./SiderMenu"

export default function Sider() {
  return (
    <>
      <div className="w-full px-[20px] py-[25px] bg-black">
        <div className="h-[42px] mb-[55px]">
          <Link href="/">
            <img src="/logo.webp" alt="logo" className="w-auto h-auto" />
          </Link>
        </div>
        <SiderMenu />
      </div>
    </>
  )
}
