// components/AuctionCarousel.js
import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuctionContext } from "../../Providers/AuctionContext";

const AuctionCarousel = () => {
  const { auctionData } = useContext(AuctionContext);

  return (
    <div className="mx-auto mt-8 w-full lg:w-4/5">
      <Carousel
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        swipeable
        dynamicHeight
        className="carousel-control-center rounded-lg shadow-lg"
        autoPlay
        interval={3000} // Change this value to adjust the interval between transitions (in milliseconds)
        stopOnHover={false}
        transitionTime={500} // Adjust this value to change the transition time (in milliseconds)
      >
        {auctionData.slice(0, 5).map((auction) => (
          <div key={auction.itemID} className="relative">
            <img
              className="w-full h-[600px] object-cover rounded-lg transform hover:scale-105 transition-all duration-300"
              src={auction.itemPicture}
              alt={auction.itemName}
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-gray-400 to-transparent w-full p-4 text-white rounded-b-lg">
              <p className="text-2xl font-bold">{auction.itemName}</p>
              <p className="text-lg">
                Ends: {new Date(auction.auctionEndTime).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AuctionCarousel;
