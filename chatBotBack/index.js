const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for requests
app.use(cors({}));

app.get('', (req, res) => {
  res.send({ data: 'hello' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(4000, () => {
  console.log('App running on port 4000');
});
