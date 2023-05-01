import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuctionContext } from "../../Providers/AuctionContext";
import useCountdown from "../../Providers/useCountdown";
import LiveBids from "./LiveBids";
import useAuth from "../../Providers/useAuth";
import axios from 'axios';

function AuctionDetailsPage() {
  const { id } = useParams();
  const { auctionData } = useContext(AuctionContext);
  const [newBid, setNewBid] = useState("");
  const [auction, setAuction] = useState(null);
  const [highestPrice, setHighestPrice] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (auctionData.length) {
      const foundAuction = auctionData.find(
        (auction) => auction.itemID === parseInt(id)
      );
      setAuction(foundAuction);
      setHighestPrice(foundAuction?.highestPrice);
    }
  }, [auctionData, id]);

  const timeLeft = useCountdown(
    auction ? new Date(auction.auctionEndTime) : new Date()
  );

  if (!auctionData.length) {
    return <div>Loading...</div>;
  }

  if (!auction) {
    return <div>Auction not found</div>;
  }

  const {
    itemName,
    itemDescription,
    startingPrice,
    itemPicture,
  } = auction;

  const handleBidChange = (event) => {
    setNewBid(event.target.value);
  };

  const handleBidSubmit = async (event) => {
    event.preventDefault();
    if (parseFloat(newBid) < parseFloat(auction.startingPrice)) {
      alert(`The bid should be at least ${auction.startingPrice}`);
      return;
    }
    if (highestPrice && parseFloat(newBid) <= parseFloat(highestPrice)) {
      alert(`The bid should be at least $1 more than the current highest bid`);
      return;
    }
    console.log(`Placing bid of ${newBid} for auction ${auction.itemID}`);
    try {
      const response = await axios.post('http://localhost:3001/add-bid', {
        bidderID: user.userID,
        itemID: auction.itemID,
        bidAmount: newBid,
        bid_time: new Date().toLocaleString() + ""
      });
      console.log(response.data);
      setHighestPrice(newBid);
      setNewBid("");
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg shadow-md"
            src={itemPicture}
            alt={itemName}
          />
        </div>
        <div className="bg-violet-950 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-white">{itemName}</h1>
          <p className="mt-4 text-xl text-white">{itemDescription}</p>
          <p className="mt-8 text-3xl font-bold text-yellow-400">
            Starting Price: ${startingPrice}
          </p>
          <p className="mt-4 text-2xl font-bold text-green-400">
            Highest bid: ${highestPrice}
          </p>
          <p className="mt-4 text-2xl font-bold text-red-500">
            Time left: {timeLeft}
          </p>
          <form className="mt-8 flex items-center" onSubmit={handleBidSubmit}>
            <label htmlFor="bid-amount" className="text-xl mr-4 text-white">
              Place a Bid:
            </label>
            <div className="relative flex-1">
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
            <button
              type="submit"
              className="ml-4 py-2 px-4 font-bold rounded-full text-white bg-cyan-500 hover:bg-sky-700 hover:scale-110 duration-200 ease-in-out"
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
