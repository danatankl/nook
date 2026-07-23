export type ExploreNook = {
  id: number;
  title: string;
  category: string;
  creator: string;
  location: string;
  saves: string;
  imageSeed: string;
  width: number;
  height: number;
};

export const exploreCategories = ["All", "Desk Setup", "Bedside", "Wall Decor", "Reading Corner", "Vanity", "Storage", "Plants"];

export const exploreNooks: ExploreNook[] = [
  { id: 1, title: "Sunday Study", category: "Desk Setup", creator: "Maya Chen", location: "Oakland, CA", saves: "2.4k", imageSeed: "bedroom-sunday-study", width: 800, height: 1080 },
  { id: 2, title: "The Quiet Desk", category: "Desk Setup", creator: "Jon Bell", location: "Portland, OR", saves: "1.8k", imageSeed: "bedroom-quiet-desk", width: 800, height: 960 },
  { id: 3, title: "Lamp, Book, Water", category: "Bedside", creator: "Sofia Reyes", location: "Brooklyn, NY", saves: "3.1k", imageSeed: "bedroom-bedside-lamp", width: 800, height: 1180 },
  { id: 4, title: "Linen Mornings", category: "Bedside", creator: "Theo Martin", location: "Copenhagen, DK", saves: "4.7k", imageSeed: "bedroom-linen-mornings", width: 800, height: 1000 },
  { id: 5, title: "Collected Above the Bed", category: "Wall Decor", creator: "Amara Okafor", location: "London, UK", saves: "1.3k", imageSeed: "bedroom-gallery-wall", width: 800, height: 1060 },
  { id: 6, title: "Postcards & Prints", category: "Wall Decor", creator: "Luca Bianchi", location: "Milan, IT", saves: "986", imageSeed: "bedroom-postcard-wall", width: 800, height: 920 },
  { id: 7, title: "Green Window", category: "Plants", creator: "Ana Torres", location: "Austin, TX", saves: "2.7k", imageSeed: "bedroom-green-window", width: 800, height: 1200 },
  { id: 8, title: "After the Rain", category: "Reading Corner", creator: "Elliot Park", location: "Seattle, WA", saves: "1.9k", imageSeed: "bedroom-reading-rain", width: 800, height: 1040 },
  { id: 9, title: "Notes & Margins", category: "Desk Setup", creator: "Nina Patel", location: "Boston, MA", saves: "742", imageSeed: "bedroom-notes-desk", width: 800, height: 980 },
  { id: 10, title: "Morning Mirror", category: "Vanity", creator: "Remy Laurent", location: "Paris, FR", saves: "3.8k", imageSeed: "bedroom-morning-vanity", width: 800, height: 1120 },
  { id: 11, title: "Soft Landing", category: "Bedside", creator: "Noa Williams", location: "Toronto, CA", saves: "2.2k", imageSeed: "bedroom-soft-bedside", width: 800, height: 940 },
  { id: 12, title: "Clay & Paper", category: "Desk Setup", creator: "Iris Wu", location: "Los Angeles, CA", saves: "1.6k", imageSeed: "bedroom-creative-desk", width: 800, height: 1160 },
  { id: 13, title: "The Open Wardrobe", category: "Storage", creator: "Freja Olsen", location: "Aarhus, DK", saves: "1.1k", imageSeed: "bedroom-open-wardrobe", width: 800, height: 1020 },
  { id: 14, title: "Little Conservatory", category: "Plants", creator: "Sam Rivera", location: "Miami, FL", saves: "2.9k", imageSeed: "bedroom-plant-corner", width: 800, height: 1210 },
  { id: 15, title: "Books Before Bed", category: "Reading Corner", creator: "Hana Kim", location: "Seoul, KR", saves: "4.1k", imageSeed: "bedroom-books-corner", width: 800, height: 990 },
  { id: 16, title: "Blue Hour Study", category: "Desk Setup", creator: "Marco Silva", location: "Lisbon, PT", saves: "1.5k", imageSeed: "bedroom-blue-study", width: 800, height: 1100 },
  { id: 17, title: "A Shelf of Small Things", category: "Wall Decor", creator: "June Miller", location: "Nashville, TN", saves: "2.1k", imageSeed: "bedroom-wall-shelf", width: 800, height: 950 },
  { id: 18, title: "Wool & Walnut", category: "Storage", creator: "Benji Clarke", location: "Melbourne, AU", saves: "3.4k", imageSeed: "bedroom-walnut-storage", width: 800, height: 1140 },
  { id: 19, title: "Getting Ready Slowly", category: "Vanity", creator: "Leah Morgan", location: "Chicago, IL", saves: "864", imageSeed: "bedroom-slow-vanity", width: 800, height: 1010 },
  { id: 20, title: "Olive Branch", category: "Plants", creator: "Elena Rossi", location: "Florence, IT", saves: "2.6k", imageSeed: "bedroom-olive-plant", width: 800, height: 1190 },
];
