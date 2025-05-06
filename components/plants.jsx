import PLANTS from "../src/data";

export default function AvailablePlants() {
    return (
        <div id="plantContainer">
            {PLANTS.map(plant => (
                <div id="plantBox" key={plant.name}>
                    <div>{plant.image}</div>
                    <div>{plant.name}</div>
                </div>
            ))}
        </div>
    );
}
