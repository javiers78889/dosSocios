import { useNavigate } from 'react-router-dom';
import c1 from '../../img/categorias/materiales.png';
import c2 from '../../img/categorias/techos.jpg';
import c3 from '../../img/categorias/puertasVentana.jpg';
import c4 from '../../img/categorias/plomeria.jpg';
import c5 from '../../img/categorias/electricidad.jpg';
import c6 from '../../img/categorias/madera.jpg';
import c7 from '../../img/categorias/pinturas.jpg';
import c8 from '../../img/categorias/cieloRaso.jpg';
import c9 from '../../img/categorias/cerca.jpg';

export const Categorias = () => {
    const navigate = useNavigate();

    const categories = [
        { img: c1, title: 'Materiales de construcción', id: 'materiales' },
        { img: c2, title: 'Techos y Carriolas', id: 'techos' },
        { img: c3, title: 'Puertas y Ventanas', id: 'puertas' },
        { img: c4, title: 'Plomeria', id: 'plomeria' },
        { img: c5, title: 'Electricidad', id: 'electricidad' },
        { img: c6, title: 'Madera', id: 'madera' },
        { img: c7, title: 'Pinturas', id: 'pinturas' },
        { img: c8, title: 'Cielo raso', id: 'cieloraso' },
        { img: c9, title: 'Cercas', id: 'cercas' }
    ];

    const handleCategoryClick = (id) => {
        navigate(`/categoria/${id}`);
    };

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">Categorías</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="category-carousel swiper">
                            <div className="swiper-wrapper">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="nav-link swiper-slide text-center"
                                        onClick={() => handleCategoryClick(category.id)}
                                    >
                                        <img src={category.img} className="rounded-circle img-fluid" alt="Category Thumbnail" />
                                        <h4 className="fs-6 mt-3 fw-normal category-title">{category.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
