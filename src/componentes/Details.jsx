import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"

export const Details = () => {
    const { products } = useContext(ProductContext)
    const [cantidades, setCantidades] = useState(0)
    const { id } = useParams()
    const filtrado = products.filter(n => n.id === parseInt(id))
    const cantidad = (e) => {
        setCantidades(e.target.value)
    }


    const agregar = () => {

        console.log({ ...filtrado, cantidades })

    }

    return (
        <div className="container responsivo">
            <div className="boton-responsivo border-bottom border-secondary pb-3  ">
                <h3>Detalles</h3>
                <Link to='/' className="btn btn-primary rounded-pill mt-2 boton " ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-skip-backward-fill me-1" viewBox="0 0 16 16">
                    <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5" />
                </svg>
                    Volver</Link>
            </div>
            {
                filtrado.map(product => (
                    <div key={product.id} className="d-flex justify-content-center align-items-center gap-5 mb-5 responsivo ">
                        <img src={`https://dossociosback.onrender.com/${product.imagen}`} alt="Product Thumbnail" className=" imagen mt-5" />
                        <div className="border border-dark p-3 rounded m-5 d-flex flex-column justify-content-center caja align-items-center shadow">

                            <h2 className="text-capitalize ">{product.name}</h2>
                            <div>Descripción: {product.description}</div>
                            <div>Disponibles: {product.cantidad}</div>
                            <div><h3 className="text-danger">${product.precio}</h3></div>
                            <div className="col-3 mt-2 mb-2">
                                <input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue="0" onChange={cantidad} />
                            </div>
                            <button onClick={agregar} className="btn btn-primary rounded-1 p-2 fs-7 btn-cart" disabled={cantidades <= 0 ? (true) : (false)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                </svg>

                                Agregar Al carrito
                            </button>
                        </div>



                    </div>

                ))
            }

        </div>
    )
}
