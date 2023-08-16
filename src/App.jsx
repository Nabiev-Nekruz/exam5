import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { About, Contact, Home, Komp, Layout, Nothing, Obj, Press } from "./routes/routes";
import Loader from "./components/Loader/Loader";
// import Nothing from "./pages/Nothing"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Layout />,
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <div className="container-loade">
                  <Loader />
                </div>
              }
            >
              <Home />
            </Suspense>
          ),
        },
        {
          path: "Komp",
          element: (
            <Suspense
              fallback={
                <div className="container-loade">
                  <Loader />
                </div>
              }
            >
              <Komp />
            </Suspense>
          ),
        },
        {
          path: "Obj",
          element: (
            <Suspense
              fallback={
                <div className="container-loade">
                  <Loader />
                </div>
              }
            >
              <Obj />
            </Suspense>
          ),
        },
        {
          path: "Press",
          element: (
            <Suspense
              fallback={
                <div className="container-loade">
                  <Loader />
                </div>
              }
            >
              <Press />
            </Suspense>
          ),
        },
        {
          path: "About",
          element: (
            <Suspense
              fallback={
                <div className="container-loade">
                  <Loader />
                </div>
              }
            >
              <About />
            </Suspense>
          ),
        },
        {
          path: "Contact",
          element: (
            <Suspense
              fallback={
                <div className="container-loade">
                  <Loader />
                </div>
              }
            >
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element:<Nothing/>
    }
    // {
    //   path: "*",
    //   element:<Nothing />
    //   }
  ]);

  return <RouterProvider router={router} />;
  
};

export default App;
