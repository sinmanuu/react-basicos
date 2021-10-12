import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // console.log('Moviendo el scroll');

        const detectarScroll = () => { setScrollY(window.pageYOffset); };
        window.addEventListener("scroll", detectarScroll);
        return () => {
            window.removeEventListener("scroll", detectarScroll);
        };
    }, [scrollY]);//cuando se actualiza la variable scrollY

    useEffect(() => {
        // console.log('Fase de Montaje');
    }, []);//ComponentDidMount

    useEffect(() => {
        // console.log('Fase de Actualizacion');
    });//''vacio'' cuando se actualiza algo

    useEffect(() => {
        return () => {
            // console.log('Fase de Desmontaje');
        };
    });


    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    );
}