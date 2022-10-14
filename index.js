const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname, '/build'));
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(staticFileMiddleware);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server listening on ${port}... `)
});
