/* eslint-disable @next/next/no-img-element */
export default function PlayInfo() {
  return (
    <>
      <div className="w-[218px] flex items-center">
        <div className="w-[49px] aspect-square rounded-[14px] truncate mr-[12px]">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover inner-image"
          />
        </div>
        <div className="flex-1">
          <div className="font-[700] text-[15px] text-white mb-[2px] inner-title"></div>
          <div className="font-[700] text-[12px] text-[#FFFFFF70] inner-singer"></div>
        </div>
      </div>
    </>
  )
}
