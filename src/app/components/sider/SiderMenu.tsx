"use client"

import { Url } from "next/dist/shared/lib/router/router"
import { ReactNode, useState } from "react"
import {
  FaHouse,
  FaMusic,
  FaPodcast,
  FaHeart,
  FaRightFromBracket,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6"
import SiderMenuItem from "./SiderMenuItem"
import { onAuthStateChanged } from "firebase/auth"
import { authFirebase } from "@/app/firebaseConfig"

export default function SiderMenu() {
  interface menuLink {
    icon: ReactNode
    title: string
    link: Url
    login?: boolean
  }

  const [isLogin, setLogin] = useState<boolean>(false)
  onAuthStateChanged(authFirebase, (user) => {
    if (user) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  })

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
      login: isLogin,
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng xuất",
      link: "/logout",
      login: isLogin,
    },
    {
      icon: <FaUser />,
      title: "Đăng nhập",
      link: "/login",
      login: !isLogin,
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng ký",
      link: "/register",
      login: !isLogin,
    },
  ]

  return (
    <>
      {menu.map((item, index) =>
        (item.login || item.login == undefined) ? (
          <SiderMenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            link={item.link}
          />
        ) : (
          <></>
        )
      )}
    </>
  )
}
