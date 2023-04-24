import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity.client";

//get a pre-congfigured url-builder from your sanity client
const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

export default urlFor;
