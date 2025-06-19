import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { AiOutlinePauseCircle } from "react-icons/ai";
import PlayVideo from "./PlayVideo";

const AdditionalInfo = () => {

    const [play , setPlay] = useState(false)

  return (
    <>
        <div className="relative lg:w-full mt-10 min-w-[320px]">
          {/* Fixed background image */}
          <div
            className="absolute inset-0 h-full min-w-[320px] md:w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/water-full-bg.jpg')] md:bg-fixed bg-cover bg-center -z-10"
            aria-hidden="true"
          ></div>

          {/* Content wrapper with overlay */}
          <div className="relative">
            <div className="flex w-full flex-col md:flex-row">
              {/* left side */}
              <div className="md:w-[50%] md:h-[645px] lg:h-[500px] bg-[#e1e1e1]/20">
                <div
                  className="flex flex-col justify-center items-center mt-50 text-[#00733C]"
                  onClick={() => setPlay(true)}
                  >
                    {
                        play ? (<><AiOutlinePauseCircle size={80} className="cursor-pointer" /> <p>Pause Video</p></>) : (<><FaCirclePlay size={80} className="cursor-pointer" /> <p>Play Video</p></>) 
                    }
                  
                </div>
              </div>

              {/* right side */}
              <div className="md:w-[50%] lg:h-[500px] bg-[#f7f7f7] p-6 px-10 py-10">
                <div className="grid gap-1">
                  <h1 className="text-[28px]">ADDITIONAL INFO</h1>
                  <div className="bg-[#00733C] w-16 h-[2.5px]"></div>
                </div>

                <div className="grid gap-4 mt-8">
                  <h1 className="font-semibold">Fund Raising</h1>
                  <div className="bg-[#dddd] w-[95%] h-[0.8px] rounded" />
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="grid gap-4 lg:w-[80%] ">
                      <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores ipsa esse obcaecati repudiandae veniam
                        amet modi recusandae optio earum sequi accusantium culpa
                        vitae iste sit commodi eaque voluptatem officia quam
                      </p>
                      <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores ipsa esse obcaecati repudiandae veniam
                        amet modi.
                      </p>
                      <h1 className="font-semibold mt-4">Educate Kids</h1>
                      <div className="bg-[#dddd] w-[95%] h-[0.8px] rounded" />
                      <h1 className="font-semibold">
                        Building Clean Water Facility
                      </h1>
                    </div>
                    <div className="w-[105px] h-[67px]">
                      <img
                        src="https://zozothemes.com/html/the-charity/img/sections/blog/news-6.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
            play && (
                <PlayVideo close={() => setPlay(false)}/>
            )
        }
    </>
  )
}

export default AdditionalInfo