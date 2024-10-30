import { useContext } from "react";
import { UserContext } from "./App"; // Import the context

export default function Cart() {
  const { cart } = useContext(UserContext); 

  return (
    <div>
      <ul>
        {cart.map((value, index) => (
          <div key={index}>
            <li>
              {value.name} - {value.desc} - {value.price} - {value.qty} - 
              Total: {value.price * value.qty}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}