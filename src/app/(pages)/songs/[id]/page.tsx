import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";

export default async function SongDetailPage({params}: {params: {id :string}}) {

  const result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, `songs/${params.id}`);
    onValue(songsRef, (snapshot) => {
      const value = snapshot.val();
      resolve(value);
    })
  })

  if(!result) notFound()
  // Lấy ra tên ca sĩ của bài hát

  return (
    <>
      <CardInfo
          image={result.image}
          title={result.title}
          description="Hồ Quang Hiếu, Huỳnh Văn"
      />
      <Section2
        lyric={result.lyric}
      />
      <Section3 songId={params.id} categoryId={result.categoryId} />
    </>
  );
}