"use client"

import { useSearchParams } from "next/navigation"
import Section1 from "./Section1"

export default async function SearchPage() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get("keyword") || ""

  return (
    <>
      <Section1 keyword={keyword} />
    </>
  )
}
