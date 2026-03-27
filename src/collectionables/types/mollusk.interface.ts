export interface Mollusk {
  name: string;
  url: string;
  number: number;
  image_url: string;
  render_url: string;
  shadow_size: string;
  shadow_movement: string;
  rarity: string;
  total_catch: number;
  sell_nook: number;
  tank_width: number;
  tank_length: number;
  catchphrases: string[];
  north: North;
  south: North;
}

export interface North {
  availability_array: AvailabilityArray[];
  times_by_month: { [key: string]: Time };
  months: string;
  months_array: number[];
}

export interface AvailabilityArray {
  months: string;
  time: Time;
}

export enum Time {
  Na = "NA",
  The4Pm9Am = "4 PM – 9 AM",
}
