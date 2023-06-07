const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const API_KEY = '44D9A6F4-5C07-47B8-9F63-75977C7D713E';


app.use(express.json());


// Static Middleware for serving static files
app.use(express.static(path.resolve(__dirname, './client')));

// Route handler for main page
// Upon arrival at main page, add middleware for asking for user login.
// After login, take user to page where any saved stops/buses exists.
// Allow them to add new stops and buses and remove saved ones when no longer needed

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './client/index.html'));
});

// Import api router and use file to handle users upon landing at /mystops root url
const api = require('./routes/api.js');
app.use('/mystops', api)

// app.get('/style.css', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, './client/styles.css'))
// })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});