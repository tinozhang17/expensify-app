const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', '/public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// This makes sure that index.html gets served up no matter which url gets passed in. We need to do this because routing is handled in the index.html file, thus requiring us to serve up index.html no matter what.
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('The server is up');
});