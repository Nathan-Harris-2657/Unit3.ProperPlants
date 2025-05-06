import PLANTS from "../src/data";

export default function AvailablePlants({ addToCart }) {
    return (
        <div id="plantContainer">
            {PLANTS.map(plant => (
                <div id="plantBox" key={plant.name}>
                    <div id="plantImg">{plant.image}</div>
                    <div id="plantName">{plant.name}</div>
                    <button id="plantButton" onClick={() => addToCart(plant)}>Add To Cart</button>
                </div>
            ))}
        </div>
    );
}
