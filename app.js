const express = require('express');
const app = express();
const startupRoute = require('./routes/startupRoute')


app.use('/startups',startupRoute)

app.get('/', async (req, res) => {
    res.send("Welcome to the platform")
});

const port = 3000;
app.listen(port, () => {
  console.log('Server running on port', port);
});
