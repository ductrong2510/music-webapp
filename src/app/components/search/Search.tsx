/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { FaSearch } from "react-icons/fa"

export default function Search() {
  const router = useRouter()
  const searchParam = useSearchParams()
  const defaultKeyword = searchParam.get("keyword") || ""

  const handleSearch = (e: any) => {
    e.preventDefault()
    const keyword = e.target.keyword.value
    if(keyword){
      router.push(`/search?keyword=${keyword}`)
    }
  }

  return (
    <>
      <form onSubmit={handleSearch} className="bg-[#212121] rounded-[50px] py-[15px] px-[30px] flex items-center sticky top-0 mt-[20px] z-[999]">
        <button className="text-[22px] color-white mr-[20px]">
          <FaSearch />
        </button>
        <input
          type="text"
          name="keyword"
          defaultValue={defaultKeyword}
          placeholder="Tìm kiếm..."
          className="w-full border-0 outline-0 font-[600] text-[16px] text-white bg-transparent"
        />
      </form>
    </>
  )
}
