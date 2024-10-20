import c1 from '../../img/categorias/materiales.png'
import c2 from '../../img/categorias/techos.jpg'
import c3 from '../../img/categorias/puertas.jpg'
import c4 from '../../img/categorias/ventanas.jpg'
import c5 from '../../img/categorias/pinturas.jpg'
import c6 from '../../img/categorias/herramientas.jpg'
import c7 from '../../img/categorias/plomeria.jpg'
import c8 from '../../img/categorias/electricidad.jpg'
import c9 from '../../img/categorias/iluminacion.jpg'



export const Categorias = () => {

   

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">Categorias</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn btn-primary me-2">Ver todo</a>
                                <div className="swiper-buttons">
                                    <button className=" category-carousel-prev btn btn-dark">❮</button>
                                    <button className=" category-carousel-next btn btn-dark">❯</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="category-carousel swiper">
                            <div className="swiper-wrapper">
                                {[
                                    { img: c1, title: 'Construcción' },
                                    { img: c2, title: 'Techos' },
                                    { img: c3, title: 'Puertas' },
                                    { img: c4, title: 'Ventanas' },
                                    { img: c5, title: 'Pinturas' },
                                    { img: c6, title: 'Herramientas' },
                                    { img: c7, title: 'Plomeria' },
                                    { img: c8, title: 'Electricidad' },
                                    { img: c9, title: 'Iluminación' },

                                ].map((category, index) => (
                                    <a key={index} href="category.html" className="nav-link swiper-slide text-center">
                                        <img src={category.img} className="rounded-circle img-fluid" alt="Category Thumbnail" />
                                        <h4 className="fs-6 mt-3 fw-normal category-title">{category.title}</h4>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
