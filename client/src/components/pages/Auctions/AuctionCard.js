function AuctionCard(props) {
  const { itemPicture, itemName, itemDescription, highestPrice } = props;

  return (
    <div className="rounded overflow-hidden shadow-lg h-full">
      <img
        className="w-full h-96 object-cover"
        src={itemPicture}
        alt={itemName}
      />
      <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2">{itemName}</div>
        <p className="text-gray-700 text-base">{itemDescription}</p>
      </div>
      <div className="px-6 pb-6">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Highest Bid: ${highestPrice || "None"}
        </span>
      </div>
    </div>
  );
}

export default AuctionCard;