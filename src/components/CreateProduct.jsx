import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from 'react-router-dom'
import ProductService from "../service/productservice";
import data from "../data/data.json"
import axios from "axios";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function CreateProduct() {
    const [product, setProduct] = useState({})
    const [fileDataURL, setfileDataURL] = useState(null)
    const [file, setFile] = useState(null)

    const handleChangeProduct = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
       
    }

    const handleCreate = async () => {

        await ProductService.create(product)

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

        setfileDataURL(null)

    }

    const handleClickImage = () => {
        document.getElementById('avatar').click()
    }

    const uploadAvatar = async (e) => {
        const file = e.target.files[0];

        if (!file.type.match(imageMimeType)) {
            alert('Image mime type is not valid');
            return;
        }

        let fileReader,
            isCancel = false;
        
        if (!file) {
            return;
        }
        
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const {result} = e.target;
                if (result && !isCancel) {
                    setfileDataURL(result)
                }
            };
            fileReader.readAsDataURL(file)
        }

        
        const YOUR_CLOUD_NAME = 'dev-share'
        const YOUR_UNSIGNED_UPLOAD_PRESET = 'ml_default'
        const POST_URL = 'https://api.cloudinary.com/v1_1/' + YOUR_CLOUD_NAME + '/auto/upload'

        let formdata = new FormData();

        formdata.append('file', file);
        formdata.append('cloud_name', YOUR_CLOUD_NAME);
        formdata.append('upload_preset', YOUR_UNSIGNED_UPLOAD_PRESET);

        const uploadedAvatar = await axios({
            method: 'post',
            url: POST_URL,
            data: formdata
        }).then((data) => {
            return data.data
        })

        setProduct({
            ...product,
            img: uploadedAvatar.url
        })
    }


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
                                <label>Avatar</label>
                                <img className="row" src={fileDataURL} width='200px' height='120px' onClick={handleClickImage}/>
                                <input type="file"
                                    hidden
                                    className="form-control"
                                    id = 'avatar'
                                    name="img"
                                    onChange={uploadAvatar} />
                            </div>

                        </div>
                        <button type="button" onClick={handleCreate} className="btn btn-outline-primary mt-4">Create</button>
                    </form>
                </div>
            

        </>
    )
}

export default CreateProduct