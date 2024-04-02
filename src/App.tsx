
import { Route, Routes } from "react-router-dom"

import Home from "./pages/home"
import Contact from "./pages/contact";
import Privacy from "./pages/legal/privacy";
import Terms from "./pages/legal/terms";

import ScrollToHashElementBehavior from "./components/behaviors/ScrollToHashElementBehavior"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import GenericHttpError from "./components/errors/GenericHttpError";
import Partners from "./pages/partners";

interface Link {
  label: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

function App() {
  const sections: Section[] = [
    {
      title: 'Company',
      links: [
        { label: 'About', url: '#' },
        { label: 'Customers', url: '#' },
        { label: 'Enterprise', url: '#' },
        { label: 'Partners', url: '#' },
        { label: 'Jobs', url: '#' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'About', url: '#' },
        { label: 'Customers', url: '#' },
        { label: 'Enterprise', url: '#' },
        { label: 'Partners', url: '#' },
        { label: 'Jobs', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms & Conditions', url: '/terms' },
        { label: 'Partners', url: '/partners' },
      ]
    }
  ];

  return (
    <>
      <ScrollToHashElementBehavior />
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/server-error" element={<GenericHttpError title="500" description="Well, this is embarassing, we encountered an unexpected error." />} />
        <Route path="*" element={<GenericHttpError title="404" description="Hmm, we did not find the page you requested."/>} />
      </Routes>
      <Footer sections={sections} />
    </>
  )
}

export default App
