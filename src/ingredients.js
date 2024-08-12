export const allIngredients = [
    { icon: "📊", label: "Skill", text: ["-Data Structures and Algorithms", "-Problem solving"]},
    { icon: "💾", label: "Language",  text: ["-C/C++", "-Java", "-JavaScript"] },
    { icon: "📀", label: "Development",  text: ["-HTML", "-CSS", "-BootStrap", "-ReactJs", "-ExpressJs", "-NodeJs", "-MongoDB", "-MySQL", "-Android Studio","-Flutter", "-Unity", "-Unreal Engine", "-DevOps", "-CloudComputing"] }
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients.map(ingredient => JSON.stringify(ingredient)));
    return allIngredients.find((ingredient) => !existing.has(JSON.stringify(ingredient)));
  }
  