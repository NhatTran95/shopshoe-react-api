import React from "react";
import { Link } from 'react-router-dom'

function Navbar({ handleSetSearchStatus, handleSetSearch, cartItem }) {
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
                    <i className="fa-solid fa-cart-shopping me-3">                 
                    </i>
                    <span className="cart-item">{cartItem}</span>
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