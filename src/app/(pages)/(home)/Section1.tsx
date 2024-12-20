import Banner from "@/app/components/banner/Banner";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { get, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section1() {
  let result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, "songs");
    onValue(songsRef, async (snapshot) => {
      const data: any = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];

        //Lấy thông tin ca sĩ
        const singerPromises = value.singerId.map(async (item: string) => {
          const singerRef = ref(dbFirebase, 'singers/' + item)
          const singerSnapshot = await get(singerRef)
          return singerSnapshot.val().title
        })
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
          wishlist: value.wishlist
        });
      }
      resolve(data);
    });
  });

  result = result.slice(0, 3);

  return (
    <>
      <div className="flex mb-[30px]">
        <Banner />
        <div className="ml-[20px] flex-1">
          <Title text="Nghe Nhiều" />
          <SongList data={result} songlist="top" />
        </div>
      </div>
    </>
  );
}
