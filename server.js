const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve av.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'av.html'));
});

// Serve noones.html at a different route
app.get('/noones', (req, res) => {
    res.sendFile(path.join(__dirname, 'noones.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});