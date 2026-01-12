
import { GoogleGenAI } from "@google/genai";

export const generateResponse = async (
  prompt: string,
  language: 'en' | 'es'
): Promise<string> => {
  // Defensive check for API KEY
  if (!process.env.API_KEY) {
    console.warn("API_KEY missing. Chasqu-IA is in offline mode.");
    return language === 'en' 
      ? "I'm currently resting at the base camp (Offline). Please contact us directly for info!" 
      : "Estoy descansando en el campo base (Sin conexión). ¡Contáctanos directamente!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemInstruction = language === 'en'
      ? `You are "Chasqu-IA", the digital guide for Huayhuash Trek Peru. 
         Answers should be adventurous, very helpful, and concise (under 60 words). 
         Refer to the local team in Llamac and Chiquián. Use high-altitude terminology.`
      : `Eres "Chasqu-IA", el guía digital de Huayhuash Trek Peru. 
         Respuestas aventureras y concisas (menos de 60 palabras). 
         Menciona al equipo local en Llamac y Chiquián.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "Connection lost in the mountains.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return language === 'en' 
      ? "The Andean wind is too strong for my signal. Try again in a bit!" 
      : "El viento andino es muy fuerte para mi señal. ¡Intenta de nuevo!";
  }
};
