const express = require('express');
const path = require('path');
const { refreshAll } = require('./refresh');
require('./cron');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/refresh', async (_, res) => {
  await refreshAll();
  res.json({ status: 'done' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
