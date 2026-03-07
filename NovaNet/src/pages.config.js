import Home from './pages/Home.jsx';
import Network from './pages/Network.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Network": Network,
    "About": About,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};