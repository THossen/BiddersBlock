function AuctionCard(props) {
  const { itemPicture, itemName, itemDescription, currentBidAmount } = props;
  console.log("Item picture URL:", itemPicture);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={itemPicture} alt={itemName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{itemName}</div>
        <p className="text-gray-700 text-base">{itemDescription}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Current Bid: ${currentBidAmount}
        </span>
      </div>
    </div>
  );
}

export default AuctionCard;
