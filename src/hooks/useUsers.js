import { useState } from "react"
import { Logueo } from "../services/Login"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const initialLog = {
    "user": "",
    "password": ""
}
export const useUsers = () => {
    const [usuario, setUsuario] = useState(initialLog)
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate()

    const { user, password } = usuario

    const onChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
        console.log(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await Logueo(usuario)
        sessionStorage.setItem('token', JSON.stringify(token));
        if (token) {
            Swal.fire({
                icon: "success",
                title: "Bienvenido",
                showConfirmButton: false,
                timer: 1500
            });
            setAuth(true)
            navigate('/dashboard')
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Usuario no encontrado",
                showConfirmButton: false,
                timer: 1500
            });
        }

        
    };

    const Deslogueo=()=>{
        setAuth(false)
        navigate('/')
    }


    return {
        user,
        password,
        auth,
        onChange,
        handleSubmit,
        Deslogueo
    }
}
