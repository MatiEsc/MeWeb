import NavBar from './Componentes/NavBar/NavBar';
import Formulario from "./Componentes/Formulario/Formulario";
import Inicio from './Componentes/Inicio/Inicio';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import './App.css'



function App() {
  

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Formulario />} />
                
        </Routes>
    </BrowserRouter>
      
    )
}

export default App
