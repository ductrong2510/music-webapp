import CardList from "@/app/components/card/CardList"
import Title from "@/app/components/title/Title"
import { dbFirebase } from "@/app/firebaseConfig"
import {  onValue, ref } from "firebase/database"

export default async function Section1() {
  const data = await new Promise((resolve) => {
    const categoriesRef = ref(dbFirebase, "categories");
    onValue(categoriesRef, (snapshot) => {
      const categories = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        categories.push({
          id: key,
          image: value.image,
          title: value.title,
          description: value.description,
          link: `categories/${key}`,
        });
      }
      resolve(categories);
    });
  });
  // interface Category {
  //   id: string
  //   image: string
  //   title: string
  //   description: string
  //   link: string
  // }
  // const [data, setData] = useState<Category[]>([])
  // useEffect(() => {
  //   const categoriesRef = ref(dbFirebase, "categories")
  //   const unsubscribe = onValue(categoriesRef, (snapshot) => {
  //     const data: Category[] = []
  //     for (const key in snapshot.val()) {
  //       const category = snapshot.val()[key]
  //       data.push({
  //         id: key,
  //         image: category.image,
  //         title: category.title,
  //         description: category.description,
  //         link: `categories/${key}`,
  //       })
  //     }
  //     setData(data)
  //   })
  //   return () => {
  //     unsubscribe()
  //     off(categoriesRef)
  //   }
  // }, [])

  return (
    <>
      <Title text="Danh Mục Bài Hát" />
      <div className="mt-[20px]">
        <CardList cardList={data} />
      </div>
    </>
  )
}
