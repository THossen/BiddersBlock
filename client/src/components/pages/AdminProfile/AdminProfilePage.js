import { Routes, Route, Outlet } from "react-router-dom";
import UserInfo from "./UserInfo";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AuctionContext } from "../../../Providers/AuctionContext";
import useAuth from "../../../Providers/useAuth";

const AdminProfilePage = () => {
  const { fetchData } = useContext(AuctionContext);
  const { user } = useAuth();

  return (
    <div className="flex flex-col flex-1">
      <div className="flex font-bold text-5xl text-center py-8">
        <Sidebar />
        <div className="main mt-16 flex-1">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<UserInfo />} />
              <Route path="/UserInfo" element={<UserInfo />} />
              <Route path="/ContactRequests" element={<ContactRequests />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;