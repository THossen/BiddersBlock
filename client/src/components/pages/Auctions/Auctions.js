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
    <div className="grid grid-cols-3 gap-4 p-4">
      {auctionData.map((auction) => (
        <Link key={auction.itemID} to={`/auctions/${auction.itemID}`}>
          <div>
            <AuctionCard
              itemName={auction.itemName}
              itemDescription={auction.itemDescription}
              currentBidAmount={auction.currentBidAmount}
              itemPicture={auction.itemPicture}
              highestPrice={auction.highestPrice}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Auctions;
