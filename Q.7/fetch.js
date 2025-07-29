const fetch = require("node-fetch");

async function fetchGoogle() {
  try {
    const response = await fetch("https://google.com");
    const html = await response.text();
    console.log(`Google Page Fetch Successfully`);
    console.log(html.slice(0, 500));
  } catch (err) {
    console.error(`Failed to fethch Google:`, err.message);
  }
}
fetchGoogle();
