const cron = require('node-cron');
const { refreshAll } = require('./refresh');
cron.schedule('0 2 * * *', () => {
  console.log('cron: refreshing data...');
  refreshAll();
});
