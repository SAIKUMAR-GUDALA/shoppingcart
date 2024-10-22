import React from "react";
import { useState } from "react";
export default function Products() {
  const items = [
    { name: "Product 1", desc: "This is a dummy description", price: 'Rs:30/-' , img:<img className="App-img" src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
    { name: "Product 2", desc: "This is a dummy description", price: 'Rs:80/-'  , img:<img className="App-img" src="https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
    { name: "Product 3", desc: "This is a dummy description", price: 'Rs:70/-'  , img:<img className="App-img" src="https://images.pexels.com/photos/3216564/pexels-photo-3216564.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
    { name: "Product 4", desc: "This is a dummy description", price: 'Rs:90/-'  , img:<img className="App-img" src="https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
    { name: "Product 5", desc: "This is a dummy description", price: 'Rs:50/-'  , img:<img className="App-img" src="https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
    { name: "Product 6", desc: "This is a dummy description", price: 'Rs:40/-'  , img:<img className="App-img" src="https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
    { name: "Product 7", desc: "This is a dummy description", price: 'Rs:80/-' , img:<img className="App-img" src="https://images.pexels.com/photos/1710023/pexels-photo-1710023.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
    { name: "Product 8", desc: "This is a dummy description", price: 'Rs:60/-'  , img:<img className="App-img" src="https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
  ];

  const[count,setCount] =useState(0)
  const [products, setProducts] = useState(items);
  return (
    <div className="App-products">
      {products.map((value, index) => (
        <div className="App-item">
           {value.img}
          <h3>{value.name}</h3>
          <p>{value.desc}</p>
          <h4>{value.price}</h4>
          <button className="App-btn">Add</button>
          
<button onClick={()=>count>0 && setCount(count-1)}>-</button>   
{count}
<button onClick={()=> setCount(count+1)}>+</button> 
          </div>
      ))}
    </div>
  );
}
