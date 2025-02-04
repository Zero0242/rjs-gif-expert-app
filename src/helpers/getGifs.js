export const getGifs = async (category) => {
  import.meta.env
  const APIKEY = import.meta.env.VITE_GIF_API_KEY;
  const limite = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${category}&limit=${limite}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
