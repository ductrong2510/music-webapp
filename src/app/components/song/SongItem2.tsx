/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FaPlay, FaRegHeart } from "react-icons/fa6"
import ButtonPlay from "../button/ButtonPlay"
import ButtonWishlist from "../button/ButtonWishlist"

export default function SongItem2(props: any) {
  const {
    id = "",
    image = "",
    title = "",
    listen = "",
    singers = "",
    link = "",
    audio = "",
    songlist = "",
    wishlist = []
  } = props

  return (
    <>
      <div song-id={id} className="bg-[#212121] flex items-center justify-between px-[18px]">
        <div className="flex items-center w-[30%] flex-1">
          {/* <button className="text-[20px] text-white">
            <FaPlay />
          </button> */}
          <ButtonPlay {...props} classname="text-[20px] text-white" />
          <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div className="font-[600] text-[14px] text-white">
            <Link href={link}>{title}</Link>
          </div>
        </div>
        <div className="font-[400px] text-[14px] text-white text-center w-[40%]">
          {singers}
        </div>
        <div className="w-[30%] text-right flex items-center justify-end">
          <span className="font-[400] text-[14px] text-white">
            {listen.toLocaleString()} lượt nghe
          </span>
          {/* <button className="text-[20px] text-white ml-[18px]">
            <FaRegHeart />
          </button> */}
          <ButtonWishlist id={id} wishlist={wishlist} songitem="2" classname="text-[20px] ml-[18px]"/>
        </div>
      </div>
    </>
  )
}
