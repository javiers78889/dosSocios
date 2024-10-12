import PropTypes from "prop-types";


export const ListaProductos = ({ item }) => {
    const { id, name, imagen, cantidad, description, precio } = item;
    return (
        <div className="product-item" key={id}>
            <figure>
                <a href="index.html" title="Product Title">
                    <img src={`https://dossociosback.onrender.com/${imagen}`} alt="Product Thumbnail" className="tab-image" />
                </a>
            </figure>
            <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">{name} : {description}</h3>
                <div className='text-center'>


                    <span >Disponibles ({cantidad})</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">

                    <span className="text-dark fw-semibold"><h3>${precio}</h3></span>

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ListaProductos.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        imagen: PropTypes.string,
        cantidad: PropTypes.number.isRequired,
        description: PropTypes.string,
        precio: PropTypes.number.isRequired,
    }).isRequired,
};