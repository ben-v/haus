import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import EmptyPage from "./pages/empty";

const Layout = () => {
  return (
    <>
      <div>
          <Outlet />
      </div>
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
        element: <EmptyPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
