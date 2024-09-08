import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import '../styles/CartComponent.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export const CartPage = () => {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity, emptyCart } = useContext(CartContext);
 const calculateTotal =()=>{
  return shoppingList.reduce((total,product)=>total + product.price * product.quantity, 0).toFixed(2)
 }

 const handlerPurchase = ()=>{
  const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
  Swal.fire({
    icon: 'success',
    title: 'La compra se ha realizado con exito',
    html: `<p> Has comprado: </p> <pre>${productsPurchased}</pre>`
  })
}

 const handlerEmpty = ()=>{
  const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
  Swal.fire({
    icon: 'error',
    title: 'El carrito se ha vaciado',
    html: `<p> Has borrado de tu carrito: </p> <pre>${productsPurchased}</pre>`,
    didClose:()=>{
      emptyCart()
    }
  })
}
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              <td>{(product.price*product.quantity).toFixed(2)}$</td>
              <td className="btn-cant">
                <button
                  className="outlined-button"
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </button>
                <button className="colored-button">{product.quantity}</button>
                <button
                  className="outlined-button"
                  onClick={() => incrementQuantity(product.id)}
                >
                  +
                </button>
              </td>
              <td className="delete-cell">
                <button
                  className="delete-button"
                  onClick={() => removeProduct(product.id)}
                >
                  <DeleteForeverIcon/>
                </button>
              </td>
            </tr>
          ))}
        <tr>
          <th><b>Total:</b></th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-success" type="button" onClick={handlerPurchase}>
          Compra
        </button>
        <button className="btn btn-danger" type="button" onClick={handlerEmpty}>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
};
