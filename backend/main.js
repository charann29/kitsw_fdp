const http = require('http');
const fs = require('fs');
const PORT = 3000;

const readDB = () => {
  const data = fs.readFileSync('./db.json', 'utf-8');
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
};

const server = http.createServer((req, res) => {
    if (req.url === '/data') {
    if (req.method === 'GET') {
      const data = readDB();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
    else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const newData = JSON.parse(body);
        writeDB(newData);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Data created', data: newData }));
      });
    }
    else if (req.method === 'PUT') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const updatedData = JSON.parse(body);
        writeDB(updatedData);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'laphah', data: updatedData }));
      });
    }
    else if (req.method === 'DELETE') {
      writeDB({});
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Data deleted' }));
    }
    else {
      res.writeHead(405);
      res.end('Method Not Allowed');
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  else if (req.url==='/charan'){
    res.write("charan route")
    res.end()
  }
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
