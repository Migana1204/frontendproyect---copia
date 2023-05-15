import React from 'react';
import logo from '../assets/images/logopag.png';

export function Header(){
    
    

    return( 
    <header>
        <div className="container-header">
            <img src={logo} className="logo-image" alt=""/>
            <div className="input-container">
                <select name="" id="categoria">
                    <option value="">CATEGORIAS</option>
                    <option value="">Camaras</option>
                    <option value="">Microfonos</option>
                    <option value="">Parlantes</option>
                    <option value="">Adecuacion</option>
                    <option value="">Capturadoras</option>
                    <option value="">Tripodes</option>
                    <option value="">Luces Led</option>
                </select>
                <input className="buscador" type="text" placeholder="Buscar..."/>
                <i className="fa-solid fa-magnifying-glass iconsearch"></i>
            </div>

            <div className="wish-list_carrito_perfil">

                <i className="fa-solid fa-heart"></i>
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                <p>|</p>

                <div className="perfil">
                    <div className="image-perfil">

                        <img className="perfil-image" src={logo} alt=""/>

                    </div>
                    <div className="icon-image">
                        <i className="fa-solid fa-caret-down"></i>
                    </div> 

                </div>

            </div>

        </div>

    </header>
    )
}