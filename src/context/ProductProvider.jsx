import PropTypes from "prop-types"
import { useProducts } from "../hooks/useProducts"
import { ProductContext } from "./ProductContext"
import { useUsers } from "../hooks/useUsers"


export const ProductProvider = ({ children }) => {
    const { products, listaProduct, agregarCarrito, eliminarCarrito, carrito } = useProducts()
    const { user, password, onChange, handleSubmit,auth,Deslogueo } = useUsers()
    return (
        <ProductContext.Provider value={{ products, listaProduct, agregarCarrito, eliminarCarrito, carrito, user, password,auth, onChange, handleSubmit,Deslogueo }}>
            {children}

        </ProductContext.Provider>
    )
}
ProductProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is required and can be any renderable node
};