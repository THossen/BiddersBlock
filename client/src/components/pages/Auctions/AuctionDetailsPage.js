import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { AuctionContext } from "../../Providers/AuctionContext";

function AuctionDetailsPage() {
  const { id } = useParams();
  const { auctionData } = useContext(AuctionContext);
  const [newBid, setNewBid] = useState(""); // Move this line up

  if (!auctionData.length) {
    return <div>Loading...</div>;
  }

  const auction = auctionData.find(
    (auction) => auction.itemID === parseInt(id)
  );

  if (!auction) {
    return <div>Auction not found</div>;
  }

  const { itemName, itemDescription, currentBidAmount, itemPicture } = auction;

  const handleBidChange = (event) => {
    setNewBid(event.target.value);
  };

  const handleBidSubmit = (event) => {
    event.preventDefault();
    console.log(`Placing bid of ${newBid} for auction ${id}`);
    setNewBid("");
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            className="h-96 object-cover w-full rounded-lg shadow-md"
            src={itemPicture}
            alt={itemName}
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">{itemName}</h1>
          <p className="mt-4 text-xl">{itemDescription}</p>
          <p className="mt-8 text-3xl font-bold text-red-500">
            Starting bid: ${currentBidAmount}
          </p>
          <form className="mt-8" onSubmit={handleBidSubmit}>
            <div className="flex">
              <label htmlFor="bid-amount" className="text-xl mr-4">
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
    </div>
  );
}

export default AuctionDetailsPage;
