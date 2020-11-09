/** @format */
import url from "./URL";
export function flattenProducts(data) {
  return data.map((item) => {
    //cloudinary
    // let image = item.image.url;
    // Local setup deployment

    let image = `${url}${item.image.map((img) => img.url)}`;
    // console.log(image);
    return { ...item, image };
  });
}
// helper functions
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
