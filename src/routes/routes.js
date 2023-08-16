import { lazy } from "react";


export const Layout = lazy(() => import("../Layout/layout.jsx"))
export const Home = lazy(() => import("../pages/Home/Home.jsx"))
export const Komp = lazy(() => import("../pages/Komp/Komp.jsx"))
export const Obj = lazy(() => import("../pages/Obj/Obj.jsx"))
export const Press = lazy(() => import("../pages/Press/Press.jsx"))
export const About = lazy(() => import("../pages/About/About.jsx"))
export const Contact = lazy(() => import("../pages/Contact/Contact.jsx"))
export const Nothing = lazy(() => import("../pages/Nothing/Nothing.jsx"))