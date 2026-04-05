import { createBrowserRouter, redirect } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Machineries from "./pages/Machineries";
import Projects from "./pages/Projects";
import WhyCrescent from "./pages/WhyCrescent";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "solutions", Component: Solutions },
      { path: "industries", Component: Industries },
      { path: "machineries", Component: Machineries },
      { 
        path: "fleet", 
        loader: () => redirect("/machineries")
      },
      { path: "projects", Component: Projects },
      { path: "why-crescent", Component: WhyCrescent },
      { path: "careers", Component: Careers },
      { path: "contact", Component: Contact },
    ],
  },
]);