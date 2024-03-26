const Safety = () => {
  return (
    <>
      <div className="flex gap-8 flex-col items-center w-full my-8">
        <div className="flex gap-2 flex-col items-center justify-center">
          <p className="text-[#D8A409] text-sm font-medium text-center">
            Safety
          </p>
          <h1 className="text-[#FFFFFF] font-bold text-4xl text-center">
            Security, built in
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 md:px-[198px] px-2 py-[2rem]">
          <div className="flex gap-2 flex-col items-center w-[100%] ">
            <img src="/assets/footer/lockIcon.svg" alt="lockIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Your data is safe
            </p>
            <p className="text-[#F6F6F6] font-normal text-base text-center">
              Utilizing advanced SSL encryption,<br/> we ensure that your personal<br/>
              information and communications <br/>are protected from unauthorized <br/>
              access at all times.
            </p>
          </div>

          <div className="flex gap-2 flex-col items-center w-[100%] ">
            <img src="/assets/footer/messageIcon.svg" alt="messageIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Secure Communication
            </p>
            <p className="text-[#F6F6F6] font-normal text-base text-center">
              Our encrypted messaging system <br/> keeps your conversations private<br/>
              and secure, so you can share <br/> freely without worry.
            </p>
          </div>

          <div className="flex gap-2 flex-col items-center w-[100%] ">
            <img src="/assets/footer/computerIcon.svg" alt="computerIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Continuous Monitoring
            </p>
            <p className="text-[#F6F6F6] font-normal text-base text-center">
              Our systems actively monitor for <br/> suspicious activity, helping to <br/>
              prevent fraud and ensuring a safe  environment for all users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Safety;
