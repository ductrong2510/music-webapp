/* eslint-disable @next/next/no-async-client-component */
import SongList2 from "@/app/components/song/SongList2"
import Title from "@/app/components/title/Title"
import { dbFirebase } from "@/app/firebaseConfig"
import { get, onValue, ref } from "firebase/database"
import { useEffect, useState } from "react"

export default async function SearchPage(props: any) {
  const { keyword="" } = props
  const data: any = [
    {
      image: "/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
  ];

  // const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     let result: any = await new Promise((resolve) => {
  //       const songsRef = ref(dbFirebase, "songs");
  //       onValue(songsRef, async (snapshot) => {
  //         const data: any = [];
  //         for (const key in snapshot.val()) {
  //           const value = snapshot.val()[key];
  //           data.push({
  //             id: key,
  //             title: value.title,
  //             image: value.image,
  //             audio: value.audio,
  //             listen: value.listen,
  //             link: `/song/${key}`
  //           });
  //         }
  //         resolve(data);
  //       });
  //     });

  //     const regex = new RegExp(keyword, "i");
  //     result = result.filter((item: any) => regex.test(item.title));

  //     setData(result);
  //   }
  //   fetchApi();
  // }, [keyword]);


  return (
    <>
      <Title text="Kết Quả Tìm Kiếm" />

      <SongList2 data={data} />
    </>
  )
}
