import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from 'react-router-dom'


function CreateProduct({data, setData}) {
    const [product, setProduct] = useState({})
    const [maxId, setMaxId] = useState(0)
    const products = data.products

    const handleChangeMaxId = () => {
        let currentId = 0;
        products.map((item) => {
            if (item.id > currentId) {
                currentId = item.id
            }
        })
        setMaxId(currentId)
    }

    const handleChangeProduct = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        console.log(product);
    }

    const handleCreate = () => {

        const products = data.products
        products.push(product)

        setData({
            ...data,
            products: products
        })

        alert("Them moi thanh cong")
        
        setProduct({
            ...product,
            title: '',
            company: '',
            category: '',
            color: '',
            prevPrice: '',
            newPrice: '',
            img: ''
        })

        handleChangeMaxId()

    }

    useEffect(() => {
        handleChangeMaxId()
    },[])

    useEffect(() => {
        setProduct({
            ...product,
            id: maxId +1
        })
    }, [maxId])

    // useEffect(() => {
       
    //     setProduct({
    //         ...product,
    //         title: '',
    //         company: '',
    //         category: '',
    //         color: '',
    //         prevPrice: '',
    //         newPrice: '',
    //         img: ''
    //     })
        
    // }, [data])

    

    return (
        <>
            
                <div className="col-md-10">
                    <h3>Create Product</h3>
                    <form action="">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Title</label>
                                <input type="text"
                                    className="form-control"
                                    name="title"
                                    defaultValue ={product.title}
                                    value={product.title}
                                    onChange={handleChangeProduct} />
                            </div>
                            <div className="col-md-6">
                                <label>Company</label>
                                <select className="form-control" name="company" id="companySelect" onChange={handleChangeProduct} value={product.company}>
                                <option value={''}>--Choose--</option>
                                    {
                                        data.companies.map((item) => {
                                            return (
                                                <option key={item.id} >{item.title}</option>
                                            )
                                        })
                                    }
                                </select>
                                {/* <input type="text"
                                    className="form-control"
                                    name="company"
                                    defaultValue ={product.company}
                                    onChange={handleChangeProduct} /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Color</label>
                                <select className="form-control" name="color" id="colorSelect" onChange={handleChangeProduct} value={product.color} >
                                <option value={''}>--Choose--</option>
                                    {
                                        data.colors.map((item) => {
                                            return (
                                                <option key={item.id} >{item.color}</option>
                                            )
                                        })
                                    }
                                </select>

                                {/* <input type="text"
                                    className="form-control"
                                    name="color"
                                    defaultValue ={product.color}
                                    onChange={handleChangeProduct} /> */}
                            </div>
                            <div className="col-md-6">
                                <label>Category</label>
                                <select className="form-control" name="category" id="categorySelect" onChange={handleChangeProduct} value={product.category} >
                                    <option value={''}>--Choose--</option>
                                    {
                                        data.categories.map((item) => {
                                            return (
                                                <option key={item.id}  >{item.title}</option>
                                            )
                                        })
                                    }
                                </select>

                                {/* <input type="text"
                                    className="form-control"
                                    name="category"
                                    defaultValue ={product.category}
                                    onChange={handleChangeProduct} /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>PrevPrice</label>
                                <input type="text"
                                    className="form-control"
                                    name="prevPrice"
                                    value ={product.prevPrice}
                                    onChange={handleChangeProduct} />
                            </div>
                            <div className="col-md-6">
                                <label>NewPrice</label>
                                <input type="text"
                                    className="form-control"
                                    name="newPrice"
                                    value ={product.newPrice}
                                    onChange={handleChangeProduct} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Image</label>
                                <input type="text"
                                    className="form-control"
                                    name="img"
                                    value ={product.img}
                                    onChange={handleChangeProduct} />
                            </div>

                        </div>
                        <button type="button" onClick={handleCreate} className="btn btn-outline-primary mt-4">Create</button>
                    </form>
                </div>
            

        </>
    )
}

export default CreateProduct