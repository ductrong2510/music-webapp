import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1() {
  // const cards: any = [
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     },
  //     {
  //         image: "/Lead-image.png",
  //         title: "Nhạc Trẻ",
  //         description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //         link: ""
  //     }
  // ]

  const result: any = await new Promise((resolve) => {
    const categoriesRef = ref(dbFirebase, "singers");
    onValue(categoriesRef, (snapshot) => {
      const data = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        data.push({
          id: key,
          image: value.image,
          title: value.title,
          description: value.description,
          link: `singers/${key}`,
        });
      }
      resolve(data);
    });
  });

  return (
    <>
      <Title text="Ca Sĩ Nổi Bật" />

      <CardList cardList={result} />
    </>
  );
}
