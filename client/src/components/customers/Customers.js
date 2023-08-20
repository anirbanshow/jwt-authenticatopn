import React, { useEffect, useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import axios from 'axios';

const Customers = () => {

    const [customers, setCustomers] = useState([]);

    async function getCustomer() {
        const customersRes = await axios.get("/customer");
        setCustomers(customersRes.data);
    }

    useEffect(() => {
        getCustomer();
    }, []);

    return (
        <>
            <CustomerForm getCustomer={getCustomer} />
            <CustomerList customers={customers} />
        </>
    )
}

export default Customers;