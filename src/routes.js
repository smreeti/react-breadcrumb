import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";

const routes = [
    {
        path: "/",
        exact: true,
        menu: "Home",
        isLink: true,
        main: Home
    },
    {
        path: "/dashboard",
        exact: true,
        menu: "Dashboard",
        isLink: true,
        main: Dashboard
    },
    {
        path: "/chapters",
        exact: true,
        menu: "Chapters",
        isLink: true,
        main: Chapters
    }

];

export default routes;