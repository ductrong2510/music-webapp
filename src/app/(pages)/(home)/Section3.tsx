import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section3() {
  // const cards: any = [
  //     {
  //         image: "./image-6.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //       },
  //       {
  //         image: "./image-6.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //       },
  //       {
  //         image: "./image-6.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //       },
  //       {
  //         image: "./image-6.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //       },
  //       {
  //         image: "./image-6.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //       }
  // ]

  let result: any = await new Promise((resolve) => {
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, (snapshot) => {
      const data = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        data.push({
          id: key,
          image: value.image,
          title: value.title,
          description: value.description,
          link: `/singers/${key}`,
        });
      }
      resolve(data);
    });
  });

  result = result.slice(0, 5);

  return (
    <>
      <Title text="Ca Sĩ Nổi Bật" />
      <div className="mt-[20px]">
        <CardList cardList={result} />
      </div>
    </>
  );
}
