import React, { useState, useEffect } from "react";
// import data from "../../data/data.json"
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

// const products = data.products;

function Content({data, setData}) {
    const [productList, setProductList] = useState(data.products)
    const [filterProducts, setFilterProducts] = useState([])

    const [company, setCompany] = useState(null)
    const [companyStatus, setCompanyStatus] = useState(false)

    const [category, setCategory] = useState(null)
    const [categoryStatus, setCategoryStatus] = useState(false)

    const [price, setPrice] = useState(null)
    const [priceStatus, setPriceStatus] = useState(false)

    const [color, setColor] = useState(null)
    const [colorStatus, setColorStatus] = useState(false)

    const [search, setSearch] = useState(null)
    const [searchStatus, setSearchStatus] = useState(false)

    const handleSetCompanyStatus = (boolean) => {
        setCompanyStatus(boolean)
    }

    const handleSetCompany = (company) => {
        setCompany(company)
    }

    const handleSetCategoryStatus = (boolean) => {
        setCategoryStatus(boolean)
    }

    const handleSetCategory = (category) => {
        setCategory(category)
    }

    const handleSetPriceStatus = (boolean) => {
        setPriceStatus(boolean)
    }

    const handleSetPrice = (price) => {
        setPrice(price)
    }

    const handleSetColorStatus = (boolean) => {
        setColorStatus(boolean)
    }

    const handleSetColor = (color) => {
        setColor(color)
    }

    const handleSetSearch = (search) => {
        setSearch(search)
    }

    const handleSetSearchStatus = (boolean) => {
        setSearchStatus(boolean)
    }


    const handleSetFilterProducts = () => {
        if (companyStatus && categoryStatus && colorStatus && priceStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) && item.company === company && item.category === category && item.color === color && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && categoryStatus && colorStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.category === category && item.color === color && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && categoryStatus && colorStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.category === category && item.color === color && item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && categoryStatus && searchStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.category === category && item.title.toLowerCase().includes(search.toLowerCase()) && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && searchStatus && colorStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.title.toLowerCase().includes(search.toLowerCase()) && item.color === color && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (searchStatus && categoryStatus && colorStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) && item.category === category && item.color === color && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && categoryStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.category === category && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && categoryStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.category === category && item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && categoryStatus && colorStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.category === category && item.color === color)
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && colorStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.color === color && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && colorStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.color === color && item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }

        if (categoryStatus && colorStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.category === category && item.color === color && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (categoryStatus && colorStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.category === category && item.color === color && item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }
      

        if (companyStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.company === company && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && categoryStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.category === category)
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && colorStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.color === color)
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.company === company && item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }

        if (categoryStatus && colorStatus) {
            const newProducts = productList.filter((item) => item.category === category && item.color === color)
            setFilterProducts(newProducts)
            return
        }

        if (categoryStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.category === category && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (categoryStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.category === category && item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }

        if (colorStatus && priceStatus) {
            const newProducts = productList.filter((item) => item.color === color && (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price))
            setFilterProducts(newProducts)
            return
        }

        if (colorStatus && searchStatus) {
            const newProducts = productList.filter((item) => item.color === color && item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }

        if (companyStatus) {
            const newProducts = productList.filter((item) => item.company === company)
            setFilterProducts(newProducts)
            return
        }

        if (categoryStatus) {
            const newProducts = productList.filter((item) => item.category === category)
            setFilterProducts(newProducts)
            return
        }

        if (colorStatus) {
            const newProducts = productList.filter((item) => item.color === color)
            setFilterProducts(newProducts)
            return
        }

        if (priceStatus) {
            const newProducts = productList.filter((item) => {
                return (price < 150 ? parseInt(item.newPrice) > price && parseInt(item.newPrice) <= parseInt(price) + 50 : parseInt(item.newPrice) > price)
            })
            setFilterProducts(newProducts)
            return
        }

        if (searchStatus) {
            const newProducts = productList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterProducts(newProducts)
            return
        }

    }


    useEffect(() => {
        handleSetFilterProducts()
    }, [company, category, color, price, search])

    return (
        <>
            <Navbar handleSetSearch={handleSetSearch} handleSetSearchStatus={handleSetSearchStatus}/>
            <div className="row d-flex">
                <Sidebar handleSetCategory={handleSetCategory} handleSetCategoryStatus={handleSetCategoryStatus}
                    handleSetColor={handleSetColor} handleSetColorStatus={handleSetColorStatus}
                    handleSetPrice={handleSetPrice} handleSetPriceStatus={handleSetPriceStatus}
                />
                <div className="col-md-10 mb-3">
                    <div className="row">
                        <h3>Recommended</h3>
                        <div className="d-flex gap-2">
                            <button className={companyStatus ? "btn btn-outline-dark" : "btn btn-dark"}
                                onClick={() => {
                                    handleSetCompanyStatus(false)
                                    handleSetCompany('all')
                                }}>All Products</button>
                            {
                                data.companies.map((item) => {
                                    return (
                                        <button key={item.id}
                                            className={companyStatus && company === item.title ? "btn btn-dark" : "btn btn-outline-dark"}
                                            onClick={() => {
                                                handleSetCompany(item.title)
                                                handleSetCompanyStatus(true)
                                            }}
                                        >{item.title}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="d-flex flex-wrap mt-3 gap-3">
                        {
                            companyStatus || categoryStatus || colorStatus || priceStatus || searchStatus ? <ShoesList data={filterProducts} /> :
                                <ShoesList data={productList} />
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

function ShoesList({ data }) {

    return (
        data.map((shoe) => (
            <div className="card p-3 d-flex align-items-center" style={{ width: "255px", height: "400px" }} key={shoe.id}>
                <img src={shoe.img} className="card-img-top mt-2" style={{ width: "180px", height: "150px" }} alt="..." />
                <div className="card-body mt-5">
                    <h6 className="card-title mb-4">{shoe.title}</h6>
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <span>({shoe.reviews} reviews)</span>
                    </div>
                    <div className="d-flex gap-4 align-items-center mt-3 justify-content-between">
                        <span className="" style={{ textDecoration: 'line-through' }}>{shoe.prevPrice}$</span>
                        <span>{shoe.newPrice}$</span>
                        <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>

                </div>
            </div>
        ))
    )
}



export default Content