import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";

const LandingPageLayout = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-black">
        <div
          className={`${
            isVisible
              ? "absolute opacity-100 z-20 w-full"
              : "w-full sticky top-0 bg-[#FFFFFF1A] opacity-100 z-50"
          }`}
        >
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
