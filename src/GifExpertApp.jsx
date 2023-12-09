import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  /**
   * @param {string} value
   * @returns
   */
  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      {/* Gif Grid */}
      {/* Gif Item */}
      <AddCategory setCategories={onAddCategory} />
      <ol>
        {categories.map((category, index) => (
          <li key={category + index}>{category}</li>
        ))}
      </ol>
    </>
  );
};
