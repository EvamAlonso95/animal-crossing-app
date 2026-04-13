const rarityMap: Record<string, string> = {
  Uncommon: "Infrecuente",
  Common: "Común",
  Rare: "Raro",
  "Very Common": "Muy común",
};

const locationMap: Record<string, string> = {
  River: "Río",
  Sea: "Mar",
  Beach: "Playa",
  Pond: "Estanque",
  Pier: "Muelle",
  "River (mouth)": "Río (desembocadura)",
  "River (clifftop)": "Río (cima del acantilado)",
  "Sea (raining)": "Mar (lloviendo)",
  Ocean: "Océano",
  "On palm trees": "En árboles de palma",
  "On rocks and bushes": "En rocas y arbustos",
  "On tree stumps": "En tocones de árboles",
  "On trees (any kind)": "En árboles",
  "On white flowers": "En flores blancas",
  Flying: "Volando",
  "Flying near light sources": "Volando cerca de fuentes de luz",
  "Flying near water": "Volando cerca del agua",
  "On beach rocks": "En rocas de la playa",
  "On villagers": "En aldeanos",
  "Shaking trees": "Sacudiendo árboles",
  "Shaking trees (hardwood and cedar)": "Sacudiendo árboles (cedro)",
  "On the ground": "En el suelo",
  "From hitting rocks": "Al golpear rocas",
  "Flying near trash or rotten turnips":
    "Volando cerca de basura o nabos podridos",
  "On trees (hardwood and cedar)": "En árboles (cedro)",
  "Disguised on shoreline": "Disfrazado en la orilla",
  "On rivers and ponds": "En ríos y estanques",
};

const shadowSizeMap: Record<string, string> = {
  "Very large": "Muy grande",
  Tiny: "Minúscula",
  Medium: "Mediana",
  Large: "Grande",
  "Very large (finned)": "Muy grande (con aleta)",
  Small: "Pequeña",
  Long: "Larga",
  Huge: "Enorme",
};

const monthAbbreviations: Record<string, string> = {
  Jan: "Ene",
  Feb: "Feb",
  Mar: "Mar",
  Apr: "Abr",
  May: "May",
  Jun: "Jun",
  Jul: "Jul",
  Aug: "Ago",
  Sep: "Sep",
  Oct: "Oct",
  Nov: "Nov",
  Dec: "Dic",
};

const weatherMap: Record<string, string> = {
  "Any except rain": "Cualquiera excepto lluvia",
  "Rain only": "Solo lluvia",
  "Any weather": "Cualquier clima",
};

function translateMonths(months: string): string {
  if (months === "Year-round") return "Todo el año";

  return months.replace(
    /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g,
    (match) => monthAbbreviations[match] ?? match,
  );
}

function translateTime(time: string): string {
  if (time === "All day") return "Todo el día";
  if (time === "NA") return "Desconocido";
  return time;
}

function translateRarity(rarity: string): string {
  const key = rarity || "Common";
  return rarityMap[key] ?? key;
}

function translateLocation(location: string): string {
  return locationMap[location] ?? location;
}

function translateShadowSize(shadowSize: string): string {
  return shadowSizeMap[shadowSize] ?? shadowSize;
}

function translateWeather(weather: string): string {
  return weatherMap[weather] ?? weather;
}

export function useTranslateItemData() {
  return {
    translateRarity,
    translateLocation,
    translateShadowSize,
    translateMonths,
    translateTime,
    translateWeather,
  };
}
