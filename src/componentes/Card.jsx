import React from 'react';


export function Card({ products }){

    return(
        <>
        <ul className='listProducts'>
            {
                products.map((product) =>
                <li key={product.id} className='card'>
                    <div className="corazon">
                        <p>{product.nombre}</p>
                        <i className="fa-solid fa-heart heart"></i>
                    </div>
                    <div className='img'>
                        <img src={product.imagen} className='imagenProduct' alt="" />
                    </div>

                    <div className='precio-boton'>
                        <p className='precio'>${product.precio}</p>
                        <button className='botonComprar'>Comprar</button>
                    </div>
                    {/* <p>{product.descripcion}</p> */}
                </li>
                )
            }
        </ul>
        </>
    )

}