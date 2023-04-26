// Auctions.js
import { useEffect, useContext } from "react";
import AuctionCard from "./AuctionCard";
import { Link } from "react-router-dom";
import { AuctionContext } from "../../Providers/AuctionContext";

const Auctions = () => {
  const { auctionData, fetchData } = useContext(AuctionContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex flex-wrap justify-center items-center p-4 space-x-4 space-y-4">
      {auctionData.map((auction) => (
        <Link key={auction.itemID} to={`/auctions/${auction.itemID}`}>
          <AuctionCard
            itemName={auction.itemName}
            itemDescription={auction.itemDescription}
            currentBidAmount={auction.currentBidAmount}
            itemPicture={auction.itemPicture}
          />
        </Link>
      ))}
    </div>
  );
};

export default Auctions;
