
import { Route, Routes } from "react-router-dom"

import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import GenericHttpError from "./components/errors/GenericHttpError";

import Landing from "./pages/landing";
import Home from "./pages/home"
import Contact from "./pages/contact";
import Request from "./pages/request";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Partners from "./pages/partners";
import Faqs from "./pages/faqs";
import ServiceArea from "./pages/service-area";
import ClientsPage from "./pages/clients";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/old" element={<Home />} />
        <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/server-error" element={<GenericHttpError title="500" description="Well, this is embarassing, we encountered an unexpected error." />} />
        <Route path="*" element={<GenericHttpError title="404" description="Hmm, we did not find the page you requested."/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
