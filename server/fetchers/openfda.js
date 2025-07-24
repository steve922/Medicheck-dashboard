const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));

module.exports = async function get510k() {
  const url = 'https://api.fda.gov/device/510k.json?search=product_code:OBR&limit=5';
  const res = await fetch(url);
  const json = await res.json();
  return json.results.map(r => ({ kNo: r.k_number, name: r.device_name }));
};
