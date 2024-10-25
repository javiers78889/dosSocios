import axios from "axios"

const Api = 'https://dossociosback.onrender.com/users'
const storedToken = JSON.parse(sessionStorage.getItem('token')) || [];
export const findAllUsers = async () => {
    const token = storedToken.token
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {

        const response = await axios.get(Api, { headers })
        return response.data
    } catch (error) {
        console.error(error)
    }
}