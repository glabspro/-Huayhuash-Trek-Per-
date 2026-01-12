import { Translation, Trek } from './types';

export const TEXTS: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      treks: "Circuits",
      about: "The Range",
      aiPlanner: "Chasqu-IA",
      contact: "Book Now",
      bookNow: "Plan Adventure",
    },
    hero: {
      title: "Discover the World's Most Pristine Range",
      subtitle: "More exclusive than Cordillera Blanca. Infinitely more spectacular. Experience the raw beauty of the Andes with local guides from Llamac.",
      cta: "View Circuits",
    },
    stats: {
      experience: "Llamac Local Guides",
      summits: "6 Peaks > 6000m",
      happiness: "Reserved Zone",
    },
    treks: {
      title: "Legendary Circuits",
      subtitle: "From the 'Touching the Void' base camp to the turquoise mirrors of Jahuacocha.",
      difficulty: "Difficulty",
      days: "Days",
      altitude: "Max Alt.",
      viewDetails: "View Itinerary",
    },
    ai: {
      title: "Ask Chasqu-IA",
      subtitle: "Your digital guide for the Huayhuash. Ask about acclimatization, the 4300m+ passes, or the best season (May-Sept).",
      placeholder: "e.g., How hard is the Siula Grande pass?",
      send: "Ask Expert",
      disclaimer: "Powered by Gemini 2.5 Flash. Specialist in Cordillera Huayhuash logistics.",
      welcome: "Allinllachu! I am Chasqu-IA, your digital guide for Huayhuash Trek Peru. I know these trails like the local guides of Llamac. Ask me about the Classic Circuit, the weather in Yerupajá, or our logistics from Chiquián.",
    },
    contact: {
      title: "Secure Your Spot",
      name: "Full Name",
      email: "Email Address",
      message: "Tell us your preferred dates and circuit...",
      submit: "Request Booking",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      treks: "Circuitos",
      about: "La Cordillera",
      aiPlanner: "Chasqu-IA",
      contact: "Reservar",
      bookNow: "Planear Aventura",
    },
    hero: {
      title: "Descubre la Cordillera Más Prístina",
      subtitle: "Más exclusiva que la Cordillera Blanca. Infinitamente más espectacular. Vive la belleza cruda de los Andes con guías locales de Llamac.",
      cta: "Ver Circuitos",
    },
    stats: {
      experience: "Guías de Llamac",
      summits: "6 Picos > 6000m",
      happiness: "Zona Reservada",
    },
    treks: {
      title: "Circuitos Legendarios",
      subtitle: "Desde el campo base de 'Touching the Void' hasta los espejos turquesas de Jahuacocha.",
      difficulty: "Dificultad",
      days: "Días",
      altitude: "Alt. Max",
      viewDetails: "Ver Itinerario",
    },
    ai: {
      title: "Pregunta a Chasqu-IA",
      subtitle: "Tu guía digital para Huayhuash. Pregunta sobre aclimatación, los pasos de +4300m o la mejor temporada (Mayo-Set).",
      placeholder: "ej., ¿Qué tan difícil es el paso Siula?",
      send: "Consultar",
      disclaimer: "Potenciado por Gemini 2.5 Flash. Especialista en logística Huayhuash.",
      welcome: "¡Allinllachu! Soy Chasqu-IA, tu guía digital de Huayhuash Trek Peru. Conozco estos senderos como los guías locales de Llamac. Pregúntame sobre el Circuito Clásico, el clima en Yerupajá o nuestra logística desde Chiquián.",
    },
    contact: {
      title: "Asegura tu Cupo",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      message: "Indícanos tus fechas y circuito preferido...",
      submit: "Solicitar Reserva",
    },
  },
};

export const TREKS: Trek[] = [
  {
    id: 'classic-circuit',
    title: 'Classic Huayhuash Circuit',
    description: 'The full immersion. 12 days circling the entire range. Cross high passes every day and camp next to Yerupajá and Siula Grande.',
    image: 'https://images.unsplash.com/photo-1580137197581-df2bb346a786?q=80&w=2000&auto=format&fit=crop', // Scenic high pass
    days: 12,
    maxAltitude: '5,050m',
    difficulty: 'Hard',
    difficultyLabel: { en: 'Challenging', es: 'Desafiante' },
    itinerary: [
      {
        day: 1,
        title: "Chiquián to Cuartelhuain",
        description: "Drive from Chiquián to Llamac and then to our first campsite at Cuartelhuain. Acclimatization day surrounded by green valleys.",
        altitude: "4,170m",
        image: "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 2,
        title: "Cacananpunta Pass to Mitucocha",
        description: "Cross the first pass (Cacananpunta) and descend to Laguna Mitucocha. First views of the Jirishanca and Rondoy peaks.",
        altitude: "4,700m",
        image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 3,
        title: "Carhuac Pass to Carhuacocha",
        description: "A gentle ascent to Carhuac Pass, revealing the stunning Laguna Carhuacocha, often called the most beautiful camp in the Andes.",
        altitude: "4,650m",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 4,
        title: "Siula Pass to Huayhuash",
        description: "The most iconic day. Pass the three lakes and get close to Siula Grande and Yerupajá. A photographer's dream.",
        altitude: "4,800m",
        image: "https://images.unsplash.com/photo-1544198365-f5d60b6f8d3e?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 5,
        title: "Trapezio Pass to Viconga",
        description: "Cross the Portachuelo de Huayhuash to the Viconga Hot Springs. A well-deserved soak in natural thermal waters.",
        altitude: "4,750m",
        image: "https://images.unsplash.com/photo-1533400586-4f937e2a445f?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 6,
        title: "Cuyoc Pass to Huanacpatay",
        description: "Climb the Cuyoc Pass (5,000m), the highest point for many. Panoramic views of the Raura range.",
        altitude: "5,000m",
        image: "https://images.unsplash.com/photo-1620830962383-7c093a890989?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 7,
        title: "Santa Rosa Pass to Cutatambo",
        description: "Descend into the Calinca valley to Cutatambo, the base camp for 'Touching the Void' (Siula Grande).",
        altitude: "5,050m",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 8,
        title: "Descent to Huayllapa",
        description: "A walk down the valley along waterfalls to the village of Huayllapa. A chance to buy snacks and see local life.",
        altitude: "3,500m",
        image: "https://images.unsplash.com/photo-1502472584811-0a2f2ca8f9cf?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 9,
        title: "Tapush Pass to Gashpapampa",
        description: "Ascend from the village back into the high mountains towards Punta Tapush. Camp near the Diablo Mudo peak.",
        altitude: "4,800m",
        image: "https://images.unsplash.com/photo-1621535732733-5c8e42095f26?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 10,
        title: "Yaucha Pass to Jahuacocha",
        description: "The grand finale. Cross Yaucha Pass for a spectacular ridge walk descending to Laguna Jahuacocha.",
        altitude: "4,850m",
        image: "https://images.unsplash.com/photo-1580137197581-df2bb346a786?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 11,
        title: "Rest Day at Jahuacocha",
        description: "Optional walk to Solterococha or just relax by the lake reflecting the Yerupajá. Traditional Pachamanca dinner.",
        altitude: "4,070m",
        image: "https://images.unsplash.com/photo-1596708761234-a4b7f8303f29?q=80&w=1000&auto=format&fit=crop"
      },
      {
        day: 12,
        title: "Pampa Llamac to Chiquián",
        description: "The final pass, Pampa Llamac, offers one last look at the entire range before descending to Llamac village.",
        altitude: "4,300m",
        image: "https://images.unsplash.com/photo-1517409419139-49c0d9a6c6a4?q=80&w=1000&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 'compact-trek',
    title: 'Huayhuash Compact',
    description: 'The highlights in less time. Visit the iconic lakes of Carhuacocha and Mitucocha without the full commitment of the long circuit.',
    image: 'https://images.unsplash.com/photo-1533400586-4f937e2a445f?q=80&w=2000&auto=format&fit=crop', // Mountain reflection
    days: 6,
    maxAltitude: '4,800m',
    difficulty: 'Moderate',
    difficultyLabel: { en: 'Moderate', es: 'Moderado' },
    itinerary: [
      { 
        day: 1, 
        title: "Chiquián to Cuartelhuain", 
        description: "Transport from Huaraz/Chiquián to the start of the trail. Short acclimatization walk.", 
        altitude: "4,170m", 
        image: "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?q=80&w=1000" 
      },
      { 
        day: 2, 
        title: "Cacananpunta to Mitucocha", 
        description: "Crossing the Continental Divide to the Caribbean side. Camp next to Jirishanca's base.", 
        altitude: "4,700m", 
        image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1000" 
      },
      { 
        day: 3, 
        title: "To Carhuacocha", 
        description: "The most photogenic day. Arrive at the triple lake view beneath Yerupajá.", 
        altitude: "4,650m", 
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000" 
      },
      { 
        day: 4, 
        title: "Siula Viewpoint", 
        description: "Hike up to the three lagoons viewpoint. Unparalleled views of the Siula Grande face.", 
        altitude: "4,350m", 
        image: "https://images.unsplash.com/photo-1544198365-f5d60b6f8d3e?q=80&w=1000" 
      },
      { 
        day: 5, 
        title: "To Huayhuash Camp", 
        description: "A scenic hike skirting the massive peaks to reach the open plains of Huayhuash.", 
        altitude: "4,300m", 
        image: "https://images.unsplash.com/photo-1533400586-4f937e2a445f?q=80&w=1000" 
      },
      { 
        day: 6, 
        title: "Return via Pampa Llamac", 
        description: "Long hike out over the final pass back to civilization in Llamac village.", 
        altitude: "3,300m", 
        image: "https://images.unsplash.com/photo-1517409419139-49c0d9a6c6a4?q=80&w=1000" 
      },
    ]
  },
  {
    id: 'jahuacocha',
    title: 'Llamac - Jahuacocha',
    description: 'A stunning short trek to the "Mirror of the Sky". Perfect for photography and those short on time but hungry for views.',
    image: 'https://images.unsplash.com/photo-1688647576921-692794eb8492?q=80&w=2000&auto=format&fit=crop', // Lake view
    days: 4,
    maxAltitude: '4,300m',
    difficulty: 'Moderate',
    difficultyLabel: { en: 'Accessible', es: 'Accesible' },
    itinerary: [
      {
        day: 1,
        title: "Llamac to Jahuacocha",
        description: "Early start from Llamac, ascending the Pampa Llamac pass for the first jaw-dropping view of the range.",
        altitude: "4,300m",
        image: "https://images.unsplash.com/photo-1517409419139-49c0d9a6c6a4?q=80&w=1000"
      },
      {
        day: 2,
        title: "Laguna Solterococha",
        description: "Day hike to the glacial lake Solterococha at the very foot of majestic Yerupajá. Return to base camp.",
        altitude: "4,150m",
        image: "https://images.unsplash.com/photo-1596708761234-a4b7f8303f29?q=80&w=1000"
      },
      {
        day: 3,
        title: "Sambuya Viewpoint",
        description: "Optional climb to Cerro Sambuya or Yaucha pass for one of the best panoramic photos in Peru.",
        altitude: "4,750m",
        image: "https://images.unsplash.com/photo-1580137197581-df2bb346a786?q=80&w=1000"
      },
      {
        day: 4,
        title: "Descent to Llamac",
        description: "Leisurely breakfast by the lake before hiking back down the valley to Llamac for transport.",
        altitude: "3,300m",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000"
      }
    ]
  },
  {
    id: 'mountaineering',
    title: 'Alpine Expeditions',
    description: 'For experienced climbers. Summit iconic peaks like Diablo Mudo (5350m) or attempt the technical faces of the giants.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop', // Climber
    days: 8,
    maxAltitude: '6,635m',
    difficulty: 'Extreme',
    difficultyLabel: { en: 'Expert', es: 'Experto' },
    itinerary: [
      {
        day: 1,
        title: "Approach to Base Camp",
        description: "Trek into the heart of the range to set up base camp, usually in the Jahuacocha or Cutatambo valley.",
        altitude: "4,100m",
        image: "https://images.unsplash.com/photo-1544198365-f5d60b6f8d3e?q=80&w=1000"
      },
      {
        day: 2,
        title: "Acclimatization & Skills",
        description: "Reviewing glacier travel skills, checking gear, and a short climb to a higher camp for acclimatization.",
        altitude: "4,800m",
        image: "https://images.unsplash.com/photo-1621535732733-5c8e42095f26?q=80&w=1000"
      },
      {
        day: 3,
        title: "Move to High Camp",
        description: "Carrying loads to the high camp on the glacier. Sleeping on snow/ice.",
        altitude: "5,200m",
        image: "https://images.unsplash.com/photo-1533400586-4f937e2a445f?q=80&w=1000"
      },
      {
        day: 4,
        title: "Summit Push: Diablo Mudo",
        description: "Alpine start (2 AM). Climbing mixed terrain to reach the summit of Diablo Mudo (5,350m). Incredible views.",
        altitude: "5,350m",
        image: "https://images.unsplash.com/photo-1580137197581-df2bb346a786?q=80&w=1000"
      },
      {
        day: 5,
        title: "Reserve Day / Descent",
        description: "Extra day for weather or descent back to base camp to celebrate.",
        altitude: "4,100m",
        image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1000"
      },
      {
        day: 6,
        title: "Trek Out",
        description: "Hiking out from the range with mules carrying the heavy gear.",
        altitude: "3,300m",
        image: "https://images.unsplash.com/photo-1517409419139-49c0d9a6c6a4?q=80&w=1000"
      }
    ]
  },
];