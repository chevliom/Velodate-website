// import { useEffect, useState } from "react";
import Safety from "./Safety";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className={`relative w-full hidden lg:block liner-gradiant`}>
          <div className="absolute top-12  flex gap-2 flex-col items-center justify-center w-full z-1">
            <div className="mt-2 flex gap-2 flex-col items-center z-1">
              <p className="text-[#FFFFFF] font-bold text-5xl">
                "Beyond the Swipe"
              </p>
              <p className="text-[#FFFFFF] font-normal text-lg">
                The connection you've been waiting for
              </p>
            </div>

            <div className="flex items-end justify-center bg-[#FFFFFF33] w-3/4 sm:w-2/5 md:w-4/12 lg:w-3/12 opacity-[80%] rounded-md " style={{ height:"calc(100vh - 165px)" }}>
              <div className="flex items-center justify-between w-11/12 px-1 sm:px-4 py-4 my-4 rounded-md bg-[#00000066]">
                <button className="flex flex-col text-[#FFFFFF] text-2xl font-semibold">
                  Real-Time <span className="text-[#D19D00]">Matchmaking</span>
                </button>

                <button className="bg-[#D8A409] hover:bg-[#d8a409f1] p-4 rounded-md">
                  <img
                    src="/assets/footer/graterThanArrow.svg"
                    alt="graterThanArrow"
                    className=""
                  />
                </button>
              </div>
            </div>
          </div>
          <img
            src="/assets/home/bgImage.png "
            alt="girlImg"
            className="w-full object-cover h-[100vh] "
          />
        </div>

        <div className="flex w-full mt-16 lg:mt-0">
          <Slider />
        </div>

        <div className="flex w-full">
          <Safety />
        </div>
      </div>
    </>
  );
};

export default Home;
