import { useEffect } from "react";
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from "react-router-dom"

import toast from 'react-hot-toast';

import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import GenericHttpError from "./components/errors/GenericHttpError";

import LandingPage from "./pages/landing";
import ClientsPage from "./pages/clients";
import ServicesPage from "./pages/services";
import ServiceAreaPage from "./pages/service-area";
import FaqsPage from "./pages/faqs";
import ContactPage from "./pages/contact";
import WorkRequestPage from "./pages/work-request";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import CommonToastNotificationConfig from "./components/notifications/common-toast-notification-config";
import PartnersPage from "./pages/partners";

// This hook is to fix the lack of support of scrolling to top of new page upon navigating to new page. 
// There is ScrollRestoration in the ReactRouter, however, it does NOT work with nested routes, which have in this app.
// Common workaround is to create a hook or component using useEffect. Here, using useEffect to create another hook,
// which will scroll to the top of new page after a slight delay. 
// See:
// https://medium.com/@bobjunior542/react-router-6-how-to-keep-your-users-scrolled-16a8da96f61b
// https://stackoverflow.com/questions/71390137/react-router-scroll-to-top-on-v6
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Per https://stackoverflow.com/questions/72267587/window-scrollto-not-working-inside-useeffect-reactjs
    // When the useEffect function gets called the page hasn't been rendered, yet. Use setTimeout to introduce slight delay.
    setTimeout(() =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      }), 10);
  }, [pathname]);
}

const Layout = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <div className="page-body-end-highlight-line">
          <Outlet />
      </div>
      <Footer />
      <CommonToastNotificationConfig />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'clients',
        element: <ClientsPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'service-area',
        element: <ServiceAreaPage />,
      },
      {
        path: 'faqs',
        element: <FaqsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'work-request',
        element: <WorkRequestPage />,
      },
      {
        path: 'partners',
        element: <PartnersPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'server-error',
        element: <GenericHttpError title="500" description="Well, this is embarassing, we encountered an unexpected error." />,
      },
      {
        path: '*',
        element: <GenericHttpError title="404" description="Hmm, we did not find the requested page." />,
      }

    ]
  }
]);

router.subscribe(() => {
  // Dismiss any lingering toast message.
  toast.dismiss();
})

function App() {
  return <RouterProvider router={router} />;
}

export default App
