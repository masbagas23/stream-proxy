const express = require('express');
const request = require('request');

const app = express();
const shoutcastServer = 'http://45.64.97.82:8072/stream';

app.get('/stream', (req, res) => {
    // Set the headers for audio streaming
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Connection', 'keep-alive');

    // Pipe the request from the Shoutcast server to the response
    request(shoutcastServer)
        .on('error', (err) => {
            console.error('Error connecting to Shoutcast server:', err);
            res.sendStatus(500); // Internal server error
        })
        .pipe(res); // Stream the response directly to the client
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
