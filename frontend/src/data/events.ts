export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  primary?: boolean;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Book Reading - Colette Soler",
    date: "2024-10-15",
    description: "A detailed discussion on Colette Soler's book. This event will explore the nuances of her latest work in psychoanalysis.",
    image: "/src/assets/event-images/colette-soler.png",
    tags: ["Book Reading", "Psychoanalysis"],
    primary: true,
  },
  {
    id: 3,
    title: "Study of Lacan Seminar XXI",
    date: "2024-11-20",
    description: "A study group dedicated to Lacan's Seminar XXI, 'Les non-dupes errent'.",
    image: "/src/assets/event-images/lacan-xxi.png",
    tags: ["Study Group", "Lacan"],
    primary: false,
  },
  {
    id: 4,
    title: "Study of Lacan Seminar VI",
    date: "2024-12-05",
    description: "Continuing our series on Lacan's seminars, this session will focus on Seminar VI, 'Desire and its Interpretation'.",
    image: "/src/assets/event-images/lacan-vi.png",
    tags: ["Study Group", "Lacan", "Desire"],
    primary: false,
  },
]; 