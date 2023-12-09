/**
 * @typedef images
 * @prop {number} id
 * @prop {string} title
 * @prop {string} url
 */
/**
 *
 * @param {string} category
 * @returns {images[]}
 */
export const getGifs = async (category) => {
  const APIKEY = "GkImgdbm003amiEmPXg5g7A6orAe9XTY";
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
