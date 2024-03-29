import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import Contact from "./pages/contact";
import Error_404 from "./errors/404";
import Error_500 from "./errors/500";
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/server-error" element={<Error_500 />} />
        <Route path="*" element={<Error_404 />} />
      </Routes>
      <Footer sections={sections} />
    </>
  )
}

export default App
