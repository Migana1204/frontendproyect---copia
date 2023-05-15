import { Table, Button } from 'react-bootstrap';

const Carrito = ({ productosSeleccionados, eliminarProducto, finalizarCompra }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosSeleccionados.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>
                <Button variant="danger" onClick={() => eliminarProducto(index)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" onClick={finalizarCompra}>Finalizar compra</Button>
    </div>
  );
};

export default Carrito;
