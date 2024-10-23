import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export const Carrito = () => {
    const { carrito } = useContext(ProductContext)

    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart">
            <div className="offcanvas-header justify-content-center">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Tu carrito</span>
                        <span className="badge bg-primary rounded-pill">{carrito.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {carrito.length > 0 ? (
                            carrito.map((n) => (
                                <li key={n.id} className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{n.name} ({n.cantidades})</h6>
                                        <small className="text-body-secondary">{n.description}</small>
                                    </div>
                                    <span className="text-body-secondary">${n.precio * n.cantidades}</span>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">No hay items en el carrito</li>
                        )}

                    </ul>
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar</button>
                </div>
            </div>
        </div>
    )
}
