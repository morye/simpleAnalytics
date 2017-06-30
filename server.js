const express = require('express');
const cors = require('cors');
const fs = require('fs');

const buffer = fs.readFileSync('./public/json/sample_data.json');
const data = JSON.parse(buffer);
const app = express();
app.use(cors());

app.get('/data', (req, res) => {
  if (data) {
    res.json(data);
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: 'data not found' });
  }
});

app.use('/', express.static(__dirname + '/'));

console.log(`Starting server on port 3000`);
app.listen(3000);
