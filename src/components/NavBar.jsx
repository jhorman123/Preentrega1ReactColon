import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <>
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
                My Ti_Enda Virtual
            </div>
            <div className=" ml-auto flex space-x-4 mr-5">
                <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</a>
                <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Electronica</a>
                <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Soporte</a>
                <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contacto</a>
            </div>
            <div>
             <CartWidget />
            </div>        
        </nav>
    </>
  )
}

export default NavBar
