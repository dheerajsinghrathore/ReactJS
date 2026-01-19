// Return a random fruit from the foods array
function choice(foods) {
  const randomIndex = Math.floor(Math.random() * foods.length);
  return foods[randomIndex];
}

function remove(foods, item) {
  const index = foods.indexOf(item);
  if (index !== -1) {
    // Create a copy of the array and remove the item
    return foods.filter((fruit) => fruit !== item);
  }
  return foods;
}

export { choice, remove };
