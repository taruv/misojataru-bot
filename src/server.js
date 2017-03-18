const express = require('express');
require('babel-register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const PageTemplate = require('./PageTemplate');

const app = express();

app.get('/', (request, response) => {
  response.status(200).end(ReactDOMServer.renderToStaticMarkup(React.createElement(PageTemplate)));
});

const port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
