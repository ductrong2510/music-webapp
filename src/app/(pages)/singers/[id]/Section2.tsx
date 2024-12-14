import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, get, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section2(props: { singerId: string }) {
  // const data: any = [
  //     {
  //         image: "image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     },
  //     {
  //         image: "image-1.png",
  //         title: "Cô Phòng",
  //         singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //         time: "4:32",
  //     }
  // ];

  const { singerId } = props;

  let result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, `songs`);
    onValue(songsRef, async (snapshot) => {
      const data = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        if (value.singerId.includes(singerId)) {
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
            singer: value.singer,
            link: `/songs/${key}`,
          });
        }
      }
      resolve(data);
    });
  });

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát" />
        <SongList2 data={result} songlist={"singer" + singerId} />
      </div>
    </>
  );
}
