process.title = 'cpa.helper';
var args = process.argv,
    port = args[2] || 7070,
    server = require('./server');

server.listen(port, function() {
    console.log(`Server started at http://localhost:${port}`);
});