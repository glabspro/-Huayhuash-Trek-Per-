import { GoogleGenAI } from "@google/genai";

export const generateResponse = async (
  prompt: string,
  language: 'en' | 'es'
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemInstruction = language === 'en'
      ? `You are "Chasqu-IA", the digital guide for Huayhuash Trek Peru.
         Keep answers adventurous, helpful, and concise (under 80 words).
         Focus on safety, high altitude trekking, and our local guides from Llamac.`
      : `Eres "Chasqu-IA", el guía digital de Huayhuash Trek Peru.
         Respuestas aventureras y concisas (menos de 80 palabras).
         Enfócate en seguridad, trekking de altura y nuestros guías de Llamac.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || (language === 'en' ? "I'm having trouble connecting right now." : "Tengo problemas para conectar ahora mismo.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return language === 'en' 
      ? "The mountain signal is weak. Please try again."
      : "La señal de la montaña es débil. Inténtalo de nuevo.";
  }
};