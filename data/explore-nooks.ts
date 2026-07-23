export type ExploreNook = {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string[];
  tags: string[];
  creator: string;
  saves: string;
  image: string;
  width: number;
  height: number;
};

export const exploreCategories = ["All", "Reading Corner", "Compact Workspace", "Bedside Setup", "Gallery Wall", "Coffee Station", "Vanity", "Entryway Drop Zone", "Plant Corner"];

export const exploreNooks: ExploreNook[] = [
  { id: 1, title: "Window Seat for Slow Sundays", category: "Reading Corner", description: "A soft chair, warm task light, and reachable books turn an unused window into a place to pause.", details: ["Linen lounge chair", "Clamp reading lamp", "Floating book ledge"], tags: ["relax", "small-space", "warm light", "books", "renter-friendly"], creator: "Maya Chen", saves: "2.4k", image: "/nooks/reading-corner.svg", width: 900, height: 1180 },
  { id: 2, title: "The Two-Foot Study", category: "Compact Workspace", description: "A narrow desk and vertical storage make focused work possible without asking for a whole room.", details: ["Slim oak desk", "Pinboard rail", "Adjustable task light"], tags: ["focus", "small desk", "study", "organization", "small-space"], creator: "Jon Bell", saves: "1.8k", image: "/nooks/compact-workspace.svg", width: 900, height: 1030 },
  { id: 3, title: "Lamp, Book, Water", category: "Bedside Setup", description: "Three simple essentials make the last minutes of the day feel calm, useful, and considered.", details: ["Paper shade lamp", "Walnut nightstand", "Glass carafe"], tags: ["rest", "bedroom", "night routine", "warm light", "minimal"], creator: "Sofia Reyes", saves: "3.1k", image: "/nooks/bedside-setup.svg", width: 900, height: 1210 },
  { id: 4, title: "Collected Above the Bed", category: "Gallery Wall", description: "Mixed sizes, repeated wood tones, and generous spacing make personal pieces feel like one composition.", details: ["Oak frames", "Art postcards", "Picture ledge"], tags: ["display", "wall art", "prints", "renter-friendly", "personal"], creator: "Amara Okafor", saves: "4.7k", image: "/nooks/gallery-wall.svg", width: 900, height: 1100 },
  { id: 5, title: "The Morning Coffee Shelf", category: "Coffee Station", description: "A compact tray gathers the daily ritual in one place while open shelving keeps favorites within reach.", details: ["Pour-over set", "Stoneware mugs", "Narrow wall shelf"], tags: ["daily ritual", "coffee", "kitchen", "small-space", "open shelf"], creator: "Luca Bianchi", saves: "3.8k", image: "/nooks/coffee-station.svg", width: 900, height: 1160 },
  { id: 6, title: "Getting Ready Slowly", category: "Vanity", description: "Soft light, a generous mirror, and one tidy surface make an everyday routine feel unhurried.", details: ["Round mirror", "Ceramic catchall", "Upholstered stool"], tags: ["daily ritual", "bedroom", "mirror", "organization", "soft light"], creator: "Leah Morgan", saves: "2.2k", image: "/nooks/vanity.svg", width: 900, height: 1050 },
  { id: 7, title: "A Place for Coming Home", category: "Entryway Drop Zone", description: "Hooks, a slim ledge, and a grounded basket give the things you carry a natural place to land.", details: ["Peg rail", "Key bowl", "Woven floor basket"], tags: ["organize", "entryway", "storage", "small-space", "renter-friendly"], creator: "Noa Williams", saves: "1.6k", image: "/nooks/entryway-drop-zone.svg", width: 900, height: 1200 },
  { id: 8, title: "Green Window Corner", category: "Plant Corner", description: "Varying heights gather a few sun-loving plants into a small landscape beside the window.", details: ["Tiered plant stand", "Terracotta pots", "Brass watering can"], tags: ["greenery", "plants", "window", "natural light", "small-space"], creator: "Ana Torres", saves: "2.9k", image: "/nooks/plant-corner.svg", width: 900, height: 1080 },
];
