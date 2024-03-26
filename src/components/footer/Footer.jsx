const Footer = () => {
  return (
    <>
      <div className="flex gap-4 flex-col items-center">
        <div className="flex gap-2 flex-col items-center bg-[#D8A409] w-full py-8">
          <h1 className="text-[#000000] text-[48px] font-semibold text-center">
            Ready to get started ?
          </h1>
          <button className="p-2 mb-3 mt-2 bg-[#FFFFFF] rounded-lg font-medium text-[16px]">
            Download App
          </button>
        </div>

        <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between w-full px-8 py-2">
          <img src="/assets/navbar/velodateLogo.svg" alt="velodateLogo" />

          <div className="flex gap-4 items-center">
            <h1 className="text-[#FFFFFF] font-medium text-md">Follow us</h1>

            <div className="flex gap-4 items-center">
              <img
                src="/assets/footer/instagram.svg"
                alt="instagram"
                className="w-[24px] h-[24px]"
              />

              <img
                src="/assets/footer/twiter.svg"
                alt="twiter"
                className="w-[24px] h-[24px]"
              />

              <img
                src="/assets/footer/youtube.svg"
                alt="youtube"
                className="w-[24px] h-[24px]"
              />

              <img
                src="/assets/footer/linkdin.svg"
                alt="linkdin"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </div>

        <hr className="w-full bg-[#FFFFFF]" />

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between w-full px-8 py-2">
          <div className="flex gap-2 items-center max-[459px]:flex-col">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <span className="text-[#FFFFFF] font-normal text- ">
                  Safety Tips
                </span>
                <img
                  src="/assets/footer/horizontalLine.svg"
                  alt="horizontalLine"
                />
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-[#FFFFFF] font-normal text- ">Terms</span>
                <img
                  src="/assets/footer/horizontalLine.svg"
                  alt="horizontalLine"
                />
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <span className="text-[#FFFFFF] font-normal text- ">
                  Cookies Policy
                </span>
                <img
                  src="/assets/footer/horizontalLine.svg"
                  alt="horizontalLine"
                />
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-[#FFFFFF] font-normal text- ">
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="text-[#F6F6F6] text-sm font-normal">
              Copyright © 2024 Velodate. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
