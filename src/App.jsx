import { useState } from "react";
import PLANTS from "./data";
import AvailablePlants from "../components/plants";
import Cart from "../components/cart";

export default function App() {

  return <div id="container">
    <AvailablePlants/>
    <Cart/>

  </div>;
}
