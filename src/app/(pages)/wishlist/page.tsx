"use client"

import SongList2 from "@/app/components/song/SongList2"
import Title from "@/app/components/title/Title"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import { get, onValue, ref } from "firebase/database"
import { useEffect, useState } from "react"

export default function WishListPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    onAuthStateChanged(authFirebase, async (user) => {
      if (user) {
        const uid = user.uid

        const result: any = await new Promise((resolve) => {
          const songsRef = ref(dbFirebase, "songs")
          onValue(songsRef, async (snapshot) => {
            const data: any = []
            for (const key in snapshot.val()) {
              const value = snapshot.val()[key]
              if (value.wishlist && value.wishlist[uid]) {
                //Lấy thông tin ca sĩ
                const singerPromises = value.singerId.map(async (item: string) => {
                    const singerRef = ref(dbFirebase, "singers/" + item)
                    const singerSnapshot = await get(singerRef)
                    return singerSnapshot.val().title
                  }
                )
                const singerList = await Promise.all(singerPromises)
                const singers: string = singerList.join(", ")

                data.push({
                  id: key,
                  image: value.image,
                  title: value.title,
                  listen: value.listen,
                  singers: singers,
                  audio: value.audio,
                  link: `songs/${key}`,
                  wishlist: value.wishlist,
                })
              }
            }
            resolve(data)
          })
        })
        setData(result)
      }
    })
  }, [])

  return (
    <>
      <Title text="Bài Hát Yêu Thích" />

      <SongList2 data={data} />
    </>
  )
}
