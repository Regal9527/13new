const http = require('http');

const server = http.createServer((request, response) => {
	response.end('Hello from different World\n');
});

server.listen(3000, () => {
	console.log('Server is running...');
});
