const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

const db = new sqlite3.Database('./backend/mysqlite.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// perform a SELECT query to ensure there tables work
db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(rows);
    }
  });

  db.all('SELECT * FROM items', [], (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(rows);
    }
  });

  db.all('SELECT * FROM bids', [], (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(rows);
    }
  });

  db.all('SELECT * FROM category', [], (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(rows);
    }
  });

  db.all('SELECT * FROM itemCategory', [], (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(rows);
    }
  });

app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
  const { userName, userEmail, userPassword, userFirstname, userLastname, userAddress } = req.body;
  db.run('INSERT INTO users (userName, userEmail, userPassword, userFirstname, userLastname, userAddress) VALUES (?, ?, ?, ?, ?, ?)', [userName, userEmail, userPassword, userFirstname, userLastname, userAddress], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to register user.' });
    } else {
      console.log(`User ${userName} is registered.`);
      res.status(200).json({ message: 'User registered successfully.' });
    }
  });
});

app.post('/login', (req, res) => {
  const { userName, userPassword } = req.body;
  db.get('SELECT * FROM users WHERE userName = ? AND userPassword = ?', [userName, userPassword], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to login.' });
    } else if (!row) {
      res.status(401).json({ error: 'Invalid credentials.' });
    } else {
      console.log(`User ${userName} logged in.`);
      res.status(200).json({ message: 'User logged in successfully.' });
    }
  });
});

const port = 3001; // server port
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});