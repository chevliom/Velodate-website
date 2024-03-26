import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";

const LandingPageLayout = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-black">
        <div className="w-full sticky top-0 opacity-100 z-50 bg-[#FFFFFF1A]">
          <NavBar />
        </div>

        <div className="flex w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default LandingPageLayout;
