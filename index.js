var express = require('express');
var app = express();
var ipaddress=process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
var port=process.env.OPENSHIFT_NODEJS_PORT||3000;

app.listen(port,ipaddress);

app.use(express.static(__dirname+'/public'));
app.get('/', function (req, res) {
  res.send('Assalamu alaikum WRWB!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});