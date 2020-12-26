const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('*', (req, response) => {
  const url = req.originalUrl
  console.log(url)
  request(url.slice(1), (err, res, body) => {  
    response.json(JSON.parse(body))
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));