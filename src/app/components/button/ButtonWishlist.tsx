"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import { ref, runTransaction } from "firebase/database"
import { useEffect, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa6"

export default function ButtonWishlist(props: any) {
  const { id = "", classname = "", wishlist = [], songitem="" } = props

  const [isLike, setLike] = useState(false)

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const uid = user.uid
        if (wishlist[uid]) {
          setLike(true)
        }
      }
    })
  }, [])

  const handleLike = () => {
    const uid = authFirebase?.currentUser?.uid
    if (id && uid) {
      const songRef = ref(dbFirebase, "songs/" + id)
      runTransaction(songRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[uid]) {
            song.wishlist[uid] = null
            setLike(false)
          } else {
            if (!song.wishlist) {
              song.wishlist = {}
            }
            song.wishlist[uid] = true
            setLike(true)
          }
        }
        return song
      })
    }
  }

  const likeClass = isLike ? (songitem === "1" ? "bg-primary border-primary" : "text-primary") : (songitem === "1" ? "border-white" : "text-white");

  return (
    <>
      <button
        onClick={handleLike}
        className= {`${classname} ${likeClass}`}
      >
        {(songitem === "2" && isLike) ? <FaHeart /> : <FaRegHeart />}
      </button>
    </>
  )
}
