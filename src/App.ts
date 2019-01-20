import * as express from "express";

import {ContentRetrival} from "ContentRetrival";

// Listen on provided port for requests
const PORT = 5000;
const app = express();


app.get('/gimmiegimmie', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
  })
});

app.get('/sound', (req, res) => {
  ContentRetrival.requestSound();
  res.status(200).send({
      success: 'true',
      message:'content here!'
  })
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
