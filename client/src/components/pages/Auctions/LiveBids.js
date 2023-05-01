import React, { useState, useEffect } from "react";
import axios from "axios";

const LiveBids = ({ itemID }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = () => {
      axios
        .get(`http://localhost:3001/latest-bids/${itemID}`)
        .then((res) => {
          setBids(res.data.bids);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchBids();
    const interval = setInterval(fetchBids, 1000);

    return () => clearInterval(interval);
  }, [itemID]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-5">Latest Bids:</h3>
      <div className="space-y-3">
        {bids.map((bid) => (
          <div
            key={bid.itemID}
            className="flex justify-between items-center p-3 border border-gray-300 rounded-md"
          >
            <span className="font-medium">User {bid.bidderID}</span> bid{" "}
            <span className="font-medium text-cyan-500">${bid.bidAmount}</span>{" "}
            at <span className="text-gray-500">{formatDate(bid.bid_time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveBids;
