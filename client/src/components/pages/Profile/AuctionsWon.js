// AuctionsWon.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../Providers/useAuth';
import AuctionsWonCard from './AuctionsWonCard';

const AuctionsWon = () => {
  const [wonAuctions, setWonAuctions] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchWonAuctions = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/won-auctions/${user.userID}`);
        setWonAuctions(response.data.auctions);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWonAuctions();
  }, [user]);

  return (
    <div>
      <h2 className="font-bold text-5xl text-center py-8">Auctions Won</h2>
      {wonAuctions.length === 0 ? (
        <p>No auctions won</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wonAuctions.map((auction) => (
            <AuctionsWonCard
              key={auction.itemID}
              itemPicture={auction.itemPicture}
              itemName={auction.itemName}
              itemDescription={auction.itemDescription}
              highestPrice={auction.highestPrice}
              auctionEndTime={auction.auctionEndTime}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuctionsWon;
