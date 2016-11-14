const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Application = require('./app');
const port = 4000;

const { createElement } = React;

const site = `
<!doctype html>
  <html>
    <body>
      <div id='container'>${ReactDOMServer.renderToString(createElement(Application, null))}</div>
    <script src='bundle.js'></script>
    </body>
  </html>
`;

app.use(express.static('public'));

app.use('/', (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.end(site);
});

app.listen(port, () => console.log('started %d', port));
