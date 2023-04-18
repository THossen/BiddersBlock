CREATE TABLE IF NOT EXISTS users
(
    userID          INT             PRIMARY KEY,
    userName        VARCHAR(50)     NOT NULL,
    userEmail       VARCHAR(50)     NOT NULL,
    userPassword    VARCHAR(50)     NOT NULL,
    userFirstName   VARCHAR(50)     NOT NULL,
    userLastName    VARCHAR(50)     NOT NULL,
    userAddress     VARCHAR(50)     NOT NULL
);


CREATE TABLE IF NOT EXISTS roles
(
    roleID      INT             PRIMARY KEY,
    roleName    VARCHAR(50)     NOT NULL
);

CREATE TABLE IF NOT EXISTS userRoles
(
    userID      INT     NOT NULL,
    roleID      INT     NOT NULL,

    FOREIGN KEY (userID) REFERENCES users (userID),
    FOREIGN KEY (roleID) REFERENCES roles (roleID)
);

CREATE TABLE IF NOT EXISTS items
(
    itemID              INT            PRIMARY KEY,
    sellerID            INT             NOT NULL,
    itemName            VARCHAR(50)     NOT NULL,
    itemDescription     VARCHAR(100)    NOT NULL,
    startingPrice       DECIMAL(10,2)   NOT NULL,
    auctionStartTime    DATETIME        NOT NULL,
    auctionEndTime      DATETIME        NOT NULL,
    currentBidAmount    DECIMAL(10,2)   NOT NULL,
    currentBidderID     INT,

    FOREIGN KEY (sellerID) REFERENCES users (userID),
    FOREIGN KEY (currentBidderID) REFERENCES users (userID)
);

CREATE TABLE IF NOT EXISTS bids
(
    bidID       INT             PRIMARY KEY,
    bidderID    INT             NOT NULL,
    itemID      INT             NOT NULL,
    bidAmount   DECIMAL(10,2)   NOT NULL,
    bid_time    DATETIME        NOT NULL,

    FOREIGN KEY (bidderID) REFERENCES users (userID),
    FOREIGN KEY (itemID) REFERENCES items (itemID)
);

CREATE TABLE IF NOT EXISTS category
(
    categoryID      INT             PRIMARY KEY,
    categoryName    VARCHAR(50)     NOT NULL
);

CREATE TABLE IF NOT EXISTS itemCategory
(
    itemID      INT     NOT NULL,
    categoryID  INT     NOT NULL,

    FOREIGN KEY (itemID) REFERENCES items (itemID),
    FOREIGN KEY (categoryID) REFERENCES category (categoryID)
);

INSERT OR REPLACE INTO users VALUES 
    (1, 'johndoe', 'johndoe@example.com', 'password', 'John', 'Doe', '123 Main St'),
    (2, 'janedoe', 'janedoe@example.com', 'password', 'Jane', 'Doe', '456 Elm St'),
    (3, 'bobsmith', 'bobsmith@example.com', 'password', 'Bob', 'Smith', '789 Oak St');


INSERT OR REPLACE INTO roles VALUES 
    (1, 'user'),
    (2, 'admin');


INSERT OR REPLACE INTO userRoles VALUES 
    (1, 1),
    (2, 1),
    (3, 2);


INSERT OR REPLACE INTO items VALUES
    (1, 2, 'Painting', 'A beautiful painting', 100.00, '2023-04-15 12:00:00', '2023-04-20 12:00:00', 100.00, NULL),
    (2, 2, 'Watch', 'A luxury watch', 500.00, '2023-04-15 12:00:00', '2023-04-22 12:00:00', 500.00, 1),
    (3, 1, 'Sneakers', 'A rare pair of sneakers', 200.00, '2023-04-15 12:00:00', '2023-04-25 12:00:00', 200.00, NULL);


INSERT OR REPLACE INTO bids VALUES 
    (1, 2, 1, 125.00, '2023-04-17 12:00:00'),
    (2, 3, 1, 150.00, '2023-04-18 12:00:00'),
    (3, 1, 2, 550.00, '2023-04-20 12:00:00');

INSERT OR REPLACE INTO category VALUES
    (1, 'Art'),
    (2, 'Jewelry'),
    (3, 'Shoes');

INSERT OR REPLACE INTO itemCategory VALUES 
    (1, 1),
    (2, 2),
    (3, 3);