import { useState } from "react";
import PLANTS from "./data";
import AvailablePlants from "../components/plants";
import Cart from "../components/cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) =>{
    setCart([...cart, plant]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index)); // Removes item at given index
};

  return <div id="container">
    <AvailablePlants addToCart={addToCart}/>
    <Cart cart={cart} removeFromCart={removeFromCart}/>

  </div>;
}
