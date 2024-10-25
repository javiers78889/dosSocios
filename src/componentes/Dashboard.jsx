import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import { findAllUsers } from "../services/Users"


export const Dashboard = () => {
    const { Deslogueo } = useContext(ProductContext)
    const [personas, setPersonas] = useState([])

    useEffect(() => {
        const Listar = async () => {
            const capturar = await findAllUsers()
            setPersonas(capturar)
        }
        Listar()

    }, [])
    console.log(personas)
    return (
        <>
            <div>Dashboard</div>
            {personas.map((n) => (
                <div key={n.id}>{n.user}</div>
            ))}
            <button onClick={() => Deslogueo()}>Deslogueo</button>
        </>
    )
}
