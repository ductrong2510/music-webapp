import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section2() {
  // interface card {
  //     image: string,
  //     title: string,
  //     description: string,
  //     link: string
  // }

  // const cards: card[] = [
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
  // ];

  let result: any = await new Promise((resolve) => {
    const categoriesRef = ref(dbFirebase, "categories");
    onValue(categoriesRef, (snapshot) => {
      const data = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        data.push({
          id: key,
          image: value.image,
          title: value.title,
          description: value.description,
          link: `categories/${key}`,
        });
      }
      resolve(data);
    });
  });

  result = result.slice(0, 5);

  return (
    <>
      <div className="mb-[20px]">
        <Title text="Danh Mục Nổi Bật" />
        <div className="mt-[20px]">
          <CardList cardList={result} />
        </div>
      </div>
    </>
  );
}
