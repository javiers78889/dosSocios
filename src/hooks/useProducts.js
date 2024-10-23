import { useEffect, useState } from "react";
import { findAllProducts } from "../services/Productos";

// Hook para usar el contexto de productos
export const useProducts = () => {
    const storedUser = JSON.parse(sessionStorage.getItem('carrito')) || [];
    const [products, setProducts] = useState([])
    const [carrito, setCarrito] = useState(storedUser)

    const listaProduct = async () => {
        const captura = await findAllProducts();
        setProducts(captura)
    }

    useEffect(() => {

        listaProduct()
    }, [])


    const agregarCarrito = (obj) => {

        const { cantidades } = obj
        const { name, description, precio } = obj[0]
        const nuevoCarrito = [...carrito, { name, description, cantidades, precio }];
        setCarrito(nuevoCarrito)
        sessionStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    }




    return {
        products,
        listaProduct,
        agregarCarrito,
        carrito
    }
};
