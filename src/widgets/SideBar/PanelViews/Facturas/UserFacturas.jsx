import { useContext } from "react"
import { ProductContext } from "../../../../context/ProductContext"


export const UserFacturas = () => {
    const { pedidos,logueado,personas } = useContext(ProductContext)
    const filtrado = personas.filter((n) => n.user === logueado)
    const filteredPedidos = pedidos.filter((n) => n.name === filtrado.name);
    return (
        <>
            {
                pedidos.length > 0 ? (
                    filteredPedidos.map((n) => (

                        <tr key={n.id}>

                            <td >{n.name}</td>
                            <td >{n.productosCantidad}</td>
                            <td >{n.total}</td>
                            <td >{n.estado}</td>
                            <td><button className="btn btn-secondary shadow">Editar</button></td>
                            <td><button className="btn btn-danger shadow">{n.estado === 'Pendiente' ? 'Enviar' : n.estado === 'Enviado' ? 'Entregar' : ''}</button></td>
                            <td><button className="btn btn-primary shadow">Factura</button></td>
                        </tr>

                    ))

                ) : (
                    <tr >
                        <td><span>No hay Facturas Registradas</span></td>
                    </tr>
                )

            }
        </>
    )
}
