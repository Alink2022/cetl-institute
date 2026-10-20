// Baut aus den Vorlagen die Apps-Script-Dateien Index.html und Stylesheet.html und eine lokale Vorschau.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const parts = fs.readFileSync(path.join(__dirname, 'base.html'), 'utf8');          // Markup + Basis-CSS
const logo = fs.readFileSync(path.join(root, '..', 'public', 'CETL_Logo_Vertical.svg'), 'utf8')
  .replace(/<[?]xml[^>]*>/, '').replace(/width="[^"]*" height="[^"]*"/, '');
const extra = fs.readFileSync(path.join(__dirname, 'extra.css'), 'utf8');
const css = parts.match(/<style>([\s\S]*?)<\/style>/)[1] + '\n' + extra;
const markup = parts.slice(parts.indexOf('</style>') + 8).replace('{{LOGO}}', logo)
  .replace(/<div class="demo">[^<]*<\/div>/, '');
fs.writeFileSync(path.join(root, 'Stylesheet.html'), '<style>\n' + css + '\n</style>\n');
fs.writeFileSync(path.join(root, 'Index.html'),
`<!DOCTYPE html>
<html lang="de">
<head>
<base target="_top">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CETL CRM</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap">
<?!= include('Stylesheet') ?>
</head>
<body>
${markup}
<?!= include('Client') ?>
</body>
</html>
`);
// Vorschau mit Mock-Server
const mock = fs.readFileSync(path.join(__dirname, 'mock.js'), 'utf8');
let html = fs.readFileSync(path.join(root, 'Index.html'), 'utf8')
  .replace("<?!= include('Stylesheet') ?>", fs.readFileSync(path.join(root, 'Stylesheet.html'), 'utf8'))
  .replace("<?!= include('Client') ?>", '<script>' + mock + '</script>\n' + fs.readFileSync(path.join(root, 'Client.html'), 'utf8'));
fs.writeFileSync(path.join(__dirname, 'preview.html'), html);
console.log('ok', html.length);
