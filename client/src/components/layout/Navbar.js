import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../auth/LogoutBtn";

const Navbar = () => {

    const { loggedIn } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">

                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navId"
                    aria-controls="navId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>

                <Link className="navbar-brand text-light" to="/">MERN Auth</Link>

                <div className="collapse navbar-collapse" id="navId">

                    <ul className="navbar-nav ms-auto">
                        {
                            !loggedIn && <>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/register">Register</Link>
                                </li>
                            </>
                        }

                        {
                            loggedIn && <>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/customer">Customer</Link>
                                </li>
                            </>
                        }
                    </ul>

                    {
                        loggedIn && <LogoutBtn />
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar;