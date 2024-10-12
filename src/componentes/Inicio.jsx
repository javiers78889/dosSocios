import { Categorias } from "../widgets/categorias/Categorias"
import { Productos } from "../widgets/Productos/Productos"

export const Inicio = ({ products }) => {
    return (
        <>
            <Categorias />
            <Productos products={products} />

        </>
    )
}
