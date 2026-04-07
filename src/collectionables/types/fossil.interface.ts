export interface Fossil {
  name: string;
  url: string;
  image_url: string;
  fossil_group: string;
  interactable: boolean;
  sell: number;
  hha_base: number;
  width: number;
  length: number;
  colors: Color[];
}

export interface FossilGroupItem {
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

export interface FossilGroup {
  name: string;
  url: string;
  room: number;
  description: string;
  matched: {
    type: string;
    name: string;
  };
  fossils: FossilGroupItem[];
}

export enum Color {
  Beige = "Beige",
  Black = "Black",
  Brown = "Brown",
  Gray = "Gray",
  Yellow = "Yellow",
}
