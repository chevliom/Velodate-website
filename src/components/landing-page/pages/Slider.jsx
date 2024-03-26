const Slider = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full my-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#FFFFFF] font-bold text-5xl text-center leading-[3.7rem] mb-2">
            "Beyond the Swipe"
          </p>
          <p className="text-[#FFFFFF] font-normal text-lg">
            The connection you've been waiting for
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-8">
          <div className="flex items-center justify-center relative">
            <img src="/assets/home/man19198.png" alt="man19198" />

            <div className="flex items-center justify-between absolute bottom-0 w-11/12 my-4 p-2 rounded-md bg-[#00000066]">
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

          <div className="flex items-center justify-center relative">
            <img src="/assets/home/girl19197.png" alt="girl19197" />

            <div className="flex items-center justify-between absolute bottom-0 w-11/12 my-4 p-2 rounded-md bg-[#00000066]">
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

          <div className="flex items-center justify-center relative">
            <img src="/assets/home/man19199.png" alt="man19199" />

            <div className="flex items-center justify-between absolute bottom-0 w-11/12 my-4 p-2 rounded-md bg-[#00000066]">
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
      </div>
    </>
  );
};

export default Slider;
