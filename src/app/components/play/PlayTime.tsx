"use client"

export default function PlayTime() {
  const handleChange = (e: any) => {
    const timeUpdate = e.target.value
    const playAudio: any = document.querySelector(".play-audio")
    const boxButtonPlay = playAudio?.querySelector(".box-button-play")
    const audio = playAudio?.querySelector(".inner-audio")
    audio.currentTime = parseFloat(timeUpdate)
  }

  return (
    <>
      <div className="mt-[11px] relative box-time-play">
        <div className="h-[4px] w-[0%] bg-primary rounded-[50px] rounded-r-[0px] absolute left-0 top-[14px] current-time-play"></div>
        <input
          onChange={handleChange}
          type="range"
          name="played"
          min={0}
          max={0}
          defaultValue={0}
          className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm current-time-input"
        />
      </div>
    </>
  )
}
