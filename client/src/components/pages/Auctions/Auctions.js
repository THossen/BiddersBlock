import React from "react";

const Auctions = () => {
  const auctionsData = [
    {
      id: 1,
      title: "Auction 1",
      description: "This is the description for Auction 1.",
      price: "$100",
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "Auction 2",
      description: "This is the description for Auction 2.",
      price: "$200",
      image: "https://picsum.photos/200",
    },
    {
      id: 3,
      title: "Auction 3",
      description: "This is the description for Auction 3.",
      price: "$300",
      image: "https://picsum.photos/200",
    },
    {
      id: 4,
      title: "Auction 4",
      description: "This is the description for Auction 3.",
      price: "$300",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      {auctionsData.map((auction) => (
        <div
          key={auction.id}
          className="max-w-md rounded overflow-hidden shadow-lg m-4"
        >
          <img className="w-full" src={auction.image} alt={auction.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{auction.title}</div>
            <p className="text-gray-700 text-base">{auction.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {auction.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Auctions;
