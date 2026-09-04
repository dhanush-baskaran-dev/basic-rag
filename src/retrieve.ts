import { QdrantClient } from "@qdrant/js-client-rest";
import { createEmbedding } from "./createEmbedding.js";



export const qdrant = new QdrantClient({
  url: "http://localhost:6333",
});
export async function retrieve(question:string){
  const queryEmbedding = await createEmbedding(question)
    const results = await qdrant.query(
    "company_documents",
    {
      query: queryEmbedding,
      limit: 3,
      with_payload: true,
    }
  );
  return results
}