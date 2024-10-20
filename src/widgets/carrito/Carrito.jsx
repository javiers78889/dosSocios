import React from 'react'

export const Carrito = () => {
    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart">
            <div className="offcanvas-header justify-content-center">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Tu carrito</span>
                        <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">material#1</h6>
                                <small className="text-body-secondary">description</small>
                            </div>
                            <span className="text-body-secondary">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Material#2</h6>
                                <small className="text-body-secondary"> description</small>
                            </div>
                            <span className="text-body-secondary">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Material#3</h6>
                                <small className="text-body-secondary"> description</small>
                            </div>
                            <span className="text-body-secondary">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar</button>
                </div>
            </div>
        </div>
    )
}
