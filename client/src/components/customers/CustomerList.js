import React from 'react';

const CustomerList = ({ customers }) => {

    return (
        <div className="row justify-content-center mt-5 mb-2">
            <div className="col-lg-5">
                <h5 className="text-center">Enter customer name</h5>

                <ul className="list-group mt-2">
                    {
                        customers.map((customer) => {
                            return <li className="list-group-item" key={customer._id}>
                                {customer.name}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CustomerList;