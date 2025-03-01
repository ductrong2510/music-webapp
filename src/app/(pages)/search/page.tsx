import { Suspense } from "react"
import Section1 from "./Section1"

export default async function SearchPage() {
  return (
    <>
      <Suspense>
        <Section1 />
      </Suspense>
    </>
  )
}
