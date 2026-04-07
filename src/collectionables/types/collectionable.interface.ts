import type { Category } from "./categories.interface";

export interface Collectionable {
  name: string;
  url: string;
  image_url: string;
  category: Exclude<Category, "musseum">;
}
