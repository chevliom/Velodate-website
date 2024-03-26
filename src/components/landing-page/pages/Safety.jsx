const Safety = () => {
  return (
    <>
      <div className="flex gap-8 flex-col items-center w-full my-8">
        <div className="flex gap-2 flex-col items-center justify-center">
          <p className="text-[#D8A409] text-sm font-medium text-center">
            Safety
          </p>
          <h1 className="text-[#FFFFFF] font-semibold text-3xl text-center">
            Security, built in
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-[75%]">
          <div className="flex gap-4 flex-col items-center">
            <img src="/assets/footer/lockIcon.svg" alt="lockIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Your data is safe
            </p>
            <p className="text-[#F6F6F6] font-normal text-lg text-center">
              Utilizing advanced SSL encryption, we ensure that your personal
              information and communications are protected from unauthorized
              access at all times.
            </p>
          </div>

          <div className="flex gap-4 flex-col items-center">
            <img src="/assets/footer/messageIcon.svg" alt="messageIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Secure Communication
            </p>
            <p className="text-[#F6F6F6] font-normal text-lg text-center">
              Our encrypted messaging system keeps your conversations private
              and secure, so you can share freely without worry.
            </p>
          </div>

          <div className="flex gap-4 flex-col items-center">
            <img src="/assets/footer/computerIcon.svg" alt="computerIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Continuous Monitoring
            </p>
            <p className="text-[#F6F6F6] font-normal text-lg text-center">
              Our systems actively monitor for suspicious activity, helping to
              prevent fraud and ensuring a safe environment for all users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Safety;
