const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.get('/', (req, res) => {
    console.log('Received a request in server with port: ', port);
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});