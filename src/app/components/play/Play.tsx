/* eslint-disable @next/next/no-img-element */
import PlayAction from "./PlayAction"
import PlayInfo from "./PlayInfo"
import PlayTime from "./PlayTime"
import PlayVolume from "./PlayVolume"

export default function Play() {
  return (
    <>
      <div className="fixed z-[999] bottom-0 left-0 w-full bg-[#212121] border-t border-[#494949] py-[22px] play-audio hidden">
        <audio className="inner-audio hidden">
          <source src="" className="inner-source"/>
        </audio>
        <div className="container mx-auto flex items-center justify-between">
          <PlayInfo />
          {/* <div className="w-[218px] flex items-center">
            <div className="w-[49px] aspect-square rounded-[14px] truncate mr-[12px]">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover inner-image"
              />
            </div>
            <div className="flex-1">
              <div className="font-[700] text-[15px] text-white mb-[2px] inner-title"></div>
              <div className="font-[700] text-[12px] text-[#FFFFFF70] inner-singer"></div>
            </div>
          </div> */}
          <div className="flex-1 mx-[67px]">
            <PlayAction />
            {/* <div className="flex justify-center items-center">
              <button className="text-white text-[16px]">
                <FaBackwardStep />
              </button>
              <button className="text-white text-[16px] w-[32px] h-[32px] rounded-full bg-primary inline-flex items-center justify-center mx-[42px] box-button-play">
                <FaPlay className="inner-button-play" />
                <FaPause className="inner-button-pause" />
              </button>
              <button className="text-white text-[16px]">
                <FaForwardStep />
              </button>
            </div> */}

            <PlayTime />
            {/* <div className="mt-[11px] relative">
              <div className="h-[4px] w-[50%] bg-primary rounded-[50px] absolute left-0 top-[14px]"></div>
              <input
                type="range"
                name="played"
                min={0}
                max={100}
                defaultValue={50}
                className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm"
              />
            </div> */}
          </div>

          <PlayVolume />
          {/* <div className="w-[184px] flex items-center">
            <button className="text-[20px] text-white mr-[6px]">
              <FaVolumeHigh />
            </button>
            <div className="flex-1 relative">
              <div className="h-[3px] w-[50%] bg-primary rounded-[42px] absolute left-0"></div>
              <input
                type="range"
                name="volume"
                min={0}
                max={100}
                defaultValue={50}
                className="h-[3px] w-full bg-[#FFFFFF1A] rounded-[42px] cursor-pointer appearance-none range-sm flex items-center"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
