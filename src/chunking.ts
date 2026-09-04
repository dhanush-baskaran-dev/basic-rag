import "dotenv/config";
import fs from "fs"


export function createChunk() {
     const document = fs.readFileSync(
    "./data/company.txt",
    "utf-8"
)


const text = document
const chunkSize = 20
const overlap = 5

const words = text.split(/\s+/)

const chunks: string[] = []

let start = 0

  while (start < words.length) {
    const end = start + chunkSize;

    const chunk = words
      .slice(start, end)
      .join(" ");

    chunks.push(chunk);

    start += chunkSize - overlap;
  }                                 

 return chunks

}
