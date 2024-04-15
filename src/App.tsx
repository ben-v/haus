
import { Route, Routes } from "react-router-dom"

import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import GenericHttpError from "./components/errors/GenericHttpError";

import LandingPage from "./pages/landing";
// import Home from "./pages/home"
import ContactPage from "./pages/contact";
import WorkRequestPage from "./pages/work-request";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
// import PartnersPage from "./pages/partners";
// import FaqsPage from "./pages/faqs";
import ServiceAreaPage from "./pages/service-area";
import ClientsPage from "./pages/clients";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        {/* <Route path="/old" element={<Home />} /> */}
        <Route path="/service-area" element={<ServiceAreaPage />} />
        {/* <Route path="/faqs" element={<FaqsPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work-request" element={<WorkRequestPage />} />
        {/* <Route path="/partners" element={<PartnersPage />} /> */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/server-error" element={<GenericHttpError title="500" description="Well, this is embarassing, we encountered an unexpected error." />} />
        <Route path="*" element={<GenericHttpError title="404" description="Hmm, we did not find the page you requested."/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
