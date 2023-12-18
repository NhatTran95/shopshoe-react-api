import axios from "axios"

const ProductService = {
    getAllProducts: async () => {
        return axios
        .get('https://shopshoe0623g1-json-server-vercel.vercel.app/products')
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    getById: async (id) => {
        return axios
        .get('https://shopshoe0623g1-json-server-vercel.vercel.app/products/' +id)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    create: async (obj) => {
        return axios
        .post('https://shopshoe0623g1-json-server-vercel.vercel.app/products', obj)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    update: async (id, obj) => {
        return axios
        .patch('https://shopshoe0623g1-json-server-vercel.vercel.app/products/' + id, obj)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
    delete: async (id) => {
        return axios
        .delete('https://shopshoe0623g1-json-server-vercel.vercel.app/products/' + id)
        .then((resp) => {
            return resp.data
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default ProductService