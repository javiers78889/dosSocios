import { useContext } from "react"
import { ProductContext } from "../../../context/ProductContext"


export const Home = () => {
    const { personas, products, logueado, pedidos } = useContext(ProductContext)
    const conteoPersona = personas.length || 0
    const conteoProductos = products.length || 0
    const conteoPedidos = pedidos.length || 0
    return (
        <div className="d-flex justify-content-center align-items-center w-100 flex-column mb-5 shadow">
            <div className="d-flex justify-content-center gap-2 flex-column ">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>

            </div>
            <div className="d-flex justify-content-center">
                <h1 className="text-center">Bienvenido {logueado? (logueado) : 'Invitado'}</h1>
            </div>
            <div className="d-flex w-50 mt-2">
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Usuarios</th>
                            <th scope="col">Productos</th>
                            <th scope="col">Facturas</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{conteoPersona}</td>
                            <td>{conteoProductos}</td>
                            <td>{conteoPedidos}</td>

                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}
