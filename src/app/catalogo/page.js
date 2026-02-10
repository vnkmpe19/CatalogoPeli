"use client"
import { useEffect, useState } from 'react';
import Catalogo from "../componentes/Catalogo";
import SearchBar from "../componentes/searchBar";
//Importamos el componente SearchBar
// (Importante: el nombre del archivo debe ser exactamente igual al del componente y poner dos puntos, NO UNO)

export default function CatalogoPage() {
  const [totalRent, setTotalRent] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  const Peliculas = [
    { id: 1, nombre: "Los juegos del hambre", categoria:"ciencia ficción", rating: 2, imagen:"/pelicula1.jpg"},
    { id: 2, nombre: "Harry Potter", categoria:"fantasía", rating: 4, imagen:"/pelicula2.jpg"},
    { id: 3, nombre: "La familia del futuro", categoria: "animada", rating: 5, imagen:"/pelicula3.jpg"},
  ];

  // Se hace un filtrado con filter que incluya minusculas y mayusculas, para que no sea tan estricto el buscador
  //Y se guarda en una nueva variable para mostrar solo las peliculas filtradas, sin modificar el arreglo original de peliculas
  const peliculasFiltradas = Peliculas.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    const compras = localStorage.getItem("carrito");
    if(compras) setTotalRent(parseInt(compras));
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", totalRent);
  }, [totalRent]);

  const aumentarGlobal = () => setTotalRent(totalRent + 1);

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-900 py-10 text-white">
      <h1 className="text-[60px] md:text-[80px] font-bold mb-4 text-center">Catálogo</h1>
      
      
      <SearchBar onSearch={setBusqueda} /> {/* Se pasa la función setBusqueda como prop al
       componente SearchBar para que pueda actualizar el estado de busqueda en CatalogoPage */}
      
      <h3 className="text-2xl mb-8">Películas rentadas: {totalRent}</h3>
      
      <div className="flex flex-row flex-wrap justify-center gap-8 px-4">
        {/*Si existe la película muestra la película*/}
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map(p => (
            <Catalogo
              key={p.id}
              nombre={p.nombre}
              categoria={p.categoria}
              rating={p.rating}
              imagen={p.imagen}
              onRent={aumentarGlobal}
            />
          ))
          //Si no, se hace un switch para mostrar un mensaje si no se encuentran peliculas con el nombre buscado
        ) : ( 
          <p className="text-slate-400 text-xl mt-10">No existen películas con ese nombre.</p>
          
        )}
      </div>
    </div>
  );
}