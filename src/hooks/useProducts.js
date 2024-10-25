import { useEffect, useReducer, useState } from "react";
import { findAllProducts } from "../services/Productos";
import { ProductsReducers } from "../reducer/ProductsReducer";

// Hook para usar el contexto de productos
export const useProducts = () => {
    const storedUser = JSON.parse(sessionStorage.getItem('carrito')) || [];
    const [products, setProducts] = useState([])
    const [carrito, dispatch] = useReducer(ProductsReducers, storedUser)

    const listaProduct = async () => {
        const captura = await findAllProducts();
        setProducts(captura)
    }

    useEffect(() => {

        listaProduct()
    }, [])


    
    const agregarCarrito = (obj) => {
        console.log(carrito)

        const { cantidades } = obj
        const { id, name, description, precio } = obj[0]
        const nuevoCarrito = [...carrito, { id, name, description, cantidades, precio }];
        const verificar = carrito.find((n) => n.id === id);
        if (verificar) {

            dispatch({
                type: 'updateProduct',
                payload: { id, cantidades: (Number(verificar.cantidades) + Number(cantidades)) },
            })
            
        }
        else {
            console.log('agregando')
            dispatch({
                type: 'addProduct',
                payload: nuevoCarrito
            })
            
        }

    }
    const eliminarCarrito = (id) => {

        dispatch({
            type: 'deleteProduct',
            payload: id

        })


    }




    return {
        products,
        listaProduct,
        agregarCarrito,
        eliminarCarrito,
        carrito
    }
};
