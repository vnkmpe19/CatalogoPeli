

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh]
    bg-gradient-to-b from-slate-800 to-black text-white">
      <h1 className="text-6xl font-extrabold">MovieRent</h1>
      <p className="mt-4 text-xl">
        Las mejores películas a un click de distancia.
      </p>
      <button className="mt-8 bg-blue-600 px-6 py-3 ronded-full hover:bg-blue-500">
        Explorar ahora
      </button>
    </main>
  );
}
