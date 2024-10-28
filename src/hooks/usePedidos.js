import { useEffect, useState } from "react"
import { findAllPedidos } from "../services/Pedidos"


export const usePedidos = () => {

    const [pedidos, setPedidos] = useState([])
    const EncontrarFacuras = async () => {
        try {
            const coleccion = await findAllPedidos()
            setPedidos(coleccion)
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        EncontrarFacuras()

    }, [])
    return {
        pedidos
    }



}
