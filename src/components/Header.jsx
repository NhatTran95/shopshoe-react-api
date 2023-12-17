import React from "react";
import { Link } from 'react-router-dom'

function Header() {
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
                    />
                </form>
        </div>
        <div className="col-md-3 navbar-icon">
         <Link to='/'>Home
         <i className="fa-solid fa-right-to-bracket ms-2"></i>
         </Link>  
        
        </div>
    </div>
    )
}

export default Header