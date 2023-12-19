import React, { useEffect, useState } from "react";

import billService from '../service/billService';

function Dashboard() {
    const [bills, setBills] = useState([])

    const getAllBills = async () => {
        const listBills = await billService.getAllBills()
        setBills(listBills)
    }

    useEffect(() => {
        getAllBills()

    }, [])

    console.log(bills);
    return (
        <>

            <h3>Bills</h3>

            <table className="table cart-table">
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Fullname</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Total Amount</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bills.map(item => {
                            return (
                                <tr key={item.id} className='text-center'>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.customer.fullname}
                                    </td>
                                    <td>
                                        {item.customer.address}
                                    </td>
                                    <td>
                                        {item.customer.email}
                                    </td>
                                    <td>
                                        {item.customer.mobile}
                                    </td>
                                    <td>
                                        {item.totalPrice}
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Dashboard