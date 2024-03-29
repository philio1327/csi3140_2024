const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.get('/descriptions', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'descriptions.json'));
});

app.get('/full_images', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'full_images.json'));
});

app.get('/thumbnails', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'thumbnails.json'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});