import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const { getLoggedIn } = useContext(AuthContext);

    let navigate = useNavigate();

    const register = async () => {
        try {

            const registerData = {
                email,
                password,
                passwordVerify
            };

            await axios.post("/auth/", registerData);
            await getLoggedIn();
            navigate("/customer");

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="row justify-content-center mt-2">
            <div className="col-lg-5">
                <h5 className="text-center">Register a new account</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="emailId" className="form-label">Email address</label>
                        <input type="email" id="emailId" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordId" className="form-label">Password</label>
                        <input type="password" id="passwordId" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cPasswordId" className="form-label">Password</label>
                        <input type="password" id="cPasswordId" className="form-control" onChange={(e) => setPasswordVerify(e.target.value)} />
                    </div>

                    <button type="button" className="btn btn-primary w-100" onClick={register}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;