import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";

const LandingPageLayout = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScrolls = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if user scrolled to the top
      setIsScrolledToTop(scrollTop === 0);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScrolls);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScrolls);
    };
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
          className={`w-full fixed top-0 ${isScrolledToTop ? 'bg-transparent' : 'bg-[#191919]'} opacity-100 z-50`}
        >
          <NavBar />
        </div>

        <div className="flex w-full">
          <Outlet />
        </div>

        <div className="flex-1">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default LandingPageLayout;
