import * as genai from "@google/genai";
import "dotenv/config";
export const ai = new genai.GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY ?? ""
})

export async function createEmbedding(text: string): Promise<number[]> {
    const response = await ai.models.embedContent({
        model: "gemini-embedding-001",
        contents: text
    })

    const embedding = response.embeddings?.[0]?.values ?? []
    return embedding

}