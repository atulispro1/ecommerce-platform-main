import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//connect to sanity
export const client = sanityClient({
  projectId: "3c4n15ly",
  dataset: "production",
  apiVersion: "2022-06-04",
  useCdn: true,
});

//be able to use sanity images
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
