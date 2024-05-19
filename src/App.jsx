import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer.js'


function App() {

  return (
    <>
      {/* <Contador /> */}
      <NavBar />
      <ItemListContainer greeting="Bienvenidos A My Ti_Enda Virtual" />
    </> 
  )
}

export default App
