import SongItem from "./SongItem"

export default function SongList(props: any) {
  const { data = [], songlist="" } = props

  return (
    <>
      <div className="grid grid-cols-1 gap-[12px] mt-[20px]" song-list={songlist}>
        {data.map((item: any, index: number) => (
          <SongItem
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            singers={item.singers}
            listen={item.listen}
            audio={item.audio}
            link={item.link}
            songlist={songlist}
            wishlist={item.wishlist}
          />
        ))}
      </div>
    </>
  )
}
