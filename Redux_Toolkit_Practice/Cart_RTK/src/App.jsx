import {useDispatch, useSelector} from "react-redux";

import { AddToCart, RemoveFromCart, IncreaseQty, DecrementQty } from "./features/cart/cartSlice";
import { selectCartTotal } from "./features/cart/cartSelector";

import products from "./data/products";
import { useEffect } from "react";

function App(){
  const dispatch = useDispatch();

  const cart = useSelector( (state) => state.cart);
  const total = useSelector(selectCartTotal);
  

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  },[cart]);


  function handleAddToCart(product){
    dispatch(AddToCart(product));
  }

  return(
    <>
      <h1>Cart</h1>

      <section>
        <h2>Products</h2>

        <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>-
              <span>{product.price}</span>-

              <button 
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
            </li>
          ))
        }
      </ul>
      </section>

      <section>
        <h2>Cart Items</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
          <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>{" "}
                <span>{item.price}</span>{" "}
               
                <button onClick={() => dispatch(DecrementQty(item.id))}>-</button>{" "}

                
                <span>Quantity: {item.qty}</span>{" "}

                <button onClick={() => dispatch(IncreaseQty(item.id))}>+</button>{" "}

                <span>Total: {item.qty * item.price}</span>{" "}

                <button 
                  onClick={() => dispatch(RemoveFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>
            Cart Total: {total}
          </h2>
          </>
          )}
      </section>


    </>
  )
}

export default App;