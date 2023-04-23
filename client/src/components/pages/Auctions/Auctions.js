import React from "react";
import AuctionCard from "./AuctionCard";
import { Link } from "react-router-dom";
import AuctionData from "./AuctionData";
import ListAuctionForm from "./AddAuctionForm";

const Auctions = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-4 space-x-4 space-y-4">
      {AuctionData.map((auction) => (
        <Link key={auction.id} to={`/auctions/${auction.id}`}>
          <AuctionCard
            itemName={auction.itemName}
            itemDescription={auction.itemDescription}
            currentBid={auction.currentBid}
            itemPicture={auction.itemPicture}
          />
        </Link>
      ))}
    </div>
  );
};

export default Auctions;
