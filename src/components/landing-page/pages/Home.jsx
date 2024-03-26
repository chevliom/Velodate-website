const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full">
          <div className="absolute top-5 flex gap-2 flex-col items-center justify-center w-full">
            <div className="mt-2 flex gap-2 flex-col items-center">
              <p className="text-[#FFFFFF] font-bold text-5xl">
                "Beyond the Swipe"
              </p>
              <p className="text-[#FFFFFF] font-normal text-lg">
                The connection you've been waiting for
              </p>
            </div>

            <div className="bg-[#C5C5C5] h-[600px] w-[400px] opacity-75">
              <button>submit</button>
            </div>
          </div>

          <img
            src="/assets/home/girlImg.png"
            alt="girlImg"
            className="w-full object-cover h-[100vh]"
          />
        </div>

        <div className="flex flex-col text-white">
          <h1 className="">"Beyond the Swipe" </h1>
          <p>The connection you've been waiting for</p>
        </div>
      </div>
    </>
  );
};

export default Home;
