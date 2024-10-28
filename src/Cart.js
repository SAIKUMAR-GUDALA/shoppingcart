import React, { useContext } from 'react';
import {AppContext} from './Products';

export default function Cart() {
  const { cart,setCart } = useContext(AppContext);


console.log(cart)

  const addProduct = (item) => {
    setCart((cart) => [...cart, item]);
  };


  return (
    <div>
     
      <ul>
        {cart && cart.map((value, index) => (
          <li>
            <strong>{value.name}</strong><br />
            {value.desc}<br />
            {value.price}- <button onClick={() => addProduct(value)}>Add Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

