var express = require("express");
var app = express();

app.get('/', (req, res) => {
  res.send('duck water mouse')
})

app.listen(5000, () => {
  console.log('Running on port 5000.')
})

var metadataRouter = require('./routes/api/token-metadata')
app.use('/api/token-metadata', metadataRouter);

module.exports = app;
