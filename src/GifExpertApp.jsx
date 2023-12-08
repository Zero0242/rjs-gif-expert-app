import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories,"touhou"])
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      {/* Gif Grid */}
      {/* Gif Item */}
      <button onClick={onAddCategory}>Añadir</button>

      <ol>
        {categories.map((category, index) => (
          <li key={category + index}>{category}</li>
        ))}
      </ol>
    </>
  );
};
