"use client"

import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import {
  FaHouse,
  FaMusic,
  FaPodcast,
  FaHeart,
  FaRightFromBracket,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6"

export default function SiderMenu() {
  interface menuLink {
    icon: ReactNode
    title: string
    link: Url
  }

  const menu: menuLink[] = [
    {
      icon: <FaHouse />,
      title: "Trang Chủ",
      link: "/",
    },
    {
      icon: <FaMusic />,
      title: "Danh mục bài hát",
      link: "/categories",
    },
    {
      icon: <FaPodcast />,
      title: "Ca sĩ",
      link: "/singers",
    },
    {
      icon: <FaHeart />,
      title: "Bài hát yêu thích",
      link: "/wishlist",
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng xuất",
      link: "/logout",
    },
    {
      icon: <FaUser />,
      title: "Đăng nhập",
      link: "/login",
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng ký",
      link: "/register",
    },
  ]

  const pathname = usePathname()

  return (
    <>
      {menu.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={
            "flex items-center mb-[30px] hover:text-primary " +
            (item.link === pathname ? "text-primary" : "text-white")
          }
        >
          <span className={"text-[22px] mr-[20px]"}>{item.icon}</span>
          <span className={"text-[16px] font-[700]"}>{item.title}</span>
        </Link>
      ))}
    </>
  )
}
