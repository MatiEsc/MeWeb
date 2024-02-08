import NavBar from './Componentes/NavBar/NavBar';
import Formulario from "./Componentes/Formulario/Formulario";
import Inicio from './Componentes/Inicio/Inicio';
import Footer from './Componentes/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import './App.css'
import WhatsAppButton from './Componentes/WhatsAppButton/WhatsAppButton';



function App() {
  

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Formulario />} />
                
        </Routes>
        <WhatsAppButton />
        <Footer />

    </BrowserRouter>
      
    )
}

export default App
