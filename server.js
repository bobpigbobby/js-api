const express = require('express');

const app = express();

// Set the port
app.set('port', 3000);

// Serve the index.html file when the client sends a GET request to the / endpoint
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/pages/index.html`);
});

// Serve the submitted.html file when the client sends a POST request to the / endpoint
app.post('/', (req, res) => {
  res.sendFile(`${__dirname}/src/pages/submitted.html`);
});

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
