import { Routes, Route } from "react-router-dom";
import UserInfo from "./UserInfo";
import AuctionsWon from "./AuctionsWon";
import ListAuctionForm from "./ListAuctionForm";
import Sidebar from "./Sidebar";

const ProfilePage = () => {
  return (
    <div className="flex font-bold text-5xl text-center py-8">
      <Sidebar />
      <div className="main ml-64 mt-16">
        <Routes>
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route path="/AuctionsWon" element={<AuctionsWon />} />
          <Route path="/ListAuctionForm" element={<ListAuctionForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfilePage;



