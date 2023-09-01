const express = require('express');
require("dotenv").config();

const app = express();

const port = process.env.APP_PORT ?? 8000;

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
