import { useEffect, useState } from "react"
import { Logueo } from "../services/Login"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { findAllUsers } from "../services/Users"

const initialLog = {
    "user": "",
    "password": ""
}
export const useUsers = () => {
    const [usuario, setUsuario] = useState(initialLog || [])
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate()
    const [logueado, setLogueado]=useState({})
    const [loading,setLoading]=useState(false)

    const { user, password } = usuario

    const onChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
        console.log(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
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
            setLogueado(usuario.user)
            navigate('/dashboard/home')
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Usuario no encontrado",
                showConfirmButton: false,
                timer: 1500
            });
        }


    };


    const [personas, setPersonas] = useState([])

    useEffect(() => {
        const Listar = async () => {
            const capturar = await findAllUsers()
            setPersonas(capturar)
        }
        Listar()

    }, [])

    const Deslogueo = () => {
        setAuth(false)
        sessionStorage.removeItem("autenticado")
        navigate('/login')
    }


    return {
        user,
        personas,
        password,
        auth,
        onChange,
        handleSubmit,
        Deslogueo,
        logueado,
        loading
    }
}
