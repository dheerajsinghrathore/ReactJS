import React, { Component } from "react";
import foods from "./Food.jsx";
import { choice, remove } from "./helper.jsx";

export function Fruits() {
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

export default Fruits;
