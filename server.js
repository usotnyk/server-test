const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());

app.post('/api/import-user', (req, res) => {
  if (req.body && req.body.firstName === 'Doug') {
    res
      .status(400)
      .json({
        msg: `User ${req.body.firstName} ${req.body.lastName} already exists - test error`,
      });
  } else {
    res.json({ ...req.body, status: 'saved' });
  }
});

app.post('/api/import-user-error', (req, res) =>
  res.status(400).json({ msg: 'User already exists' })
);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
