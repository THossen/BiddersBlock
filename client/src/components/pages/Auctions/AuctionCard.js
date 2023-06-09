function AuctionCard(props) {
  const {
    itemPicture,
    itemName,
    itemDescription,
    highestPrice,
    auctionStartTime,
    auctionEndTime,
    isAuctionEnded,
  } = props;
  const startTime = new Date(auctionStartTime);
  const endTime = new Date(auctionEndTime);

  const overlayClass = isAuctionEnded
    ? "absolute inset-0 bg-gray-900 opacity-50"
    : "";
  const soldClass = isAuctionEnded
    ? "absolute inset-0 flex items-center justify-center text-4xl font-bold text-white"
    : "hidden";

  return (
    <div className="rounded overflow-hidden shadow-lg h-full relative hover:scale-105 duration-200 ease-in-out">
      <img
        className="w-full h-96 object-cover"
        src={itemPicture}
        alt={itemName}
      />
      <div className={overlayClass}></div>
      <div className={soldClass}>SOLD</div>
      <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2">{itemName}</div>
        <p className="text-gray-700 text-base">{itemDescription}</p>
      </div>
      <div className="px-6 pb-6">
        <span className="inline-block bg-red-200 rounded-lg px-3 py-1 text-sm font-bold text-black mr-2">
          Highest Bid: ${highestPrice || " No Bids"}
        </span>
        <p className="text-gray-700 text-sm">
          Starts: {startTime.toLocaleString()} | Ends:{" "}
          {endTime.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default AuctionCard;
