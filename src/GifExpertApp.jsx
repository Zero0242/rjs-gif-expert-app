import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

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
        <GifGrid category={category} key={category + index} />
      ))}
    </>
  );
};
