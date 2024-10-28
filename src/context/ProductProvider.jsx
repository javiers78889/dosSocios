import PropTypes from "prop-types"
import { useProducts } from "../hooks/useProducts"
import { ProductContext } from "./ProductContext"
import { useUsers } from "../hooks/useUsers"
import { usePedidos } from "../hooks/usePedidos"


export const ProductProvider = ({ children }) => {
    const { products, listaProduct, agregarCarrito, eliminarCarrito, carrito } = useProducts()
    const { user, password, onChange, handleSubmit, auth, Deslogueo, personas, logueado } = useUsers()
    const { pedidos } = usePedidos()
    return (
        <ProductContext.Provider value={{
            products, listaProduct, agregarCarrito, eliminarCarrito, carrito, user, password, auth, personas
            , onChange, handleSubmit, Deslogueo, logueado, pedidos
        }}>
            {children}

        </ProductContext.Provider>
    )
}
ProductProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is required and can be any renderable node
};