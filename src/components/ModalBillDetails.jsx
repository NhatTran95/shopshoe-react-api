import React from 'react'
import { Button, Modal } from "react-bootstrap";

export default function ({ handleCloseModalBillDetails, billDetail, statusBillDetail, customer, totalPrice }) {
    
    
    return (
        <>
            <Modal size="lg" show={statusBillDetail} onHide={handleCloseModalBillDetails} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>Bill Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-lg-12 border p-2 rounded">

                        <div className="my-2 border-bottom">
                            <h6>Order Information</h6>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total</span>
                                <span className="fw-bolder">${totalPrice}</span>
                            </div>
                        </div>
                        <div className="my-2 border-bottom">
                            <h6>Customer Information</h6>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Fullname</span>
                                <span className="fullname">{customer.fullname}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Email</span>
                                <span className="email">{customer.email}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Mobile</span>
                                <span className="mobiler">{customer.mobile}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Address</span>
                                <span className="address">{customer.address}</span>
                            </div>
                        </div>
                        <div className="my-2 border-bottom">
                            <h6>Order details</h6>
                            <table className="table table-striped">
                                <tbody>
                                    {
                                        billDetail.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td style={{ width: "250px" }}>
                                                        <div className="d-flex align-items-center">
                                                            <img className="me-2" src={item.img} style={{ width: "50px" }} />Nike Waffle One Sneaker</div>
                                                    </td>
                                                    <td className="text-end align-middle">{item.quantity}</td>
                                                    <td className="text-end align-middle">${item.newPrice}</td>
                                                    <td className="text-end align-middle fw-bolder">${item.quantity * item.newPrice}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalBillDetails}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
