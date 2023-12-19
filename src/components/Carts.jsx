import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import ProductService from "../service/productservice";
import cartService from '../service/cartService';
import billService from '../service/billService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


export default function Carts({ cart, setCart, statusCart, setStatusCart }) {
    const [cartListDetails, setCartListDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [bill, setBill] = useState({})
    const [customer, setCustomer] = useState({})

    const getAllCarts = async () => {
        const listCarts = await cartService.getAllCarts();
        setCart(listCarts);
    }

    const cartLists = async () => {
        const newData = [];
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const item = await ProductService.getById(cart[i].id);
            const product = { ...item, quantity: cart[i].quantity }
            if (item) {
                newData.push(product);
            }
            total += parseInt(item.newPrice) * parseInt(cart[i].quantity);
        }
        setCartListDetails(newData);
        setTotalPrice(total);
    }

    const loadData = async () => {
        if (cart.length > 0) {
            await cartLists();
        } else {
            await getAllCarts();
            await cartLists();
        }
    }

    useEffect(() => {
        loadData();
    }, [cart])

    const handleRemoveProductInCart = async (id) => {
        const confirmDeleted = window.confirm('Are you sure delete product ' + id + ' ?');

        if (confirmDeleted) {

            await cartService.deleteCart(id);

            const index = cartListDetails.findIndex(item => item.id === id);

            const newCarts = [...cartListDetails];

            newCarts.splice(index, 1);

            const newCart = [...cart]
            const indexCart = newCart.findIndex(item => item.id === id);
            newCart.splice(indexCart, 1)

            setCart(newCart)
            setCartListDetails(newCarts);
            setStatusCart(true);

            toast.warn(`Deleted product with ID: ${id} from cart`, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        if (!id) {
            toast.error(`Cant find product with ID: ${id}`, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const reduceQuantity = async (id, quantity) => {
        if (quantity > 1) {
            const item = await cartService.getById(id);
            console.log(item);

            const newItem = { ...item, "quantity": item.quantity - 1 }
            const newCart = [...cart]
            const index = newCart.findIndex(item => item.id === id);
            newCart[index] = newItem;
            await cartService.editCart(id, newItem)

            setCart(newCart)


        }
    }

    const increaseQuantity = async (id, quantity) => {

        const item = await cartService.getById(id);
        const newItem = { ...item, "quantity": item.quantity + 1 }
        const newCart = [...cart]
        const index = newCart.findIndex(item => item.id === id);
        newCart[index] = newItem;
        await cartService.editCart(id, newItem)

        setCart(newCart)

    }

    const handleChangeInfo = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const handleCreateBill = async () => {
        console.log(customer);
        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        console.log(dateTime);
        const bill = {
            "cartDetails": cartListDetails,
            "totalPrice": totalPrice,
            "customer": customer,
            "date": dateTime
        }

        await billService.createBill(bill)
        setBill(bill)

        await cartService.deleteAllCart()
        const newCart = []
        setCart(newCart);

        toast.info(`Checkout success`, {
            position: toast.POSITION.TOP_RIGHT,
            duration: 2000
        });

    }

    return (
        <>
            <div className="row navbar">
                <div className="col-md-2">
                    <i className="fa-solid fa-cart-plus"></i>
                    <span className="ms-2">Shoe Eccommerce</span>
                </div>
                <div className="col-md-7">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"

                        />
                    </form>
                </div>
                <div className="col-md-3 navbar-icon">
                    <div className="div-cart">
                        <Link to="/carts">
                            <i className="fa-solid fa-cart-shopping me-3">
                            </i>
                        </Link>

                        <span className="cart-item">{cart.length}</span>
                    </div>

                    <div>
                        <Link to="/dashboard">
                            <i className="fa-solid fa-user"></i>
                        </Link>
                    </div>


                </div>
            </div>

            <div className='row'>
                <div className='col-md-8' id="product">
                    <h3>Cart Details</h3>
                    <table className="table cart-table">
                        <thead>
                            <tr className='text-center'>
                                <th>ID</th>
                                <th>Avatar</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Amount</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartListDetails.map(item => {
                                    return (
                                        <tr key={item.id} className='text-center'>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                <img src={item.img} className="card-img-top" alt="..." style={{ height: 45, width: 85 }} />
                                            </td>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.newPrice}
                                            </td>
                                            <td>
                                                <div className="cart-quantity-wrap">
                                                    <div className="cart-quantity">
                                                        <span onClick={() => reduceQuantity(item.id, item.quantity)}>-</span>
                                                        <span>{item.quantity}</span>
                                                        <span onClick={() => increaseQuantity(item.id, item.quantity)}>+</span>
                                                    </div></div>
                                                {/* <span>-</span>
                                                {item.quantity}
                                                <span>+</span> */}
                                            </td>
                                            <td>
                                                {parseInt(item.quantity) * parseInt(item.newPrice)}
                                            </td>
                                            <td>
                                                <i className="fa-solid fa-trash" onClick={() => handleRemoveProductInCart(item.id)} ></i>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>

                    <Link to={"/"}>
                        <button className='btn btn-outline-success'>
                            <i className="fa-solid fa-arrow-left me-2"></i>Continue Shopping</button>
                    </Link>
                </div>

                <div className='col-md-4'>
                    <div className="order-summary p-3 mt-5" >
                        <h3 className="border-bottom py-2">Order Summary</h3>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center justify-content-between py-2">
                                <span>Subtotal</span>
                                <span className="fw-bolder">${totalPrice}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-2">
                                <span>Shipping</span>
                                <span className="fw-bolder">Free</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-top mt-2 py-2">
                            <span className="fs-6">Total</span>
                            <span className="fw-bolder fs-6">${totalPrice}</span>
                        </div>
                    </div>
                    <div>
                        <form action="">
                            <h3>Customer Info</h3>
                            <div className='form-group mb-3'>
                                <label className='form-label'>FullName</label>
                                <input required type="text" name="fullname" id="" className='form-control' placeholder='Fullname'
                                    value={customer.fullname}
                                    onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Address</label>
                                <input required type="text" name="address" id="" className='form-control' placeholder='Address'
                                    value={customer.address}
                                    onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Email</label>
                                <input required type="email" name="email" id="" className='form-control' placeholder='Email'
                                    value={customer.email}
                                    onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Mobile</label>
                                <input required type="tel" name="mobile" id="" className='form-control' placeholder='Mobile'
                                    value={customer.mobile}
                                    onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className="py-3 bg-success mt-2 d-flex align-items-center justify-content-center text-white btn-checkout">
                                <button className='btn btn-block' type='button' onClick={handleCreateBill}>CHECKOUT</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


        </>

    )
}
