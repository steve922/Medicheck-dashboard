const express = require('express');
const get510k = require('./fetchers/openfda');
const app = express();

app.get('/api/hello', (_, res) => res.json({ msg: 'API OK' }));
app.get('/api/510k', async (_, res) => res.json(await get510k()));

app.listen(8787, () => console.log('Server on 8787'));
