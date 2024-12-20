import SongList2 from "@/app/components/song/SongList2"
import Title from "@/app/components/title/Title"
import { dbFirebase } from "@/app/firebaseConfig"
import { equalTo, get, onValue, orderByChild, query, ref } from "firebase/database"

export default async function Section2(props: { id: string }) {
  const { id } = props

  const result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, "songs")
    const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(id))
    onValue(songsQuery, async (snapshot) => {
      const data: any = []
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key]

        //Lấy ra thông tin ca sĩ
        const singerPromises = value.singerId.map(async (item: string) => {
          const singerRef = ref(dbFirebase, 'singers/' + item)
          const singerSnapshot = await get(singerRef)
          return singerSnapshot.val().title
        })
        const singerList = await Promise.all(singerPromises)
        const singers: string = singerList.join(", ")

        data.push({
          id: key,
          title: value.title,
          image: value.image,
          audio: value.audio,
          singers: singers,
          listen: value.listen,
          link: `/songs/${key}`,
          wishlist: value.wishlist
        })
      }
      resolve(data)
    })
  })

  return (
    <>
      <Title text="Danh Sách Bài Hát" />

      <SongList2 data={result} songlist={"category" + id} />
    </>
  )
}
