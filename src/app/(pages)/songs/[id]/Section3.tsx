import SongList2 from "@/app/components/song/SongList2"
import Title from "@/app/components/title/Title"
import { dbFirebase } from "@/app/firebaseConfig"
import { equalTo, get, onValue, orderByChild, query, ref } from "firebase/database"

export default async function Section3(props: any) {
  // const data: any = [
  //     {
  //         image: "/image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "/image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "/image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "/image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "/image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "/image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     }
  // ];

  const { songId, categoryId } = props

  let result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, "songs")
    const songsQuery = query(
      songsRef,
      orderByChild("categoryId"),
      equalTo(categoryId)
    )
    onValue(songsQuery, async (snapshot) => {
      const data: any = []
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key]
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
        })
      }
      resolve(data)
    })
  })

  result = result.filter((item: any) => item.id !== songId)

  return (
    <>
      <Title text="Bài Hát Cùng Danh Mục" />

      <SongList2 data={result} />
    </>
  )
}
