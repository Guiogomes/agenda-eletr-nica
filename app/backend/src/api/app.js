const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('../routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
// Lidar com as solicitações GET feitas à rota /api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Todas as outras solicitações GET não tratadas retornarão nosso app em React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.use(router);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

module.exports = app;