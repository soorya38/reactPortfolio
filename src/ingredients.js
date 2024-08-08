// Ingredients data
export const allIngredients = [
  { icon: "📊", label: "Skils", text: ['-Competitive programming', '-Data structures and algorithms', '-Problem solving'] },
  { icon: "🌐", label: "Languages", text: ['-C/C++', '-Java', '-JavaScript'] },
  { icon: "💾", label: "Development", text: ['-HTML, CSS, Bootstrap', '-ReactJs', '-NodeJs', '-MongoDB', '-MySql', '-Android Studio', '-Flutter', '-Unity', '-Unreal Engine'] }
];

// Destructure the first three ingredients
const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

// Function to get the next ingredient
export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
