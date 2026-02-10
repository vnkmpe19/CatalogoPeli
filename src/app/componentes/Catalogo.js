import Image from 'next/image';

export default function Catalogo({ nombre, categoria, rating, imagen, onRent }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-lg w-64">
      <Image 
        src={imagen} 
        alt={nombre} 
        width={300} 
        height={450} 
        className="rounded-lg object-cover w-full h-auto"
      />
      <h2 className="text-xl font-bold mt-4">{nombre}</h2>
      <p className="text-slate-400">{categoria}</p>
      <p className="text-yellow-400"> {rating}</p>
      <button 
        onClick={onRent}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg transition"
      >
        Rentar
      </button>
    </div>
  );
}