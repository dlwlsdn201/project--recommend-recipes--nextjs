const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Basic health check or root route
app.get('/', (req, res) => {
  res.send('Recipe Recommendation Server is running');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
