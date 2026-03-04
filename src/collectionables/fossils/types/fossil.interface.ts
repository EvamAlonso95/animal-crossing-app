export interface Fossil {
  name: string;
  url: string;
  room: number;
  description: string;
  fossils: FossilElement[];
}

export interface FossilElement {
  name: string;
  url: string;
  image_url: string;
  interactable: boolean;
  sell: number;
  hha_base: number;
  width: number;
  length: number;
  colors: Color[];
}

export enum Color {
  Beige = "Beige",
  Brown = "Brown",
}
