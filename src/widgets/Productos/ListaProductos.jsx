import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const ListaProductos = ({ item }) => {
    const { id, name, imagen, cantidad, description, precio } = item;
    return (
        <div className="product-item" key={id}>
            <figure>
                <Link to={`/details/${id}`} title="Product Title">
                    <img src={`https://dossociosback.onrender.com/${imagen}`} alt="Product Thumbnail" className="tab-image" />
                </Link>
            </figure>
            <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">{name} : {description}</h3>
                <div className='text-center'>


                    <span >Disponibles ({cantidad})</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">

                    <span className="text-dark fw-semibold"><h3>${precio}</h3></span>

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