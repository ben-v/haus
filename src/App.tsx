
import { Route, Routes } from "react-router-dom"

import Home from "./pages/home"
import Contact from "./pages/contact";

import ScrollToHashElementBehavior from "./components/behaviors/ScrollToHashElementBehavior"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import GenericHttpError from "./components/errors/GenericHttpError";

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
        { label: 'About', url: '#' },
        { label: 'Customers', url: '#' },
        { label: 'Enterprise', url: '#' },
        { label: 'Partners', url: '#' },
        { label: 'Jobs', url: '#' }
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
        <Route path="/server-error" element={<GenericHttpError title="500" description="Well, this is embarassing, we encountered an unexpected error." />} />
        <Route path="*" element={<GenericHttpError title="404" description="Hmm, we did not find the page you requested."/>} />
      </Routes>
      <Footer sections={sections} />
    </>
  )
}

export default App
