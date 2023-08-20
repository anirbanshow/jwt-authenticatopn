import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {

    const { getLoggedIn } = useContext(AuthContext);

    let navigate = useNavigate();

    async function logOut() {
        await axios.get("/auth/logout");
        await getLoggedIn();
        navigate("/");
    }

    return <button onClick={logOut} className="btn btn-outline-success ms-2">
        Logout
    </button>
}

export default LogoutBtn;