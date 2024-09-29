import './globals.css'
import Navbar from './nav'


export const metadata = {
  title: 'Ejemplo de Next App Router',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar></Navbar>
        <main className="borde relleno bg-lavanda">
          {children}
        </main>
      </body>
    </html>
  )
}
