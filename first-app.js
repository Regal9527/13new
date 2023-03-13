 const http = require('http');

const server = http.createServer((request, response) => {
	response.end('Hello shekhar you have got selected  CONGRATULATIONS !!!! \n');
});

server.listen(7000, () => {
	console.log('Server is running...');
});
