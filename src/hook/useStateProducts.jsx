import  datos  from "../componentes/datos.json";

export function useStateProducts() {
    const infoProductsMap = datos.map((product)=>({
        descripcion: product.descripcion,
        id: product.id,
        precio: product.precio,
        nombre: product.nombre,
        imagen: product.imagen,
    }))

    return{products: infoProductsMap}

}
