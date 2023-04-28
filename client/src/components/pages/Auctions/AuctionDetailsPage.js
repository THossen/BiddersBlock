import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuctionContext } from "../../Providers/AuctionContext";
import LiveBids from "./LiveBids";

function AuctionDetailsPage() {
  const { id } = useParams();
  const { auctionData } = useContext(AuctionContext);
  const [newBid, setNewBid] = useState("");

  const [auction, setAuction] = useState(null);
  const [highestPrice, setHighestPrice] = useState(null);

  useEffect(() => {
    if (auctionData.length) {
      const foundAuction = auctionData.find(
        (auction) => auction.itemID === parseInt(id)
      );
      setAuction(foundAuction);
      setHighestPrice(foundAuction?.highestPrice);
    }
  }, [auctionData, id]);

  if (!auctionData.length) {
    return <div>Loading...</div>;
  }

  if (!auction) {
    return <div>Auction not found</div>;
  }

  const { itemName, itemDescription, currentBidAmount, itemPicture } = auction;

  const handleBidChange = (event) => {
    setNewBid(event.target.value);
  };

  const handleBidSubmit = (event) => {
    event.preventDefault();
    if (parseFloat(newBid) < parseFloat(auction.startingPrice)) {
      alert(`The bid should be at least ${auction.startingPrice}`);
      return;
    }
    console.log(`Placing bid of ${newBid} for auction ${id}`);
    setHighestPrice(newBid);
    setNewBid("");
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md"
            src={itemPicture}
            alt={itemName}
          />
        </div>
        <div className="bg-violet-950 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-white">{itemName}</h1>
          <p className="mt-4 text-xl text-white">{itemDescription}</p>
          <p className="mt-8 text-3xl font-bold text-yellow-400">
            Starting Price: ${currentBidAmount}
          </p>
          <p className="mt-4 text-2xl font-bold text-green-400">
            Highest bid: ${highestPrice ? highestPrice : currentBidAmount}
          </p>
          <form className="mt-8" onSubmit={handleBidSubmit}>
            <div className="flex">
              <label htmlFor="bid-amount" className="text-xl mr-4 text-white">
                Place a Bid:
              </label>
              <div className="relative">
                <input
                  id="bid-amount"
                  type="number"
                  className="block w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-md leading-5 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter bid amount"
                  value={newBid}
                  onChange={handleBidChange}
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-cyan-500 hover:bg-sky-700"
            >
              Submit Bid
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <LiveBids itemID={id} />
      </div>
    </div>
  );
}

export default AuctionDetailsPage;
