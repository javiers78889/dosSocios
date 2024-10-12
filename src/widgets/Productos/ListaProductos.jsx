import React from 'react'

export const ListaProductos = ({ item }) => {
    const { name, imagen, cantidad, precio } = item
    return (
        <div className="product-item" key={item.id}>
            <figure>
                <a href="index.html" title="Product Title">
                    <img src={`https://dossociosback.onrender.com/${imagen}`} alt="Product Thumbnail" className="tab-image" />
                </a>
            </figure>
            <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">{name}</h3>
                <div>
                    <span className="rating">
                        <svg width="18" height="18" className="text-warning">
                            <use xlinkHref="#star-full"></use>
                        </svg>
                        <svg width="18" height="18" className="text-warning">
                            <use xlinkHref="#star-full"></use>
                        </svg>
                        <svg width="18" height="18" className="text-warning">
                            <use xlinkHref="#star-full"></use>
                        </svg>
                        <svg width="18" height="18" className="text-warning">
                            <use xlinkHref="#star-full"></use>
                        </svg>
                        <svg width="18" height="18" className="text-warning">
                            <use xlinkHref="#star-half"></use>
                        </svg>
                    </span>
                    <span>Disponibles ({cantidad})</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">

                    <span className="text-dark fw-semibold">${precio}</span>

                </div>
                <div className="button-area p-3 pt-0">
                    <div className="row g-1 mt-2">
                        <div className="col-3">
                            <input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue="1" />
                        </div>
                        <div className="col-7">
                            <a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                                <svg width="18" height="18">
                                    <use xlinkHref="#cart"></use>
                                </svg>
                                Add to Cart
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                                <svg width="18" height="18">
                                    <use xlinkHref="#heart"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
