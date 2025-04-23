import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"


export default function Main() {
    return (

        <div>
            <Header />

            <main className={`min-h-[85vh]  max-w-screen`}>

                <Outlet />
            </main>
            <Footer />
        </div>


    );
}
