import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How it Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Learn how to buy and sell items on The Bidder's Block
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="shadow-2xl p-6 rounded-3xl transition-all hover:scale-110">
            <h3 className="text-lg font-bold mb-2">
              Step 1: Create an Account
            </h3>
            <p className="text-gray-500 mb-6">
              To start using The Bidder's Block, you'll need to create an
              account. It's quick, easy, and free!
            </p>
          </div>

          <div className="shadow-2xl p-6 rounded-3xl transition-all hover:scale-110">
            <h3 className="text-lg font-bold mb-2">Step 2: Browse Auctions</h3>
            <p className="text-gray-500 mb-6">
              Once you're logged in, you can browse all of the auctions
              available on The Bidder's Block.
            </p>
          </div>

          <div className="shadow-2xl p-6 rounded-3xl transition-all hover:scale-110">
            <h3 className="text-lg font-bold mb-2">Step 3: Place a Bid</h3>
            <p className="text-gray-500 mb-6">
              When you find an auction you're interested in, you can place a
              bid.
            </p>
          </div>

          <div className="shadow-2xl p-6 rounded-3xl transition-all hover:scale-110">
            <h3 className="text-lg font-bold mb-2">Step 4: Win the Auction!</h3>
            <p className="text-gray-500 mb-6">
              If you're the highest bidder when the auction ends, you'll win the
              item!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
