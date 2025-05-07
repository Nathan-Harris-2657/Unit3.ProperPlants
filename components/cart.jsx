export default function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
    return (
        <div id="cartContainer">
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
                cart.map((plant) => (
                    <div key={plant.name}>
                        <div id="cartInfoContainer">
                        <span id="cartInfo">{plant.name} (x{plant.quantity})</span>
                        <button className="cartButton" onClick={() => decreaseQuantity(plant.name)}>-</button>
                        <button className="cartButton" onClick={() => increaseQuantity(plant.name)}>+</button>
                        <button className="cartButton" onClick={() => removeFromCart(plant.name)}>Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}
