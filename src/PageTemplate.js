const React = require('react');

class PageTemplate extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Misojataru-bot</title>
          <meta charset="utf-8"/>
        </head>
        <body>
          <h1>Welcome to Misojataru-bot</h1>
        </body>
      </html>
    );
  }
}

module.exports = PageTemplate;
