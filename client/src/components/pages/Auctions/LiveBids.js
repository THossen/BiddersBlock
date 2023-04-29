import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveBids = ({ itemID }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = () => {
      axios.get(`http://localhost:3001/latest-bids/${itemID}`)
        .then(res => {
          setBids(res.data.bids);
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchBids();
    const interval = setInterval(fetchBids, 5000);

    return () => clearInterval(interval);
  }, [itemID]);

  return (
    <div>
      <h3>Latest Bids:</h3>
      {bids.map(bid => (
        <p key={bid.itemID}>
          User {bid.bidderID} bid ${bid.bidAmount} at {bid.bid_time}
        </p>
      ))}
    </div>
  );
};

export default LiveBids;
