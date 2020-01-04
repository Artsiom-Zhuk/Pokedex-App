const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const port = 8282;

app.get('*/info', (req, res) => {
  res.status(200).send('ok');
});
app.get('*/health', (req, res) => {
  res.status(200).send('ok');
});

app.listen(port, () => {
  console.log(`Running Express on port - ${port}`);
});
