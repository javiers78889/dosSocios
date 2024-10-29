import axios from "axios"

const Api = 'https://dossociosback.onrender.com/products'
const storedToken = JSON.parse(sessionStorage.getItem('token')) || [];

export const findAllProducts = async () => {

    try {

        const response = await axios.get(Api)

        return response.data

    } catch (error) {

        console.error(error)

    }
    return undefined;


}
export const EditProducts = async (obj) => {

    const headers = {
        'Authorization': `Bearer ${storedToken.token}`
    }

    try {

        const response = await axios.put(Api, obj, { headers })

        return response.data

    } catch (error) {

        console.error(error)

    }
    return undefined;


}