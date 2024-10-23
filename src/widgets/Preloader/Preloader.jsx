import React, { useEffect, useState } from 'react';
import '../../css/Preloader.css'; // Asegúrate de tener estilos para el preloader

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    // Simulación de carga
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Cambia el estado después de 3 segundos
        }, 3000);
        return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }, []);

    return (
        <>
            {loading ? (
                <div className="preloader-wrapper">
                    <div className="preloader"></div>
                </div>
            ) : (
               <></>
            )}
        </>
    );
};

export default Preloader;
