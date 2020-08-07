import Chapter from "./pages/Chapter";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import NestedChapter from "./pages/NestedChapter";

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
    },
    {
        path: "/chapters/:chapterId",
        exact: true,
        menu: "Chapter",
        isLink: false,
        main: Chapter
    },
    {
        path: "/chapters/:chapterId/:courseId",
        exact: true,
        menu: "Nested",
        isLink: false,
        main: NestedChapter
    },

];

export default routes;