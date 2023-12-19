
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import data from "../data/data.json"
import axios from "axios";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function ModalUpdate({ showModalUpdate, handleCloseModalUpdate, product, handleUpdateProducts}) {
    

    const [productUp, setProductUp] = useState({})
    const [fileDataURL, setfileDataURL] = useState(null)

    const handleChangeProduct = (e) => {
            if(Object.keys(productUp).length) {
                const productNew = {
                    ...productUp,
                    [e.target.name]: e.target.value,
                    id: product.id
                }            
    
                setProductUp(productNew)
            }
            else {
                const productNew = {
                    ...product,
                    [e.target.name]: e.target.value
                }
    
                setProductUp(productNew)
            }

    }

    const handleUpdateProduct = () => {
        console.log(productUp);
        toast.info(`Cap nhat san pham thanh cong`, {
            position: toast.POSITION.TOP_RIGHT,
            duration: 2000
        });
       
        handleUpdateProducts(productUp)
        handleCloseModalUpdate()
    }


    const handleClickImage = () => {
        document.getElementById('avatar').click()
    }

    const uploadAvatar = async (e) => {
        const file = e.target.files[0];

        if (!file.type.match(imageMimeType)) {

            toast.info(`Image mime type is not valid`, {
                position: toast.POSITION.TOP_RIGHT,
                duration: 2000
            });
           
         
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

        setfileDataURL(uploadedAvatar.url)

        setProductUp({
            ...productUp,
            img: uploadedAvatar.url,
            id: product.id
        })
    }


    return (
        <>
            <Modal size="lg" show={showModalUpdate} onHide={handleCloseModalUpdate} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Title</label>
                                <input type="text"
                                    className="form-control"
                                    name="title"
                                    defaultValue={product.title}
                                    onChange={handleChangeProduct} />
                            </div>
                            <div className="col-md-6">
                                <label>Company</label>
                                {/* <select className="form-control" name="company" id="companySelect" onChange={handleChangeProduct} defaultValue={product.company}>
                                <option></option>
                                    {
                                        data.companies.map((item) => {
                                           
                                                return (
                                                    <option key={item.id} >{item.title}</option>
                                                )
                                            
                                        })
                                    }
                                </select> */}
                                <select className="form-control" name="company" id="companySelect" onChange={handleChangeProduct}>
                                    <option value={product.company}>{product.company}</option>
                                    {
                                        data.companies.map((item) => {
                                            if (item.title != product.company) {
                                                return (
                                                    <option key={item.id} value={item.title}>{item.title}</option>
                                                )
                                            }
                                        })
                                    }
                                </select>

                                {/* <input type="text"
                                    className="form-control"
                                    name="company"
                                    defaultValue={product.company}
                                    onChange={handleChangeProduct} /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Color</label>
                                <select className="form-control" name="color" id="colorSelect" onChange={handleChangeProduct}>
                                    <option value={product.color}>{product.color}</option>
                                    {
                                        data.colors.map((item) => {
                                            if (item.color != product.color) {
                                                return (
                                                    <option key={item.id} value={item.color}>{item.color}</option>
                                                )
                                            }
                                        })
                                    }
                                </select>
                                {/* <input type="text"
                                    className="form-control"
                                    name="color"
                                    defaultValue={product.color}
                                    onChange={handleChangeProduct} /> */}
                            </div>
                            <div className="col-md-6">
                                <label>Category</label>
                                <select className="form-control" name="category" id="categorySelect" onChange={handleChangeProduct}>
                                    <option value={product.category}>{product.category}</option>
                                    {
                                        data.categories.map((item) => {
                                            if (item.title != product.category) {
                                                return (
                                                    <option key={item.id} value={item.title}>{item.title}</option>
                                                )
                                            }
                                        })
                                    }
                                </select>
                                {/* <input type="text"
                                    className="form-control"
                                    name="category"
                                    defaultValue={product.category}
                                    onChange={handleChangeProduct} /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>PrevPrice</label>
                                <input type="text"
                                    className="form-control"
                                    name="prevPrice"
                                    defaultValue={product.prevPrice}
                                    onChange={handleChangeProduct} />
                            </div>
                            <div className="col-md-6">
                                <label>NewPrice</label>
                                <input type="text"
                                    className="form-control"
                                    name="newPrice"
                                    defaultValue={product.newPrice}
                                    onChange={handleChangeProduct} />
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-12">
                                <label>Image URL</label>
                                <input type="text"
                                    className="form-control"
                                    name="img"
                                    defaultValue={product.img}
                                    onChange={handleChangeProduct} />
                            </div>

                        </div> */}
                         <div className="row">
                            <div className="col-md-6">
                                <label>Avatar</label>
                                <img className="row" src={fileDataURL ? fileDataURL : product.img} width='200px' height='120px' onClick={handleClickImage}/>
                                <input type="file"
                                    hidden
                                    className="form-control"
                                    id = 'avatar'
                                    name="img"
                                    onChange={(e) => {uploadAvatar(e); handleChangeProduct(e)}} />
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateProduct}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalUpdate