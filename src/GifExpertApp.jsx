import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "touhou"]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      {/* Gif Grid */}
      {/* Gif Item */}
      <AddCategory/>
      <button onClick={onAddCategory}>Añadir</button>

      <ol>
        {categories.map((category, index) => (
          <li key={category + index}>{category}</li>
        ))}
      </ol>
    </>
  );
};
