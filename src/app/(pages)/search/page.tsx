'use client'

import { useSearchParams } from "next/navigation"
import Section1 from "./Section1"

export default async function SearchPage() {
  // const data: any = [
  //   {
  //     image: "/image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //   },
  //   {
  //     image: "/image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //   },
  //   {
  //     image: "/image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //   },
  //   {
  //     image: "/image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //   },
  //   {
  //     image: "/image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //   },
  //   {
  //     image: "/image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //   },
  // ];

  const searchParams = useSearchParams()
  const keyword = searchParams.get("keyword") || ""

  return (
    <>
      <Section1 keyword={keyword} />
    </>
  )
}
