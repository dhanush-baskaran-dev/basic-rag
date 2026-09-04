
import { createChunk } from "./chunking.js";
import { createCollection } from "./createCollection.js";
// import cosineSimilarity from "./cosine_similarity.js";
import { createEmbedding } from "./createEmbedding.js";
import {QdrantClient} from "@qdrant/js-client-rest"
import { retrieve } from "./retrieve.js";
import { generateAnswer } from "./generate.js";


export const qdrant = new QdrantClient({
  url: "http://localhost:6333",
});



async function main() {


    const question = "How many vacation days do employees get?";

  const results = await retrieve(question);

  console.log("\nQuestion:");
  console.log(question);

  console.log("\nSearch Results:");

  const context = results.points
    .map((result) => result.payload?.text)
    .join("\n\n");

      console.log("\nRetrieved Context:");
  console.log(context);

  const answer = await generateAnswer(
    question,
    context
  );

  console.log("\nFinal Answer:");
  console.log(answer);
//   const chunks = createChunk();
// await createCollection();
// console.log("Number of chunks:", chunks.length);

//    const points = []

//   for (let i = 0; i < chunks.length; i++) {
//      const chunk = chunks[i]!;
//     const embedding = await createEmbedding(chunks[i]!);

 

//     console.log(`\nChunk ${i + 1}:`);
//     console.log(chunks[i]);

//     console.log("Vector length:", embedding.length);
//     console.log("First 5 values:", embedding.slice(0, 5));

//         points.push({
//       id: i + 1,
//       vector: embedding,
//       payload: {
//         text: chunk,
//       },
//     })
//   }

//   await qdrant.upsert("company_documents",{
//     wait: true,
//     points
//   })
//   console.log("Vectors stored in Qdrant!");
// console.log("\nPoints created:", points.length);
   

}

main()