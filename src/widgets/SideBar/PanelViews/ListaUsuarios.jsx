import { useContext } from "react"
import { ProductContext } from "../../../context/ProductContext"


export const ListaUsuarios = () => {
    const { personas } = useContext(ProductContext)
    return (
        <div className="d-flex justify-content-center align-items-center w-100 flex-column mb-5 shadow">
            <div className="d-flex justify-content-center gap-2 flex-column ">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>

            </div>
            <div className="d-flex justify-content-center">
                <h3 className="text-center">Lista De Usuarios</h3>
            </div>
            <div className="d-flex  mt-2 w-75">
                <table className="table table-responsive  ">
                    <thead>
                        <tr>
                            <th scope="col">Usuarios</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((n) => (
                            <>
                                <tr key={ n.id }>

                                    <td >{n.user}</td>
                                    <td >{n.telefono}</td>
                                    <td >{n.correo}</td>
                                    <td><button>Editar</button></td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}
