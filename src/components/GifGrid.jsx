import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const loadgifs = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    loadgifs();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title, url }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
