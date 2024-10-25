import axios from "axios"


const Api = 'https://dossociosback.onrender.com/login'




export const Logueo = async (user) => {
try {
    const response= await axios.post(Api,user)

   return response.data
    
} catch (error) {
    console.error(error)
    
}
}


