import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
        <nav className="flex gap-4 p-6 bg-slate-900 text-white">
         
          <Link href ="/" className="hover:text-blue-400">Inicio </Link>
          <Link href ="/catalogo" className="hover:text-blue-400">Ver películas</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
