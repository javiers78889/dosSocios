import { useEffect, useState } from "react"
import { findAllPedidos } from "../services/Pedidos"

const initialLog = {
    "name": "",
    "productosCantidad": "",
    "total": "",
    "telefono": "direccion",
    "estado": ""
}
export const usePedidos = () => {

    const [pedidos, setPedidos] = useState(initialLog || [])
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
