/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function CardItem(props: any) {
  const { image = "", title = "", description = "", link = "" } = props

  return (
    <>
      <div>
        <Link href={link}>
          <div className="w-[180px] aspect-square rounded-[15px] truncate mb-[10px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] text-white mb-[10px]">
            {title}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80] line-clamp-1">
            {description}
          </div>
        </Link>
      </div>
    </>
  )
}
