import { useEffect, useState } from "react";
import { findAllProducts } from "../services/Productos";

// Hook para usar el contexto de productos
export const useProducts = () => {
    const [products, setProducts] = useState([])
   
    const listaProduct = async () => {
        const captura = await findAllProducts();
        setProducts(captura)
    }

    useEffect(() => {

        listaProduct()
    }, [])

    


    return {
        products,
        listaProduct,
    }
};
