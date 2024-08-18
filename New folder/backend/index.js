// server.js
const express = require('express');
const app = express();
const port = 4000; // You can choose any available port

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route with a parameter
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// Define a POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
