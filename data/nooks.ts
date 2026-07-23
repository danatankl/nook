export type Nook = {
  title: string;
  category: string;
  creator: string;
  palette: "study" | "reading" | "sleep" | "coffee";
};

export const featuredNooks: Nook[] = [
  { title: "Study Nook", category: "Focus", creator: "Maya Chen", palette: "study" },
  { title: "Reading Nook", category: "Slow living", creator: "Elliot Park", palette: "reading" },
  { title: "Sleep Nook", category: "Rest", creator: "Noa Williams", palette: "sleep" },
  { title: "Coffee Corner", category: "Morning ritual", creator: "Sofia Reyes", palette: "coffee" },
];

