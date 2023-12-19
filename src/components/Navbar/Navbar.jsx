import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import cartService from '../../service/cartService'

function Navbar({ handleSetSearchStatus, handleSetSearch, cart, setCart, statusCart, setStatusCart }) {
    const quantityInCart = async () => {
        const listCarts = await cartService.getAllCarts();
        setCart(listCarts);
    }

    useEffect(() => {
        if (statusCart) {
            quantityInCart();
            setStatusCart(false);
        }
    }, [statusCart]);

    return (
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
                        onInput={(e) => {
                            handleSetSearchStatus(true)
                            handleSetSearch(e.target.value)
                        }}
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
    )
}

export default Navbar