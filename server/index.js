const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Placeholder authentication middleware
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.sendStatus(401);
  }
}

app.get('/api/events', (req, res) => {
  // TODO: fetch events from DB
  res.json([]);
});

app.post('/api/booking', (req, res) => {
  // TODO: handle booking and payment via EVC
  const booking = req.body;
  res.json({ success: true, booking });
});

app.get('/api/ticket/:id', auth, (req, res) => {
  // TODO: return ticket info
  res.json({ id: req.params.id });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
