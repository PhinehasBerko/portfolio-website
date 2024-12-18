import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./ui/Layout.tsx";
// import Home from "./pages/Home.tsx";
// import About from "./pages/About.tsx";
// import Project from "./pages/Project.tsx";
// import Contact from "./pages/Contact.tsx";
// import Testimonial from "./pages/Testimonial.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about-me",
//         element: <About />,
//       },
//       {
//         path: "/projects",
//         element: <Project />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/testimonials",
//         element: <Testimonial />,
//       },
//     ],
//   },
// ]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
