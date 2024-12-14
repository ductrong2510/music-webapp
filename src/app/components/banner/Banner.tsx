/* eslint-disable @next/next/no-img-element */
export default function Banner() {
  return (
    <>
      <div
        className="w-[533px] rounded-[15px] bg-cover flex items-center justify-between"
        style={{ backgroundImage: "url('/bg-1.svg')" }}
      >
        <div className="flex-1 ml-[30px]">
          <h1 className="font-700 text-[32px] text-white p-0 m-0 mb-[6px]">
            Nhạc EDM
          </h1>
          <p className="font-500 text-[14px] text-white p-0 m-0">
            Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
            nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
          </p>
        </div>
        <div className="w-[215px] mr-[23px] self-end">
          <img
            className="w-full h-auto mb-[-1px]"
            src="/thumpnail-1.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
