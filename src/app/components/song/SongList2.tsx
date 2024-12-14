import SongItem2 from "./SongItem2"

export default function SongList2(props: any) {
  const { data=[], songlist="" } = props

  return (
    <>
      <div song-list={songlist} className="grid grid-cols-1 gap-[10px]">
        {data.map((item: any, index: number) => (
          <SongItem2
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            link={item.link}
            singers={item.singers}
            listen={item.listen}
            audio={item.audio}
            songlist={songlist}
          />
        ))}
      </div>
    </>
  )
}
