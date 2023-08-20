import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ getCustomer }) => {

    const [name, setName] = useState("");

    async function saveCustomer() {
        try {

            const customerData = { name };
            await axios.post("/customer", customerData);
            setName("");
            await getCustomer();

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="row justify-content-center mt-2">
            <div className="col-lg-5">
                <h5 className="text-center">Enter customer name</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameId" className="form-label">Name:</label>
                        <input type="text" id="nameId" className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <button type="button" className="btn btn-primary w-100" onClick={saveCustomer}>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CustomerForm;