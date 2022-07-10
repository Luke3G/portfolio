src="https://unpkg.com/aos@2.3.1/dist/aos.js"


const express = require('express');
const app = express();
const path = require('path');

//where we expose files or directories for public use
app.use(express.static(path.join(__dirname)));

//where we set our routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

