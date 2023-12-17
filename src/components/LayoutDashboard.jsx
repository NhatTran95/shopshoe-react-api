import React from 'react'
import { Outlet } from 'react-router'
import Header from "./Header";
import { Link } from 'react-router-dom'

export default function LayoutDashboard() {
  return (
    <>
        <Header />
            <div className="row">
                <div className="col-md-2">
                    <div>
                        <h4>Dashboard</h4>
                    </div>
                    <div>
                        <h4>Product</h4>
                        <ul className="list">
                            <li className="list-group-item">
                                <Link to="/dashboard/products">ProductList</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/dashboard/products/create">Create</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-10">
                    <Outlet/>
                </div>
            </div>
    </>
  )
}
