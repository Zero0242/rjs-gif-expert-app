import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch","Dragon Ball"]);

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      {/* Gif Grid */}
      {/* Gif Item */}
      <ol>
        <li>ABC</li>
        <li>123</li>
        <li>XYZ</li>
      </ol>

      <ol>
        {categories.map((category, index) => (
          <li key={category + index}>{category}</li>
        ))}
      </ol>
    </>
  );
};
