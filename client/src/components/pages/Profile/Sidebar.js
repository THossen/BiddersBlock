import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";

const Sidebar = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="bg-white h-screen py-4 shadow-xl w-96">
      <div className="flex items-center justify-center text-center">
        <div className="ml-4">
          <h4 className="text-6xl font-semibold text-gray-700 capitalize">
            {user ? user.userName : "Guest"}
          </h4>
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/ProfilePage/UserInfo"
          className="flex items-center py-4 pl-6 pr-8 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-l-4 hover:border-gray-800"
        >
          <span className="mx-4">Profile</span>
        </Link>
      </div>

      <div className="">
        <Link
          to="/ProfilePage/AuctionsWon"
          className="flex items-center py-4 pl-6 pr-8 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-l-4 hover:border-gray-800"
        >
          <span className="mx-4">Auctions Won</span>
        </Link>
      </div>

      <div className="">
        <Link
          to="/ProfilePage/AddAuctionForm"
          className="flex items-center py-4 pl-6 pr-8 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-l-4 hover:border-gray-800"
        >
          <span className="mx-4">Your Auctions</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
