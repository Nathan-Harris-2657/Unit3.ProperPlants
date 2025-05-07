import { useState } from "react";
import PLANTS from "./data";
import AvailablePlants from "../components/plants";
import Cart from "../components/cart";

export default function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (plant) => {
        setCart(prevCart => {
            const existingPlant = prevCart.find(item => item.name === plant.name);
            if (existingPlant) {
                return prevCart.map(item =>
                    item.name === plant.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...plant, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = (name) => {
        setCart(prevCart => prevCart.map(item =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (name) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.name === name
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            );
        });
    };

    const removeFromCart = (name) => {
        setCart(prevCart => prevCart.filter(item => item.name !== name));
    };

    return (
        <div id="container">
            <AvailablePlants addToCart={addToCart}/>
            <Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart}/>
        </div>
    );
}
