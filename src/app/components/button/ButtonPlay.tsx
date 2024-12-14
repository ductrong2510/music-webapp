"use client"

import { FaPlay } from "react-icons/fa6"

export default function ButtonPlay(props: any) {
  const {
    id = "",
    image = "",
    title = "",
    listen = "",
    audio = "",
    singers = "",
    link = "",
    songlist = "",
    classname = "",
  } = props

  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio")
    elementPlayAudio.setAttribute("song-id", `${id}`)
    elementPlayAudio.setAttribute("song-list", `${songlist}`)
    const elementAudio = elementPlayAudio?.querySelector(".inner-audio")
    const elementSource = elementPlayAudio?.querySelector(".inner-source")
    elementSource.src = audio
    elementAudio.load()
    elementAudio.play()

    if (elementPlayAudio.classList.contains("hidden")) {
      elementPlayAudio.classList.remove("hidden")
    }

    //Lấy thông tin bái hát
    const elementImage = elementPlayAudio?.querySelector(".inner-image")
    elementImage.src = image
    elementImage.alt = title
    const elementTitle = elementPlayAudio?.querySelector(".inner-title")
    elementTitle.innerHTML = title
    const elementSinger = elementPlayAudio?.querySelector(".inner-singer")
    elementSinger.innerHTML = singers

    const boxButtonPlay = elementPlayAudio?.querySelector(".box-button-play")
    boxButtonPlay.classList.add("play")

    //Cập nhật thanh thời gian
    elementAudio.onloadedmetadata = () => {
      const totalTime = elementAudio.duration
      const boxTimePlay = elementPlayAudio?.querySelector(".box-time-play")
      const currentTimePlay = boxTimePlay?.querySelector(".current-time-play")
      const currentTimeInput = boxTimePlay?.querySelector(".current-time-input")
      currentTimeInput.max = `${totalTime}`
      elementAudio.ontimeupdate = () => {
        const currentTime = elementAudio.currentTime
        const percent = (currentTime / totalTime) * 100
        currentTimePlay.style.width = `${percent}%`
        currentTimeInput.value = `${currentTime}`
      }
    }
    elementAudio.addEventListener('ended', ()=> {
      boxButtonPlay.classList.remove("play")
    })

  }
  return (
    <>
      <button onClick={handlePlay} className={"button-play-item " + classname}>
        <FaPlay />
      </button>
    </>
  )
}
