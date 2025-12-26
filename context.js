import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({apiKey: ""});
const history = [];


async function Chatting(userProblem) {

  history.push({
  role : "user",
  parts : [{text:userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: history
  });

  history.push({
    role : "model",
    parts : [{text: response.text}]
  })

  console.log(response.text);
}

async function main(){
  const userProblem = readlineSync.question("Ask me anything --> ");
  await Chatting(userProblem);
  main();
}

main();