const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = {};

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users[username] = { password: password };

  res.json({ message: 'User created successfully' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users[username];

  // Check if user exists
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' });
  }

  if (!password === user.password) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Logged in successfully' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
