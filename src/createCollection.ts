import { qdrant } from "./index.js";

export async function createCollection() {
  const collectionName = "company_documents";

  const collections = await qdrant.getCollections();

  const exists = collections.collections.some(
    (collection) => collection.name === collectionName
  );

  if (!exists) {
    await qdrant.createCollection(collectionName, {
      vectors: {
        size: 3072,
        distance: "Cosine",
      },
    });

    console.log("Collection created!");
  } else {
    console.log("Collection already exists!");
  }
}