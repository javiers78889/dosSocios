import axios from "axios";

const Api = 'https://dossociosback.onrender.com/pedidos'
const storedToken = JSON.parse(sessionStorage.getItem('token')) || [];


export const findAllPedidos = async () => {

    try {
        const headers = {
            'Authorization': `Bearer ${storedToken.token}`,
            
        };
        const response = await axios.get(Api, { headers })

        return response.data

    } catch (error) {

        console.error(error)

    }
    return undefined;


}