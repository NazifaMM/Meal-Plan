// Random Meal Plan For The Day

// Breakfast Options 
const breakfast = [
  "Porridge and Jam",
  "Full English Breakfast",
  "Eggs Benedict",
  "Toast with avocado and smoked salmon",
  "Granola with yogurt and berries",
  "Turkish eggs and pita",
  "Cereal and fruit",
  "Toast with cream cheese and cucumber, with a portion of fruit on the side",
  "Greek yogurt with chia seeds, honey, and berries",
  "Scrambled eggs with sausages",
  "Poached egg and toast"
];

// Lunch Options
const lunch = [
  "Grilled Chicken with pesto pasta",
  "Grilled Chicken with roasted broccoli and potatoes",
  "Seabass with salad and dauphinoise potatoes",
  "Ramen with dumplings",
  "Katsu curry and rice",
  "Pad Thai",
  "Chicken curry and rice",
  "Lamb curry and rice",
  "Footlong sandwich with turkey, lettuce, and cheese",
  "Mac and Cheese with fried chicken",
  "Roasted sweet potatoes with cajun prawns",
  "Jacket potatoes with tuna, cheese, and beans",
  "Biryani"
];

// Dinner Options
const dinner = [
  "Chicken soup with dumplings",
  "Roasted broccoli and salmon",
  "Caesar Salad",
  "Peri chicken with wedges and salad on the side",
  "Rotisserie chicken with chips",
  "Prawn fried rice",
  "Pho",
  "Short rib stew with mashed potatoes",
  "Steak and chips with caramelised onion sauce",
  "Takeaway"
];

// Helper function to pick a random item
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate random meal plan
function generateMealPlan() {
  const mealBreakfast = randomChoice(breakfast);
  const mealLunch = randomChoice(lunch);
  const mealDinner = randomChoice(dinner);

  return `Breakfast: ${mealBreakfast} Lunch: ${mealLunch} Dinner: ${mealDinner}`;
}

// Run the generator
console.log(generateMealPlan());
