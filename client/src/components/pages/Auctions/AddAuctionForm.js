// AddAuctionForm.js
import { useState } from "react";
import axios from "axios";

const AddAuctionForm = ({ onAuctionAdded }) => {
  const [formData, setFormData] = useState({
    sellerID: "",
    itemName: "",
    itemDescription: "",
    startingPrice: "",
    auctionStartTime: "",
    auctionEndTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/add-auction", formData);
      console.log(response.data.message);
      onAuctionAdded(); // Call the onAuctionAdded prop here
    } catch (error) {
      console.error("Error adding auction:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="sellerID"
        value={formData.sellerID}
        onChange={handleChange}
        placeholder="Seller ID"
        required
      />
      <input
        type="text"
        name="itemName"
        value={formData.itemName}
        onChange={handleChange}
        placeholder="Item Name"
        required
      />
      <input
        type="text"
        name="itemDescription"
        value={formData.itemDescription}
        onChange={handleChange}
        placeholder="Item Description"
        required
      />
      <input
        type="number"
        name="startingPrice"
        value={formData.startingPrice}
        onChange={handleChange}
        placeholder="Starting Price"
        required
      />
      <input
        type="datetime-local"
        name="auctionStartTime"
        value={formData.auctionStartTime}
        onChange={handleChange}
        placeholder="Auction Start Time"
        required
      />
      <input
        type="datetime-local"
        name="auctionEndTime"
        value={formData.auctionEndTime}
        onChange={handleChange}
        placeholder="Auction End Time"
        required
      />
      <button type="submit">Add Auction</button>
    </form>
  );
};

export default AddAuctionForm;
