const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();

const db = new sqlite3.Database("./backend/mysqlite.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database.");
  }
});

// perform a SELECT query to ensure there tables work
db.all("SELECT * FROM users", [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }
});

db.all("SELECT * FROM items", [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }
});

db.all("SELECT * FROM bids", [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }
});

db.all("SELECT * FROM category", [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }
});

db.all("SELECT * FROM itemCategory", [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const {
    userName,
    userEmail,
    userPassword,
    userFirstname,
    userLastname,
    userAddress,
  } = req.body;
  db.run(
    "INSERT INTO users (userName, userEmail, userPassword, userFirstname, userLastname, userAddress) VALUES (?, ?, ?, ?, ?, ?)",
    [
      userName,
      userEmail,
      userPassword,
      userFirstname,
      userLastname,
      userAddress,
    ],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to register user." });
      } else {
        console.log(`User ${userName} is now registered.`);
        res.status(200).json({ message: "User registered successfully." });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { userName, userPassword } = req.body;
  db.get(
    "SELECT * FROM users WHERE userName = ? AND userPassword = ?",
    [userName, userPassword],
    (err, row) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to login." });
      } else if (!row) {
        res.status(401).json({ error: "Invalid credentials." });
      } else {
        console.log(`User ${userName} logged in.`);
        res
          .status(200)
          .json({ message: "User logged in successfully.", user: row });
      }
    }
  );
});

app.get("/auctions", (req, res) => {
  db.all("SELECT * FROM items", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Failed to fetch auctions." });
    } else {
      console.log("Fetched rows:", rows);
      res.status(200).json({ auctions: rows });
    }
  });
});

app.post("/add-auction", (req, res) => {
  console.log("Request data", req.body);
  const {
    sellerID,
    itemName,
    itemDescription,
    startingPrice,
    auctionStartTime,
    auctionEndTime,
    itemPicture,
  } = req.body;
  db.run(
    "INSERT INTO items (sellerID, itemName, itemDescription, startingPrice, auctionStartTime, auctionEndTime, currentBidAmount, itemPicture) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      sellerID,
      itemName,
      itemDescription,
      startingPrice,
      auctionStartTime,
      auctionEndTime,
      startingPrice,
      itemPicture,
    ],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to add auction." });
      } else {
        console.log(
          `Auction for ${itemName} added by seller with ID ${sellerID}.`
        );
        res.status(200).json({ message: "Auction added successfully." });
      }
    }
  );
});

app.post("/add-bid", async (req, res) => {
  const { bidAmount, bidderID, itemID } = req.body;
  const bid_time = new Date();

  try {
    const currentItem = await new Promise((resolve, reject) => {
      db.get("SELECT * FROM items WHERE itemID = ?", [itemID], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });

    if (parseFloat(bidAmount) <= parseFloat(currentItem.highestPrice)) {
      res
        .status(400)
        .json({
          error: "Bid amount must be higher than the current highest bid.",
        });
      return;
    }

    const result = await new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO bids (bidderID, itemID, bidAmount, bid_time) VALUES (?, ?, ?, ?)`,
        [bidderID, itemID, bidAmount, bid_time],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this);
          }
        }
      );
    });

    await new Promise((resolve, reject) => {
      db.run(
        `UPDATE items SET currentBidAmount = ?, currentBidderID = ?, highestPrice = ? WHERE itemID = ?`,
        [bidAmount, bidderID, bidAmount, itemID],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this);
          }
        }
      );
    });

    res.status(201).json({ bidID: result.lastID });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/latest-bids/:itemID", (req, res) => {
  const { itemID } = req.params;
  db.all(
    "SELECT bidderID, bidAmount, bid_time FROM bids WHERE itemID = ? ORDER BY bid_time DESC LIMIT 10",
    [itemID],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to fetch bids." });
      } else {
        //console.log('Fetched bids:', rows);
        res.status(200).json({ bids: rows });
      }
    }
  );
});

app.get("/won-auctions/:userID", (req, res) => {
  const { userID } = req.params;
  db.all(
    'SELECT * FROM items WHERE currentBidderID = ? AND auctionEndTime < datetime("now")',
    [userID],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to fetch won auctions." });
      } else {
        res.status(200).json({ auctions: rows });
      }
    }
  );
});

const port = 3001; // server port
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
