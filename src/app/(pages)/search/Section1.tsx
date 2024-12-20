// /* eslint-disable @next/next/no-async-client-component */
// import SongList2 from "@/app/components/song/SongList2"
// import Title from "@/app/components/title/Title"
// import { dbFirebase } from "@/app/firebaseConfig"
// import { get, onValue, ref } from "firebase/database"
// import { useEffect, useState } from "react"

// export default function SearchPage(props: any) {
//   const { keyword = "" } = props
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchApi = async () => {
//       const songRef = ref(dbFirebase, "songs")
//       onValue(songRef, (snapshot) => {
//         let data = []
//         const value = snapshot.val()
//         for (const key in snapshot.val()) {
//           data.push({
//             id: key,
//             title: value.title,
//             image: value.image,
//             audio: value.audio,
//             listen: value.listen,
//             link: `/song/${key}`,
//           })
//         }
//         const regex = new RegExp(keyword, "i")
//         const searchData: any = data.filter((item: any) => regex.test(item.title))

//         setData(searchData)
//       })
//     }
//     fetchApi()
//   }, [keyword])

//   return (
//     <>
//       <Title text="Kết Quả Tìm Kiếm" />
//       <SongList2 data={data} />
//     </>
//   )
// }

// import SongList2 from "@/app/components/song/SongList2"
// import Title from "@/app/components/title/Title"
// import { dbFirebase } from "@/app/firebaseConfig"
// import { onValue, ref, off } from "firebase/database"
// import { useEffect, useState } from "react"

// interface Song {
//   id: string
//   title: string
//   image: string
//   audio: string
//   listen: number
//   link: string
// }

// export default function SearchPage({ keyword = "" }: { keyword: string }) {
//   const [data, setData] = useState<Song[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     setIsLoading(true)
//     setError(null)

//     // Reference to songs in Firebase
//     const songsRef = ref(dbFirebase, "songs")

//     try {
//       // Set up the listener
//       const unsubscribe = onValue(songsRef,
//         (snapshot) => {
//           try {
//             const songs: Song[] = []
//             const snapshotData = snapshot.val()

//             if (!snapshotData) {
//               setData([])
//               setIsLoading(false)
//               return
//             }

//             // Process snapshot data
//             for (const key in snapshotData) {
//               const value = snapshotData[key]
//               songs.push({
//                 id: key,
//                 title: value.title,
//                 image: value.image,
//                 audio: value.audio,
//                 listen: value.listen,
//                 link: `/song/${key}`,
//               })
//             }

//             // Filter based on keyword
//             const regex = new RegExp(keyword, "i")
//             const filteredSongs = songs.filter(item => regex.test(item.title))

//             setData(filteredSongs)
//             setIsLoading(false)
//           } catch (err) {
//             setError('Error processing data: ' + (err instanceof Error ? err.message : String(err)))
//             setIsLoading(false)
//           }
//         },
//         (error) => {
//           setError('Error fetching data: ' + error.message)
//           setIsLoading(false)
//         }
//       )

//       // Cleanup function
//       return () => {
//         unsubscribe()
//         // Clean up all listeners on this reference
//         off(songsRef)
//       }
//     } catch (err) {
//       setError('Error setting up listener: ' + (err instanceof Error ? err.message : String(err)))
//       setIsLoading(false)
//     }
//   }, [keyword])

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>
//   }

//   return (
//     <>
//       <Title text="Kết Quả Tìm Kiếm" />
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <SongList2 data={data} />
//       )}
//     </>
//   )
// }

import SongList2 from "@/app/components/song/SongList2"
import Title from "@/app/components/title/Title"
import { dbFirebase } from "@/app/firebaseConfig"
import { onValue, ref, off, get } from "firebase/database"
import { useEffect, useState } from "react"

interface Song {
  id: string
  title: string
  image: string
  audio: string
  listen: number
  link: string
  singers: string
}

export default function SearchPage({ keyword = "" }: { keyword: string }) {
  const [data, setData] = useState<Song[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    const songsRef = ref(dbFirebase, "songs")

    const unsubscribe = onValue(
      songsRef,
      async (snapshot) => {
        const songs: Song[] = []
        const snapshotData = snapshot.val()
        if (!snapshotData) {
          setData([])
          setIsLoading(false)
          return
        }
        for (const key in snapshotData) {
          const value = snapshotData[key]
          let singers = ""
          if (value.singerId && Array.isArray(value.singerId)) {
            const singerPromises = value.singerId.map(
              async (singerId: string) => {
                const singerRef = ref(dbFirebase, "singers/" + singerId)
                const singerSnapshot = await get(singerRef)
                return singerSnapshot.val()?.title || "Unknown Singer"
              }
            )
            const singerList = await Promise.all(singerPromises)
            singers = singerList.join(", ")
          }
          songs.push({
            id: key,
            title: value.title,
            image: value.image,
            audio: value.audio,
            listen: value.listen,
            link: `/song/${key}`,
            singers: singers,
          })
        }
        const regex = new RegExp(keyword, "i")
        const filteredSongs = songs.filter(
          (item) => regex.test(item.title) || regex.test(item.singers)
        )
        setData(filteredSongs)
        setIsLoading(false)
      },
      (error) => {
        setError("Error fetching data: " + error.message)
        setIsLoading(false)
      }
    )
    return () => {
      unsubscribe()
      off(songsRef)
    }
  }, [keyword])

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  return (
    <>
      <Title text="Kết Quả Tìm Kiếm" />
      {isLoading ? (
        <div className="text-[20px] font-bold text-center text-white">
          Searching...
        </div>
      ) : data.length > 0 ? (
        <SongList2 data={data} />
      ) : (
        <div className="text-[20px] font-bold text-center text-white">
          Không có bài hát nào khớp với tìm kiếm!
        </div>
      )}
    </>
  )
}
