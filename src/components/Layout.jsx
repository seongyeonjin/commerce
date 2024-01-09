import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            <main className="main">
                    <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;