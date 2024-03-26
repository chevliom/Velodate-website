import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "../footer/Footer";

const LandingPageLayout = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-black">
        <div className="w-full sticky top-0 opacity-100 z-50">
          <NavBar />
        </div>

        <div className="flex w-full">
          <Outlet />
        </div>

        <Footer />
      </section>
    </>
  );
};

export default LandingPageLayout;
