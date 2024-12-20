/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import ButtonPlay from "../button/ButtonPlay"
import ButtonWishlist from "../button/ButtonWishlist"
import { authFirebase } from "@/app/firebaseConfig"

export default function SongItem(props: any) {
  const {
    id = "",
    image = "",
    title = "",
    listen = "",
    audio = "",
    singers = "",
    link = "",
    songlist = "",
    wishlist = []
  } = props

  return (
    <>
      <div
        className="p-[10px] bg-[#212121] rounded-[15px] flex items-center"
        song-id={id}
      >
        <div className="w-[76px] aspect-square rounded-[10px] truncate">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
        <div className="flex-1 px-[10px]">
          <div className="font-[600] text-[16px] text-white mb-[5px]">
            <Link href={link}>{title}</Link>
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[8px]">
            {singers}
          </div>
          <div className="font-[400] text-[12px] text-white">
            {listen.toLocaleString()} lượt nghe
          </div>
        </div>
        <div>
          <ButtonPlay {...props} classname="inline-flex w-[34px] h-[34px] rounded-full items-center justify-center mr-[10px] text-[15px] text-white border border-white" />
          <ButtonWishlist id={id} wishlist={wishlist} songitem="1" classname="inline-flex w-[34px] h-[34px] rounded-full items-center justify-center text-[15px] text-white border"/>
        </div>
      </div>
    </>
  )
}
