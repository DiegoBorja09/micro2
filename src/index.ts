import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/api/mock', (req, res) => {
  res.json({ message: 'service 2 running cambio', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`service 2 running on port ${PORT}`);
});
