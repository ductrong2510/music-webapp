'use client'

import { FaBackwardStep, FaForwardStep, FaPause, FaPlay } from "react-icons/fa6";

export default function PlayAction() {
  const handlePlay = ()=>{
    const playAudio: any = document.querySelector(".play-audio")
    const boxButtonPlay = playAudio?.querySelector(".box-button-play")
    const audio = playAudio?.querySelector(".inner-audio")
    if(boxButtonPlay?.classList.contains("play")) {
      boxButtonPlay?.classList.remove("play")
      audio.pause()
    } else {
      boxButtonPlay?.classList.add("play")
      audio.play()
    }
  }

  const handleNextPrev = (action: string) => {
    const playAudio: any = document.querySelector(".play-audio")
    const idSongCurrent = playAudio?.getAttribute("song-id")
    const songList = playAudio?.getAttribute("song-list")
    const currentSong = document.querySelector(`[song-list=${songList}] [song-id="${idSongCurrent}"]`)
    if(action == "next"){
      const nextSong: any = currentSong?.nextElementSibling
      if(nextSong) {
        const buttonPlay = nextSong.querySelector(".button-play-item")
        buttonPlay.click()
      }
    } else {
      const prevSong: any  = currentSong?.previousElementSibling
      if(prevSong) {
        const buttonPlay= prevSong.querySelector(".button-play-item")
        buttonPlay.click()
      }
    }
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <button onClick={() => handleNextPrev("prev")} className="text-white text-[16px]">
          <FaBackwardStep />
        </button>
        <button onClick={handlePlay} className="text-white text-[16px] w-[32px] h-[32px] rounded-full bg-primary inline-flex items-center justify-center mx-[42px] box-button-play">
          <FaPlay className="inner-button-play" />
          <FaPause className="inner-button-pause" />
        </button>
        <button onClick={() => handleNextPrev("next")} className="text-white text-[16px]">
          <FaForwardStep />
        </button>
      </div>
    </>
  )
}
