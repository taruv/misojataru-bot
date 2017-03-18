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

app.get('/', (request, response) => {
  response.status(200).end(ReactDOMServer.renderToStaticMarkup(React.createElement(PageTemplate)));
});

const port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
