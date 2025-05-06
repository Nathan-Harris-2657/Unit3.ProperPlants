export default function Cart({ cart, removeFromCart }){
    return(
        <div id="cartContainer">
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
                cart.map((plant, index) => (
                    <div key={index}>
                        <span>{plant.name}</span>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );

    
}
