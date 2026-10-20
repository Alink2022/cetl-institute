// Kleiner statischer Server für die lokale Vorschau: node crm/dev/serve.js
const http = require('http'), fs = require('fs'), path = require('path');
http.createServer((req, res) => {
  const f = path.join(__dirname, 'preview.html');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(f));
}).listen(5055, () => console.log('CRM-Vorschau auf http://localhost:5055'));
