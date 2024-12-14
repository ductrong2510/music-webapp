import Title from "@/app/components/title/Title"

export default function Section2(props: { lyric: string }) {
  const { lyric = "" } = props

  return (
    <>
      <div className="my-[30px]">
        <Title text="Lời Bài Hát" />
        <div className="mt-[20px] p-[20px] font-[500] text-[14px] text-white rounded-[15px] bg-[#212121] whitespace-pre-line">
          {lyric}
        </div>
      </div>
    </>
  )
}
