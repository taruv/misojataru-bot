const express = require('express');
require('babel-register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const PageTemplate = require('./PageTemplate');
const MessengerPlatform = require('facebook-bot-messenger');

const app = express();

const server = require('http').Server(app);
var bot = MessengerPlatform.create({
  pageID: '906336586173615',
  appID: '149205928935314',
  appSecret: '2f5c7e041fc4f2f14f2d20e64ce7808e',
  validationToken: 'misojataru_bot_token',
  pageToken: 'EAACHs7ZAkf5IBAJo8IL3X1maMlZBgZBmcw6BQ5EZBG1OjGfZBJnW5vEPwRq6TaVsNgdlRiSEHHgEX3ZCrEw26krInV6TrOFVckFwKZCrutFv5LgIPLTEGhXBCEbOPefKvTc8D8jmjMCqxLQZCq91b9f3qSVERZC4QO1EWcYJSz3nwdQZDZD'
}, server);
app.use(bot.webhook('/webhook'));
bot.on(MessengerPlatform.Events.MESSAGE, function(userId, message) {
  console.log(userId, message);
});

app.get('/', (request, response) => {
  response.status(200).end(ReactDOMServer.renderToStaticMarkup(React.createElement(PageTemplate)));
});

const port_number = app.listen(process.env.PORT || 8080);
server.listen(port_number);
