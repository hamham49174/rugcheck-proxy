require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.SOLSNIF_API;

app.get('/scan/:token', async (req, res) => {
  const token = req.params.token;
  try {
    const response = await axios.get(
      `https://api.solsniffer.com/v1/token/${token}?apikey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("API-Fehler:", error.message);
    res.status(500).json({ error: 'Fehler beim Abrufen der Daten' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ SolSniffer Proxy läuft auf Port ${PORT}`);
});
