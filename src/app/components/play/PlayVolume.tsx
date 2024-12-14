"use client"

import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6"

export default function PlayVolume() {
  const handleVolume = (e: any) => {
    const currentVolume = e.target.value
    const playAudio: any = document.querySelector(".play-audio")
    const volumeControl = playAudio.querySelector(".volume-control")
    const innerVolume = playAudio?.querySelector(".inner-volume")
    const audio = playAudio?.querySelector(".inner-audio")
    innerVolume.style.width = `${currentVolume}%`
    audio.volume = parseFloat(currentVolume) / 100
    if(currentVolume == 0){
      volumeControl.classList.add("muted")
    } else {
      volumeControl.classList.remove("muted")
    }
  }

  const handleMute = () => {
    const playAudio: any = document.querySelector(".play-audio")
    const volumeControl = playAudio?.querySelector(".volume-control")
    const audio = playAudio?.querySelector(".inner-audio")
    const innerVolumeInput = playAudio?.querySelector(".inner-volume-input")
    const currentVolume = innerVolumeInput.value
    if (volumeControl.classList.contains("muted")) {
      volumeControl.classList.remove("muted")
      audio.volume = parseFloat(currentVolume) / 100
    } else {
      volumeControl.classList.add("muted")
      audio.volume = 0
    }
  }

  return (
    <>
      <div className="volume-control w-[184px] flex items-center pr-[10px]">
        <button
          onClick={handleMute}
          className="text-[20px] text-white mr-[6px] button-volume"
        >
          <FaVolumeHigh className="button-volume-on" />
          <FaVolumeXmark className="button-volume-muted" />
        </button>
        <div className="flex-1 relative">
          <div className="h-[3px] w-[100%] bg-primary rounded-[42px] absolute left-0 inner-volume"></div>
          <input
            onChange={handleVolume}
            type="range"
            name="volume"
            min={0}
            max={100}
            defaultValue={100}
            className="h-[3px] w-full bg-[#FFFFFF1A] rounded-[42px] cursor-pointer appearance-none range-sm flex items-center inner-volume-input"
          />
        </div>
      </div>
    </>
  )
}
