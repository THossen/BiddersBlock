import { Routes, Route } from "react-router-dom";
import UserInfo from "./UserInfo";
import AuctionsWon from "./AuctionsWon";
import AddAuctionForm from "../Auctions/AddAuctionForm";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AuctionContext } from "../../Providers/AuctionContext";
import useAuth from "../../Providers/useAuth";

const ProfilePage = () => {

  const { fetchData } = useContext(AuctionContext);
  const { user } = useAuth();

  return (
    <div className="flex font-bold text-5xl text-center py-8">
      <Sidebar />
      <div className="main ml-64 mt-16">
        <Routes>
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route path="/AuctionsWon" element={<AuctionsWon />} />
          <Route path="/AddAuctionForm" element={<AddAuctionForm onAuctionAdded={fetchData} userID={user.userID} />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfilePage;