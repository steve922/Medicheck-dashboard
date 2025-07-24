# Medicheck-dashboard

This project contains a simple Express server with a daily cron job and manual refresh API.
It now also provides a `/api/hello` endpoint used by a small React frontend.

## Setup

```
npm install
node server/index.js
```

Visit `http://localhost:3000` and you should see "API OK" once the React
application fetches data from `/api/hello`. You can also click the refresh
button or POST to `/api/refresh` to trigger the manual refresh.
