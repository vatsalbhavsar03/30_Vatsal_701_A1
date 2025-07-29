// app.js

const readline = require("readline");
const DomainChatbot = require("./chatbot");

const domain = "Optimus Ai";
const bot = new DomainChatbot(domain);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: ",
});

console.log(`Welcome to the ${domain} chatbot! Type your question below.\n`);
rl.prompt();

rl.on("line", (line) => {
  const response = bot.getResponse(line);
  console.log("Bot:", response);
  rl.prompt();
}).on("close", () => {
  console.log("\nGoodbye!");
  process.exit(0);
});
