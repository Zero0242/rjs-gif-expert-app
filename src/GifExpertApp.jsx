import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={onAddCategory} />
      {categories.map((category, index) => (
        <GifGrid 
            category={category} 
            key={category + index} 
        />
      ))}
    </>
  );
};
