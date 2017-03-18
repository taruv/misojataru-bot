const React = require('react');
const FB = require('fb');

FB.options({appId: '149205928935314'});

class PageTemplate extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Misojataru-bot</title>
        </head>
        <body>
          <h1>Welcome to Misojataru-bot</h1>
        </body>
      </html>
    );
  }
}

module.exports = PageTemplate;
