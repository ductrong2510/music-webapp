import { dbFirebase } from "@/app/firebaseConfig"
import Section2 from "./Section2"
import { onValue, ref } from "firebase/database"
import CardInfo from "@/app/components/card/CardInfo"
import { notFound } from "next/navigation"

export default async function CategoriesDetailPage(props: {
  params: { id: string }
}) {
  const { params } = props

  const result: any = await new Promise((resolve) => {
    const categoryRef = ref(dbFirebase, `categories/${params.id}`)
    onValue(categoryRef, (snapshot) => {
      const value = snapshot.val()
      resolve(value)
    })
  })

  if(!result) notFound()

  return (
    <>
      <div className="mb-[30px]">
        <CardInfo
          image={result.image}
          title={result.title}
          description={result.description}
        />
      </div>
      <Section2 id={params.id} />
    </>
  )
}
