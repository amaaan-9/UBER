const http = require('http');

const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Handle process termination signals
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing server');
    server.close(() => {
        console.log('Server closed');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing server');
    server.close(() => {
        console.log('Server closed');
    });
});

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
        process.exit(1);
    } else {
        throw error;
    }
});


