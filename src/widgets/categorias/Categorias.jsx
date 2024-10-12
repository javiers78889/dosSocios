
import imagen from '../../img/product-thumb-4.png'


export const Categorias = () => {

   

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">Categorias</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn btn-primary me-2">View All</a>
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
                                    { img: imagen, title: 'Pinturas' },
                                    { img: imagen, title: 'Breads & Sweets' },
                                    { img: imagen, title: 'Fruits & Veges' },
                                    { img: imagen, title: 'Fruits & Veges' },
                                    { img: imagen, title: 'Breads & Sweets' },
                                    { img: imagen, title: 'Fruits & Veges' },
                                    { img: imagen, title: 'Fruits & Veges' },
                                    { img: imagen, title: 'Breads & Sweets' },
                                    { img: imagen, title: 'Fruits & Veges' },
                                    { img: imagen, title: 'Fruits & Veges' },
                                    { img: imagen, title: 'Breads & Sweets' },
                                    { img: imagen, title: 'Fruits & Veges' },

                                ].map((category, index) => (
                                    <a key={index} href="category.html" className="nav-link swiper-slide text-center">
                                        <img src={category.img} className="rounded-circle" alt="Category Thumbnail" />
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
