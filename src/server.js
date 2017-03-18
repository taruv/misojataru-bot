const express = require('express');
require('babel-register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const PageTemplate = require('./PageTemplate');

const app = express();

app.get('/', function (req, res) {
    if (req.query['hub.verify_token'] === 'misojataru_bot_token') {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong validation token');
    }
});

app.post('/', function (req, res) {
  var data = req.body;
  if (data.object === 'page') {
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });
    res.sendStatus(200);
  }
});

function receivedMessage(event) {
  console.log("Message data: ", event.message);
};

app.get('/', (request, response) => {
  response.status(200).end(ReactDOMServer.renderToStaticMarkup(React.createElement(PageTemplate)));
});

const port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
