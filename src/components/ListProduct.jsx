import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from 'react-router-dom'
import ModalUpdate from "./ModalUpdate";
import ProductService from "../service/productservice";



function ListProduct() {
    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})

    const getAllProducts = async () => {
        const data = await ProductService.getAllProducts();
        setProducts(data)
    }

    const handleUpdateProducts = async (obj) => {
        const updateProduct = await ProductService.update(obj.id, obj)

        const index = products.findIndex(item => item.id === updateProduct.id)
       
        const newProducts = [...products]
        newProducts[index] = updateProduct
       
        setProducts(newProducts)
    }


    const handleOpenModalUpdate = async (id) => {
        const product = await ProductService.getById(id)

        if(Object.keys(product).length) {
            setProduct(product)
            setShowModalUpdate(true)

        } else {
            alert('Khong tim thay san pham voi id = ' + id)
        }
        
    }


    const handleCloseModalUpdate = () => {
        setShowModalUpdate(false)
    }

    const handleDeleteProduct = async (id) => {
        const product = await ProductService.getById(id);

        if (Object.keys(product).length) {
            const productsNew = products.filter((item) => item.id != id)

            let result = window.confirm(`Ban co chac chan muon xoa san pham ID = ${id} nay khong???`)
            if(result) {
                ProductService.delete(id)
                setProducts(productsNew)
            

                alert("Xoa thanh cong")
            }
            
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (

        <>
        
                <div className="col-md-12">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Img</th>
                                <th>Title</th>
                                <th>PrevPrice</th>
                                <th>NewPrice</th>
                                <th>Company</th>
                                <th>Color</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               products.sort(function (a, b) { return b.id - a.id }).map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>
                                                <img src={item.img} alt="" style={{ width: 50, height: 30 }} />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.prevPrice}</td>
                                            <td>{item.newPrice}</td>
                                            <td>{item.company}</td>
                                            <td>{item.color}</td>
                                            <td>{item.category}</td>

                                            <td>
                                                <button className="btn btn-outline-primary me-3" onClick={() => handleOpenModalUpdate(item.id)}>
                                                    <i className="fa-regular fa-pen-to-square"></i>
                                                </button>
                                                <button className="btn btn-outline-danger" onClick={() => handleDeleteProduct(item.id)}>
                                                <i className="fa-solid fa-trash-can"></i>
                                                </button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
           
            <ModalUpdate showModalUpdate={showModalUpdate} 
            handleCloseModalUpdate={handleCloseModalUpdate}
            product={product}
            handleUpdateProducts={handleUpdateProducts}
            
            />
            

        </>
    )
}

export default ListProduct