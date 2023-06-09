import { useEffect, useContext } from "react";
import AuctionCard from "./AuctionCard";
import { Link } from "react-router-dom";
import { AuctionContext } from "../../../Providers/AuctionContext";

const Auctions = () => {
  const { auctionData, fetchData } = useContext(AuctionContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderAuctionCard = (auction) => {
    const currentTime = new Date();
    const endTime = new Date(auction.auctionEndTime);
    const isAuctionEnded = endTime <= currentTime;

    const auctionCard = (
      <AuctionCard
        key={auction.itemID}
        itemName={auction.itemName}
        itemDescription={auction.itemDescription}
        itemPicture={auction.itemPicture}
        highestPrice={auction.highestPrice}
        auctionStartTime={auction.auctionStartTime}
        auctionEndTime={auction.auctionEndTime}
        isAuctionEnded={isAuctionEnded}
      />
    );

    return isAuctionEnded ? (
      auctionCard
    ) : (
      <Link key={auction.itemID} to={`/auctions/${auction.itemID}`}>
        {auctionCard}
      </Link>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {auctionData.map((auction) => renderAuctionCard(auction))}
    </div>
  );
};

export default Auctions;
