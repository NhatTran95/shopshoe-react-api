import axios from "axios"

const ProductService = {
    getAllProducts: async () => {
        return axios
        .get('http://localhost:3000/products')
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    getById: async (id) => {
        return axios
        .get('http://localhost:3000/products/' +id)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    create: async (obj) => {
        return axios
        .post('http://localhost:3000/products', obj)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    update: async (id, obj) => {
        return axios
        .patch('http://localhost:3000/products/' + id, obj)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    delete: async (id) => {
        return axios
        .delete('http://localhost:3000/products/' + id)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default ProductService