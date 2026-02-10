'use client'
import { useState } from "react"

//Se crea un nuevo componente para el buscador llamado searchBar
//Este recibe la función onSearch como prop, es decir, que tiene la capacidad de actualizar el estado del componente padre (CatalogoPage) con el valor que el usuario ingrese en el input
export default function searchBar({ onSearch }) {  
    const [peli, setPeli] = useState("")

    //Se crea una función handleChange que se ejecuta cada vez que el usuario escribe algo en el input. 
    //Esta función actualiza el estado local del componente (peli) y también llama a onSearch para actualizar el estado del componente padre con el nuevo valor de búsqueda.
    const handleChange = (e) => {
        const valor = e.target.value;
        setPeli(valor)
        onSearch(valor)
    }

//El componente retorna un formulario con un input y un botón de búsqueda.
//El submit sirve para evitar que la página se recargue al presionar enter, y el input tiene un placeholder para decir que se le va a escribir.
    return (
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-row items-center bg-slate-800 rounded-lg px-4 py-2 mb-8 border border-slate-700 focus-within:border-blue-500 transition-all">
            <input 
                id="buscador"
                type="text"
                placeholder="¿Qué quieres ver hoy?"
                value={peli}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-64 md:w-80"
            />
            {/* El botón tiene un ícono de lupa, y al hacer clic en él se ejecuta el mismo comportamiento que al escribir en el input, es decir, actualizar la búsqueda. */}
            <button type="submit" className="text-slate-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </form>
    )// Se le dio color con tailwind al buscador,
    // con un fondo oscuro, bordes redondeados, y un borde que cambia de color al hacer focus. 
    // El input es transparente para que se vea el fondo, y el botón tiene un ícono de lupa que cambia de color al pasar el mouse por encima.
}