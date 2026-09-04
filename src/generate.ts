import { ai } from "./createEmbedding.js"

export async function generateAnswer(question:string, context:string){
   const prompt = `You are helpful assistant. 
     Answer the question using only the provided context

     if the answer cannot be find in context, say: "I don't know based on the provided information."

     context: ${context}
     Question: ${question}
     Answer: 
   `

   const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt
   })

   return response.text
}