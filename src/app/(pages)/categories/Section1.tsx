import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1() {
  const result = await new Promise((resolve) => {
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

  return (
    <>
      <Title text="Danh Mục Bài Hát" />
      <div className="mt-[20px]">
        <CardList cardList={result} />
      </div>
    </>
  );
}
