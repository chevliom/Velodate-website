import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "../components/landing-page/LandingPageLayout";
import { Home, TermsAdnServices ,PrivacyAndPolicy} from "../components/landing-page/pages";
import { TermsAdnServicesApp ,PrivacyAndPolicyApp} from "../components/app-policy/page";
import AppPolicyLayout from "../components/app-policy/AppPolicyLayout";

const router = () => {
  return (
    <>
      <Routes>
        
        {/* private routes */}
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<Home />} />
          <Route path="/terms-services" element={<TermsAdnServices />} />
          <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        </Route>

        <Route path="/app-policy" element={<AppPolicyLayout />}>

          <Route index path="/terms-services" element={<TermsAdnServicesApp />} />
          <Route path="/privacy-policy" element={<PrivacyAndPolicyApp />} />
        </Route>
      </Routes>
    </>
  );
};

export default router;
