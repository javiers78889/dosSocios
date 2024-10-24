import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const ProductosCategoria = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    // Simular productos por categoría (puedes cambiar esto para una llamada real a una API)
    const productosPorCategoria = {
        materiales: [
            { id: 1, nombre: 'Cemento', precio: 10 },
            { id: 2, nombre: 'Ladrillos', precio: 20 },
        ],
        techos: [
            { id: 1, nombre: 'Lamina de Zinc', precio: 15 },
            { id: 2, nombre: 'Teja', precio: 25 },
        ],
        // Agregar más categorías y productos...
    };

    useEffect(() => {
        // Simular la carga de productos de una categoría
        const productosFiltrados = productosPorCategoria[id] || [];
        setProductos(productosFiltrados);
    }, [id]); // Cada vez que el 'id' cambie, actualiza los productos

    return (
        <div>
            <h2>Productos de la categoría: {id}</h2>
            <div>
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default ProductosCategoria;
