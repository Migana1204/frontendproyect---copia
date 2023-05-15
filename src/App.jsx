import { useState } from "react";
import { Carrusel } from './componentes/Carrusel';
import { Header } from './componentes/Header';
import './assets/estilos/App.css';
import { Card } from "./componentes/Card";
import { useStateProducts } from "./hook/useStateProducts";




function App() {
    const {products: infoProductsMap} = useStateProducts();

  return (
    <>
    <Header/>

    <Carrusel/>


    <div className="conTitle">
      <p className="title">Productos!</p>
      
    </div>

    <div className='products'>
        <Card products = {infoProductsMap} />
    
    </div>

    <footer className="footerCont">
      <div className="info">
        <h4>¿Qué somos?</h4>
        <p>Pagina de venta de multimedia de alta calidad, con un excelente servicio y atención al cliente.</p>
      </div>

      <div className="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-whatsapp"></i>

      </div>
    </footer>
    </>
  )
}

export default App
