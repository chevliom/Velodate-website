import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "../components/landing-page/LandingPageLayout";
import { Home, TermsAdnServices } from "../components/landing-page/pages";

const router = () => {
  return (
    <>
      <Routes>
        {/* private routes */}
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<Home />} />
          <Route path="/terms-services" element={<TermsAdnServices />} />
        </Route>
      </Routes>
    </>
  );
};

export default router;
