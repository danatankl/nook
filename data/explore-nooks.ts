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

export const exploreCategories = ["All", "Reading", "Study", "Coffee", "Bedroom", "Workspace", "Dining", "Plants"];

export const exploreNooks: ExploreNook[] = [
  { id: 1, title: "Sunday Light", category: "Reading", creator: "Maya Chen", location: "Oakland, CA", saves: "2.4k", imageSeed: "nook-sunday-light", width: 800, height: 1080 },
  { id: 2, title: "The Quiet Desk", category: "Study", creator: "Jon Bell", location: "Portland, OR", saves: "1.8k", imageSeed: "nook-quiet-desk", width: 800, height: 960 },
  { id: 3, title: "First Cup", category: "Coffee", creator: "Sofia Reyes", location: "Brooklyn, NY", saves: "3.1k", imageSeed: "nook-first-cup", width: 800, height: 1180 },
  { id: 4, title: "Linen Mornings", category: "Bedroom", creator: "Theo Martin", location: "Copenhagen, DK", saves: "4.7k", imageSeed: "nook-linen-mornings", width: 800, height: 1000 },
  { id: 5, title: "A Place to Make", category: "Workspace", creator: "Amara Okafor", location: "London, UK", saves: "1.3k", imageSeed: "nook-place-to-make", width: 800, height: 1060 },
  { id: 6, title: "Dinner for Four", category: "Dining", creator: "Luca Bianchi", location: "Milan, IT", saves: "986", imageSeed: "nook-dinner-four", width: 800, height: 920 },
  { id: 7, title: "Green Window", category: "Plants", creator: "Ana Torres", location: "Austin, TX", saves: "2.7k", imageSeed: "nook-green-window", width: 800, height: 1200 },
  { id: 8, title: "After the Rain", category: "Reading", creator: "Elliot Park", location: "Seattle, WA", saves: "1.9k", imageSeed: "nook-after-rain", width: 800, height: 1040 },
  { id: 9, title: "Notes & Margins", category: "Study", creator: "Nina Patel", location: "Boston, MA", saves: "742", imageSeed: "nook-notes-margins", width: 800, height: 980 },
  { id: 10, title: "Corner Café", category: "Coffee", creator: "Remy Laurent", location: "Paris, FR", saves: "3.8k", imageSeed: "nook-corner-cafe", width: 800, height: 1120 },
  { id: 11, title: "Soft Landing", category: "Bedroom", creator: "Noa Williams", location: "Toronto, CA", saves: "2.2k", imageSeed: "nook-soft-landing", width: 800, height: 940 },
  { id: 12, title: "Clay & Paper", category: "Workspace", creator: "Iris Wu", location: "Los Angeles, CA", saves: "1.6k", imageSeed: "nook-clay-paper", width: 800, height: 1160 },
  { id: 13, title: "The Long Table", category: "Dining", creator: "Freja Olsen", location: "Aarhus, DK", saves: "1.1k", imageSeed: "nook-long-table", width: 800, height: 1020 },
  { id: 14, title: "Little Conservatory", category: "Plants", creator: "Sam Rivera", location: "Miami, FL", saves: "2.9k", imageSeed: "nook-conservatory", width: 800, height: 1210 },
  { id: 15, title: "Books Before Bed", category: "Reading", creator: "Hana Kim", location: "Seoul, KR", saves: "4.1k", imageSeed: "nook-books-bed", width: 800, height: 990 },
  { id: 16, title: "Blue Hour Study", category: "Study", creator: "Marco Silva", location: "Lisbon, PT", saves: "1.5k", imageSeed: "nook-blue-hour", width: 800, height: 1100 },
  { id: 17, title: "Slow Breakfast", category: "Coffee", creator: "June Miller", location: "Nashville, TN", saves: "2.1k", imageSeed: "nook-slow-breakfast", width: 800, height: 950 },
  { id: 18, title: "Wool & Walnut", category: "Bedroom", creator: "Benji Clarke", location: "Melbourne, AU", saves: "3.4k", imageSeed: "nook-wool-walnut", width: 800, height: 1140 },
  { id: 19, title: "Studio North", category: "Workspace", creator: "Leah Morgan", location: "Chicago, IL", saves: "864", imageSeed: "nook-studio-north", width: 800, height: 1010 },
  { id: 20, title: "Olive Branch", category: "Plants", creator: "Elena Rossi", location: "Florence, IT", saves: "2.6k", imageSeed: "nook-olive-branch", width: 800, height: 1190 },
];

