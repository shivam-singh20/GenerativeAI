import { GoogleGenAI } from "@google/genai";

<<<<<<< HEAD
=======
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
>>>>>>> 2cf4acdedfcdffba8db0b6ab91b50c83227f55a8
const ai = new GoogleGenAI({apiKey: ""});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "What is my name?",
  });
  console.log(response.text);
}

main();
