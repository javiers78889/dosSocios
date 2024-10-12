import React from 'react';
import product from '../../img/product-thumb-3.png';
import { ListaProductos } from './ListaProductos';

export const Productos = ({ products }) => {
    return (
        <section className="pb-5">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between my-4">
                            <h2 className="section-title">Listado de Productos</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn btn-primary rounded-1">View All</a>
                            </div>
                        </div>

                        <div className="row">
                            {products.length > 0 ? (
                                products.map((item, index) => (
                                    <div className="col" key={item.id}>
                                        <ListaProductos item={item} />
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">No hay productos disponibles.</div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
