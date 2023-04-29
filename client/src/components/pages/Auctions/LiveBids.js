import { useState, useEffect } from 'react';
import axios from 'axios';

const LiveBids = ({ itemID }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const res = await axios.get(`/latest-bids/${itemID}`);
        setBids(res.data.bids);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBids();
    const interval = setInterval(() => {
      fetchBids();
    }, 10000); 

    return () => clearInterval(interval);
  }, [itemID]);

  return (
    <div>
      <h3 className='font-bold text-3xl'>Latest Bids:</h3>
      {bids.map((bid) => (
        <p key={bid.bidID}>
          User {bid.bidderID} bid ${bid.bidAmount} at {bid.bid_time}
        </p>
      ))}
    </div>
  );
};

export default LiveBids;
