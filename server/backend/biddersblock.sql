CREATE TABLE IF NOT EXISTS users
(
    userID          INTEGER     PRIMARY KEY     AUTOINCREMENT,
    userName        TEXT        NOT NULL,
    userEmail       TEXT        NOT NULL,
    userPassword    TEXT        NOT NULL,
    userFirstName   TEXT        NOT NULL,
    userLastName    TEXT        NOT NULL,
    userAddress     TEXT        NOT NULL
);


CREATE TABLE IF NOT EXISTS roles
(
    roleID      INTEGER     PRIMARY KEY     AUTOINCREMENT,
    roleName    TEXT        NOT NULL
);

CREATE TABLE IF NOT EXISTS userRoles
(
    userID      INTEGER     NOT NULL,
    roleID      INTEGER     NOT NULL,

    FOREIGN KEY (userID) REFERENCES users (userID),
    FOREIGN KEY (roleID) REFERENCES roles (roleID)
);

CREATE TABLE IF NOT EXISTS items
(
    itemID              INTEGER         PRIMARY KEY     AUTOINCREMENT,
    sellerID            INTEGER         NOT NULL,
    itemName            TEXT            NOT NULL,
    itemDescription     TEXT            NOT NULL,
    itemPicture         TEXT,
    startingPrice       DECIMAL(10,2)   NOT NULL,
    highestPrice       DECIMAL(10,2),
    auctionStartTime    DATETIME        NOT NULL,
    auctionEndTime      DATETIME        NOT NULL,
    currentBidAmount    DECIMAL(10,2)   NOT NULL,
    currentBidderID     INTEGER,

    FOREIGN KEY (sellerID) REFERENCES users (userID),
    FOREIGN KEY (currentBidderID) REFERENCES users (userID)
);

CREATE TABLE IF NOT EXISTS bids
(
    bidID       INTEGER         PRIMARY KEY     AUTOINCREMENT,
    bidderID    INTEGER         NOT NULL,
    itemID      INTEGER         NOT NULL,
    bidAmount   DECIMAL(10,2)   NOT NULL,
    bid_time    DATETIME        NOT NULL,

    FOREIGN KEY (bidderID) REFERENCES users (userID),
    FOREIGN KEY (itemID) REFERENCES items (itemID)
);

CREATE TABLE IF NOT EXISTS category
(
    categoryID      INTEGER      PRIMARY KEY    AUTOINCREMENT,
    categoryName    TEXT         NOT NULL
);

CREATE TABLE IF NOT EXISTS itemCategory
(
    itemID      INTEGER     NOT NULL,
    categoryID  INTEGER     NOT NULL,

    FOREIGN KEY (itemID) REFERENCES items (itemID),
    FOREIGN KEY (categoryID) REFERENCES category (categoryID)
);

CREATE TABLE IF NOT EXISTS contactForm(
    contactID       INTEGER    PRIMARY KEY      AUTOINCREMENT,
    contactName     TEXT    NOT NULL,
    contactEmail    TEXT    NOT NULL,
    contactNumber   INTEGER NOT NULL,
    contactMessage  TEXT    NOT NULL
);

INSERT OR REPLACE INTO users (userName, userEmail, userPassword, userFirstName, userLastName, userAddress)
VALUES 
    ('johndoe', 'johndoe@example.com', 'password', 'John', 'Doe', '123 Main St'),
    ('janedoe', 'janedoe@example.com', 'password', 'Jane', 'Doe', '456 Elm St'),
    ('bobsmith', 'bobsmith@example.com', 'password', 'Bob', 'Smith', '789 Oak St');


INSERT OR REPLACE INTO roles (roleName)
VALUES 
    ('user'),
    ('admin');


INSERT OR REPLACE INTO userRoles 
VALUES 
    (1, 1),
    (2, 1),
    (3, 2);


INSERT OR REPLACE INTO items (sellerID, itemName, itemDescription, startingPrice, highestPrice, auctionStartTime, auctionEndTime, currentBidAmount, currentBidderID, itemPicture)
VALUES
    (2, 'Painting', 'A beautiful painting', 100.00, 150, '2023-04-15 12:00:00', '2023-04-20 12:00:00', 125.00, 3, 'https://picsum.photos/200'),
    (2, 'Watch', 'A luxury watch', 100.00, 550, '2023-04-15 12:00:00', '2023-04-22 12:00:00', 100.00, 1, 'https://picsum.photos/200'),
    (1, 'Sneakers', 'A rare pair of sneakers', 100.00, NULL, '2023-04-15 12:00:00', '2023-04-25 12:00:00', 200.00, NULL, 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80');


INSERT OR REPLACE INTO bids (bidderID, itemID, bidAmount, bid_time)
VALUES 
    (2, 1, 125.00, '2023-04-17 12:00:00'),
    (3, 1, 150.00, '2023-04-18 12:00:00'),
    (1, 2, 550.00, '2023-04-20 12:00:00');

INSERT OR REPLACE INTO category (categoryName)
VALUES
    ('Art'),
    ('Jewelry'),
    ('Shoes');

INSERT OR REPLACE INTO itemCategory VALUES 
    (1, 1),
    (2, 2),
    (3, 3);
