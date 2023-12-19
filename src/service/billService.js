import axios from "axios"

const urlAPI = 'https://shopshoe0623g1-json-server-vercel.vercel.app/billDetails';
const billService = {
    getAllBills: async () => {
        return axios
            .get(urlAPI)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    createBill: async (obj) => {
        return axios
            .post(urlAPI, obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    editBill: async (id, obj) => {
        return axios
            .patch(urlAPI + '/' + id, obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    deleteBill: async (id) => {
        return axios
            .delete(urlAPI + '/' + id)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getById: async (id) => {
        return axios
            .get(urlAPI + '/' + id)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default billService