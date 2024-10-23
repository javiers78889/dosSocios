import PropTypes from "prop-types"
import { useProducts } from "../hooks/useProducts"
import { ProductContext } from "./ProductContext"


export const ProductProvider = ({ children }) => {
    const { products, listaProduct, agregarCarrito, carrito } = useProducts()
    return (
        <ProductContext.Provider value={{ products, listaProduct, agregarCarrito, carrito }}>
            {children}

        </ProductContext.Provider>
    )
}
ProductProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is required and can be any renderable node
};