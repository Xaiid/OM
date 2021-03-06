var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
