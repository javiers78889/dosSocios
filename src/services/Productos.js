import axios from "axios"

const Api = 'https://dossociosback.onrender.com/products'

export const findAllProducts = async () => {

    try {

        const response = await axios.get(Api)

        return response.data

    } catch (error) {

        console.error(error)

    }
    return undefined;


}