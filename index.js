process.title = 'cpa.helper';

const args = process.argv,
      port = args[2] || 8000,
      host = "localhost",
      server = require('./server');

server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});
