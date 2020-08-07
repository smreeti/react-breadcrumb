import Chapter from "./pages/Chapter";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import NestedChapter from "./pages/NestedChapter";
import About from "./pages/About";

const routes = [
    {
        path: "/",
        exact: true,
        menu: "Home",
        isLink: true,
        main: Home
    },
    {
        path: "/contact",
        exact: true,
        menu: "Dashboard",
        isLink: true,
        main: Contact
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
    {
        path: "/about",
        exact: true,
        menu: "About",
        isLink: true,
        main: About
    },

];

export default routes;