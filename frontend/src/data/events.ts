export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  fullContent: string;
  isPrimary: boolean;
}

export const events: Event[] = [
  {
    id: 'book-reading-colette-soler',
    title: 'Book Reading - Colette Soler',
    date: '2024-05-03',
    description: 'We remember Nestor with respect and love. Our thoughts and sympathies are with Daphne, Mia and the rest of his family.',
    fullContent: 'A full evening dedicated to the work of Colette Soler. We will be reading passages from her latest book and discussing their implications for modern psychoanalysis. A tribute to our dear friend Nestor, whose energy and sincere friendship we miss dearly.',
    isPrimary: true,
  },
  {
    id: 'slavoj-zizek-lecture',
    title: 'Slavoj Zizek Lecture!',
    date: '2025-07-20',
    description: 'Talking about Lacan and the real in David Fincher movies.',
    fullContent: 'Join us for a provocative lecture by the one and only Slavoj Zizek. He will explore the concept of the Lacanian Real through the lens of David Fincher\'s cinematic universe. Expect intellectual fireworks and challenging ideas.',
    isPrimary: true,
  },
  {
    id: 'study-lacan-seminar-xxi',
    title: 'Study of Lacan Seminar XXI',
    date: '2024-09-15',
    description: 'A deep dive into Seminar XXI, led by Dr. Dafne Tamarin.',
    fullContent: 'This study group will work through Jacques Lacan\'s Seminar XXI, "Les non-dupes errent". The sessions will be led by Dr. Dafne Tamarin, providing expert guidance and fostering in-depth discussion. Suitable for all levels of familiarity with Lacan\'s work.',
    isPrimary: false,
  },
  {
    id: 'study-lacan-seminar-vi',
    title: 'Study of Lacan Seminar VI',
    date: '2024-10-10',
    description: 'Exploring desire and its interpretation with Dr. Mia Tamarin.',
    fullContent: 'Dr. Mia Tamarin will lead this study group through Lacan\'s Seminar VI, "Desire and its Interpretation". We will trace the development of Lacan\'s thought on this crucial concept, with close readings of the text and open discussion.',
    isPrimary: false,
  },
  {
    id: 'a-lecture-by-mark-fisher',
    title: 'A Lecture By Mark Fisher',
    date: '2025-07-20',
    description: 'Tonight in the main hall. hurry he might not be here for long!',
    fullContent: 'A special, one-night-only lecture by the acclaimed cultural theorist Mark Fisher. This is a rare opportunity to hear him speak. Don\'t miss out!',
    isPrimary: false,
  },
]; 