// Create 10 fruits emojis array
// make watermelon emoji the first element
const foods = ["🍉", "🍎", "🍌", "🍇", "🍓", "🍑", "🍍", "🥝", "🥭", "🥥"];

// Export a function that returns a fresh copy of the array
export default function getFoods() {
  return [...foods];
}
