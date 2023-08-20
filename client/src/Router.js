import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Customers from "./components/customers/Customers";

const Router = () => {

    const { loggedIn } = useContext(AuthContext);

    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    {
                        !loggedIn && <>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </>
                    }

                    {
                        loggedIn && <>
                            <Route path="/customer" element={<Customers />} />
                        </>
                    }
                </Routes>
            </div>
        </>

    )
}

export default Router;