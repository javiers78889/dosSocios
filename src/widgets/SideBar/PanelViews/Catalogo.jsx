import { useContext } from "react"
import { ProductContext } from "../../../context/ProductContext"


export const Catalogo = () => {
    const { products } = useContext(ProductContext)
    return (
        <div className="d-flex justify-content-center align-items-center w-100 flex-column mb-5 shadow">
            <div className="d-flex justify-content-center gap-2 flex-column ">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z" />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                </svg>

            </div>
            <div className="d-flex justify-content-center gap-2">
                <h3 className="text-center">Catalogo de Productos</h3>
                <button className="btn btn-dark shadow">Agregar Producto</button>
            </div>
            <div className="d-flex  mt-2 w-75">
                
                <table className="table table-responsive  ">
                    <thead>
                        <tr>
                            <th scope="col">Articulo</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (

                            products.map((n) => (

                                <tr key={n.id}>

                                    <td >{n.name}</td>
                                    <td >{n.description}</td>
                                    <td >{n.precio}</td>
                                    <td > <img src={`https://dossociosback.onrender.com/${n.imagen}`} alt="Product Thumbnail" className="tab-image" width={50} /></td>
                                    <td><button className="btn btn-primary shadow">Editar</button></td>
                                </tr>

                            ))
                        ) : (
                            <tr >
                                <td><span>No hay productos registrados</span></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>


        </div>
    )
}
