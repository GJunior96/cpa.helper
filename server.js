const http = require('http'),
      config = require('./config'),
      parse = require('url').parse,
      fileHandler = require('./fileHandler'),
      rootFolder = config.rootFolder,
      types = config.types,
      defaultIndex = config.defaultIndex;

var server;

module.exports = server = http.createServer();

server.on('request', onRequest);

function onRequest(req, res) {
    let filename = parse(req.url).pathname,
        fullPath,
        extension;
    
    if(filename === '/') filename = defaultIndex;
    
    fullPath = rootFolder + filename;
    extension = filename.substr(filename.lastIndexOf('.') + 1);
    
    fileHandler(fullPath, (data) => {
        res.writeHead(200, {
            'Content-Type': types[extension] || 'text/plain',
            'Content-Length': data.length
        });
        res.end(data);
    }, (err) => {
        res.writeHead(404);
        res.end();
    });
};