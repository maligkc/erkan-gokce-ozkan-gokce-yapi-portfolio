
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async getAIResponse(prompt: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "Sen 'Erkan Gökçe Yapı' firmasının sanal asistanısın. Çekmeköy merkezli, samimi, dürüst ve iş bitirici bir üslup kullan. Kentsel dönüşüm, kat karşılığı inşaat ve daire alım satımı konularında uzman gibi konuş. Çok resmi olma, mahallemizden biriymişsin gibi güven ver. Sorulara Türkçe ve net cevaplar ver.",
          temperature: 0.8,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Kusura bakmayın, teknik bir sorun oldu. Bize Erkan Gökçe (0537 978 31 47) numarasından ulaşabilirsiniz!";
    }
  }
}

export const geminiService = new GeminiService();
