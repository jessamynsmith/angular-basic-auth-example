'use strict';

var sslRedirect = require('heroku-ssl-redirect'),
  express = require('express'),
  app = express();

// enable ssl redirect
app.use(sslRedirect());

app.use(express.static('app'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// API Routes
app.post('/api/v1/authenticate', function(request, response) {
  var auth = require('basic-auth');
  var user = auth(request);
  if (user.name == 'valid@example.com' && user.pass == 'valid') {
    response.send("You are now logged in!");
  } else {
    response.status(401).send("Invalid login information");
  }
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
