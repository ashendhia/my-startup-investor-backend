const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const middleware = require("./utils/middleware");
const startupRoute = require('./routes/startupRoute')
const investorRoute = require('./routes/investorRoute')


app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger)

app.get("/", (_, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.use('/startups', startupRoute)
app.use('/investors', investorRoute)


app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log('Server running on port', port);
});
