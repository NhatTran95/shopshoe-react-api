import React, { useEffect, useState } from "react";

import billService from '../service/billService';
import ModalBillDetails from "./ModalBillDetails";

function Dashboard() {
    const [bills, setBills] = useState([])
    const [statusBillDetail, setStatusBillDetail] = useState(false)
    const [billDetail, setBillDetail] = useState([])
    const [customer, setCustomer] = useState({})
    const [totalPrice, setTotalPrice] = useState(0)


    const getAllBills = async () => {
        const listBills = await billService.getAllBills()
        setBills(listBills)
    }


    useEffect(() => {
        getAllBills()

    }, [])

    const handleShowModalDetail = (bills, total, cus) => {
        
            setStatusBillDetail(true)
            setBillDetail(bills)
            setCustomer(cus)
            setTotalPrice(total)

    }

    const handleCloseModalBillDetails = () => {
        setStatusBillDetail(false)
    }

    return (
        <>
            <h3>Bills</h3>
            
                    <table className="table cart-table">
                        <thead>
                            <tr className='text-center'>
                                <th>ID</th>
                                <th>Fullname</th>
                                <th>Date</th>
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
                                                {item.date}
                                            </td>
                                            <td>
                                                {item.totalPrice}
                                            </td>
                                            <td>
                                                <i type='button' className="fa-solid fa-bars" onClick={() => handleShowModalDetail(item.cartDetails, item.totalPrice, item.customer)}></i>
                                            </td>
                                        </tr>

                                    )

                                })
                            }
                        </tbody >
                    </table >

                    <ModalBillDetails
                        handleCloseModalBillDetails = {handleCloseModalBillDetails}
                        billDetail = {billDetail}
                        statusBillDetail = {statusBillDetail}
                        customer = {customer}
                        totalPrice = {totalPrice}
                    />

        </>
    )
}

export default Dashboard