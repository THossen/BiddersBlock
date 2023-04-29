// AddAuctionForm.js
import { useState } from "react";
import axios from "axios";

const AddAuctionForm = ({ onAuctionAdded, userID }) => {
  const [formData, setFormData] = useState({
    sellerID: userID,
    itemName: "",
    itemDescription: "",
    startingPrice: "",
    auctionStartTime: "",
    auctionEndTime: "",
    itemPicture: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/add-auction",
        formData
      );
      console.log(response.data.message);
      onAuctionAdded();
    } catch (error) {
      console.error("Error adding auction:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="itemName"
        value={formData.itemName}
        onChange={handleChange}
        placeholder="Item Name"
        required
        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="itemDescription"
        value={formData.itemDescription}
        onChange={handleChange}
        placeholder="Item Description"
        required
        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="itemPicture"
        value={formData.itemPicture}
        onChange={handleChange}
        placeholder="Item Picture URL"
        required
        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        name="startingPrice"
        value={formData.startingPrice}
        onChange={handleChange}
        placeholder="Starting Price"
        required
        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="datetime-local"
        name="auctionStartTime"
        value={formData.auctionStartTime}
        onChange={handleChange}
        placeholder="Auction Start Time"
        required
        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="datetime-local"
        name="auctionEndTime"
        value={formData.auctionEndTime}
        onChange={handleChange}
        placeholder="Auction End Time"
        required
        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Auction
      </button>
    </form>
  );
};

export default AddAuctionForm;
