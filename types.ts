export type Language = 'en' | 'es';

export interface Translation {
  nav: {
    home: string;
    treks: string;
    about: string;
    aiPlanner: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  stats: {
    experience: string;
    summits: string;
    happiness: string;
  };
  treks: {
    title: string;
    subtitle: string;
    difficulty: string;
    days: string;
    altitude: string;
    viewDetails: string;
  };
  ai: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    disclaimer: string;
    welcome: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}

export interface ItineraryStop {
  day: number;
  title: string;
  description: string;
  altitude: string;
  image: string;
}

export interface Trek {
  id: string;
  title: string;
  description: string;
  image: string;
  days: number;
  maxAltitude: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  difficultyLabel: { en: string; es: string };
  itinerary?: ItineraryStop[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}