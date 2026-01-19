import React, { Component } from "react";
import getFoods from "./Food.jsx";
import { choice, remove } from "./helper.jsx";

export class Fruits extends Component {
  render() {
    const foods = getFoods(); // Get a fresh copy of the array
    let randomFruit = choice(foods);
    let remainingFruits = remove(foods, randomFruit);
    return (
      <div>
        <p>Total Fruits: {foods.length}</p>
        <p>It is : {foods.join(", ")}</p>
        <p>Random Fruit: {randomFruit}</p>
        <p>Remaining fruits count: {remainingFruits.length}</p>
        <p>Remaining Fruits: {remainingFruits.join(", ")}</p>
      </div>
    );
  }
}
