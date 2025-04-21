const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req, res) => {
  let requestedPath = decodeURI(req.url);
  let fsPath = path.join(__dirname, requestedPath);

  fs.stat(fsPath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }

    if (stats.isDirectory()) {
      fs.readdir(fsPath, (err, items) => {
        if (err) {
          res.writeHead(500);
          res.end('<h1>Internal Server Error</h1>');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h2>Index of ${requestedPath}</h2><ul>`);

        items.forEach(item => {
          const itemPath = path.join(fsPath, item);
          const itemUrl = path.join(requestedPath, item);
          const isDir = fs.statSync(itemPath).isDirectory();
          const icon = isDir ? '📁' : '📄';

          res.write(`<li>${icon} <a href="${itemUrl}">${item}</a></li>`);
        });

        res.end('</ul>');
      });
    } else {
      fs.readFile(fsPath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('<h1>Error reading file</h1>');
          return;
        }

        res.writeHead(200);
        res.end(data);
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;
