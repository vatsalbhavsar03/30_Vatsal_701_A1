console.log("Directory name:", __dirname);
console.log("File name:", __filename);

setTimeout(() => {
  console.log("This message is shown after 2 seconds (setTimeout)");
}, 2000);

let count = 0;
const interval = setInterval(() => {
  console.log("Interval running:", ++count);
  if (count === 3) clearInterval(interval); 
}, 1000);

console.log("This is a log message from global console");

console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);