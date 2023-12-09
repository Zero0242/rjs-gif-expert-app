import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const loadgifs = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    loadgifs();
  }, []);

  return { images, isLoading };
};
