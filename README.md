# Medicheck Dashboard

This project demonstrates a simple Express API and React frontend.

## Setup

Install dependencies for both server and client:

```bash
cd server && npm install
cd ../client && npm install
```

## Running

Start the API server and the React development server in separate terminals:

```bash
# Terminal A
cd server
npm start

# Terminal B
cd client
npm start
```

Visit <http://localhost:3000> and you should see `API OK` rendered.

## Fetching openFDA data

An additional route `/api/510k` fetches sample records from the openFDA
database. This uses `node-fetch` in the server. After installing
dependencies you can test the endpoint directly:

```bash
curl http://localhost:8787/api/510k
```
