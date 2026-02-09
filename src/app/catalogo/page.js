"use client"
import { useEffect, useState } from 'react';

import Catalogo from "../componentes/Catalogo";

function CatalogoPage() { 
  const [totalRent, setTotalRent] = useState(0);

  useEffect(() => {
    const compras = localStorage.getItem("carrito");
    if(compras) {
      setTotalRent(parseInt(compras));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", totalRent);
  }, [totalRent]);

  const Peliculas = [
    { id: 1, nombre: "Los juegos del hambre", categoria:"ciencia ficción", rating: 2, imagen:"/pelicula1.jpg"},
    { id: 2, nombre: "Harry Potter", categoria:"fantasía", rating: 4, imagen:"/pelicula2.jpg"},
    { id: 3, nombre: "La familia del futuro", categoria: "animada", rating: 5, imagen:"/pelicula3.jpg"},
  ];

  const aumentarGlobal = () => {
    setTotalRent(totalRent + 1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-900 py-10 text-white">
      <h1 className="text-[60px] md:text-[100px] font-bold mb-4 text-center">Catálogo</h1>
      <h3 className="text-2xl mb-8">Películas rentadas: {totalRent}</h3>
      
      <div className="flex flex-row flex-wrap justify-center gap-8 px-4">
        {Peliculas.map(p => (
          <Catalogo
            key={p.id}
            nombre={p.nombre}
            categoria={p.categoria}
            rating={p.rating}
            imagen={p.imagen}
            onRent={aumentarGlobal}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogoPage;